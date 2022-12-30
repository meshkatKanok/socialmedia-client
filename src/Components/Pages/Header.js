import React, { useContext } from 'react';
import { FcSms, IconName } from "react-icons/fc";
import { FaFacebookMessenger} from "react-icons/fa";
import { AuthContext } from '../AuthProvider/AuthProvider';


const Header = () => {
  const {signout}=useContext(AuthContext)
  const SignOut=()=>{
    signout()
    .then(re=>{})
    .catch(e=>{})
  }
    return (
        <div>
         <div className="navbar bg-gray-100 lg:fixed shadow">
  <div className="flex-1">
    <a className="normal-case text-xl cursor-pointer"><h1 className=' text-blue-600 lg:text-4xl font-bold'>Chat PRo</h1></a>
  </div>
  <div class="relative text-gray-600 focus-within:text-gray-400 lg:mr-5">
      <span class="absolute inset-y-0 left-0 flex items-center pl-2">
        <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
      </span>
      <input type="search" name="q" class="py-2 text-sm rounded-md pl-10 focus:outline-none " placeholder="Search..." autocomplete="off"/>
    </div>
 
  <div className="flex-none lg:gap-7">
    <FaFacebookMessenger className='lg:h-8 lg:w-8 ml-2 h-5 w-5 cursor-pointer text-blue-600  '/> 
    
  <div className="indicator cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
  
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li onClick={SignOut}><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Header;