import React, { useState } from 'react'
import Alert from './Alert';
import Note, {NoteType} from './Note';

function NotePreview({callback}:{callback:React.Dispatch<React.SetStateAction<boolean>>}) {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isEditAlertOpen, setIsEditAlertOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  function onDeleteNote(){
    setIsAlertOpen(false);
    callback(false);
  }

  function onDiscardChanges(){
    setIsEditAlertOpen(false);
    setIsEditing(false);
  }

  function onConfirm(){
    setIsEditing(false);
  }

  return (
    <>
    {
    isEditing ? 
      <Note type={NoteType.editable} actionOnCancel={()=>setIsEditAlertOpen(true)} actionOnConfirm={onConfirm}/> :
      <Note type={NoteType.preview} actionOnCancel={callback} actionOnConfirm={()=>setIsEditing(true)} actionOnDelete={()=>setIsAlertOpen(true)}/>
    }
    
    {
    isAlertOpen && 
      <Alert
        positiveClick={onDeleteNote}
        negativeClick={()=>setIsAlertOpen(false)}
        message="Are you sure you want to delete this note?"
        positiveOption='Yes, delete'
        negativeOption='Cancel'             
       />
    }

    {
    isEditAlertOpen && 
      <Alert
        positiveClick={onDiscardChanges}
        negativeClick={()=>setIsEditAlertOpen(false)}
        message="Are you sure you want to discard your changes?"
        positiveOption='Yes, discard'
        negativeOption='Continue editing'          
      />
    }

    </>    
  )
}

export default NotePreview