import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import NotePreview from "./NotePreview";
import { NoteT } from "../util/NoteProvider";

import remarkGfm from "remark-gfm";

function NoteCard({ note }: { note: NoteT }) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			{isOpen && (
				<NotePreview thisNote={note} callback={() => setIsOpen(false)} />
			)}
			<div
				key={note.id}
				onClick={() => setIsOpen(true)}
				className="noteCardContainer"
			>
				<div className="noteCard xl:aspect-w-7 xl:aspect-h-8">
					<p className="noteXlText mb-2">{note.title}</p>
					<ReactMarkdown remarkPlugins={[remarkGfm]} children={note.text} />
				</div>
			</div>
		</>
	);
}

export default NoteCard;
