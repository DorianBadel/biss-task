import React from 'react'
import Button, { ButtonType } from './Button'


function Alert({
  positiveClick,
  negativeClick,
  message,
  positiveOption,
  negativeOption
}:{
  positiveClick:React.Dispatch<React.SetStateAction<boolean>>,
  negativeClick:React.Dispatch<React.SetStateAction<boolean>>,
  message:string,
  positiveOption:string,
  negativeOption:string
}) {
  return (
    <div className="bg-zinc-200 bg-opacity-70 fixed inset-0 z-50   ">
      
      <div className="flex pt-20 h-screen justify-center items-center">
       <div className="flex-col justify-center min-w- bg-white py-10 px-12 rounded-md ">
          <div className="text-zinc-600 mb-10 text-lg font-bold" >{message}</div>
          <div className="flex float-right gap-3">
            <Button callback={()=>negativeClick(false)}type={ButtonType.border} text={negativeOption}/>
            <Button callback={()=>positiveClick(false)} type={ButtonType.regular} text={positiveOption}/>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Alert