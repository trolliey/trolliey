import React from 'react';
import { useHistory } from 'react-router-dom';
import BlueButton from '../../components/buttons/BlueButton';
import GeneralLayout from '../../layouts/GeneralLayout';
import dashboard_screenshot from '../../assets/dashboard_screenshot.png'

function BecomeASellerAd() {
    const history = useHistory()
    return (<GeneralLayout no_text>
        {/* <div className="max-w-7xl w-2/3 mx-auto">
            <p className='text-2xl text-gray-700 font font-semibold text-center pt-16 pb-4 capitalize'>become a seller</p>
            <p className='text-center text-gray-700  mx-auto pb-8'>Become a seller at Trolliey and enjoy many incredible features created to give you the best experience. Start to sell you products and receice the hoghest amount of your earnings today. One of the features you will get is a dashboard that you can use to manage your inventory, customers and track your feedbacks.</p>

            <div className="flex mx-auto max-w-7xl flex-col items-center">
                <BlueButton onClick={() => history.push('/become-a-seller')} outline text={'Open A Shop'} />
            </div>
        </div> */}
        <div className="">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-dark rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                {/* <span className="block">Ready to dive in?</span> */}
                <span className="block">Become a Seller.</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-indigo-200">
              Become a seller at Trolliey and enjoy many incredible features created to give you the best experience. Start to sell you products and receice the hoghest amount of your earnings today. One of the features you will get is a dashboard that you can use to manage your inventory, customers and track your feedbacks.
              </p>
              <a
                href="#"
                className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-blue-dark hover:bg-gray-50"
              >
                Open A Shop
              </a>
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
      </div>
    </div>
    </GeneralLayout>);
}

export default BecomeASellerAd;
