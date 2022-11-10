import React, { useContext, useState } from "react";
import Alert from "./Alert";
import Note, { NoteType } from "./Note";
import { NoteT, NoteContext } from "../public/ContextProvider";

enum alert{
  none,
  deleteAlert,
  discardAlert
}
function NotePreview({
  callback,
  thisNote,
}: {
  callback:()=>void;
  thisNote: NoteT;
}) {
  const [openAlert, setOpenAlert] = useState(alert.none);
  const [isEditing, setIsEditing] = useState(false);
  const { ctNotes, setCtNotes } = useContext(NoteContext);

  //ctNotes will always exist if the user gets to this component
  function onDeleteNote() {
    setCtNotes(
      ctNotes!.filter((note: NoteT) => {
        return note.id !== thisNote.id;
      })
    );
    callback();

    setOpenAlert(alert.none);
  }

  function onDiscardChanges() {
    setOpenAlert(alert.none);
    setIsEditing(false);
  }

  function findIndexInArray() {
    const noteInArray = ctNotes!.find((obj: NoteT) => obj.id === thisNote.id);

    return ctNotes!.indexOf(noteInArray!);
  }

  function onConfirm(val: NoteT) {
    const indexInArray = findIndexInArray();
    val.id = thisNote.id;
    const tempState = ctNotes!.slice();
    tempState.splice(indexInArray, 1, val);
    setCtNotes(tempState);

    setIsEditing(false);
  }

  return (
    <>
      {isEditing ? (
        <Note
          type={NoteType.editable}
          actionOnCancel={()=>setOpenAlert(alert.discardAlert)}
          actionOnConfirm={onConfirm}
          noteInfo={thisNote}
        />
      ) : (
        <Note
          type={NoteType.preview}
          actionOnCancel={callback}
          actionOnConfirm={() => setIsEditing(true)}
          actionOnDelete={() => setOpenAlert(alert.deleteAlert)}
          noteInfo={thisNote}
        />
      )}

      {openAlert == alert.deleteAlert && (
        <Alert
          positiveClick={onDeleteNote}
          negativeClick={() => setOpenAlert(alert.none)}
          message="Are you sure you want to delete this note?"
          positiveOption="Yes, delete"
          negativeOption="Cancel"
        />
      )}

      {openAlert == alert.discardAlert && (
        <Alert
          positiveClick={onDiscardChanges}
          negativeClick={() => setOpenAlert(alert.none)}
          message="Are you sure you want to discard your changes?"
          positiveOption="Yes, discard"
          negativeOption="Continue editing"
        />
      )}
    </>
  );
}

export default NotePreview;
