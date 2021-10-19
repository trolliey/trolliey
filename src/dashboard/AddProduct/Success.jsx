import React from 'react'
import BlueButton from '../../components/buttons/BlueButton'
import DashboardLayout from '../../layouts/DashboardLayout'

function Success({ values, prevStep, pictures, additional_features }) {
    const save_product = () =>{
        console.log(pictures, additional_features, values)
    }
    return (
        <DashboardLayout>
            <div className="p-4 h-full flex">
                <div className="bg-white rounded flex-1">
                    <div className="flex-1 p-4 flex flex-col">
                        Success
                    </div>
                    <div className="border-t border-gray-200 p-4 flex flex-row items-center ">
                        <div className="flex w-full justify-between flex-row">
                            <div className="text-blue-primary text-sm">
                                <p className="font-semibold">Tips</p>
                                <p className="text-gray-400 text-xs">Make sure the details of the product are ad you want</p>
                            </div>
                            <div className="ml-auto flex flex-row items-center">
                                <BlueButton text="Previous" outline onClick={() => prevStep(values)} />
                                <div className="mx-2"></div>
                                <BlueButton text="Save Product" onClick={save_product} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Success