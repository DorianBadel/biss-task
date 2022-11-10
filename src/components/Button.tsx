import React from "react";
import * as tw from "../public/themes"

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
    <button
      onClick={callback}
      className={tw.regularButton}
    >
      {text}
    </button>
  ) : (
    <button
      onClick={callback}
      className={tw.borderButton}
    >
      {text}
    </button>
  );
}

export default Button;
