import React, { useEffect } from 'react'
import CategoriesDropdown from '../../components/categories_dropdown/CategoriesDropdown'
import GeneralLayout from '../../layouts/GeneralLayout'
import AllProducts from '../../components/home_sections/AllProducts'
import { useDispatch, useSelector } from 'react-redux'
import { get_all_ads_Action } from '../../redux/actions/adActions'
import { Spinner } from '@chakra-ui/react'
import main_banner from '../../assets/main-banner.png'
import Courosel from '../../components/courosel/Courosel'
import surprise from '../../assets/surprise.jpg'
import tech_stuff from '../../assets/tech_stuff.jpg'
import clothes from '../../assets/clothes.jpg'
import { set_search_query_Action } from '../../redux/actions/searchAction'
import { useHistory } from 'react-router-dom'

function Home() {

    //get all ads from the store
    const _get_all_ads = useSelector(state => state.get_all_ads)
    const { ads_loading, ads_error, ads } = _get_all_ads
    const dispatch = useDispatch()
    const history = useHistory()

    const banner_images = [
        { body: '', image: main_banner },
        { body: '', image: main_banner },
        { body: '', image: main_banner }
    ]

    useEffect(() => {
        dispatch(get_all_ads_Action())
    }, [dispatch])

    const search_by_category = (category) => {
        dispatch(set_search_query_Action(category))
        history.push('/explore')
    }

    return (
        <GeneralLayout>
            <div className="">

                {/* // banner and categories */}
                <div className="top w-full flex flex-row md:gap-8 gap-2 bg-white md:p-8 rounded px-4 py-2">
                    <div className="md:w-1/5 md:flex hidden">
                        <CategoriesDropdown open={true} />
                    </div>
                    <div className="flex-1">

                        <>
                            <div className="flex content-center items-center overflow-hidden rounded w-full  h-auto bg-gray-100">

                                <div className="grid content-center items-center overflow-hidden rounded w-full  bg-white">
                                    {/* <img src={banner} alt="banner showing ads for the home page" className="flex-1 max-h-full flex-shrink-0 object-cover w-auto h-auto" /> */}
                                    <Courosel data={banner_images} />
                                </div>

                            </div>
                        </>
                    </div>
                </div>

                {/* // all products */}
                <div className='flex md:my-16 my-8`'>
                    <AllProducts cols="lg:grid-cols-5 " />
                </div>

                <section aria-labelledby="category-heading" className="">
                    <div className="max-w-7xl mx-auto bg-white md:p-8 p-4 rounded">
                        <div className="sm:flex sm:items-baseline sm:justify-between">
                            <h2 id="category-heading" className="text-xl font-bold tracking-tight text-gray-700">
                                Shop by Category
                            </h2>
                            <a href="/categories" className="hidden font-semibold text-blue-primary hover:text-blue-primary sm:block">
                                Browse all categories<span aria-hidden="true"> &rarr;</span>
                            </a>
                        </div>

                        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8 ">
                            <div onClick={() => search_by_category('tech')} className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none border">
                                <img
                                    src={surprise}
                                    alt="suprised user."
                                    className="object-center object-cover group-hover:opacity-75"
                                />
                                <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50" />
                                <div className="p-6 flex items-end">
                                    <div>
                                        <h3 className="font-semibold text-white">
                                            <a href="#">
                                                <span className="absolute inset-0" />
                                                Suprise Me
                                            </a>
                                        </h3>
                                        <p aria-hidden="true" className="mt-1 text-sm text-white">
                                            Shop now
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => search_by_category('tech')} className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none border">
                                <img
                                    src={tech_stuff}
                                    alt="tech category."
                                    className="object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
                                />
                                <div
                                    aria-hidden="true"
                                    className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
                                />
                                <div className="p-6 flex items-end sm:absolute sm:inset-0">
                                    <div>
                                        <h3 className="font-semibold text-white">
                                            <a href="#">
                                                <span className="absolute inset-0" />
                                                Tech Stuff
                                            </a>
                                        </h3>
                                        <p aria-hidden="true" className="mt-1 text-sm text-white">
                                            Shop now
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => search_by_category('fashion')} className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none border">
                                <img
                                    src={clothes}
                                    alt="Clothes and fashion"
                                    className="object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
                                />
                                <div
                                    aria-hidden="true"
                                    className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
                                />
                                <div className="p-6 flex items-end sm:absolute sm:inset-0">
                                    <div>
                                        <h3 className="font-semibold text-white">
                                            <a href="#">
                                                <span className="absolute inset-0" />
                                                Clothes and fashion
                                            </a>
                                        </h3>
                                        <p aria-hidden="true" className="mt-1 text-sm text-white">
                                            Shop now
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 sm:hidden">
                            <a href="#" className="block font-semibold text-blue-primary hover:text-blue-primary">
                                Browse all categories<span aria-hidden="true"> &rarr;</span>
                            </a>
                        </div>
                    </div>
                </section>







            </div>
        </GeneralLayout>
    )
}

export default Home
