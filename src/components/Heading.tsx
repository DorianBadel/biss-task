import React, { useContext, useState } from "react";
import Button, { ButtonType } from "./Button";
import Note, { NoteType } from "./Note";
import { NoteT, NoteContext } from "../public/ContextProvider";

function Heading() {
  const [openNote, setOpenNote] = useState(false);
  const { ctNotes, setCtNotes } = useContext(NoteContext);

  function findFirstEmptyIndex() {
    let emptyId = 0;

    if (ctNotes)
      while (ctNotes.find((obj: NoteT) => obj.id === emptyId)) {
        emptyId++;
    }

    return emptyId;
  }

  function onConfirm(value: NoteT) {
    value.id = findFirstEmptyIndex();

    if (ctNotes && setCtNotes) setCtNotes(ctNotes.concat(value));

    setOpenNote(false);
  }

  function onCancel(){
    setOpenNote(false)
  }

  return (
    <div className="group shadow px-5 py-3 flex justify-between">
      {openNote && (
        <Note
          type={NoteType.editable}
          actionOnCancel={onCancel}
          actionOnConfirm={onConfirm}
        />
      )}

      <span className="text-gray-700 text-lg font-bold"> Notes app </span>
      <Button
        callback={() => setOpenNote(true)}
        type={ButtonType.border}
        text="Add note"
      />
    </div>
  );
}

export default Heading;
