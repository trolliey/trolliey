import React from 'react';
import BlueButton from '../../components/buttons/BlueButton';
import icon from '../../assets/full_logo.png'
import ComingSoonLayout from '../../layouts/ComingSoonLayout';

function ComingSoon() {

    return (
        <ComingSoonLayout>
            <div className="flex flex-col items-center bg-white p-4 rounded min-h-screen">
                <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 items-center">
                    <div className="flex-shrink-0 flex justify-center">
                        <a href="/" className="inline-flex">
                            <span className="sr-only">E-Commerce</span>
                            <img
                                className="md:h-28 h-16 w-auto"
                                src={icon}
                                alt="logo icon for trolliey"
                            />
                        </a>
                    </div>
                    <div className="py-16">
                        <div className="text-center flex flex-col items-center">
                            {/* <p className="text-sm font-semibold text-blue-primary uppercase tracking-wide">404 error</p> */}
                            <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Coming Soon.</h1>
                            <p className="mt-4 text-base text-gray-500">Trolliey is an online retailer which sells products on its website allowing third-party sellsers to sell their products too. Customers buy products from suppliers around Zimbabwe including Trolliey Online (Pty) LTD. Products are delivered to your doorstep, payment on delivery option is available.</p>
                            <p className="my-2">We have many payment methods including, Ecocash, Visa and many more</p>

                            <div className="flex flex-row items-center md:w-2/5 mt-8 w-full self-center mx-auto">
                                <input type="text" placeholder='Enter your email' className='p-3 rounded text-sm outline-none border-none bg-gray-100 flex-1' />
                                <BlueButton text={'Notify'} />
                            </div>

                            <div className="mt-2">
                                <span className="text-base font-medium text-blue-primary hover:text-blue-primary cursor-pointer">
                                    Notify me wen App is launched
                                </span>

                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </ComingSoonLayout>
    )
}

export default ComingSoon;
