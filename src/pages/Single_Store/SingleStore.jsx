import { Spinner } from '@chakra-ui/spinner'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import GeneralLayout from '../../layouts/GeneralLayout'
import { get_store_products_Actions } from '../../redux/actions/storeActions'

function SingleStore() {
    const { id } = useParams()
    const _info = useSelector(state => state.get_store_products)
    const { loading, products } = _info
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(get_store_products_Actions(id))
    }, [dispatch, id])

    console.log(products)

    if (loading) {
        return (
            <GeneralLayout>
                <div className="grid items-center content-center bg-white md:p-8 px-4 w-full rounded min-h-screen">
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

    return (
        <GeneralLayout>
            <div className="flex bg-white md:p-8 px-4 w-full rounded min-h-screen">
                <div className="bg-white w-full">
                    <div className="max-w-2xl mx-auto md:py-16 py-4  lg:max-w-7xl lg:px-8 md:px-0 px-0">
                        <div className="flex flex-col items-center">
                            <p>{id}</p>
                        </div>
                    </div>
                </div>
            </div>
        </GeneralLayout>
    )
}

export default SingleStore
