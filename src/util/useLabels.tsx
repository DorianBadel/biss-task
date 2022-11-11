import { useContext } from "react";
import { NoteContext } from "./NoteProvider";

export function useLabels() {
	const { ctNotes } = useContext(NoteContext);

	let labels: string[] = [];

	ctNotes?.map((currentValue) => {
		if (currentValue.label)
			if (!labels.includes(currentValue.label)) {
				labels.push(currentValue.label);
			}
	});

	return labels;
}
