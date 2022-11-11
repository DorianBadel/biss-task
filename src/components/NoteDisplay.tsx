import React, { useContext } from "react";
import NoteCard from "./NoteCard";

import { LabelContext, NoteContext, NoteT } from "../public/ContextProvider";
import * as tw from "../public/themes";
import CategoryLabel from "./CategoryLabel";

function NoteDisplay() {
  const { ctNotes } = useContext(NoteContext);
  const { ctLabels } = useContext(LabelContext);

  function getLabels() {
    let labels: string[] = [];
    ctNotes?.forEach((note: NoteT) => {
      if (note.label) if (!labels.includes(note.label)) labels.push(note.label);
    });
    console.log(labels);
  }

  if (!ctNotes || ctNotes.length === 0) {
    return (
      <div className="flex inset-0 justify-center items-center h-72 overflow-hidden">
        <h3 className={tw.noteLgText + " opacity-60 select-none"}>
          You seem to have no notes, add one on the top right !
        </h3>
      </div>
    );
  }
  return (
    <div className={tw.noteGridContainer}>
      <div className={tw.noteGrid}>
        {ctNotes &&
          ctNotes
            .filter((note: NoteT) => !note.label)
            .map((note: NoteT) => <NoteCard key={note.id} note={note} />)}
      </div>
      {ctNotes &&
        ctLabels &&
        ctLabels.map((label: string, index) => {
          return (
            <div key={index}>
              <CategoryLabel title={label} />

              <div className={tw.noteGrid}>
                {ctNotes
                  .filter((note: NoteT) => note.label === label)
                  .map((note: NoteT) => {
                    return <NoteCard key={note.id} note={note} />;
                  })}
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default NoteDisplay;
