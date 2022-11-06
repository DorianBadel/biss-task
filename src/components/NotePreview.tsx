import React, { useState } from 'react'
import Alert from './Alert'
import Button, { ButtonType } from './Button'

function NotePreview({callback}:any) {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  return (
    <div className="bg-zinc-200 bg-opacity-80 fixed inset-0 z-50   ">
        {isAlertOpen && <Alert callback={setIsAlertOpen}/>}
                <div className="flex pt-20 px-20 justify-center items-center">
                    <div className="flex-col min-w-full justify-center min-w- bg-white py-10 px-12 rounded-md ">

                        <div className="flex justify-between">
                          <div className="text-zinc-600 mb-10 text-lg font-bold" >Title</div>
                          <div className="text-primary">X</div>
                        </div>
                        <div className="text-zinc-600 mb-14" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis unde incidunt numquam illum suscipit minima in, nobis, molestiae qui, adipisci pariatur? Aliquid sunt doloribus quasi quos labore et magnam quam.</div>

                        <div className="flex justify-between p-2">
                        <Button callback={()=>{setIsAlertOpen(true)}} type={ButtonType.border} text="Delete"/>
                          <div className="flex float-right gap-3">
                              <Button callback={()=>callback(false)} type={ButtonType.border} text="Cancel"/>
                              <Button callback={()=>{}} type={ButtonType.regular} text="Edit"/>
                          </div>
                        </div>

                    </div>
                </div>
            </div>
  )
}

export default NotePreview