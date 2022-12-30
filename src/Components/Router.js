import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import About from './About/About';
import Detailsbar from './Detaildbar/Detailsbar';
import Login from './Login/Login';
import Main from './Main/Main';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Register from './Register/Register';

const Router =createBrowserRouter([
    {path:'/',element:<PrivateRoute><Main/></PrivateRoute>},
    {path:'/dtl/:id',element:<Detailsbar/>,
    loader:({params})=>fetch(` https://y-iota-self.vercel.app/post/${params.id}`)},
    {path:'/register',element:<Register/>},
    {path:'/login',element:<Login/>},
    {path:'/about',element:<About/>}
    
])

export default Router;
     