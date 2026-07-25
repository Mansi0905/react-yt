import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1)

  const getData= async ()=>{
    const response= await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)

    setUserData(response.data); 
     
  }
   
  useEffect(function(){
    getData();
    
    
  },[index])
  


  let printUserData=<h3 className='text-gray-400 text-xs'>No user available</h3>;
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

      <div className='flex flex-wrap p-2 gap-5'>
        {printUserData}

      </div>

        <div className='flex justify-center items-center gap-6 p-4 '>

          <button className='bg-amber-400 text-black rounded cursor-pointer active:scale-95 px-4 py-2 font-semibold'
          onClick={()=>{
            if(index > 1){
           setIndex(index-1)
           printUserData='Loading....'
           setUserData([])
            }
          }}
          >
            Prev
            </button>

          <button className='bg-amber-400 text-black rounded cursor-pointer active:scale-95 px-4 py-2 font-semibold'
          onClick={()=>{
            setUserData([])
          setIndex(index+1)
          printUserData='Loading....'
          }}
          >
            Next
            </button>
        </div>
    </div>
  )
}

export default App