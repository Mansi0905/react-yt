import React from 'react'
import { ArrowRight } from 'lucide-react'


const RightcardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
<h2 className='bg-white rounded-full h-12 w-12 flex items-center justify-center text-xl font-semibold'>{props.id+1}</h2>
<div>
  <p className=' text-shadow-2xs text-lg leading-relaxed mb-14 text-white '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, sint. Aliquam adipisci commodi minus architecto?</p>
<div className='flex justify-between'>
    <button style={{backgroundColor: props.color}} className=' text-white font-medium px-8 py-2 rounded-full '>{props.tag}</button>
    <button className=' text-white font-medium px-4 py-4  rounded-full'> <ArrowRight/></button>
</div>


</div>

  </div>
  )
}

export default RightcardContent