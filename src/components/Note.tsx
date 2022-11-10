import React, { useState } from "react";
import Button, { ButtonType } from "./Button";
import ReactMarkdown from "react-markdown";
import { NoteT } from "../public/ContextProvider";
import TWNoteWrapper from "./tailwindStyles/TWNotes";
import * as tw from "../public/themes";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import Label from "./inputComponents/Label";
import CloseButton from "./inputComponents/CloseButton";
import Input from "./inputComponents/Input";
import TextArea from "./inputComponents/TextArea";

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
  actionOnCancel: ()=>void;
  actionOnConfirm: (arg: NoteT) => void;
  actionOnDelete?: ()=>void;
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
          <div className="flex justify-between pb-3">
            <Label name="noteTitle">
              {type === NoteType.editable ? "Note title" : inputValues.title}
            </Label>
            <CloseButton action={actionOnCancel}/>
          </div>

          {type === NoteType.editable ? (
            <div>
              <Input name="noteTitle" text={inputValues.title} handleChange={handleChange}/>

              <Label name="noteText">
                Note text
              </Label>
              <TextArea name="noteText" text={inputValues.text} handleChange={handleChange}/>
            </div>
          ) : (
            <ReactMarkdown
              className="overflow-auto max-h-96"
              rehypePlugins={[rehypeHighlight]}
              remarkPlugins={[remarkGfm]}
              children={inputValues.text}
            />
          )}
        </form>

        <div className="flex justify-between p-2 pt-10">
          {type === NoteType.preview ? (
            actionOnDelete ? (
              <Button
                callback={actionOnDelete}
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
              callback={actionOnCancel}
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
