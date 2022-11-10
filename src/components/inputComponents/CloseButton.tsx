import React from 'react'
import * as tw from "../../public/themes"

function CloseButton({action}:{action:()=>void}) {
  return (
    <div className="text-primary" onClick={action}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={tw.noteIcon}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      </div>
  )
}

export default CloseButton