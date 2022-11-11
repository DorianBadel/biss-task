import React from "react";

const TextArea = ({
	name,
	text,
	handleChange,
}: {
	name: string;
	text: string;
	handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) => {
	return (
		<textarea
			name={name}
			onChange={(e) => handleChange(e)}
			placeholder={text}
			rows={60}
			defaultValue={text}
			className="noteFormInput"
		/>
	);
};

export default TextArea;
