import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDeatil = () => {
    const params= useParams()
  return (
    <div>
        <h1>{params.id} Course detail page</h1>
    </div>
  )
}

export default CourseDeatil