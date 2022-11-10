import React from 'react'
import * as tw from '../../public/themes'


const TextArea = ({name,text,handleChange}:{name:string,text:string,handleChange:(e:React.ChangeEvent<HTMLTextAreaElement>)=>void}) => {
  return (
    <textarea
      name={name}
      onChange={(e) => handleChange(e)}
      placeholder={text}
      rows={60}
      defaultValue={text}
      className={tw.noteFormInput}
    />
  )
}

export default TextArea