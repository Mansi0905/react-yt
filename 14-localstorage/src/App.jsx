import React from 'react'

const App = () => {

const user = {
  username:'mansi',
  age:90,
  city:'jaipur'

} 
localStorage.setItem('user',JSON.stringify(user))  //string ke form me convert kr deta hai object ko taki local stroage me value ke andr hume humara object string me dikhe
  JSON.parse(localStorage.getItem('user'))   // parse se hume console ke upr vpis se humara jo strngifed value thi object ke form me mil jaygi
  console.log(user);
  
  return (
    <div>
  

    </div>
  )
}

export default App