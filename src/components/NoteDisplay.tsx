import React from 'react'
import NoteCard from './NoteCard';

const notes = [
  {
    id: 1,
    title: 'Morning Groceries',
    text: 'I need to pick up some tomatoes and eggs for breakfast.',
    lable: 'groceries'
  },
  {
    id: 2,
    title: 'Morning Groceries',
    text: 'I need to pick up some tomatoes and eggs for breakfast.',
    lable: 'groceries'  },
  {
    id: 3,
    title: 'Morning Groceries',
    text: 'I need to pick up some tomatoes and eggs for breakfast.',
    lable: 'groceries'  },
  {
    id: 4,
    title: 'Morning Groceries',
    text: 'I need to pick up some tomatoes and eggs for breakfast.',
    lable: 'groceries'
  },
  // More products...
]

function NoteDisplay() {
  return (
    <div className="mx-auto max-w-2xl py-10 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">

        <div className="grid grid-cols-1 gap-y-5 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {notes.map((note) => (
            <NoteCard ID={note.id} title={note.title} text={note.text} />
          ))}
        </div>
      </div>
  )
}

export default NoteDisplay