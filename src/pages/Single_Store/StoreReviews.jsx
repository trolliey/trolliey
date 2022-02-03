import React, { useEffect, useState } from 'react'
import StoreLayout from '../../layouts/StoreLayout'
import { PaperAirplaneIcon } from '@heroicons/react/solid'
import ReviewItem from '../../components/review_item/ReviewItem'
import { useSelector } from 'react-redux'
import { Avatar, useDisclosure } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { create_a_review_Action } from '../../redux/actions/reviewActions'
import { useParams } from 'react-router'
import { Spinner } from '@chakra-ui/react'
import { apiUrl } from '../../utils/apiUrl'
import axios from 'axios'
import { socket } from '../../utils/socket'
import AuthModal from '../../components/auth_modal/AuthModal'

function StoreReviews() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const _create_review = useSelector(state => state.create_review);
    const { rev_loading } = _create_review
    const { id } = useParams()
    const [review, setReview] = useState('')
    const dispatch = useDispatch()
    const user_login = useSelector(state => state.user_login)
    const { userInfo } = user_login
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [page_loading, setPageLoading] = useState(false)
    const [all_reviews, setAllReviews] = useState([])

    const post_review = () => {
        dispatch(create_a_review_Action(id, review, userInfo?.token))
        setReview('')
    }

    // const next_page = () => {
    //     setPage(page + 1)
    // }
    // const prev_page = () => {
    //     setPage(page - 1)
    // }



    useEffect(() => {
        setLimit(10)
        setPageLoading(true)
        axios.post(`${apiUrl}/reviews/all/${id}?page=${page}&limit=${limit}`).then(res => {
            setAllReviews(res.data.reviews)
            setPageLoading(false)
        })
    }, [dispatch, limit, page, id])

    useEffect(() => {
        socket.on('review', data => {
            setAllReviews((old_reviews) => [data, ...old_reviews])
        })
    }, [socket])

    return (
        <StoreLayout>
            <div className="flex flex-col md:p-4 p-2 rounded">
                <div className="flex flex-row items-center rounded flex-1 mb-4">
                    <Avatar size="sm" source={userInfo?.user?.photoURL} name={userInfo?.user?.displayName} />
                    <input
                        type="text"
                        placeholder="Enter your review"
                        onChange={e => setReview(e.target.value)}
                        className="p-2 border-none outline-none bg-gray-100 flex-1 rounded ml-2" />
                    {
                        rev_loading ? (
                            <div className="flex ml-4 p-2 hover:bg-gray-100 rounded-full cursor-pointer">
                                <Spinner size="sm" />
                            </div>
                        ) : (
                            <>
                                {userInfo ? (
                                    <div onClick={post_review} className="flex ml-4 p-2 hover:bg-gray-100 rounded-full cursor-pointer">
                                        <PaperAirplaneIcon className="text-gray-700" height={20} width={20} />
                                    </div>
                                ) : (
                                    <>
                                        <div onClick={onOpen} className="flex ml-4 p-2 hover:bg-gray-100 rounded-full cursor-pointer">
                                            <PaperAirplaneIcon className="text-gray-700" height={20} width={20} />
                                        </div>
                                        <AuthModal onClose={onClose} isOpen={isOpen} />
                                    </>
                                )}
                            </>
                        )
                    }
                </div>
                <div className="flex flex-col">
                    {
                        page_loading ? (
                            <div className="w-full md:pt-8 pt-4 grid items-center justify-center content-center">
                                <Spinner size="lg" thickness={3} />
                            </div>
                        ) : (
                            <>
                                {
                                    all_reviews?.length < 1 ? (
                                        <p className="text-gray-700 capitalize text-center font-semibold mt-4">no reviews yet</p>
                                    ) : (
                                        <>
                                            {
                                                all_reviews?.map((review, index) => (
                                                    <div key={index} className="flex flex-col">
                                                        <ReviewItem
                                                            name={review.username}
                                                            review={review.body}
                                                            likes={review.likes.length}
                                                            dislikes={review.disliked.length}
                                                            pro_pic={review.photoURL}
                                                            id={review._id}
                                                        />

                                                    </div>
                                                ))
                                            }
                                        </>
                                    )
                                }
                            </>
                        )
                    }
                </div>
                {/* <div className="flex flex-row w-full py-16 justify-between">
                    <div className="self-start">
                        {
                            all_reviews?.result.previous ? (
                                <BlackButton
                                    text="Previous Page"
                                    onClick={prev_page}
                                />
                            ) : <div className="flex"></div>
                        }
                    </div>
                    <div className="self-end">
                        {
                            all_reviews?.result.next ? (
                                <BlackButton
                                    text="Next Page"
                                    onClick={next_page} />
                            ) : <div className="flex"></div>
                        }
                    </div>
                </div> */}
            </div>
        </StoreLayout>
    )
}

export default StoreReviews
