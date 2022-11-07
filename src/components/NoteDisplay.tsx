import React, { useEffect, useState } from "react";
import NoteCard from "./NoteCard";

let notes = [
  {
    id: 1,
    title: "Morning Groceries",
    text: "I need to pick up some *tomatoes* and eggs for breakfast.",
    lable: "groceries",
  },
  /*{
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
  },*/
  // More products...
];

export type Note = {
  id: number;
  title: string;
  text: string;
  lable?: string;
};

function NoteDisplay() {
  return (
    <div className="mx-auto max-w-2xl py-10 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-5 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {notes.map((note) => (
          <NoteCard note={note} />
        ))}
      </div>
    </div>
  );
}

export default NoteDisplay;
