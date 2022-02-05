import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import logo from '../../assets/full_logo.png'
import Error from '../../components/alerts/Error';
import SuccessAlert from '../../components/alerts/SuccessAlert';
import BlueButton from '../../components/buttons/BlueButton';
import { apiUrl } from '../../utils/apiUrl';

function VerifyEmail() {
    const [err, setErr] = useState('')
    const [msg, setMsg] = useState('')
    const [loading, setLoading] = useState(false)
    const { id } = useParams()
    const history = useHistory()

    const verify_email = () => {
        setLoading(true)
        axios.post(`${apiUrl}/auth/verify`, {
            code: id
        }).then((data) => {
            setLoading(false)
            setMsg(data.data.message)
        }).catch(() => {
            setErr('Error verifying email!')
            setLoading(false)
        })
    }

    useEffect(() => {
        if (msg) {
            setTimeout(() => {
                history.push('/login')
            }, 1500);
        }
    }, [msg, history])

    return <div className="flex flex-col items-center bg-white p-4 rounded min-h-screen">
        <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex-shrink-0 flex justify-center">
                <a href="/" className="inline-flex">
                    <span className="sr-only">Trolliey</span>
                    <img
                        className="h-12 w-auto"
                        src={logo}
                        alt="main logo on not found page"
                    />
                </a>
            </div>
            <div className="py-16">
                <div className="text-center">
                    <p className="text-sm font-semibold text-blue-primary uppercase tracking-wide">Verify Email</p>
                    {/* <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Page not found.</h1> */}
                    <p className="mt-2 text-base text-gray-500">Click button below to verify your account and start exploring more trolliey options.</p>
                    {err && <Error error={err} />}
                    {msg && <SuccessAlert message={msg} />}
                    <div className="mt-6">
                        <span className="">
                            <BlueButton text={'Verify Email'} outline={true} loading={loading} onClick={verify_email} />
                        </span>
                    </div>
                </div>
            </div>
        </main>
    </div>;
}

export default VerifyEmail;
