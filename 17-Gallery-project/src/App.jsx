import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([]);

  const getData= async ()=>{
    const response= await axios.get(' https://picsum.photos/v2/list?page=3&limit=20')

    setUserData(response.data); 
    
  
  }

  let printUserData='no user available';
  if(userData.length > 0){
    printUserData=userData.map(function(elem,idx){
      return <div key={idx}>
        <a href={elem.url} target='_blank'>
          <div className='h-40 overflow-hidden w-44 rounded-xl bg-white'>
        <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
      </div>
      <h2 className='font-bold text-xl '>{elem.author}</h2>
     
        </a>
         </div>
    })
  }
  return (
    <div className='bg-black overflow-auto h-screen text-white'>

      

      <div className='flex flex-wrap gap-5'>
        {printUserData}

      </div>


    </div>
  )
}

export default App