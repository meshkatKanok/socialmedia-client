import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Layout/Sidebar';
import Footer from '../Pages/Footer';
import Header from '../Pages/Header';
import AboutCard from './AboutCard';

const About = () => {
    return (
        <div>
            <div>
            <div>
           <Header/>
          <div className='lg:flex justify-between lg:mr-80'>
         <div>
         <Sidebar/>
         </div>
         <div>
        <AboutCard/>
         </div>
          </div>
           </div>
            <Outlet/>
            <Footer/>
            
        </div>
            
        </div>
    );
};

export default About;