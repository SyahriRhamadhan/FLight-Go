import React from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import { Landingpage, LoginPage, RegisterPage } from '../page';

const Routepage = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landingpage />}/>
                <Route path='/login' element={<LoginPage />}/>
                <Route path='/Register' element={<RegisterPage />}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Routepage