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
    <button
      onClick={callback}
      className="transition bg-primary hover:bg-secondary-regular text-white px-3 py-1 text-md font-medium rounded-md shadow"
    >
      {" "}
      {text}{" "}
    </button>
  ) : (
    <button
      onClick={callback}
      className="transition border border-primary hover:border-secondary-regular hover:shadow-xl text-primary px-3 py-1 text-md font-medium rounded-md shadow"
    >
      {" "}
      {text}
    </button>
  );
}

export default Button;
