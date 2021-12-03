import React from 'react'
import StoreLayout from '../../layouts/StoreLayout'
import { PaperAirplaneIcon } from '@heroicons/react/solid'
import ReviewItem from '../../components/review_item/ReviewItem'

function StoreReviews() {
    return (
        <StoreLayout>
            <div className="flex flex-col p-4 rounded">
                <div className="flex flex-row items-center rounded flex-1 mb-4">
                    <input type="text" placeholder="Enter your review" className="p-2 bg-gray-100 flex-1 rounded" />
                    <div className="flex pl-4">
                        <PaperAirplaneIcon className="text-gray-700" height={20} width={20} />
                    </div>
                </div>
                <div className="flex flex-col">
                    <ReviewItem
                        name="mike"
                        review="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero possimus, tempora doloribus, blanditiis accusamus numquam, aliquid quidem beatae nobis dolorem ullam consectetur perspiciatis molestias amet aspernatur! Praesentium ad fuga iure?"
                        likes={20}
                        dislikes={2}
                        />
                    <ReviewItem
                        name={'tatendaZw'}
                        review="iam a review"
                        likes={2}
                        dislikes={0}
                    />
                </div>
            </div>
        </StoreLayout>
    )
}

export default StoreReviews
