import React, { useState } from "react";
import Button, { ButtonType } from "./Button";
import ReactMarkdown from "react-markdown";
import { NoteT } from "../public/ContextProvider";
import * as tw from "../public/themes";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import Label from "./inputComponents/Label";
import CloseButton from "./inputComponents/CloseButton";
import Input from "./inputComponents/Input";
import TextArea from "./inputComponents/TextArea";
import LabelSelector from "./LabelSelector";

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
  actionOnCancel: () => void;
  actionOnConfirm: (arg: NoteT) => void;
  actionOnDelete?: () => void;
  noteInfo?: NoteT;
}) {
  //Variables
  //name props of inputs
  const textInputNameValue = "noteText";
  const titleInputNameValue = "noteTitle";
  const labelInputNameValue = "noteLabel";

  //Default values
  const defaultTitle = "Note title";
  const defaultTitleTitle = "Note title*";
  const defaultTextTitle = "Note text*";
  const defaultText = "Placeholder text, write something of note in your note";
  const defaultLabel = "Select label";
  const labelBlankValue = "Without label";

  const [inputValues, setInputValues] = useState<NoteT>({
    id: noteInfo ? noteInfo.id : 0,
    title: noteInfo ? noteInfo.title : defaultTitle,
    text: noteInfo ? noteInfo.text : defaultText,
    label: noteInfo ? noteInfo.label : undefined,
  });

  function handleChange(
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    let newValue = inputValues;
    event.preventDefault();
    event.target.name === titleInputNameValue
      ? (newValue.title = event.target.value)
      : event.target.name === textInputNameValue
      ? (newValue.text = event.target.value)
      : event.target.value === labelBlankValue
      ? (newValue.label = "")
      : (newValue.label = event.target.value);
    setInputValues(newValue);
  }

  function getValues(): NoteT {
    //In case the user left something blank
    if (inputValues.title === "") inputValues.title = defaultTitle;
    if (inputValues.text === "") inputValues.text = defaultText;
    return inputValues;
  }

  return (
    <>
      <div className={tw.noteModalBackground}>
        <div className={tw.noteModalCenter} onClick={actionOnCancel}>
          <div
            className={tw.noteModalContainer}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <form>
              <div className="flex justify-between pb-3">
                <Label name={titleInputNameValue}>
                  {type === NoteType.editable
                    ? defaultTitleTitle
                    : inputValues.title}
                </Label>
                <CloseButton action={actionOnCancel} />
              </div>

              {type === NoteType.editable ? (
                <div>
                  <Input
                    name={titleInputNameValue}
                    text={inputValues.title}
                    handleChange={handleChange}
                  />

                  <div className="py-3">
                    <LabelSelector
                      name={labelInputNameValue}
                      defaultText={
                        inputValues.label ? inputValues.label : defaultLabel
                      }
                      handleChange={handleChange}
                    />
                  </div>

                  <Label name={textInputNameValue}>{defaultTextTitle}</Label>
                  <TextArea
                    name={textInputNameValue}
                    text={inputValues.text}
                    handleChange={handleChange}
                  />
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
              {type === NoteType.preview && actionOnDelete ? (
                <Button
                  callback={actionOnDelete}
                  type={ButtonType.border}
                  text="Delete"
                />
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Note;
