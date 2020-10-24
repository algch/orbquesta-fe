import React, { useState } from 'react';

function RythmicDictation() {
    const [selectedNote, setSelectedNote] = useState(2);

  return (
    <div className="rythmic-dictation--container music--container">
        <div>
            WWQRRTT
        </div>
        <div>
            {1/selectedNote}
        </div>
        <button onClick={() => setSelectedNote(2)}>
            W
        </button>
        <button onClick={() => setSelectedNote(4)}>
            Q
        </button>
        <button onClick={() => setSelectedNote(8)}>
            R
        </button>
        <button onClick={() => setSelectedNote(16)}>
            T
        </button>
    </div>
  );
}

export default RythmicDictation;
