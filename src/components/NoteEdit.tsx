import React from 'react'
import Button, { ButtonType } from './Button'

function NoteEdit() {
  return (
    <div className="bg-zinc-200 bg-opacity-80 fixed inset-0 z-50   ">
                <div className="flex pt-20 px-20 justify-center items-center">
                    <div className="flex-col min-w-full justify-center bg-white py-10 px-12 rounded-md ">

                        <div className="flex justify-between">
                          <label htmlFor="noteTitle" className="text-zinc-600 mb-2 text-lg font-bold" >Note title</label>
                          <div className="text-primary">X</div>
                        </div>
                        <input type="text" id="noteTitle" placeholder="Grocery list" 
                        className=' my-4 form-control block w-full px-3 py-1.5 text-base font-norma text-gray-70 bg-white bg-clip-paddin border border-solid border-gray-30 rounde transitio ease-in-ou m- focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none'/>

                        <label htmlFor="noteText" className="text-zinc-600 mb-2 text-lg font-bold block" >Note text</label>
                        <textarea id="noteText" 
                        placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis unde incidunt numquam illum suscipit minima in, nobis, molestiae qui, adipisci pariatur? Aliquid sunt doloribus quasi quos labore et magnam quam."
                        rows={10}
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"/>

                        <div className="text-zinc-600 mb-10" ></div>
                        <div className="flex float-right p-2 gap-3">
                            <Button callback={()=>{}} type={ButtonType.border} text="Discard"/>
                            <Button callback={()=>{}} type={ButtonType.regular} text="Save"/>
                        </div>

                    </div>
                </div>
            </div>
  )
}

export default NoteEdit