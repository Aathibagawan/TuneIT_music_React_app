import { createRoot } from 'react-dom/client'
import React from 'react';
import './Glabal.css'
import { RouterProvider } from 'react-router-dom';
import { myMap } from './Routing/Routes';
import UserContext from './context/UserContext';

createRoot(document.getElementById('root')).render(
    <>
        {/* <App/> */}

        <React.StrictMode>
            <UserContext>
                <RouterProvider router={myMap} />
            </UserContext>
        </React.StrictMode>

    </>
)