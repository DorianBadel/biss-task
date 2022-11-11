import React, { useContext, useState } from "react";
import Alert from "./Alert";
import Note, { NoteType } from "./Note";
import { NoteT, NoteContext, LabelContext } from "../public/ContextProvider";

enum alert {
  none,
  deleteAlert,
  discardAlert,
}
function NotePreview({
  callback,
  thisNote,
}: {
  callback: () => void;
  thisNote: NoteT;
}) {
  const [openAlert, setOpenAlert] = useState(alert.none);
  const [isEditing, setIsEditing] = useState(false);
  const { ctNotes, setCtNotes } = useContext(NoteContext);
  const { ctLabels, setCtLabels } = useContext(LabelContext);

  //ctNotes will always exist if the user gets to this component
  //Add the label to the context if it isn't already there
  function addLabelToContext(label: string) {
    if (label == "") return undefined;
    else if (!ctLabels!.includes(label)) {
      setCtLabels(ctLabels!.concat(label));
    }
    return label;
  }

  function deleteExcessLabels(checkIfLast?: boolean) {
    if (checkIfLast === undefined) checkIfLast = true;

    if (thisNote.label)
      if (checkIfLast)
        if (
          !ctNotes!.some(
            (obj) => obj.label === thisNote.label && obj.id !== thisNote.id
          )
        ) {
          setCtLabels(
            ctLabels!.filter((label: string) => {
              return label !== thisNote.label;
            })
          );
        } else {
          if (!ctNotes!.some((obj) => obj.label === thisNote.label)) {
            setCtLabels(
              ctLabels!.filter((label: string) => {
                return label !== thisNote.label;
              })
            );
          }
        }
  }

  function findIndexInArray() {
    const noteInArray = ctNotes!.find((obj: NoteT) => obj.id === thisNote.id);

    return ctNotes!.indexOf(noteInArray!);
  }

  function onDeleteNote() {
    setCtNotes(
      ctNotes!.filter((note: NoteT) => {
        return note.id !== thisNote.id;
      })
    );

    //Deleting the label if there are no more notes with that label
    deleteExcessLabels();
    callback();

    setOpenAlert(alert.none);
  }

  function onDiscardChanges() {
    thisNote = ctNotes![thisNote.id];
    setOpenAlert(alert.none);
    setIsEditing(false);
  }

  function onSaveChanges(val: NoteT) {
    //Replace the value in notes
    const indexInArray = findIndexInArray();
    val.id = thisNote.id;
    const tempState = ctNotes!.slice();

    if (val.label && val.label !== thisNote.label)
      val.label = addLabelToContext(val.label);

    deleteExcessLabels(false);

    tempState.splice(indexInArray, 1, val);
    setCtNotes(tempState);

    setIsEditing(false);
  }

  return (
    <>
      {isEditing ? (
        <Note
          type={NoteType.editable}
          actionOnCancel={() => setOpenAlert(alert.discardAlert)}
          actionOnConfirm={onSaveChanges}
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
