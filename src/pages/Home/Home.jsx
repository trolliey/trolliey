import React from 'react'
import CategoriesDropdown from '../../components/categories_dropdown/CategoriesDropdown'
import SearchInput from '../../components/search/SearchInput'
import GeneralLayout from '../../layouts/GeneralLayout'
import banner from '../../assets/main-banner.jpg'
import { data } from '../../utils/data'
import SpecialProducts from '../../components/home_sections/SpecialProducts'
import FeaturedProducts from '../../components/home_sections/FeaturedProducts'
import LatestProducts from '../../components/home_sections/LatestProducts'
import AllProducts from '../../components/home_sections/AllProducts'

function Home() {
    return (
        <GeneralLayout>
            <div className="bg-white md:p-8 p-2 rounded">

                {/* // banner and categories */}
                <div className="top w-full flex flex-row md:gap-8 gap-2">
                    <div className="md:w-1/5 md:flex hidden">
                        <CategoriesDropdown open={true} />
                    </div>
                    <div className="flex-1">
                        <SearchInput />
                        <div className="flex content-center items-center overflow-hidden mt-4 rounded w-full md:max-h-96 max-h-48 md:h-96 h-auto bg-gray-100">
                            <img src={banner} alt="banner showing ads for the home page" className="flex-1 max-h-full flex-shrink-0 object-cover w-auto h-auto" />
                        </div>
                    </div>
                </div>

                {/* //benefits */}
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 md:py-16 md:pt-16 pt-8 md:pb-4 pb-2 md:border-b border-b-none border-gray-200 items-center">
                    {
                        data.benefits.map((benefit, index) => (
                            <div key={index} className="col-span-1 flex md:flex-row flex-col md:border-none border-b border-gray-200 md:pb-0 pb-4 text-blue-primary hover:text-new-primary cursor-pointer items-center">
                                <div className="md:block hidden">
                                    <benefit.icon height={32} width={32} className="mr-2" />
                                </div>
                                <div className="md:hidden block mb-1">
                                    <benefit.icon height={24} width={24} className="mr-2" />
                                </div>
                                <div className="flex flex-col md:items-start items-center">
                                    <p className="text-gray-700 font-semibold capitalize">{benefit.heading}</p>
                                    <p className="text-gray-500 text-sm capitalize">{benefit.details}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>



                {/* // special products */}
                <>
                    <SpecialProducts />
                </>


                {/* //two exclusive categories */}
                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-4 md:pt-16 pt-8 ">
                    <div className="col-span-1 bg-blue-200 rounded md:h-40 h-32"></div>
                    <div className="col-span-1 bg-yellow-200 rounded md:h-40 h-32"></div>
                </div>

                {/* // featured products */}
                <>
                    <FeaturedProducts />
                </>

                {/* //two exclusive categories */}
                <div className="grid md:grid-cols-3 grid-cols-1 md:gap-8 gap-4 md:pt-16 pt-8">
                    <div className="md:col-span-2 col-start-1 bg-blue-200 rounded md:h-40 h-32"></div>
                    <div className="col-span-1 bg-yellow-200 rounded md:h-40 h-32"></div>
                </div>

                {/* // latest products */}
                <>
                    <LatestProducts />
                </>

                {/* //two Latest categories */}
                <div className="grid md:grid-cols-3 grid-cols-1 md:gap-8 gap-4 md:pt-16 pt-8">
                    <div className="col-span-1 bg-blue-200 rounded md:h-40 h-32"></div>
                    <div className="md:col-span-2 col-start-1 bg-yellow-200 rounded md:h-40 h-32"></div>
                </div>

                {/* // all products */}
                <>
                    <AllProducts cols="lg:grid-cols-5 " />
                </>



            </div>
        </GeneralLayout>
    )
}

export default Home
