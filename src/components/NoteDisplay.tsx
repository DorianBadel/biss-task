import React, { useContext } from "react";
import NoteCard from "./NoteCard";

import { NoteContext, NoteT } from "../public/ContextProvider";
import * as tw from "../public/themes";

function NoteDisplay() {
  const { ctNotes } = useContext(NoteContext);
  return (
    <div className={tw.noteGridContainer}>
      <div className={tw.noteGrid}>
        {ctNotes &&
          ctNotes.map(
            (note: NoteT) =>
              <NoteCard key={note.id} note={note} />
          )}
      </div>
    </div>
  );
}

export default NoteDisplay;
