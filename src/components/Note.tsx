import React, { useContext, useState } from "react";
import Button, { ButtonType } from "./Button";
import ReactMarkdown from "react-markdown";
import { NoteContext, NoteT } from "../util/NoteProvider";
import remarkGfm from "remark-gfm";
import Label from "./inputComponents/Label";
import CloseButton from "./CloseButton";
import Input from "./inputComponents/Input";
import TextArea from "./inputComponents/TextArea";
import LabelSelector from "./inputComponents/LabelSelector";
import Alert from "./Alert";

export enum NoteType {
	editable,
	preview,
}

enum alert {
	none,
	deleteAlert,
	discardAlert,
}

function Note({
	type,
	actionOnCancel,
	actionOnConfirm,
	noteInfo,
}: {
	type: NoteType;
	actionOnCancel: () => void;
	actionOnConfirm: (arg: NoteT) => void;
	noteInfo?: NoteT;
}) {
	const [openAlert, setOpenAlert] = useState(alert.none);
	const { ctNotes, setCtNotes } = useContext(NoteContext);

	function onDeleteNote() {
		if (noteInfo)
			setCtNotes(
				ctNotes!.filter((note: NoteT) => {
					return note.id !== noteInfo.id;
				})
			);

		actionOnCancel();

		setOpenAlert(alert.none);
	}

	function onDiscardChanges() {
		setOpenAlert(alert.none);
		actionOnCancel();
	}

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
		id: noteInfo?.id || 0,
		title: noteInfo?.title || defaultTitle,
		text: noteInfo?.text || defaultText,
		label: noteInfo?.label || undefined,
	});
	const previewValues = { title: noteInfo?.title, text: noteInfo?.text };

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
			<div className="noteModalBackground">
				<div
					className="noteModalCenter"
					onClick={
						type === NoteType.editable
							? () => setOpenAlert(alert.discardAlert)
							: actionOnCancel
					}
				>
					<div
						className="noteModalContainer max-w-2x1"
						onClick={(e) => {
							e.stopPropagation();
						}}
					>
						<form>
							<div className="flex justify-between pb-3">
								<Label name={titleInputNameValue}>
									{type === NoteType.editable
										? defaultTitleTitle
										: previewValues.title || ""}
								</Label>
								<CloseButton
									action={
										type === NoteType.editable
											? () => setOpenAlert(alert.discardAlert)
											: actionOnCancel
									}
								/>
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
									remarkPlugins={[remarkGfm]}
									children={previewValues.text || ""}
								/>
							)}
						</form>

						<div className="flex justify-between p-2 pt-10">
							{type === NoteType.preview ? (
								<Button
									callback={() => setOpenAlert(alert.deleteAlert)}
									type={ButtonType.border}
									text="Delete"
								/>
							) : (
								<div></div>
							)}
							<div className="flex float-right gap-3">
								<Button
									callback={
										type === NoteType.preview
											? actionOnCancel
											: () => setOpenAlert(alert.discardAlert)
									}
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

			{openAlert === alert.deleteAlert && (
				<Alert
					positiveClick={onDeleteNote}
					negativeClick={() => setOpenAlert(alert.none)}
					message="Are you sure you want to delete this note?"
					positiveOption="Yes, delete"
					negativeOption="Cancel"
				/>
			)}

			{openAlert === alert.discardAlert && (
				<Alert
					positiveClick={onDiscardChanges}
					negativeClick={() => setOpenAlert(alert.none)}
					message="Are you sure you want to discard your changes?"
					positiveOption="Yes, discard"
					negativeOption="Continue editing"
				/>
			)}
		</>
	);
}

export default Note;
