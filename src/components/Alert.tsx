import React from "react";
import Button, { ButtonType } from "./Button";
import * as tw from "../public/themes";

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
    <div className={tw.noteModalBackground}>
      <div className={tw.alertCenter}>
        <div className={tw.alertContainer}>
          <div className={tw.noteLgText}>{message}</div>
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
