import React, { useContext } from 'react'
import { LabelContext } from '../public/ContextProvider'
import * as tw from "../public/themes"

function LabelSelector({
  name,
  defaultText,
  handleChange
}:{name:string,defaultText:string,handleChange:(e:React.ChangeEvent<HTMLInputElement>)=>void}) {
  const {ctLabels} = useContext(LabelContext);
  return (
    <>
      <label htmlFor={name} className='inline mr-2 text-sm font-medium text-gray-900 dark:text-gray-400'>Label</label>
      <input list={name} defaultValue={defaultText} className={tw.noteFormInput} onChange={handleChange} />
      <datalist  id={name}  >
        <option value="Without label"></option>
        {ctLabels!.map((label:string, index)=>
          <option key={index} value={label}>{label}</option>
        )
        }
      </datalist>
    </>
  )
}

export default LabelSelector