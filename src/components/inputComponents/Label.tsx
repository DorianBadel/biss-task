import React from 'react'
import * as tw from "../../public/themes"


function Label({children,name}:{children:string,name:string}) {
  return (
    <label htmlFor={name}
      className=  {tw.noteLgText}>
      {children}
    </label>
  )
}

export default Label