import React from 'react'

const App = () => {

  const [num, setnum] = useState(10)

  
  return (
    <div>
      <h1>{num}</h1>
      <button>Click</button>
    </div>
  )
}

export default App