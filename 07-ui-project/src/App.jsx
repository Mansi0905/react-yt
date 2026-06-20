import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users=[
    {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww', 
      color:'pink',
      intro:'',
      tag:'Satisfied'
    },
    {
       img:'https://images.unsplash.com/photo-1683979856913-748489a42402?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGFuaW1lJTIwd29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D', 
       color:'lightseagreen',
      intro:'',
      tag:'Underserved'
    },
    {
       img:'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D', 
      color:'lightcoral',
      intro:'',
      tag:'Underbanked'
    },
    {
       img:'https://images.unsplash.com/flagged/photo-1575227057258-50cb9bffb1af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D', 
      color:'lightblue',
      intro:'',
      tag:'Underworld'
    },
    {
      img:'https://images.unsplash.com/photo-1738598647406-00865a07bc5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGNvbXB1dGVyJTIwZW5naW5uZXJ8ZW58MHx8MHx8fDA%3D',
      color:'black',
      intro:'',
      tag:'chocobanana'
    }
  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App