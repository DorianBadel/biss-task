import React from 'react'

export enum ButtonType {
  regular,
  border
}

function Button(
  {
    type,
    text,
    callback
  }:{
    type:ButtonType,
    text:string,
    callback:()=>void
  }
) {
  return (
    type === ButtonType.regular ?
      <button onClick={callback} className="bg-primary hover:bg-secondary-regular text-white px-3 py-1 text-md font-medium rounded-md shadow"> {text} </button>
      :
      <button onClick={callback} className="border border-primary hover:border-secondary-regular hover:text-secondary-regular text-primary px-3 py-1 text-md font-medium rounded-md shadow"> {text}</button>
  )
}

export default Button