
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import FetchCardp from '../PostCard/FetchCardp';

const ChatSide = () => {
   
    const Api=`09e31f3e45976bbd5dc75e4b28575da9`
    const { register, handleSubmit ,reset} = useForm();
    const [success,setSeccess]=useState(false)
    const { isLoading, error, data:postdata,refetch } = useQuery({
        queryKey: ['repoData'],
        queryFn:()=>handleSubmit()
           
      })
    const onSubmit = data => {
         if(data?.file?.length===0){
            toast.error('No text Write')
         }
       else{
        const message=data?.message;
        const image=data?.file[0]
        const formData=new FormData()
       formData.append('image',image)
        fetch(`https://api.imgbb.com/1/upload?expiration=600&key=${Api}`,{
        method:'POST',
        body:formData
    } )
    .then(res=>res.json())
    .then(data=>{
        const postpic=data?.data?.display_url
        const postinfo={
            message,
            postpic
        }
        fetch(` https://y-iota-self.vercel.app/postData`,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(postinfo)

        })
        .then(res=>res.json())
        .then(data=>{
            if(data?.acknowledged===true){
                toast.success('Successfully Posted')
                setSeccess(data?.acknowledged)
                reset()
                refetch()
                  
            }
            
        })
        reset()
    }
    )
   
       }


    };

 
  
   
    return (
        <div>
       
<form onSubmit={handleSubmit(onSubmit)} >
    <label for="chat" class="sr-only">Your message</label>
    <div class="flex  items-center justify-center px-3 py-2 rounded-lg bg-gray-100 mt-1 lg:mt-20  shadow w-full mr-10 " >
    
           <label for='fileup' className='cursor-pointer  '>
           <svg  aria-hidden="true" class="w-6 h-6"   viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path></svg> 
           </label>
           <input  type='file' className='invisible h-5 w-3 cursor-pointer' id='fileup' {...register("file")} />
      
         
            <div className='cursor-pointer'>
            <svg aria-hidden="true" class="w-6 h-6"  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clip-rule="evenodd"></path></svg>
            </div>
           
    
        <textarea id="chat" rows="1" {...register("message")} className="block mx-14  p-2.5 lg:w-[700px]  text-sm text-gray-900 bg-white rounded-md border-gray-300 border-0 focus:border-gray-300 outline-none " placeholder="Write a Post"></textarea>
           
            <input className='cursor-pointer text-white bg-blue-700 mt-1 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' type='submit' value='Post'/>
            <span class="sr-only">Send message</span>
         
    </div>
</form>
 <FetchCardp success={success}/>
            
        </div>
    );
};

export default ChatSide;