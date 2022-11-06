import React, { useContext, useState } from 'react'
import NotePreview from './NotePreview';


const mode = true;
function Note({callback}:{callback:any}) {

  return (
    <>
      <NotePreview callback={callback}/>
    </>
  )
}

export default Note