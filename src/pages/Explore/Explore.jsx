import React from 'react'
import AllProducts from '../../components/home_sections/AllProducts'
import ExploreLayout from '../../layouts/ExploreLayout'

function Explore() {
    return (
        <ExploreLayout>
            <>
                <AllProducts cols="lg:grid-cols-4 " />
            </>
        </ExploreLayout>
    )
}

export default Explore
