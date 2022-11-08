import React, { createContext } from "react";
import Heading from "./components/Heading";
import NoteDisplay from "./components/NoteDisplay";
import { useLocalStorage } from "./public/LocalStorage";

export type Note = {
  id: number;
  title: string;
  text: string;
  lable?: string;
};

export const NotesContext = createContext<Note[] | any>(null);

const init: Note = {
  id: 0,
  title: "",
  text: "",
};

function App() {
  const [lsNotes, setLsNotes] = useLocalStorage("notes", [init]);

  return (
    <div className="App">
      <NotesContext.Provider
        value={[
          lsNotes as Note[],
          setLsNotes as React.Dispatch<React.SetStateAction<Note[]>>,
        ]}
      >
        <Heading />
        <NoteDisplay />
      </NotesContext.Provider>
    </div>
  );
}

export default App;
