import React, { } from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import { EditProfilePage, Landingpage, LoginPage, RegisterPage, Dashboard,ProfilePage } from '../page';
import { useState, useEffect } from "react";
import axios from "axios";
import NavigateToHome from "../auth/NavigateToHome"
import ProtectedToken from "../auth/ProtectedToken"
import isAdmin from '../auth/AdminAcess';

const Routepage = () => {
    const [users, setUsers] = useState("");
    const [role , setRole] = useState("");
    const whoami = () => {
        axios
            .get('https://flightgo-be-server-production.up.railway.app/v1/api/current-user', {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
            })
            .then((response) => {
                console.log(response.data.role)
                setUsers(response.data.data);
                setRole(response.data.role); 
            });
    };

    useEffect(() => {
        whoami();
    }, [])
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landingpage />} />
                <Route path="Login" element={
                    <NavigateToHome users={users}>
                        <LoginPage />
                    </NavigateToHome>
                } />
                <Route path="Register" element={
                    <NavigateToHome>
                        <RegisterPage />
                    </NavigateToHome>
                } />
                <Route path="EditProfile" element={ 
                <ProtectedToken>
                    <EditProfilePage users={users} />
                </ProtectedToken>
                } />
                <Route path="ProfilePage" element={ 
                <ProtectedToken>
                    <ProfilePage users={users} />
                </ProtectedToken>
                } />
                <Route path="Dashboard" element={ 
                <isAdmin>
                    <Dashboard users={users} role={role}/>
                </isAdmin>
                } />
            </Routes>
        </BrowserRouter>
    )
}
export default Routepage