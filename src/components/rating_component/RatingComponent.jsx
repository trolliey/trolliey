import React, { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import './RatingCompoent.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { apiUrl } from '../../utils/apiUrl';
import { useSelector } from 'react-redux';
import { useDisclosure } from '@chakra-ui/react';
import AuthModal from '../auth_modal/AuthModal';

function RatingComponent({ ratings, user }) {
    const [rating, setRating] = useState(0);
    const { id } = useParams() // id of the product
    const _user = useSelector(state => state.user_login)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { userInfo } = _user

    const add_review = (index) => {
        setRating(index)
        axios.post(`${apiUrl}/rating/add/${id}`, { rating: index }, {
            headers: {
                Authorization: user?.token
            }
        }).then(res => {
            console.log(res)
        }).catch(error => {
            console.log(error)
        })
    }

    console.log(rating, ratings)
    return (
        <>
            {
                rating ? (
                    <div className="star-rating gap-2">
                        {[...Array(5)].map((star, index) => {
                            index += 1;
                            return (
                                <>
                                    {userInfo ? (
                                        <button
                                            type="button"
                                            key={index}
                                            className={index <= (rating) ? "on" : "off"}
                                            onClick={() => add_review(index)}
                                        >
                                            <span className="star">
                                                <StarIcon height={20} width={20} />
                                            </span>
                                        </button>
                                    ) : (
                                        <button
                                            type="button"
                                            key={index}
                                            className={index <= (rating) ? "on" : "off"}
                                            onClick={onOpen}
                                        >
                                            <span className="star">
                                                <StarIcon height={20} width={20} />
                                            </span>
                                            <AuthModal onClose={onClose} isOpen={isOpen} />
                                        </button>
                                    )}
                                </>
                            );
                        })}
                    </div>
                ) : <div className="star-rating gap-2">
                    {[...Array(5)].map((star, index) => {
                        index += 1;
                        return (
                            <button
                                type="button"
                                key={index}
                                className={index <= (ratings) ? "on" : "off"}
                                onClick={() => add_review(index)}
                            >
                                <span className="star">
                                    <StarIcon height={20} width={20} />
                                </span>
                            </button>
                        );
                    })}

                </div>
            }
        </>
    );
}

export default RatingComponent;
