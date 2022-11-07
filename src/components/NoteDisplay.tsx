import React, { useContext, useEffect, useState } from "react";
import { Note, NotesContext } from "../App";
import NoteCard from "./NoteCard";

/*let notes = [
  {
    id: 1,
    title: "Morning Groceries",
    text: "I need to pick up some *tomatoes* and eggs for breakfast.",
    lable: "groceries",
  },
  {
    id: 2,
    title: "<h3>Test</h3>",
    text: "> I need\n to pick up some tomatoes and eggs for breakfast.",
    lable: "groceries",
  },
  {
    id: 3,
    title: "Morning Groceries",
    text: "I **need** to pick up some tomatoes and eggs for breakfast.",
    lable: "groceries",
  },
  {
    id: 4,
    title: "Morning Groceries",
    text: "([`remark-toc`](https://github.com/remarkjs/remark-toc)). I need to pick up some tomatoes and eggs for breakfast.",
    lable: "groceries",
  },
  // More products...
];
*/

function NoteDisplay() {
  const context = useContext(NotesContext);
  return (
    <div className="mx-auto max-w-2xl py-10 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-5 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {context!.map((note: Note) =>
          note.id != 0 ? (
            <NoteCard key={note.id} note={note} />
          ) : (
            <p key={0}>Your board is empty </p>
          )
        )}
      </div>
    </div>
  );
}

export default NoteDisplay;
