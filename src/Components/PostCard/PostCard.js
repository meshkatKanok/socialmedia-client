import { counter } from '@fortawesome/fontawesome-svg-core';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FaComment, FaEdit, FaTrash } from 'react-icons/fa';
import { FcComments, FcLike } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import FetchCardp from './FetchCardp';

const PostCard = ({postData,handleDelete}) => {
    const {message,
        postpic,_id}=postData
        const [like,setLike]=useState(0)
        const [comment,setComment]=useState(0)
        const [CoutLike,setCount]=useState(0)
        const [likCount,setLikeCount]=useState(0)
        const { register, handleSubmit,reset } = useForm();
        const { isLoading, error, data ,refetch} = useQuery({
          queryKey: ['repoData'],
          queryFn: () =>
            fetch(' https://y-iota-self.vercel.app/likeData')
            .then((res) => res.json())
            .then(data=>setCount(data))
        })

useEffect(()=>{
  fetch(` https://y-iota-self.vercel.app/commentData`)
  .then(res=>res.json())
  .then(data=>setComment(data))
},[])
      
  const onSubmit = data =>{
    const comment=data.comment
    const infoFetch={
      comment,
      likCount
    }
    fetch(` https://y-iota-self.vercel.app/commentData`,{
      method:"POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(infoFetch)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.acknowledged===true){
        toast.success("Comment Added Successfully")
        reset()
      }
    })
  }
       
        const likeOne=(id)=>{
          console.log(id);
       const plus= like+1
       setLike(plus)
       console.log(likCount);
       const likeData={
       like:likCount
       }
       
       localStorage.setItem(plus,like)
       const likeCount=localStorage.getItem(plus)
       setLikeCount(likeCount)

       fetch(` https://y-iota-self.vercel.app/likeData`,{
        method:"POST",
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(likeData)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
         if(data.acknowledged===true){
          
          refetch()
         }
      })
     

      
        }
    return (
        <div>
            <div class="container">
  <div>
<div class="p-3 px-6 min-h-48 flex    " >
 
    <div class="rounded-md shadow-md  w-full">
      
      <img src={postpic} alt="" class="object-cover object-center w-full h-72 bg-coolGray-500"  />
      <div class="p-3"  >
        <div className='flex justify-between'>
        <div class="flex items-center justify-start gap-1" >
          <div class="flex items-center space-x-3">
            <button type="button" title="Like post" class="flex items-center justify-center">
            <FcLike onClick={()=>likeOne(_id)} class='h-3 w-3'/>
            </button>
          </div>
          <button type="button" title="Like post" class="flex items-center justify-center">
            <FaComment onClick={likeOne} class='h-3 w-3'/>
            </button>
          <button type="button" title="Like post" class="flex items-center justify-center">
            <FaEdit onClick={likeOne} class='h-3 w-3'/>
            </button>
          <button type="button" title="Bookmark post" class="flex items-center justify-center">
          
          <FaTrash onClick={()=>handleDelete(_id)} class='h-3 w-3'/> 
          </button>
      
        </div>
        <Link to={`/dtl/${_id}`} type="button" class="inline-block px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg ">Show all</Link>
        </div>
        <div class="flex flex-wrap items-center pt-3 pb-1" >
          <div class="flex items-center space-x-2">
            <span class="text-sm"> Liked by 
              <span class="font-semibold mx-1">{CoutLike?.length}</span> and 
              <span class="font-semibold mx-1">{comment?.length} comments</span>
            </span>
          </div>
        </div>
        <span class='text-lg '>{message}</span>
        <form  onSubmit={handleSubmit(onSubmit)}>
        <div className='lg:flex gap-2 justify-between'>
        <input type="text" placeholder="Add a comment..." {...register("comment")} className="input input-bordered   mt-2 w-full py-0.5 bg-gray-100 border-gray-100 rounded text-sm pl-0 text-gray-200-100" />
        <input className='cursor-pointer mt-2 text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' type='submit' value='Comment'/>
        </div>
        
        </form>
       
      </div>
    </div>
 
</div>
</div>
</div>
             
            
        </div>
    );
};

export default PostCard;