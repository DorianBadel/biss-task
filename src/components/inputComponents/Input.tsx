import React from 'react'
import * as tw from "../../public/themes"

function Input({text,name,handleChange}:{text:string,name:string,handleChange:(e:React.ChangeEvent<HTMLInputElement>)=>void}) {
  return (
    <input
      type="text"
      placeholder={text}
      name={name}
      onChange={handleChange}
      defaultValue={text}
      className={tw.noteFormInput + " mb-5"}
    />
  )
}

export default Input