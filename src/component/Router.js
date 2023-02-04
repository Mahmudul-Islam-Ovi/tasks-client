import React from 'react';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Combained from './Combained';
import ShowData from './ShowData';
import UpdateData from './UpdateData';


const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <div>
                   <Combained></Combained>
                </div>
            ),
        },
        {
            path: "/show",
            element: <ShowData></ShowData>,
            loader : ()=> fetch('http://localhost:400/information')
        },
        {
            path: "/update/:id",
            element: <UpdateData></UpdateData>,
            loader : ({params})=> fetch(`http://localhost:400/information/${params.id}`)
        },
    ]);

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
};

export default Router;