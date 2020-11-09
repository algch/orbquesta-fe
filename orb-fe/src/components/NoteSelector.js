import React from 'react';

function NoteSelector({ onNoteSelected }) {
  return (
    <div>
      <div>
        <button onClick={() => onNoteSelected(2)}>W</button>
        <button onClick={() => onNoteSelected(-2)}>W</button>
      </div>
      <div>
        <button onClick={() => onNoteSelected(4)}>Q</button>
        <button onClick={() => onNoteSelected(-4)}>A</button>
      </div>
      <div>
        <button onClick={() => onNoteSelected(8)}>R</button>
        <button onClick={() => onNoteSelected(-8)}>S</button>
      </div>
      <div>
        <button onClick={() => onNoteSelected(16)}>T</button>
        <button onClick={() => onNoteSelected(-16)}>T</button>
      </div>
    </div>
  );
}

export default NoteSelector;
