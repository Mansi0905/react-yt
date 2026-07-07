import React, { useEffect, useState } from 'react'

const App = () => {
  // const [num, setNum] = useState(0)
  // const [num2, setNum2] = useState(100)

  // useEffect(function(){ 
  //   console.log('use effect is running...');             //! useEffect without []-> renders at every time, useEfect with [] renders on mount kyunki humne dependency ka array pass kr diya hai, useEffect ek bar chlega bss nd faltu ksisi state change pr nhi chelgea.
    
  // },[num])  //* component did mount bbut only once beacuse of array dependency 
  //    //? dependency array pass krna jruri hai vrna ye useEffect ka galat use hai.
  
  // return (
  //   <div>
  //     <h1> value of num is this{num}</h1>
  //     <h1>value of num2 is this {num2} </h1>
  //     <button onMouseEnter={()=>{
  //       setNum(num+1)
        
  //     }}
  //     onMouseLeave={()=>{
  //       setNum2(num2+100)  
  //     }}
  //     >
  //       Click
  //       </button>

  //   </div>
  // )
  const [a, setA] = useState(0)
  const [b, setB] = useState(10)

  function aChanging(){
  console.log("a ki value change hogyi");
  
  }

  function bChanging(){
   console.log("b ki value change hogyai");
   
  }
  useEffect(function(){
    console.log('use effect is running...');
    
  },[a,b])  //* component did mount bbut only once beacuse of array dependency

  return(
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button
      onClick={()=>{
        setA(a+1)
        
      }}>
        Change A 
        </button>

        <button
        onClick={()=>{
          setB(b-1)
        }}>
        Change B
        </button>

    </div>
  )
}

export default App