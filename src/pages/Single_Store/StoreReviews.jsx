import React, { useState } from 'react'
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
import AuthModal from '../../components/auth_modal/AuthModal'
import useSWR, { useSWRConfig } from 'swr'

function StoreReviews() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const _create_review = useSelector(state => state.create_review);
    const { rev_loading } = _create_review
    const { id } = useParams()
    const [review, setReview] = useState('')
    const dispatch = useDispatch()
    const user_login = useSelector(state => state.user_login)
    const { userInfo } = user_login
    // eslint-disable-next-line
    const [page, setPage] = useState(1)
    // eslint-disable-next-line
    const [limit, setLimit] = useState(10)
    const { mutate } = useSWRConfig()


    const { data } = useSWR(`${apiUrl}/reviews/all/${id}?page=${page}&limit=${limit}`)

    const post_review = () => {
        if (review === '') {
            console.log('empty review')
        } else {
            mutate(`${apiUrl}/reviews/all/${id}?page=${page}&limit=${limit}`, [...data.reviews, review], false)
            dispatch(create_a_review_Action(id, review, userInfo?.token))
            mutate(`${apiUrl}/reviews/all/${id}?page=${page}&limit=${limit}`)
            setReview('')
        }
    }

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
                        !data && (
                            <div className="w-full md:pt-8 pt-4 grid items-center justify-center content-center">
                                <Spinner size="lg" thickness={3} />
                            </div>
                        )}
                    {
                        <>
                            {
                                data?.reviews?.length < 1 ? (
                                    <p className="text-gray-700 capitalize text-center font-semibold mt-4">no reviews yet</p>
                                ) : (
                                    <>
                                        {
                                            data?.reviews?.map((review, index) => (
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
