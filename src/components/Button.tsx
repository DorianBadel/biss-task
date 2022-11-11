import React from "react";

export enum ButtonType {
	regular,
	border,
}

function Button({
	type,
	text,
	callback,
}: {
	type: ButtonType;
	text: string;
	callback: () => void;
}) {
	return type === ButtonType.regular ? (
		<button onClick={callback} className="regularButton text-md">
			{text}
		</button>
	) : (
		<button onClick={callback} className="borderButton text-md">
			{text}
		</button>
	);
}

export default Button;
