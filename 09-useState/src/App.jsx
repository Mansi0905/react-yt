import React, {useState} from 'react'

const App = () => {

  const [num, setnum] = useState(0)


function increasenum(){
  console.log("increasing",{num});
  
  setnum(num+1)
}
function decreasenum(){
  console.log("decreseing",{num});
  
  setnum(num-1)
}

function jump(){
  console.log("increasing by 5" ,{num});
  setnum(num+5)
  
}

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increasenum}>Increase</button>
      <button onClick={decreasenum}>Decrease</button>
      <button onClick={jump}>Jump by 5</button>
    </div>
  )
}

export default App