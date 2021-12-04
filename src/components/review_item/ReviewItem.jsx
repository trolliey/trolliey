import { Avatar } from '@chakra-ui/avatar'
import React from 'react'
import { ThumbDownIcon, ThumbUpIcon } from '@heroicons/react/outline'

function ReviewItem({name, pro_pic, review, likes, dislikes}) {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row my-4">
                <span className="md:mr-4 mr-2">
                    <Avatar name={name} src={pro_pic} />
                </span>
                <div className="flex flex-col">
                    <p className="text-gray-700 font-semibold">{name}</p>
                    <p className="text-gray-700 text-sm">{review}</p>
                    <div className="flex flex-row items-center">
                        <div className="flex flex-row items-center mt-2 mx-4 p-2 cursor-pointer rounded-full hover:bg-gray-100">
                            <ThumbUpIcon className="text-gray-700" height={20} width={20} />
                            <p className="text-sm font-semibold">{likes}</p>
                        </div>
                        <div className="flex flex-row items-center mt-2 mx-4 p-2 cursor-pointer rounded-full hover:bg-gray-100">
                            <ThumbDownIcon className="text-gray-700" height={20} width={20} />
                            <p className="text-sm font-semibold">{dislikes}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewItem
