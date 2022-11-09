import React from "react";
import Heading from "./components/Heading";
import NoteDisplay from "./components/NoteDisplay";
import { NoteProvider } from "./public/ContextProvider";

function App() {
  return (
    <div className="App">
      <NoteProvider>
        <Heading />
        <NoteDisplay />
      </NoteProvider>

      {/* <NotesContext.Provider
        value={[
          lsNotes as Note[],
          setLsNotes as React.Dispatch<React.SetStateAction<Note[]>>,
        ]}
      >
        <Heading />
        <NoteDisplay />
      </NotesContext.Provider> */}
    </div>
  );
}

export default App;
