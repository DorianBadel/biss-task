import React from "react";

function Label({ children, name }: { children: string; name: string }) {
	return (
		<label htmlFor={name} className="noteLgText">
			{children}
		</label>
	);
}

export default Label;
