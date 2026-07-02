import React, { useState } from 'react'
import axios from 'axios'

const  App = () => {
  //! fetch ki help se Api calling 
  // async function getdata(){
  //   const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  //   console.log(response);
  //   const data=await response.json()
  //   console.log(data);
     
  // }

  //! Axios ki  help se Api calling


  const [data, setData] = useState([])
  const getdata= async () =>{

  //  const response= axios.get('https://jsonplaceholder.typicode.com/posts')
  //  console.log(response);




 const response= await axios.get('https://picsum.photos/v2/list')
    setData(response.data)
  }

  return (
    <div> 
      <button onClick={getdata}>Clcik</button>
      <div>
        {data.map(function(elem,idx){
          return <h3 >Hello,{elem.author}{idx}</h3>
        })}
      </div>
      
    </div>
  )
}
export default  App