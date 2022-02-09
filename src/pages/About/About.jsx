import React from 'react'
import GeneralLayout from '../../layouts/GeneralLayout'

function About() {
    return (
        <GeneralLayout title={'About'} description={'Full description of Trolliey platform and how it works'}>
             <div className="bg-white md:p-8 p-2 rounded text-center">
                 about us 
             </div>
        </GeneralLayout>
    )
}

export default About
