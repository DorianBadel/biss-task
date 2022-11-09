import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import NotePreview from "./NotePreview";
import { NoteT } from "../public/ContextProvider";
import * as tw from "../public/themes";

const forbid = ["link"];
function NoteCard({ note }: { note: NoteT }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen && (
        <NotePreview thisNote={note} callback={() => setIsOpen(false)} />
      )}
      <div
        key={note.id}
        onClick={() => setIsOpen(true)}
        className={tw.noteCardContainer}
      >
        <div className={tw.noteCard}>
          <p className={tw.noteXlText + " mb-2"}>{note.title}</p>
          <ReactMarkdown
            className={tw.noteMdText}
            children={note.text}
            disallowedElements={forbid}
          />
        </div>
      </div>
    </>
  );
}

export default NoteCard;
