import React, { useContext, useState } from "react";
import { Note as NoteT, NotesContext } from "../App";
import Button, { ButtonType } from "./Button";
import Note, { NoteType } from "./Note";

function Heading() {
  const [openNote, setOpenNote] = useState(false);
  const [state, setState] = useContext(NotesContext);

  function handleConfirm(value: NoteT) {
    value.id = state.length + 1;
    setState(state.concat(value));
    setOpenNote(false);
  }

  return (
    <div className="group shadow px-5 py-3 flex justify-between">
      {openNote && (
        <Note
          type={NoteType.editable}
          actionOnCancel={setOpenNote}
          actionOnConfirm={handleConfirm}
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
