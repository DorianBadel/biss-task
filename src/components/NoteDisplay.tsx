import React, { useContext } from "react";
import NoteCard from "./NoteCard";
import { NoteContext, NoteT } from "../util/NoteProvider";
import CategoryLabel from "./CategoryLabel";
import { useLabels } from "../util/useLabels";

function NoteDisplay() {
	const { ctNotes } = useContext(NoteContext);
	const ctLabels = useLabels();

	if (!ctNotes || ctNotes.length === 0) {
		return (
			<div className="flex inset-0 justify-center items-center h-72 overflow-hidden">
				<h3 className={"noteLgText" + " opacity-60 select-none"}>
					You seem to have no notes, add one on the top right !
				</h3>
			</div>
		);
	} else {
		return (
			<div className={"noteGridContainer"}>
				<div className={"noteGrid"}>
					{ctNotes
						.filter((note: NoteT) => !note.label)
						.map((note: NoteT) => (
							<NoteCard key={note.id} note={note} />
						))}
				</div>
				{ctLabels &&
					ctLabels.map((label: string, index) => {
						return (
							<div key={index}>
								<CategoryLabel title={label} />

								<div className={"noteGrid"}>
									{ctNotes
										.filter((note: NoteT) => note.label === label)
										.map((note: NoteT) => {
											return <NoteCard key={note.id} note={note} />;
										})}
								</div>
							</div>
						);
					})}
			</div>
		);
	}
}

export default NoteDisplay;
