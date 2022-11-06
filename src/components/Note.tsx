import React, { useContext, useState } from 'react'
import NoteEdit from './NoteEdit';
import NotePreview from './NotePreview';


const mode = true;
function Note({callback}:{callback:any}) {
  return (
    <>
      { mode ? <NotePreview callback={callback}/> : <NoteEdit/>}
    </>
  )
}

export default Note