import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right'className='h-full w-2/3 p-6 flex  gap-10 flex-nowrap overflow-x-auto rounded-4xl '>
        {props.users.map(function(elem,idx){
           
           return <RightCard key={idx} color={elem.color} id={idx} img={elem.img}  tag={elem.tag}/>
        })}
        
  

    </div>
  )
}

export default RightContent