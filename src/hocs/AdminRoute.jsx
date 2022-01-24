import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

function AdminRoute({ component: Component, ...rest }) {
    const user = useSelector(state => state.user_login)
    if (user) {
        const { userInfo } = user
        return (
            <Route {...rest} render={(props) => (
                userInfo?.user.role === 'admin' ? (<Component {...props} />)
                    : (<Redirect to='/admin' />)
            )} />
        )
    }
    return (
        <Route {...rest} render={(props) => (
            user ? (<Component {...props} />)
                : (<Redirect to='/admin' />)
        )} />
    )
}

export default AdminRoute
