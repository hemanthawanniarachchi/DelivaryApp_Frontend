import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


/** import all components */
import Username from './components/Username';
import Password from './components/Password';
import Register from './components/Register';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import Reset from './components/Reset';
import PageNotFound from './components/PageNotFound';
import LandingPage from './components/LandingPage';
 
import Products from './components/Products';

import AddProduct from './components/AddProduct';
import Cart from './components/Cart';
import Layout from './components/Layout';

/** auth middleware */
import { AuthorizeUser, ProtectRoute } from './middleware/auth'
import { addProduct } from './helper/helper';

/** root routes */
const router = createBrowserRouter([
    {
        path : '/username',
        element : <Username></Username>
    },
    {
        path : '/register',
        element : <Register></Register>
    },
    {
        path : '/password',
        element : <ProtectRoute><Password /></ProtectRoute>
    },
    {
        path : '/profile',
        element : <AuthorizeUser><Profile /></AuthorizeUser>
    },
    // {
    //     path : '/products',
    //     element : <Products></Products>
    // },
    {
        path : '/products',
        element : <Layout body={<Products></Products>}/>
    },
    {
        path : '/recovery',
        element : <Recovery></Recovery>
    },
    {
        path : '/reset',
        element : <Reset></Reset>
    },
    
    {
        path : '*',
        element : <PageNotFound></PageNotFound>
    },
    {
        path : '/',
        element : <LandingPage></LandingPage>
    },
    {
        path : '/cart',
        element : <Layout body={<Cart customerId="e5495544-d4ea-4932-a74f-5a38f4b86e6"></Cart>}/>
    },
    {
        path : '/addProduct',
        element : <Layout body={<AddProduct />}/>
    },
])

export default function App() {
  return (
    <main>
        <RouterProvider router={router}></RouterProvider>
    </main>
  )
}