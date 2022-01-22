import React from 'react';
import BlueButton from '../../components/buttons/BlueButton';
import GeneralLayout from '../../layouts/GeneralLayout';

function ComingSoon() {
    return (
        <GeneralLayout no_text>
            <div className="flex flex-col items-center bg-white p-4 rounded min-h-screen">
                <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 items-center">
                    <div className="flex-shrink-0 flex justify-center">
                        <a href="/" className="inline-flex">
                            <span className="sr-only">E-Commerce</span>
                            <img
                                className="h-12 w-auto"
                                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="py-16">
                        <div className="text-center flex flex-col items-center">
                            {/* <p className="text-sm font-semibold text-blue-primary uppercase tracking-wide">404 error</p> */}
                            <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Coming Soon.</h1>
                            <p className="mt-2 text-base text-gray-500">Trolliet is an online retailer which sells products on its website alllwing third-party sellsers to sell their products too. Customers buy products from suppliers around Zimbabwe including Trolliey Online (Pty) LTD. Products are delivered to your doorste, payment on delivery option is available.</p>
                            <p>We have many payment methods including, Ecocash, Visa and many more</p>
                            
                            <div className="mt-6">
                                <a href="/" className="text-base font-medium text-blue-primary hover:text-blue-primary">
                                    Notify me wen App is launched
                                </a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </GeneralLayout>
    )
}

export default ComingSoon;
