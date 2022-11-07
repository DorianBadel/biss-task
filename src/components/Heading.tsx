import React, { useState } from 'react'
import Button, { ButtonType } from './Button'
import Note, { NoteType } from './Note'

function Heading() {
  const [openNote,setOpenNote] = useState(false);

  function handleConfirm(){
    setOpenNote(false);
  }
  
  return (
    <div className="group shadow px-5 py-3 flex justify-between">
        {openNote && 
          <Note type={NoteType.editable} 
                actionOnCancel={setOpenNote} 
                actionOnConfirm={handleConfirm}
          />
        }

        <span className="text-gray-700 text-lg font-bold"> Notes app </span>
        <Button 
          callback={()=>setOpenNote(true)} 
          type={ButtonType.border} 
          text="Add note"
        />
    </div>
  )
}

export default Heading