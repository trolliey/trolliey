import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import Error from '../../components/alerts/Error'
import SuccessAlert from '../../components/alerts/SuccessAlert'
import BlueButton from '../../components/buttons/BlueButton'
import DashboardLayout from '../../layouts/DashboardLayout'

function FinalMessage() {
    const _product = useSelector(state => state.create_a_product)
    const { error, message, loading } = _product
    const history = useHistory()

    return (
        <DashboardLayout>
            <div className="p-4 h-full flex">
                <div className="bg-white rounded flex-1">
                    <div className="flex-1 p-4 flex flex-col">
                        <div className="flex pb-4 pl-4 text-gray-700 font-semibold text-lg border-b border-gray-200 mb-4">
                            Final Stage
                        </div>
                        <p className="text-center text-gray-700 font-semibold text-lg">Thank you for adding a product</p>
                        <p className="text-center text-sm text-gray-400">Do you want to add another product?</p>
                        
                    </div>
                    {message && <SuccessAlert message={message} />}
                    {error && <Error error={error} />}
                    <div className="border-t border-gray-200 p-4 flex flex-row items-center ">
                        <div className="flex w-full justify-between flex-row">
                            <div className="text-blue-primary text-sm">
                                <p className="font-semibold">Tips</p>
                                <p className="text-gray-400 text-xs">Make sure the details of the product are ad you want</p>
                            </div>
                            <div className="ml-auto flex flex-row items-center">
                                <div className="mx-2"></div>
                                <BlueButton text="Add another" onClick={() => history.push('/dashboard/addproduct')} loading={loading} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default FinalMessage