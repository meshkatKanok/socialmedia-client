import React from 'react';
import { Outlet } from 'react-router-dom';
import Detials from '../Detials/Detials';
import Sidebar from '../Layout/Sidebar';
import Footer from '../Pages/Footer';
import Header from '../Pages/Header';

const Detailsbar = () => {
    return (
        <div>
            <div>
           <Header/>
          <div className='lg:flex justify-between lg:mr-80'>
         <div>
         <Sidebar/>
         </div>
         <div>
        <Detials/>
         </div>
          </div>
           </div>
            <Outlet/>
            <Footer/>
            
        </div>
    );
};

export default Detailsbar;