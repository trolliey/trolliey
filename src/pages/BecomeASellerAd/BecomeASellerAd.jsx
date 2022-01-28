import React from 'react';
import { useHistory } from 'react-router-dom';
import GeneralLayout from '../../layouts/GeneralLayout';
import dashboard_screenshot from '../../assets/dashboard_screenshot.png'
import { useSelector } from 'react-redux';
import {
    useDisclosure,
} from '@chakra-ui/react'
import AuthModal from '../../components/auth_modal/AuthModal';

function BecomeASellerAd() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const history = useHistory()

    const _logged_in = useSelector(state => state.user_login)
    const { userInfo } = _logged_in

    return (<GeneralLayout no_text>
        <div className="">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="bg-blue-dark rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4 mb-16">
                    <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                        <div className="lg:self-center">
                            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                                {/* <span className="block">Ready to dive in?</span> */}
                                <span className="block">Become a Seller.</span>
                            </h2>
                            <p className="mt-4 text-lg leading-6 text-indigo-200">
                                Become a seller at Trolliey and enjoy many incredible features created to give you the best experience. Start to sell you products and receice the hoghest amount of your earnings today. One of the features you will get is a dashboard that you can use to manage your inventory, customers and track your feedbacks.
                            </p>
                            {
                                userInfo ? (
                                    <div onClick={() => history.push('/create-store')}
                                        className="mt-8 bg-white border cursor-pointer border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-blue-dark hover:bg-gray-50"
                                    >
                                        Apply to Sell
                                    </div>
                                ) : (
                                    <div>
                                        <div onClick={onOpen}
                                            className="mt-8 bg-white border cursor-pointer border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-blue-dark hover:bg-gray-50"
                                        >
                                            Apply to Sell
                                        </div>
                                        <AuthModal onClose={onClose} isOpen={isOpen} />
                                        
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
                        <img
                            className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                            src={dashboard_screenshot}
                            alt="App screenshot"
                        />
                    </div>
                </div>

                <p className='text-center text-2xl text-gray-700'>Features</p>
            </div>
        </div>
    </GeneralLayout>);
}

export default BecomeASellerAd;
