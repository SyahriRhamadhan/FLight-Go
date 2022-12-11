import React from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import { Landingpage, LoginPage, RegisterPage, Dashboard } from '../page';

const Routepage = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landingpage />}/>
                <Route path='/login' element={<LoginPage />}/>
                <Route path='/Register' element={<RegisterPage />}/>
                <Route path='/Dashboard' element={<Dashboard />}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Routepage