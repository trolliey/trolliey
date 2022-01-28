import React, {useState} from 'react';
import { useEffect } from 'react';
import Error from '../../components/alerts/Error';
import BlueButton from '../../components/buttons/BlueButton';
import GeneralLayout from '../../layouts/GeneralLayout';

function BusinessInfo({ nextStep, handleChange, values, prevStep }) {
    const [page_err, setPageErr] = useState('')

    useEffect(() => {
        console.log(values)
    }, [])
    return (
        <GeneralLayout>
            <div className="py-8 max-w-7xl">
                <div className="bg-white rounded md:p-8 p-4 mx-auto">
                    <p className='text-gray-700 text-lg font-semibold text-center'>Information about your business?</p>

                    <div className="md:py-8 py-4 lg:px-32 md:px-16 px-4">
                        <div className="space-y-8 divide-y divide-gray-200">
                            <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                                <div>
                                    <div>
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">Profile</h3>
                                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                            This information will be used by us to know more about you and you business.
                                        </p>
                                    </div>

                                    <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                                Company Name
                                            </label>
                                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                                <div className="max-w-lg flex rounded-md shadow-sm">
                                                    <input
                                                        type="text"
                                                        name="company_name"
                                                        value={values.company_name}
                                                        onChange={handleChange('company_name')}
                                                        id="copmany-name"
                                                        autoComplete="company-name"
                                                        className="flex-1 block w-full outline-none p-3 min-w-0 rounded-none rounded-r-md sm:text-sm border border-gray-300"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                                Business Category
                                            </label>
                                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                                <div className="max-w-lg flex rounded-md shadow-sm">
                                                    <input
                                                        type="text"
                                                        name="business_category"
                                                        value={values.business_category}
                                                        onChange={handleChange('business_category')}
                                                        id="business-category"
                                                        autoComplete="business-category"
                                                        className="flex-1 block w-full outline-none p-3 min-w-0 rounded-none rounded-r-md sm:text-sm border border-gray-300"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 italic">
                                                Website <span className='text-gray-500 italic font-normal'>(Optional)</span>
                                            </label>
                                            <div className="mt-1 sm:mt-0 sm:col-span-1">
                                                <div className="max-w-lg flex rounded-md shadow-sm">
                                                    <input
                                                        type="text"
                                                        name="website"
                                                        value={values.company_website}
                                                        onChange={handleChange('company_website')}
                                                        id="company-website"
                                                        autoComplete="company-website"
                                                        className="flex-1 block w-full outline-none p-3 min-w-0 rounded-none rounded-r-md sm:text-sm border border-gray-300"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 italic">
                                                Facebook link <span className='text-gray-500 italic font-normal'>(Optional)</span>
                                            </label>
                                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                                <div className="max-w-lg flex rounded-md shadow-sm">
                                                    <input
                                                        type="text"
                                                        name="facebook"
                                                        value={values.facebook}
                                                        onChange={handleChange('facebook')}
                                                        id="facebook-link"
                                                        autoComplete="facebook-link"
                                                        className="flex-1 block w-full outline-none p-3 min-w-0 rounded-none rounded-r-md sm:text-sm border border-gray-300"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 italic">
                                                Twitter link <span className='text-gray-500 italic font-normal'>(Optional)</span>
                                            </label>
                                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                                <div className="max-w-lg flex rounded-md shadow-sm">
                                                    <input
                                                        type="text"
                                                        name="twitter"
                                                        value={values.twitter}
                                                        onChange={handleChange('twitter')}
                                                        id="twitter-link"
                                                        autoComplete="twitter-link"
                                                        className="flex-1 block w-full outline-none p-3 min-w-0 rounded-none rounded-r-md sm:text-sm border border-gray-300"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 italic">
                                                Instagram link <span className='text-gray-500 italic font-normal'>(Optional)</span>
                                            </label>
                                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                                <div className="max-w-lg flex rounded-md shadow-sm">
                                                    <input
                                                        type="text"
                                                        name="instagran"
                                                        value={values.instagram}
                                                        onChange={handleChange('instagram')}
                                                        id="instagram-link"
                                                        autoComplete="instagram-link"
                                                        className="flex-1 block w-full outline-none p-3 min-w-0 rounded-none rounded-r-md sm:text-sm border border-gray-300"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                       

                                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                            <label htmlFor="about" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                                About
                                            </label>
                                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                                <textarea
                                                    id="about"
                                                    name="about"
                                                    value={values.about}
                                                    onChange={handleChange('about')}
                                                    rows={7}
                                                    className="max-w-lg shadow-sm block w-full p-3 outline-none sm:text-sm border border-gray-300 rounded-md"
                                                    defaultValue={''}
                                                    required
                                                />
                                                <p className="mt-2 text-sm text-gray-500">Write a few sentences about your store or your business.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {page_err && <Error error={page_err} />}

                    <div className="flex flex-row items-center w-full justify-between">
                        <div className="">
                            <BlueButton text={'Prev Step'} onClick={() => prevStep(values)} />
                        </div>
                        <div className="ml-auto">
                            <BlueButton text={'Next Step'} onClick={() => nextStep(values)} />
                        </div>
                    </div>
                </div>
            </div>
        </GeneralLayout>
    );
}

export default BusinessInfo;
