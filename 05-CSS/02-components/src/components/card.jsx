import React from 'react'

const Card = (props) => {



  return (
    <div className="card">
        <img src="https://images.unsplash.com/photo-1740208376394-a1c01da73e21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhhbmFrb3xlbnwwfHwwfHx8MA%3D%3D" alt="hi" />
       <h1>{props.user}, {props.age}</h1>
       <p>lorem ipsum dolor sit amet</p>
       <button>View Profile</button>
    
    </div>
  )
}

export default Card