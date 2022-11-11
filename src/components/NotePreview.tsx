import React, { useContext, useState } from "react";
import Alert from "./Alert";
import Note, { NoteType } from "./Note";
import { NoteT, NoteContext } from "../util/NoteProvider";
// import { LabelContext } from "../util/LabelProvider";

function NotePreview({
	callback,
	thisNote,
}: {
	callback: () => void;
	thisNote: NoteT;
}) {
	const [isEditing, setIsEditing] = useState(false);
	const { ctNotes, setCtNotes } = useContext(NoteContext);

	function findIndexInArray() {
		const noteInArray = ctNotes!.find((obj: NoteT) => obj.id === thisNote.id);

		return ctNotes!.indexOf(noteInArray!);
	}

	function onSaveChanges(val: NoteT) {
		const indexInArray = findIndexInArray();
		val.id = thisNote.id; //
		const tempState = ctNotes!.slice();

		if (val.label) {
			val.label = val.label.toUpperCase();
		}

		tempState.splice(indexInArray, 1, val);
		setCtNotes(tempState);

		setIsEditing(false);
	}

	return (
		<>
			{isEditing ? (
				<Note
					type={NoteType.editable}
					actionOnCancel={() => setIsEditing(false)}
					actionOnConfirm={onSaveChanges}
					noteInfo={thisNote}
				/>
			) : (
				<Note
					type={NoteType.preview}
					actionOnCancel={callback}
					actionOnConfirm={() => setIsEditing(true)}
					noteInfo={thisNote}
				/>
			)}
		</>
	);
}

export default NotePreview;
