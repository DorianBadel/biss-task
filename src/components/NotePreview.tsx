import React, { useContext, useState } from "react";
import Alert from "./Alert";
import Note, { NoteType } from "./Note";
import { NoteT, NoteContext } from "../public/ContextProvider";

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
  const { ctNotes, setCtNotes } = useContext(NoteContext);

  //ctNotes will always exist if the user gets to this component
  function onDeleteNote() {
    setCtNotes(
      ctNotes!.filter((note: NoteT) => {
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

  function findIndexInArray() {
    const noteInArray = ctNotes!.find((obj: NoteT) => obj.id === thisNote.id);

    return ctNotes!.indexOf(noteInArray!);
  }

  function onConfirm(val: NoteT) {
    const indexInArray = findIndexInArray();
    val.id = thisNote.id;
    const fruits = ctNotes!.slice();
    fruits.splice(indexInArray, 1, val);
    setCtNotes(fruits);

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
