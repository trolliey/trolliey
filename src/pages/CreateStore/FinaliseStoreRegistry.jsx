import React from 'react';
import GeneralLayout from '../../layouts/GeneralLayout';
import logo from '../../assets/full_logo.png'

function FinaliseStoreRegistry() {
  return (
    <GeneralLayout>
      <div className="flex flex-col items-center bg-white p-4 rounded min-h-screen">
                <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex-shrink-0 flex justify-center">
                        <a href="/" className="inline-flex">
                            <span className="sr-only">Tolliey</span>
                            <img
                                className="h-12 w-auto"
                                src={logo}
                                alt="logo on page to finalise application of sore creation"
                            />
                        </a>
                    </div>
                    <div className="py-16">
                        <div className="text-center">
                            <p className="text-sm font-semibold text-blue-primary uppercase tracking-wide">Application Successful</p>
                            <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Applied to Ttolliey.</h1>
                            <p className="mt-2 text-base text-gray-500">Thank you for appliyiong to Trolliey sellers program. We will contract you as soon as we have approved of your application. Thank you.</p>
                            <div className="mt-6">
                                <a href="/explore" className="text-base font-medium text-blue-primary hover:text-blue-primary">
                                    Go back to buying<span aria-hidden="true"> &rarr;</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
    </GeneralLayout>
  )
}

export default FinaliseStoreRegistry;
