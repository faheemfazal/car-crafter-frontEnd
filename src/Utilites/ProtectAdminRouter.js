

import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectAdminRouter() {
    
    const isAuth = Boolean(useSelector((state) => state.adminSlice.token));
    return (
        isAuth ? <Outlet /> : <Navigate to='/admin' />
    )
}

export default ProtectAdminRouter
