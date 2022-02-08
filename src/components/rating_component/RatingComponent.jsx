import React, { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import './RatingCompoent.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { apiUrl } from '../../utils/apiUrl';

function RatingComponent({ ratings, user }) {
    const [rating, setRating] = useState(0);
    const { id } = useParams() // id of the product

    const add_review = (index) => {
        setRating(index)
        axios.post(`${apiUrl}/rating/add/${id}`, { rating: index }, {
            headers: {
                Authorization: user?.user.token
            }
        }).then(res => {
            console.log(res)
        }).catch(error => {
            console.log(error)
        })
    }

    console.log(id, rating, ratings)
    return (
        <>
            {
                rating ? (
                    <div className="star-rating gap-2">
                        {[...Array(5)].map((star, index) => {
                            index += 1;
                            return (
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
                                className={index <= (3) ? "on" : "off"}
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
