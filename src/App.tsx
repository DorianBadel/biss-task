import React from "react";
import Heading from "./components/Heading";
import LabelSelector from "./components/LabelSelector";
import NoteDisplay from "./components/NoteDisplay";
import { LabelProvider, NoteProvider } from "./public/ContextProvider";

function App() {
  return (
    <div className="App">
      <NoteProvider>
        <LabelProvider>
          <Heading />
          <NoteDisplay />
        </LabelProvider>
      </NoteProvider>
    </div>
  );
}

export default App;
