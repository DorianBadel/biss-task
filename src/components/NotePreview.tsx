import React, { useContext, useState } from "react";
import { Note as NoteT, NotesContext } from "../App";
import Alert from "./Alert";
import Note, { NoteType } from "./Note";

function NotePreview({
  callback,
  thisNote,
}: {
  callback: React.Dispatch<React.SetStateAction<boolean>>;
  thisNote: NoteT;
}) {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isEditAlertOpen, setIsEditAlertOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [cont, setCont] = useContext(NotesContext);

  function onDeleteNote() {
    setCont(
      cont.filter((note: NoteT) => {
        return note.id !== thisNote.id;
      })
    );
    setIsAlertOpen(false);
    callback(false);
  }

  function onDiscardChanges() {
    setIsEditAlertOpen(false);
    setIsEditing(false);
  }

  function findInArray() {
    return cont.indexOf(cont.find((obj: NoteT) => obj.id === thisNote.id));
  }

  function onConfirm(val: NoteT) {
    const indexInArray = findInArray();
    val.id = thisNote.id;
    const fruits = cont.slice();
    fruits.splice(indexInArray, 1, val);
    setCont(fruits);

    // setCont(
    //   cont.filter((note: NoteT) => {
    //     if(note.id === thisNote.id) note = val
    //     return true;
    //   })
    // );

    // setCont(
    //   cont
    //     .filter((note: NoteT) => {
    //       return note.id !== thisNote.id;
    //     })
    //     .concat(val)
    // );

    setIsEditing(false);
  }

  return (
    <>
      {isEditing ? (
        <Note
          type={NoteType.editable}
          actionOnCancel={() => setIsEditAlertOpen(true)}
          actionOnConfirm={onConfirm}
          noteInfo={thisNote}
        />
      ) : (
        <Note
          type={NoteType.preview}
          actionOnCancel={callback}
          actionOnConfirm={() => setIsEditing(true)}
          actionOnDelete={() => setIsAlertOpen(true)}
          noteInfo={thisNote}
        />
      )}

      {isAlertOpen && (
        <Alert
          positiveClick={onDeleteNote}
          negativeClick={() => setIsAlertOpen(false)}
          message="Are you sure you want to delete this note?"
          positiveOption="Yes, delete"
          negativeOption="Cancel"
        />
      )}

      {isEditAlertOpen && (
        <Alert
          positiveClick={onDiscardChanges}
          negativeClick={() => setIsEditAlertOpen(false)}
          message="Are you sure you want to discard your changes?"
          positiveOption="Yes, discard"
          negativeOption="Continue editing"
        />
      )}
    </>
  );
}

export default NotePreview;
