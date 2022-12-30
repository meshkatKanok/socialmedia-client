import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {
    const {EmailSignin, googlelogin}=useContext(AuthContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    let navigate = useNavigate();
  let location = useLocation();
  

  let from = location.state?.from?.pathname || "/";
    const onSubmit = data =>{
        console.log(data);
        EmailSignin(data?.email,data?.password)
        .then(res=>{
            const user=res.user
            navigate(from, { replace: true })
        })
        .catch(e=>console.error(e))
    };
    const handleGoogle=()=>{
        googlelogin()
        .then(res=>{
          console.log(res);
          navigate(from, { replace: true })
        })
        .then(res=>console.error(res))
     }
    return (
        <div>
            <div class="">
  <div class="p-8 lg:w-1/2 mx-auto">
    <div class="bg-gray-100 rounded-t-lg p-8">
      <p class="text-center text-xl text-blue-600 font-bold">WELCOME TO THE cHAT pRO</p>
      <div>
        <div class="flex items-center justify-center space-x-4 mt-3">
          <button onClick={handleGoogle}
            class="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 mr-3"
              viewBox="0 0 48 48"
            >
              <path
                fill="#fbc02d"
                d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
              />
              <path
                fill="#e53935"
                d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
              />
              <path
                fill="#4caf50"
                d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
              />
              <path
                fill="#1565c0"
                d="M43.611 20.083 43.595 20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
              />
            </svg>
            Google
          </button>
        </div>
      </div>
    </div>
    <div class="bg-gray-100 rounded-b-lg py-12 px-4 lg:px-24">
      <p class="text-center text-sm text-gray-500 font-light">
        Or sign in with credentials
      </p>
      <form onSubmit={handleSubmit(onSubmit)} class="mt-6">
        <div class="relative">
          <input {...register("email", { required: true })}
            class="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Email"
          />
          <div class="absolute left-0 inset-y-0 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7 ml-3 text-gray-400 p-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
              />
              <path
                d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
              />
            </svg>
          </div>
        </div>
        <div class="relative mt-3">
          <input {...register("password", { required: true })}
            class="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Password"
          />
          <div class="absolute left-0 inset-y-0 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7 ml-3 text-gray-400 p-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z"
              />
            </svg>
          </div>
        </div>
        <div class="mt-4 flex items-center text-gray-500">
          <input type="checkbox" id="remember" name="remember" class="mr-3" />
          <label for="remember">Remember me</label>
        </div>
        <div class="flex items-center justify-center mt-8">
          <input type='submit' value='Sign In'
            class="text-white py-2 px-4 uppercase rounded bg-blue-600 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
          />
            
        </div>
        <p class="mt-8">Need an account? <Link to="/register" class="text-blue-500 hover:text-blue-700 font-semibold">Create an
              account</Link></p>
      </form>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Login;