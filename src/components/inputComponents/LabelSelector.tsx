import React from "react";
import { useLabels } from "../../util/useLabels";

function LabelSelector({
	name,
	defaultText,
	handleChange,
}: {
	name: string;
	defaultText: string;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
	const ctLabels = useLabels();
	return (
		<>
			<label
				htmlFor={name}
				className="inline mr-2 text-sm font-medium text-gray-900 dark:text-gray-400"
			>
				Label
			</label>
			<input
				list={name}
				defaultValue={defaultText}
				className="noteFormInput"
				onChange={handleChange}
			/>
			<datalist id={name}>
				<option value="Without label"></option>
				{ctLabels!.map((label: string, index) => (
					<option key={index} value={label}>
						{label}
					</option>
				))}
			</datalist>
		</>
	);
}

export default LabelSelector;
