import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import NotePreview from "./NotePreview";
import { NoteT } from "../public/ContextProvider";

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
        className="group bg-secondary-regular rounded-lg p-5 shadow-md hover:bg-secondary-hover hover:cursor-pointer"
      >
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden max-h-40 rounded-lg  xl:aspect-w-7 xl:aspect-h-8">
          <p className="mt-1 text-lg font-medium text-gray-900">{note.title}</p>
          <ReactMarkdown children={note.text} disallowedElements={forbid} />
        </div>
      </div>
    </>
  );
}

export default NoteCard;
