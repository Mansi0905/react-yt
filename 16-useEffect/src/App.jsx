import React, { useEffect, useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)

  useEffect(function(){ 
    console.log('use effect is running...');             //! useEffect without []-> renders at every time, useEfect with [] renders on mount kyunki humne dependency ka array pass kr diya hai, useEffect ek bar chlega bss nd faltu ksisi state change pr nhi chelgea.
    
  },[])  //component did mount bbut only once beacuse of array dependency 
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={()=>{
        setNum(num+1)
      }}>Click</button>

    </div>
  )
}

export default App