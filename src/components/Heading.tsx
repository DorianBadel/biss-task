import React from 'react'
import Button, { ButtonType } from './Button'

function Heading() {
  return (
    <div className="group shadow px-5 py-3 flex justify-between">
        <span className="text-gray-700 text-lg font-bold"> Notes app </span>
        <Button callback={()=>{}} type={ButtonType.border} text="Add note"/>
    </div>
  )
}

export default Heading