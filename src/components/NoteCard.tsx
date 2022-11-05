import React from 'react'

function NoteCard(
  {
    ID,
    title,
    text
  }:{ID:number,title:string,text:string}
) {
  return (
    <a key={ID} className="group bg-secondary-regular rounded-lg p-5 shadow-md hover:bg-secondary-hover hover:cursor-pointer">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg  xl:aspect-w-7 xl:aspect-h-8">
        <p className="mt-1 text-lg font-medium text-gray-900">{title}</p>
        <p className="mt-4 text-sm text-gray-700">{text}</p>
      </div>
    </a>
  )
}

export default NoteCard