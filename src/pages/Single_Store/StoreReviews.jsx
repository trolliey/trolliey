import React, { useEffect, useState } from 'react'
import StoreLayout from '../../layouts/StoreLayout'
import { PaperAirplaneIcon } from '@heroicons/react/solid'
import ReviewItem from '../../components/review_item/ReviewItem'
import { useSelector } from 'react-redux'
import { useToast } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { create_a_review_Action, get_all_store_reviews_Action } from '../../redux/actions/reviewActions'
import { useParams } from 'react-router'
import { Spinner } from '@chakra-ui/react'

function StoreReviews() {

    const _create_review = useSelector(state => state.create_review);
    const { rev_loading, rev_error, message } = _create_review
    const { id } = useParams()
    const toast = useToast()
    const [review, setReview] = useState('')
    const dispatch = useDispatch()
    const user_login = useSelector(state => state.user_login)
    const { userInfo } = user_login
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)

    const _reviews = useSelector(state => state.get_all_reviews)
    const { loading, reviews, error } = _reviews

    const post_review = () => {
        dispatch(create_a_review_Action(id, review, userInfo?.token))
    }

    useEffect(() => {
        if (message) {
            toast({
                title: 'Review post.',
                description: { message },
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
        }
        if (rev_error) {
            toast({
                title: 'Review post.',
                description: { rev_error },
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }
    }, [message, rev_error, dispatch])

    useEffect(() => {
        dispatch(get_all_store_reviews_Action(id, page, limit))
    }, [dispatch])

    console.log(reviews?.reviews)

    return (
        <StoreLayout>
            <div className="flex flex-col md:p-4 p-2 rounded">
                <div className="flex flex-row items-center rounded flex-1 mb-4">
                    <input
                        type="text"
                        placeholder="Enter your review"
                        onChange={e => setReview(e.target.value)}
                        className="p-2 border-none outline-none bg-gray-100 flex-1 rounded" />
                    {
                        rev_loading ? (
                            <div className="flex ml-4 p-2 hover:bg-gray-100 rounded-full cursor-pointer">
                                <Spinner size="sm" />
                            </div>
                        ) : (
                            <div onClick={post_review} className="flex ml-4 p-2 hover:bg-gray-100 rounded-full cursor-pointer">
                                <PaperAirplaneIcon className="text-gray-700" height={20} width={20} />
                            </div>
                        )
                    }
                </div>
                <div className="flex flex-col">
                    {
                        loading ? (
                            <div className="w-full md:pt-8 pt-4 grid items-center justify-center content-center">
                                <Spinner size="lg" thickness={3} />
                            </div>
                        ) : error ? (
                            <p className="text-gray-700 font-semibold bg-red-100 p-2 text-center rounded">Error loading reviews, try reloading the page</p>
                        ) : (
                            <>
                                {
                                    reviews?.reviews?.map((review, index) => (
                                        <div key={index} className="flex flex-col">
                                            <ReviewItem
                                                name={review.username}
                                                review={review.body}
                                                likes={review.likes.length}
                                                dislikes={review.disliked.length}
                                                pro_pic={review.photoURL}

                                            />
                                            
                                        </div>
                                    ))
                                }
                            </>
                        )
                    }
                </div>
            </div>
        </StoreLayout>
    )
}

export default StoreReviews
