import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from '../components/notFound';
import Home from '../pages/user/home';
import UserData from '../pages/user/userData'

function UserRoute() {
    return (
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/' element={<Home />} />
            <Route path='/userData' element={<UserData />} />
            <Route path='/*' element={<NotFound />} />
        </Routes>
    );
}

export default UserRoute;
