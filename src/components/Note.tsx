import React, { useState } from "react";
import Button, { ButtonType } from "./Button";
import { Note as NoteT } from "../App";
import ReactMarkdown from "react-markdown";

export enum NoteType {
  editable,
  preview,
}

//TODO: make actionOnCancel trigger call actionOnCancel(true) if a change has been made
//Make sure its not overwriten in the component call
function Note({
  type,
  actionOnCancel,
  actionOnConfirm,
  actionOnDelete,
  noteInfo,
}: {
  type: NoteType;
  actionOnCancel: React.Dispatch<React.SetStateAction<boolean>>;
  actionOnConfirm: (arg: NoteT) => void;
  actionOnDelete?: React.Dispatch<React.SetStateAction<boolean>>;
  noteInfo?: NoteT;
}) {
  const [inputValues, setInputValues] = useState<NoteT>({
    id: noteInfo ? noteInfo.id : 0,
    title: noteInfo ? noteInfo.title : "Note title",
    text: noteInfo
      ? noteInfo.text
      : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis unde incidunt numquam illum suscipit minima in, nobis, molestiae qui, adipisci pariatur? Aliquid sunt doloribus quasi quos labore et magnam quam.",
  });

  function handleChange(
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    let newValue = inputValues;
    event.preventDefault();
    event.target.name === "noteTitle"
      ? (newValue.title = event.target.value)
      : (newValue.text = event.target.value);
    setInputValues(newValue);
  }

  function GetValues(): NoteT {
    return inputValues;
  }

  return (
    <>
      <div className="bg-zinc-200 bg-opacity-80 fixed inset-0 z-50">
        <div className="flex pt-20 px-20 justify-center items-center">
          <div className="flex-col min-w-full justify-center bg-white py-10 px-12 rounded-md ">
            <form>
              <div className="flex justify-between">
                <label
                  htmlFor="noteTitle"
                  className="text-zinc-600 mb-2 text-lg font-bold"
                >
                  {type === NoteType.editable
                    ? "Note title"
                    : inputValues.title}
                </label>
                <div
                  className="text-primary"
                  onClick={() => actionOnCancel(false)}
                >
                  X
                </div>
              </div>

              {type === NoteType.editable ? (
                <div>
                  <input
                    type="text"
                    id="noteTitle"
                    placeholder={inputValues.title}
                    name="noteTitle"
                    onChange={handleChange}
                    defaultValue={inputValues.title}
                    className=" my-4 form-control block w-full px-3 py-1.5 text-base font-norma text-gray-70 bg-white bg-clip-paddin border border-solid border-gray-30 rounde transitio ease-in-ou m- focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                  />

                  <label
                    htmlFor="noteText"
                    className="text-zinc-600 mb-2 text-lg font-bold block"
                  >
                    Note text
                  </label>
                  <textarea
                    id="noteText"
                    name="noteText"
                    onChange={(e) => handleChange(e)}
                    placeholder={inputValues.text}
                    rows={10}
                    defaultValue={inputValues.text}
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                  />
                </div>
              ) : (
                <ReactMarkdown
                  className="overflow-auto max-h-72"
                  children={inputValues.text}
                />
              )}
            </form>

            <div className="flex justify-between p-2">
              {type === NoteType.preview ? (
                actionOnDelete ? (
                  <Button
                    callback={() => actionOnDelete(true)}
                    type={ButtonType.border}
                    text="Delete"
                  />
                ) : (
                  <Button
                    callback={() =>
                      console.log("You forgot to add actionOnDelete")
                    }
                    type={ButtonType.border}
                    text="ADD actionOnDelete"
                  />
                )
              ) : (
                <div></div>
              )}
              <div className="flex float-right gap-3">
                <Button
                  callback={() => actionOnCancel(false)}
                  type={ButtonType.border}
                  text={type === NoteType.preview ? "Cancel" : "Discard"}
                />
                <Button
                  callback={() => actionOnConfirm(GetValues())}
                  type={ButtonType.regular}
                  text={type === NoteType.preview ? "Edit" : "Save"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Note;
