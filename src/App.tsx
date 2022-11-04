import React from 'react';

const notes = [
  {
    id: 1,
    name: 'Morning Groceries',
    text: 'I need to pick up some tomatoes and eggs for breakfast.',
    lable: 'groceries'
  },
  {
    id: 2,
    name: 'Morning Groceries',
    text: 'I need to pick up some tomatoes and eggs for breakfast.',
    lable: 'groceries'  },
  {
    id: 3,
    name: 'Morning Groceries',
    text: 'I need to pick up some tomatoes and eggs for breakfast.',
    lable: 'groceries'  },
  {
    id: 4,
    name: 'Morning Groceries',
    text: 'I need to pick up some tomatoes and eggs for breakfast.',
    lable: 'groceries'
  },
  // More products...
]

function App() {
  return (
    <div className="App">
      <div className="bg-white">
      <div className="group shadow px-5 py-3 flex justify-between">
        <p className="text-gray-700 text-lg font-bold"> Notes app </p>
        <button className="bg-primary hover:bg-secondary-regular text-white px-3 py-1 text-md font-medium rounded-md shadow"> Add Note </button>

      </div>
      <div className="mx-auto max-w-2xl py-10 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">

        <div className="grid grid-cols-1 gap-y-5 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {notes.map((note) => (
            <a key={note.id} className="group bg-secondary-regular rounded-lg p-5 shadow-md hover:bg-secondary-hover hover:cursor-pointer">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg  xl:aspect-w-7 xl:aspect-h-8">
                <p className="mt-1 text-lg font-medium text-gray-900">{note.name}</p>
                <p className="mt-4 text-sm text-gray-700">{note.text}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
