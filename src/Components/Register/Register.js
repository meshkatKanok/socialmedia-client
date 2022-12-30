import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Register = () => {
    const navigate=useNavigate()
    const authData=useContext(AuthContext)
    const Api=`09e31f3e45976bbd5dc75e4b28575da9`
    const location=useLocation();
    const from=location.state?.from?.pathname || '/';
    const{creatUser,googlelogin}=authData
    const { register, handleSubmit, watch, formState: { errors },reset } = useForm();
  const onSubmit = data =>{
    console.log(data);
 
    const {email,password,fristName,lastName,university

    }=data
    creatUser(email,password)
    .then((userCredential) => {
        const user = userCredential.user;
        navigate('/')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

      
      const image=data?.file[0]
      const formData=new FormData()
     formData.append('image',image)
      fetch(`https://api.imgbb.com/1/upload?expiration=600&key=${Api}`,{
      method:'POST',
      body:formData
  } )
  
    }
    fetch(` https://y-iota-self.vercel.app/registerData`,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify( postData)

    })
    .then(res=>res.json())
    .then(data=>{
        if(data?.acknowledged===true){
            // toast.success('Successfully Posted')
            // setSeccess(data?.acknowledged)
            reset()
            // refetch()
              
        }
        
    })
  })



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

<div class="min-w-screen min-h-screen flex items-center justify-center px-5 py-5">
    
    <div class="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{maxWidth:'500px'}}>
        <div class="md:flex w-full">
           
            <div class="w-full md:w-full py-10 px-5 md:px-10">
                <div class="text-center mb-10">
                    <h1 class="font-bold text-3xl  text-blue-600">WELCOME TO THE cHATpRO</h1>
                    <p>Enter your information to register</p>
                </div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="flex -mx-3">
                        <div class="w-1/2 px-3 mb-5">
                            <label for="" class="text-xs font-semibold px-1">First name</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input type="text" {...register("fristName", { required: true })} class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="John"/>
                            </div>
                        </div>
                        <div class="w-1/2 px-3 mb-5">
                            <label for="" class="text-xs font-semibold px-1">Last name</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input type="text" {...register("lastName", { required: true })} class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Smith"/>
                            </div>
                        </div>
                    </div>
                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-3">
                            <label for="" class="text-xs font-semibold px-1">University Name</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                <input type="text" {...register("university", { required: true })} class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Enter your university Name"/>
                            </div>
                        </div>
                    </div>
                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-5">
                            <label for="" class="text-xs font-semibold px-1">Email</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                <input type="email" {...register("email", { required: true })} class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com"/>
                            </div>
                        </div>
                    </div>
                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-12">
                            <label for="" class="text-xs font-semibold px-1">Password</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                <input type="password" {...register("password", { required: true })} class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************"/>
                            </div>
                        </div>
                    </div>
                    <div>
                    <div class="max-w-2xl rounded-lg shadow-xl bg-gray-50">
        <div class=" mb-3">
            <label class="inline-block mb-2 text-gray-500">Upload Photo</label>
            <div class="flex items-center justify-center w-full">
                <label
                    class="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                    <div class="flex flex-col items-center justify-center pt-7">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                            Attach a file</p>
                    </div>
                    <input type="file" class="opacity-0" {...register("file", { required: true })} />
                </label>
            </div>
        </div>
         
    </div>

                    </div>
                    
                    <button onClick={handleGoogle}
                class="w-full max-w-auto mb-4 font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
              >
                <div class="bg-white p-2 rounded-full">
                <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" class="w-5" alt="google logo"/>
                </div>
                <span class="ml-4">
                  Sign Up with Google
                </span>
              </button>
                    <div class="flex -mx-3 ">
                        <div class="w-full px-3 mb-5 ">
                            <input type='submit' value='REGISTER NOW' class="block w-full cursor-pointer max-w-xs mx-auto bg-blue-600 text-white rounded-lg px-3 py-3 font-semibold"/>
                        </div>
                    </div>
                    <p class="mt-8">you've already created account?<Link to="/login" class="text-blue-500 hover:text-blue-700 font-semibold">Login Now</Link></p>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>


                          
 
        </div>
    );
};

export default Register;