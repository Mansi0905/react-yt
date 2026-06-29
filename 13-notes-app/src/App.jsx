import React from 'react'
import { useState } from 'react';

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])


const submitHandler =(e) =>
{
  e.preventDefault();
  
  const copyTask=[...task];

  copyTask.push({title,details})
  setTask(copyTask)
  
  

  setTitle('');
  setDetails('')
}



  return (
    <div className='h-screen lg:flex  bg-black text-white p-10'>

    <form onSubmit={(e)=>{
      submitHandler(e)
    }} className='flex gap-4 lg:w-1/2 p-10  flex-col  items-start   ' >
      <h1 className='text-5xl font-bold '>Add Notes</h1>
    

{/* PEHELA INPUT FOR HEADING */}
     
       <input 
      type="text" 
      placeholder='Enter Notes Heading' 
      className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
      value={title}
      onChange={(e)=>{
setTitle(e.target.value);

      }}
      />
      {/* DETAILED VLA INPUT */}
      <textarea
       type="text"
       className='px-5 w-full  h-32 py-2  flex items-start flex-row font-medium outline-none border-2 rounded'
       placeholder='Enter Details here'
       value={details}
       onChange={(e)=>{
        setDetails(e.target.value)

       }}
        />

        <button className='bg-white active:bg-gray-400 w-full outline-n text-black font-medium px-5 py-2 rounded'>Add Notes </button>
    
    </form>

    <div className=' lg:w-1/2 lg:border-l-2   p-10  '>

      <h1 className='text-3xl font-bold '>Recent Notes</h1>

     <div className='flex h-full items-start justify-start overflow-auto  mt-5 gap-5 flex-wrap'>

       {task.map(function(elem,idx){
        return <div key={idx} className='h-52 w-40 rounded-xl text-black p-4  bg-white'><h3 className='text-xl leading-tight font-bold' >{elem.title}</h3>
        <p className='mt-2 leading-tight  font-medium text-gray-700'>{elem.details}</p>
        </div>
       })}
     
     </div>

      
       
    </div>



    </div>
  )
}

export default App