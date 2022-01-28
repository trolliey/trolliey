import React from 'react';
import BlueButton from '../../components/buttons/BlueButton';
import GeneralLayout from '../../layouts/GeneralLayout';

function ProductsInfo() {
    return (
        <GeneralLayout no_text>
            <div className="py-8 max-w-7xl">
                <div className="bg-white rounded md:p-8 p-4 mx-auto">
                    products info

                    <div className="flex flex-row items-center w-full justify-between">
                        <div className="ml-auto">
                            <BlueButton text={'Next Step'} />
                        </div>
                    </div>
                </div>
            </div>
        </GeneralLayout>
    );
}

export default ProductsInfo;
