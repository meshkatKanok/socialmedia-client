import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';

const AboutCard = () => {
    const [data,setData]=useState()
    useEffect(()=>{
        fetch(' https://y-iota-self.vercel.app/registerData').then(
            (res) => res.json()
          )
          .then(data=>setData(data))
    },[data[0]])
      console.log(data[0]);
      const fetchData=data[0]
      const {
        email,
        
        fristName,
       
        lastName,
        
        
        postpic,
       
        university
        }=fetchData
        if(!data[0]){
            return <div>Loading...........</div>
        }
        
    return (
        <div>
            <article className="max-w-2xl mt-5 px-6 py-24 mx-auto space-y-12 bg-gray-100 ">
	 
	<div className="mt-5 ">
		<p>WelCome To My About</p>
	</div>
	<div className="pt-12 border-t dark:border-gray-700">
		<div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
			<img src="https://source.unsplash.com/75x75/?portrait" alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" />
			<div className="flex flex-col">
				<h4 className="text-lg font-semibold"> Full Name :{ fristName}{lastName}</h4>
				<p className="dark:text-gray-400">Email :{email}</p>
				<p className="dark:text-gray-400">University NAme :{university}</p>
			</div>
		</div>
		 
	</div>
</article>
            
        </div>
    );
};

export default AboutCard;