import React, { useState } from 'react'
import GeneralLayout from '../../layouts/GeneralLayout'
import { Tab } from '@headlessui/react'
import { ShoppingCartIcon } from '@heroicons/react/solid'
import { PlusIcon } from '@heroicons/react/outline'
import { InformationCircleIcon } from '@heroicons/react/solid'
import BlueButton from '../../components/buttons/BlueButton'
import { useDispatch, useSelector } from 'react-redux'
import { add_to_cart_Action } from '../../redux/actions/cartActions'
import { useHistory, useParams } from 'react-router'
import { Spinner } from '@chakra-ui/spinner'
import { add_to_compare_Action } from '../../redux/actions/compareActions'
import BlackButton from '../../components/buttons/BlackButton'
import logo from '../../assets/full_logo.png'
import RatingComponent from '../../components/rating_component/RatingComponent'
import RelatedProducts from '../../components/home_sections/RelatedProducts'
import { Avatar } from '@chakra-ui/react'
import useSWR from 'swr'
import { apiUrl } from '../../utils/apiUrl'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function ProductDescription() {
    const { id } = useParams()
    const [showMore, setShowMore] = useState(false);
    const user_login = useSelector(state => state.user_login)
    const { userInfo } = user_login

    const {data: product, error} = useSWR(`${apiUrl}/product/single/${id}`)

    // togglinf between previews and descripion
    const [show_features, setShowFeatures] = useState(false)

    const dispatch = useDispatch()
    const history = useHistory()

    const add_to_basket = () => {
        const item = {
            picture: product?.product?.pictures[0],
            rating: product?.product?.ratings,
            description: product?.product?.description,
            price: product?.product?.price - product?.product?.discount_price,
            id: id,
            name: product?.product?.title,
            shipment_price: product?.product?.shipping_price,
            store_id: product?.store_id,
        }
        dispatch(add_to_cart_Action(item))
    }

    const add_to_compare = () => {
        const item = {
            pictures: product?.product?.pictures,
            rating: product?.product?.ratings,
            description: product?.product?.description,
            price: product?.product?.price - product?.product?.discount_price,
            id: id,
            name: product?.product?.title,
            features: product?.product.additional_features,
            shipment_price: product?.product?.shipping_price,
            store_id: product?.store_id
        }
        dispatch(add_to_compare_Action(item))
    }

    if (!product) {
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

    // console.log(product)

    return (
        <GeneralLayout no_text>
            <div className="flex md:px-0 px-4 flex-col max-w-7xl bg-gray-100">
                <div className="flex-1 mx-auto w-full rounded ">
                    <div className="max-w-2xl mx-auto md:py-8  lg:max-w-7xl lg:px-0 md:px-0 px-2">
                        <div className="lg:grid lg:grid-cols-3 lg:gap-x-8 lg:items-start">
                            {/* Image gallery */}
                            <Tab.Group as="div" className="flex flex-col-reverse bg-white md:p-8 p-4 rounded-lg col-span-2">
                                {/* Image selector */}
                                <div className="mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
                                    <Tab.List className="grid md:grid-cols-8 grid-cols-4 gap-2">
                                        {product?.product?.pictures.map((image, index) => (
                                            <Tab
                                                key={index}
                                                className="relative h-16 w-16 bg-gray-100 rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                                            >
                                                {({ selected }) => (
                                                    <>
                                                        <span className="sr-only">{image.name}</span>
                                                        <span className="absolute inset-0 rounded-md overflow-hidden">
                                                            <img src={image} alt="for a single product" className="w-full h-full object-center object-cover rounded" />
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
                                            {/* <>
                                                <ImageMagnifier src={image} height={'100%'} width={"100%"} />
                                            </> */}
                                            <img
                                                src={image}
                                                alt={'for the product'}
                                                className="w-full h-full object-center object-cover sm:rounded-lg bg-gray-100"
                                            />
                                        </Tab.Panel>
                                    ))}
                                </Tab.Panels>
                            </Tab.Group>

                            {/* Product info */}
                            <div className="mt-10 sm:px-0 sm:mt-16 lg:mt-0 rounded">
                                <div className="flex bg-white md:px-8 px-2 py-4 flex-col rounded">
                                    <h1 className=" tracking-tight text-gray-400 text-sm font-semibold">{product?.product?.category}</h1>
                                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 uppercase">{product?.product?.title}</h1>

                                    {/* Reviews */}
                                    <div className="mt-2">
                                        <h3 className="sr-only">Reviews</h3>
                                        <div className="flex items-center">
                                            <div className="flex items-center">
                                                <RatingComponent
                                                    ratings={Math.floor(product?.product?.averageRating)}
                                                    user={userInfo}
                                                />
                                            </div>
                                            <p className="sr-only">{product?.product?.averageRating} out of 5 stars</p>
                                        </div>
                                    </div>

                                    <div className="my-3">
                                        <h2 className="sr-only">Product information</h2>
                                        <div className="flex flex-row items-center gap-4">
                                            <p className="text-2xl font-bold text-gray-700">${product?.product?.price - product?.product?.discount_price}</p>
                                            <p className="text-xl line-through text-gray-300">${product?.product?.price}</p>
                                        </div>
                                    </div>
                                    <div className=" mb-2">
                                        <BlueButton
                                            text={
                                                <div className='flex flex-row items-center space-x-1 mx-auto w-full justify-center content-center'>
                                                    <PlusIcon height={10} width={10} />
                                                    <ShoppingCartIcon height={12} width={12} />
                                                    <p>Add to cart </p>
                                                </div>
                                            }
                                            className="flex-1 w-full" onClick={add_to_basket} />
                                    </div>
                                </div>


                                <div className="flex flex-col bg-white my-4 md:px-8 px-2 py-4 rounded">

                                    {/* <Divider className='my-2' /> */}

                                    <div className="">
                                        {/* Colors */}

                                        <div className="mt-2">
                                            <div className="mb-2 text-gray-800 text-sm capitalize font-semibold flex flex-row items-center ">

                                                <div className="flex flex-row items-center">
                                                    <p className="text-gray-500 mr-2">Delivered by </p>
                                                    <div className="text-gray-500">
                                                        <img src={logo} alt="logo on descriprion page" className='h-6' />
                                                    </div>

                                                </div>
                                            </div>
                                            {
                                                product?.product.price > 50 ? (
                                                    <p className='text-gray-700 text-sm font-semibold'>Free delivery around Zimbabwe</p>
                                                ) : (
                                                    <p className='text-gray-700 text-sm font-semibold'>Buy items for more than $50 for free delivery</p>
                                                )
                                            }

                                            {
                                                product?.stock.in_stock === "stock_handled_by_trolliey" && (
                                                    <div className="border-t border-b py-2 mt-2 flex flex-row items-center">
                                                        <p className='text-gray-700 font-semibold text-sm'>In Stock</p>
                                                        <p className='p-1 bg-gray-200 rounded text-xs ml-2'>HRE</p>
                                                    </div>
                                                )
                                            }
                                            <div className="flex flex-row items-center gap-2 mt-2">
                                                <p className='text-xs text-gray-700'>Eligible in cash on delivery</p>
                                                <div className="flex flex-col rounded-full">
                                                    <InformationCircleIcon className='text-green-700' height={16} width={16} />
                                                </div>
                                            </div>
                                            <div className="flex flex-row items-center gap-2">
                                                <p className='text-xs text-gray-700 my-1'>6-Months Limited Waranty</p>
                                                <div className="flex flex-col rounded-full">
                                                    <InformationCircleIcon className='text-green-700' height={16} width={16} />
                                                </div>
                                            </div>
                                            <div className="flex flex-row items-center gap-2">
                                                <p className='text-xs text-gray-700 my-1'>Cash on delivery accepted</p>
                                                <div className="flex flex-col rounded-full">
                                                    <InformationCircleIcon className='text-green-700' height={16} width={16} />
                                                </div>
                                            </div>

                                        </div>
                                        <div className="mt-4">
                                            <div className="md:col-span-2 col-span-3 flex flex-row items-center w-full">
                                                <div onClick={add_to_compare} className="text-blue-primary flex-1 border border-blue-primary rounded p-2 text-center font-semibold capitalize hover:bg-blue-primary hover:text-white cursor-pointer">
                                                    compare
                                                </div>
                                            </div>

                                        </div>
                                        <div className="my-2"></div>
                                        <div className="">
                                            <BlackButton text='Buy Item Now' className="w-full flex-1" onClick={() => {
                                                add_to_basket()
                                                history.push('/payment')
                                            }} />
                                        </div>
                                    </div>
                                </div>
                                <div onClick={() => history.push(`/stores/single/${product?.store_id}`)} className="flex flex-row space-x-4 items-center p-4 rounded border border-gray-200 bg-white cursor-pointer">
                                    <Avatar src={product?.store_pic} name={product?.store_name} className="text-gray-700" />
                                    <div className="flex flex-col">
                                        <p className="text-gray-700 font-semibold">View {product?.store_name}'s store</p>
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
                                                <li key={item}>{index + 1}. {item}</li>
                                            ))}
                                        </ul>
                                    </>
                                ) : (
                                    <div className="mt-2">
                                        <h3 className="sr-only">Description</h3>

                                        <span className="flex-grow w-full">
                                            <div className="flex mb-4 flex-col">
                                                {showMore ? <div
                                                    className="text-base text-gray-700 space-y-6 leading-normal"
                                                    dangerouslySetInnerHTML={{ __html: product?.product?.description }}
                                                /> : <div
                                                    className="text-base text-gray-700 space-y-6 leading-normal"
                                                    dangerouslySetInnerHTML={{ __html: product?.product?.description.substring(0, 500) }}
                                                />}
                                            </div>
                                            <span onClick={() => setShowMore(!showMore)} className="bg-blue-primary self-center mx-auto text-white font-semibold text-center my-4 p-2 rounded text-xs">
                                                {showMore ? "Read Less" : "Read More"}
                                            </span>

                                        </span>
                                    </div>
                                )
                            }
                        </section>
                    </div>
                </div>
                <div className="related_products mt-16">
                    <>
                        <RelatedProducts cols="lg:grid-cols-5 " category={product?.product.category_slug} />
                    </>
                </div>
            </div>
        </GeneralLayout>
    )
}

export default ProductDescription
