import React from 'react';
import { Outlet } from 'react-router-dom';
import ChatSide from '../Layout/ChatSide';
import Sidebar from '../Layout/Sidebar';
import Footer from '../Pages/Footer';
import Header from '../Pages/Header';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const Main = () => {
    return (
        <div>
           <div>
           <Header/>
          <div className='lg:flex justify-between lg:mr-40'>
         <div>
         <Sidebar/>
         </div>
         <div>
         <ChatSide/>
         </div>
          </div>
           </div>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;