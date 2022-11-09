import React, { useContext } from "react";
import NoteCard from "./NoteCard";

import { NoteContext, NoteT } from "../public/ContextProvider";

function NoteDisplay() {
  const { ctNotes } = useContext(NoteContext);
  return (
    <div className="mx-auto max-w-2xl py-10 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-5 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {ctNotes &&
          ctNotes.map(
            (note: NoteT) =>
              note.id !== 0 && <NoteCard key={note.id} note={note} />
          )}
      </div>
    </div>
  );
}

export default NoteDisplay;
