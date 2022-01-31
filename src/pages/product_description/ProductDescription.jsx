import React from 'react'
import GeneralLayout from '../../layouts/GeneralLayout'
import { Disclosure, Tab } from '@headlessui/react'
import { StarIcon } from '@heroicons/react/solid'
import { HeartIcon, MinusSmIcon, PlusSmIcon, UserCircleIcon } from '@heroicons/react/outline'
import BlueButton from '../../components/buttons/BlueButton'
import { useDispatch, useSelector } from 'react-redux'
import { add_to_cart_Action } from '../../redux/actions/cartActions'
import { useEffect } from 'react'
import { get_single_product_Action } from '../../redux/actions/productActions'
import { useHistory, useParams } from 'react-router'
import { Spinner } from '@chakra-ui/spinner'
import moment from 'moment'
import ImageMagnifier from '../../components/image_magnifier/ImageMagnifier'
import { add_to_compare_Action } from '../../redux/actions/compareActions'
import BlackButton from '../../components/buttons/BlackButton'
import AllProducts from '../../components/home_sections/AllProducts'
import logo from '../../assets/full_logo.png'
import { useState } from 'react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function ProductDescription() {
    const _product = useSelector(state => state.get_single_product)
    const { loading, error, product } = _product
    const { id } = useParams()

    // togglinf between previews and descripion
    const [show_features, setShowFeatures] = useState(false)

    const dispatch = useDispatch()
    const history = useHistory()

    const add_to_basket = () => {
        const item = {
            picture: product?.product?.pictures[0],
            rating: product?.product?.ratings.length,
            description: product?.product?.description,
            price: product?.product?.price,
            id: id,
            name: product?.product?.title
        }
        dispatch(add_to_cart_Action(item))
    }

    const add_to_compare = () => {
        const item = {
            pictures: product?.product?.pictures,
            rating: product?.product?.ratings.length,
            description: product?.product?.description,
            price: product?.product?.price,
            id: id,
            name: product?.product?.title,
            features: product?.product.additional_features
        }
        dispatch(add_to_compare_Action(item))
    }

    useEffect(() => {
        dispatch(get_single_product_Action(id))
    }, [dispatch, id])

    console.log(id)

    if (loading) {
        return (
            <GeneralLayout>
                <div className="flex bg-white md:p-8 px-4 w-full rounded">
                    <div className="bg-white w-full">
                        <div className="max-w-2xl mx-auto md:py-16 py-4  lg:max-w-7xl lg:px-8 md:px-0 px-0">
                            <div className="flex flex-col items-center">
                                <Spinner
                                    colorScheme="blue"
                                    size="lg"
                                    thickness={3}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </GeneralLayout>
        )
    }

    if (error) {
        return (
            <GeneralLayout>
                <div className="flex bg-white md:p-8 px-4 w-full rounded">
                    <div className="bg-white w-full">
                        <div className="max-w-2xl mx-auto md:py-16 py-4  lg:max-w-7xl lg:px-8 md:px-0 px-0">
                            <p className="text-center p-2 bg-red-100 rounded text-gray-700 font-semibold text-lg">There seems to be a problem. Try reloading the page!</p>
                        </div>
                    </div>
                </div>
            </GeneralLayout>
        )
    }

    return (
        <GeneralLayout>
            <div className="flex md:p-8 px-4 flex-col max-w-7xl">
                <div className="bg-white flex-1 mx-auto w-full rounded">
                    <div className="max-w-2xl mx-auto md:py-16 py-4  lg:max-w-7xl lg:px-8 md:px-0 px-0">
                        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
                            {/* Image gallery */}
                            <Tab.Group as="div" className="flex flex-col-reverse">
                                {/* Image selector */}
                                <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
                                    <Tab.List className="grid grid-cols-4 gap-6">
                                        {product?.product?.pictures.map((image, index) => (
                                            <Tab
                                                key={index}
                                                className="relative h-24 bg-gray-100 rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                                            >
                                                {({ selected }) => (
                                                    <>
                                                        <span className="sr-only">{image.name}</span>
                                                        <span className="absolute inset-0 rounded-md overflow-hidden">
                                                            <img src={image} alt="for a single product" className="w-full h-full object-center object-cover" />
                                                        </span>
                                                        <span
                                                            className={classNames(
                                                                selected ? 'ring-blue-primary' : 'ring-transparent',
                                                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                                                            )}
                                                            aria-hidden="true"
                                                        />
                                                    </>
                                                )}
                                            </Tab>
                                        ))}
                                    </Tab.List>
                                </div>

                                <Tab.Panels className="w-full aspect-w-1 aspect-h-1 flex-1">
                                    {product?.product?.pictures.map((image, index) => (
                                        <Tab.Panel key={index} className=" rounded">
                                            <>
                                                <ImageMagnifier src={image} height={'100%'} width={"100%"} />
                                            </>
                                            {/* <img
                                                src={image}
                                                alt={'for the product'}
                                                className="w-full h-full object-center object-cover sm:rounded-lg bg-gray-100"
                                            /> */}
                                        </Tab.Panel>
                                    ))}
                                </Tab.Panels>
                            </Tab.Group>

                            {/* Product info */}
                            <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
                                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{product?.product?.title}</h1>

                                <div className="mt-3">
                                    <h2 className="sr-only">Product information</h2>
                                    <p className="text-3xl text-gray-900">{product?.product?.discount_price}</p>
                                </div>

                                {/* Reviews */}
                                <div className="mt-3">
                                    <h3 className="sr-only">Reviews</h3>
                                    <div className="flex items-center">
                                        <div className="flex items-center">
                                            {[0, 1, 2, 3, 4].map((rating, index) => (
                                                <StarIcon
                                                    key={index}
                                                    onMouseEnter={() => console.log(index)}
                                                    className={classNames(
                                                        product?.product?.ratings.length > rating ? 'text-yellow-400' : 'text-gray-300',
                                                        'h-5 w-5 flex-shrink-0 hover:text-yellow-400 cursor-pointer'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            ))}
                                        </div>
                                        <p className="sr-only">{product?.product?.ratings.length} out of 5 stars</p>
                                    </div>
                                </div>

                                <div className="mt-6 border-t border-gray-200 pt-4 flex flex-row justify-between">
                                    {/* <h3 className="sr-only">Time added</h3> */}
                                    <p className="mr-2 capitalize font-semibold text-gray-700">added:</p>

                                    <div
                                        className="text-base text-gray-700 space-y-6"
                                        dangerouslySetInnerHTML={{ __html: moment(product?.product?.createdAt).fromNow() }}
                                    />
                                </div>

                                <div className="mt-6">
                                    {/* Colors */}
                                    <div className="mt-10 grid grid-cols-4 gap-4">
                                        <div className="md:col-span-2 col-span-4">
                                            <BlueButton text="Add to cart" className="flex-1 w-full" onClick={add_to_basket} />
                                        </div>

                                        <div className="md:col-span-2 col-span-4 flex flex-row items-center w-full">
                                            <div onClick={add_to_compare} className="text-blue-primary flex-1 border border-blue-primary rounded-l p-2 text-center font-semibold capitalize hover:bg-blue-primary hover:text-white cursor-pointer">
                                                compare
                                            </div>
                                            <div className="flex">
                                                <div className="border border-new-primary p-2 text-new-primary rounded-r hover:bg-new-primary hover:text-white cursor-pointer">
                                                    <HeartIcon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="my-4"></div>
                                    <BlackButton text='Buy Item Now' className="w-full flex-1" onClick={() => history.push('/payment')} />
                                </div>

                                <div className="md:my-8 my-4 pt-4 border-t border-gray-200">
                                    <div className="mb-2 text-gray-800 text-sm capitalize font-semibold flex flex-row items-center justify-between">
                                        <p>shipping:</p>

                                        <div className="flex flex-row items-center">
                                            <p className="text-gray-500 mr-2">Delivered by </p>
                                            <div className="text-gray-500">
                                                <img src={logo} alt="logo on descriprion page" className='h-6' />
                                            </div>

                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center justify-between">
                                        <p className="text-gray-500">Ships to : </p>
                                        <p className="text-gray-500"> {product?.product?.shipping_area}</p>

                                    </div>

                                    <div className="flex flex-row items-center justify-between">
                                        <p className="text-gray-500">Ships for : </p>
                                        <p className="text-gray-500"> {product?.product?.shipping_type}</p>

                                    </div>
                                    <div className="flex flex-row items-center justify-between">
                                        <p className="text-gray-500">Shipment expense : </p>
                                        <p className="text-gray-500"> ${product?.product?.shipping_price}</p>

                                    </div>
                                </div>
                                <div className="flex pt-4 border-t border-gray-200">

                                </div>
                                <div onClick={() => history.push(`/stores/single/${product?.product?.owner}`)} className="flex flex-row mt-8 space-x-4 items-center p-4 rounded border border-gray-200 hover:bg-gray-100 cursor-pointer">
                                    <UserCircleIcon className="text-gray-700" height={40} width={40} />
                                    <div className="flex flex-col">
                                        <p className="text-gray-700 font-semibold">View Store</p>
                                        <p className="text-gray-400 text-sm">View the seller's shop and catalogues</p>
                                    </div>
                                </div>


                            </div>
                        </div>

                        {/* // description compoennt */}
                        <section className='w-full mt-6 '>
                            <div className="flex border-b border-t border-gray-200">
                                {
                                    show_features ? (
                                        <div className="flex flex-row items-center">
                                            <span onClick={() => setShowFeatures(false)} className='hover:bg-gray-50 cursor-pointer p-4'>Description</span>
                                            <span onClick={() => setShowFeatures(true)} className='p-4 border-b-2 hover:bg-gray-50 cursor-pointer border-blue-primary font-semibold text-blue-primary'>Product Features</span>
                                        </div>
                                    ) : (
                                        <div className="flex flex-row items-center">
                                            <span onClick={() => setShowFeatures(false)} className=' border-b-2 p-4 hover:bg-gray-50 cursor-pointer border-blue-primary font-semibold text-blue-primary'>Description</span>
                                            <span onClick={() => setShowFeatures(true)} className='p-4 hover:bg-gray-50 cursor-pointer'>Product Features</span>
                                        </div>
                                    )
                                }
                            </div>
                            {
                                show_features ? (
                                    <>
                                        <ul className='mt-6'>
                                            {product?.product?.additional_features.map((item, index) => (
                                                <li key={item}>{index+1}. {item}</li>
                                            ))}
                                        </ul>
                                    </>
                                ) : (
                                    <div className="mt-2">
                                        <h3 className="sr-only">Description</h3>

                                        <div
                                            className="text-base text-gray-700 space-y-6 leading-normal"
                                            dangerouslySetInnerHTML={{ __html: product?.product?.description }}
                                        />
                                    </div>
                                )
                            }
                        </section>
                    </div>

                </div>
                <div className="related_products mt-16">
                    <>
                        <AllProducts cols="lg:grid-cols-5 " />
                    </>
                </div>
            </div>
        </GeneralLayout>
    )
}

export default ProductDescription
