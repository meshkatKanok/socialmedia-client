import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import PostCard from './PostCard';

const FetchCardp = ({success}) => {
    const [postData,setpostData]=useState()
    useEffect(()=>{
        fetch(` https://y-iota-self.vercel.app/postData`)
        .then(res=>res.json())
        .then(data=>setpostData(data))
    },[success])
    const handleDelete=(id)=>{
        fetch(` https://y-iota-self.vercel.app/postData/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged===true){
                const remaing=postData.filter(postData=>postData._id!==id)
                setpostData(remaing)
                toast.success("SuccessFully Deleted")
            }
        })
    }
    return (
        <div>
            {
                postData?.map(postData=><PostCard key={postData._id} postData={postData} handleDelete={handleDelete}></PostCard>)
            }
        </div>
    );
};

export default FetchCardp;