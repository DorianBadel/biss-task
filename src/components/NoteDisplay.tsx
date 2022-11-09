import React, { useContext } from "react";
import { Note, NotesContext } from "../App";
import NoteCard from "./NoteCard";

function NoteDisplay() {
  const [context] = useContext(NotesContext);
  return (
    <div className="mx-auto max-w-2xl py-10 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-5 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {context!.map(
          (note: Note) =>
            note.id !== 0 && <NoteCard key={note.id} note={note} />
        )}
      </div>
    </div>
  );
}

export default NoteDisplay;
