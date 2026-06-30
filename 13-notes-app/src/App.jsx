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

const deleteNote=(idx)=>{
  const copyTask = [...task];

  copyTask.splice(idx,1)
  setTask(copyTask);
  
  

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

     <div className='flex h-[90%] items-start justify-start overflow-auto  mt-5 gap-5 flex-wrap'>

       {task.map(function(elem,idx){
        return <div key={idx} className=' flex justify-between items-start flex-col relative h-52 w-40 bg-cover rounded-xl text-black px-5 py-9  bg-[url("https://imgs.search.brave.com/vK1LL07CAx0Adj6xjuw4TwxCbiactFhjA-YOMvS01OY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzcv/MTUyLzY5NC9zbWFs/bC9zdGlja3ktbm90/ZS1wYXBlci1iYWNr/Z3JvdW5kLWZyZWUt/cG5nLnBuZw")]'>
         <div>
           <h3 className='text-xl leading-tight font-bold' >{elem.title}</h3>
        <p className='mt-2 leading-tight  font-xs text-gray-700'>{elem.details}</p>
       
         </div>
         <button onClick={()=>{
          deleteNote(idx)

         }} className='w-full cursor-pointer active:scale-95  py1 text-xs rounded font-bold bg-red-500 text-white'>Delete </button>
          </div>
       })}
     
     </div>

      
       
    </div>



    </div>
  )
}

export default App