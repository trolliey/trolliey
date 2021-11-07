import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

function PrivateRoute({ component: Component, ...rest }) {
    const user = useSelector(state => state.user_login)
    if (user) {
        const { userInfo } = user
        return (
            <Route {...rest} render={(props) => (
                userInfo ? (<Component {...props} />)
                    : (<Redirect to='/login' />)
            )} />
        )
    }
    return (
        <Route {...rest} render={(props) => (
            user ? (<Component {...props} />)
                : (<Redirect to='/login' />)
        )} />
    )
}

export default PrivateRoute
