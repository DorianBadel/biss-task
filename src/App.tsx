import React from 'react';
import Heading from './components/Heading';
import Note from './components/Note';
import NoteDisplay from './components/NoteDisplay';

function App() {
  return (
    <div className="App">
      <Heading/>
      <Note/>
      <NoteDisplay/>
    </div>
  );
}

export default App;
