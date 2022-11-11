import React from "react";
import Button, { ButtonType } from "./Button";

function Alert({
	message,
	positiveOption,
	negativeOption,
	positiveClick,
	negativeClick,
}: {
	message: string;
	positiveOption: string;
	negativeOption: string;
	positiveClick: () => void;
	negativeClick: () => void;
}) {
	return (
		<div className="noteModalBackground">
			<div className="alertCenter" onClick={negativeClick}>
				<div
					className="alertContainer"
					onClick={(e) => {
						e.stopPropagation();
					}}
				>
					<div className="noteLgText">{message}</div>
					<div className="pt-5 flex float-right gap-3">
						<Button
							callback={negativeClick}
							type={ButtonType.border}
							text={negativeOption}
						/>
						<Button
							callback={positiveClick}
							type={ButtonType.regular}
							text={positiveOption}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Alert;
