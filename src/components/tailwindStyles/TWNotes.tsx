import React from "react";
import * as tw from "../../public/themes";

function TWNoteWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className={tw.noteModalBackground}>
      <div className={tw.noteModalCenter}>
        <div className={tw.noteModalContainer}>{children}</div>
      </div>
    </div>
  );
}

export default TWNoteWrapper;
