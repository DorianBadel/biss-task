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
    </div>
  );
}

export default App;
