import React from 'react'
import Button, { ButtonType } from './Button'

let test = true;
function Note() {
  return (
    test ?
    <div className="bg-zinc-200 bg-opacity-80 fixed inset-0 z-50   ">
              <div className="flex pt-20 px-20 justify-center items-center">
                  <div className="flex-col min-w-full justify-center min-w- bg-white py-10 px-12 rounded-md ">

                      <div className="flex justify-between">
                        <div className="text-zinc-600 mb-10 text-lg font-bold" >Title</div>
                        <div className="text-primary">X</div>
                      </div>
                      <div className="text-zinc-600 mb-14" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis unde incidunt numquam illum suscipit minima in, nobis, molestiae qui, adipisci pariatur? Aliquid sunt doloribus quasi quos labore et magnam quam.</div>

                      <div className="flex justify-between p-2">
                      <Button type={ButtonType.border} text="Delete"/>
                        <div className="flex float-right gap-3">
                            <Button type={ButtonType.border} text="Cancel"/>
                            <Button type={ButtonType.regular} text="Edit"/>
                        </div>
                      </div>

                  </div>
              </div>
          </div>
        :
        <div className="bg-zinc-200 bg-opacity-80 fixed inset-0 z-50   ">
              <div className="flex pt-20 px-20 justify-center items-center">
                  <div className="flex-col min-w-full justify-center bg-white py-10 px-12 rounded-md ">

                      <div className="flex justify-between">
                        <label htmlFor="noteTitle" className="text-zinc-600 mb-2 text-lg font-bold" >Note title</label>
                        <div className="text-primary">X</div>
                      </div>
                      <input type="text" id="noteTitle" placeholder="Grocery list" 
                      className='
                      my-4
                      form-control block w-full px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none
'/>

                      <label htmlFor="noteText" className="text-zinc-600 mb-2 text-lg font-bold block" >Note text</label>
                      <textarea id="noteText" 
                      placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis unde incidunt numquam illum suscipit minima in, nobis, molestiae qui, adipisci pariatur? Aliquid sunt doloribus quasi quos labore et magnam quam."
                      rows={10}
                      className="
                        form-control block w-full px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none
                      "/>

                      <div className="text-zinc-600 mb-10" ></div>
                      <div className="flex float-right p-2 gap-3">
                          <Button type={ButtonType.border} text="Discard"/>
                          <Button type={ButtonType.regular} text="Save"/>
                      </div>

                  </div>
              </div>
          </div>
  )
}

export default Note