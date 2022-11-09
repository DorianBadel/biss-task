import React, { useState } from "react";
import Button, { ButtonType } from "./Button";
import ReactMarkdown from "react-markdown";
import { NoteT } from "../public/ContextProvider";
import TWNoteWrapper from "./tailwindStyles/TWNotes";
import * as tw from "../public/themes";

export enum NoteType {
  editable,
  preview,
}
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

  function getValues(): NoteT {
    if (inputValues.title === "") inputValues.title = "Note title";
    if (inputValues.text === "")
      inputValues.text =
        "Placeholder text, yay you forgot to write a note in your note";
    return inputValues;
  }

  return (
    <>
      <TWNoteWrapper>
        <form>
          <div className="flex justify-between">
            <label htmlFor="noteTitle" className={tw.noteLgText}>
              {type === NoteType.editable ? "Note title" : inputValues.title}
            </label>
            <div className="text-primary" onClick={() => actionOnCancel(false)}>
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
                className={tw.noteFormInput}
              />

              <label htmlFor="noteText" className={tw.noteLgText}>
                Note text
              </label>
              <textarea
                id="noteText"
                name="noteText"
                onChange={(e) => handleChange(e)}
                placeholder={inputValues.text}
                rows={60}
                defaultValue={inputValues.text}
                className={tw.noteFormInput}
              />
            </div>
          ) : (
            <ReactMarkdown
              className="overflow-auto max-h-96"
              children={inputValues.text}
            />
          )}
        </form>

        <div className="flex justify-between p-2 pt-10">
          {type === NoteType.preview ? (
            actionOnDelete ? (
              <Button
                callback={() => actionOnDelete(true)}
                type={ButtonType.border}
                text="Delete"
              />
            ) : (
              <Button
                callback={() => console.log("You forgot to add actionOnDelete")}
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
              callback={() => actionOnConfirm(getValues())}
              type={ButtonType.regular}
              text={type === NoteType.preview ? "Edit" : "Save"}
            />
          </div>
        </div>
      </TWNoteWrapper>
    </>
  );
}

export default Note;
