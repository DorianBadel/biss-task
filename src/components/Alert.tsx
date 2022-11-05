import React from 'react'
import Button, { ButtonType } from './Button'

function Alert() {
  return (
    <div className="bg-zinc-200 bg-opacity-70 fixed inset-0 z-50   ">
      
      <div className="flex pt-20 h-screen justify-center items-center">
       <div className="flex-col justify-center min-w- bg-white py-10 px-12 rounded-md ">
          <div className="text-zinc-600 mb-10 text-lg font-bold" >Are you sure you want to delete the note ?</div>
          <div className="flex float-right gap-3">
            <Button type={ButtonType.border} text="Cancel"/>
            <Button type={ButtonType.regular} text="Yes, delete"/>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Alert