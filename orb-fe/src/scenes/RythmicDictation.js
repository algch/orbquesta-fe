import React, { useState } from 'react';
import * as Tone from 'tone';

class Bar {

}

class TimeSignature {

}

function RythmicDictation() {
    const [selectedNote, setSelectedNote] = useState(2);
    const [exerciseNotes, setExcerciseNotes] = useState([]);
    const synth = new Tone.Synth().toDestination();
    Tone.Transport.bpm.value = 90;

    const value2Note = {
        2: 'W',
        4: 'Q',
        8: 'E',
        16: 'T',
    };
    const addNote = (noteValue)  => {
        setExcerciseNotes([...exerciseNotes, noteValue]);
    };

    const playNotes = () => {
        const noteValues = [];
        let noteTime = new Tone.Time(0);
        const notes = exerciseNotes.map(note => {
            let prevNoteTime = noteTime;
            const noteValue = `${note}n`;
            noteTime += Tone.Time(noteValue);
            noteValues.push(noteValue);
            return [prevNoteTime, "C4"];
        });

        var part = new Tone.Part(function(time, pitch){
            const noteValue = noteValues.shift();
            synth.triggerAttackRelease(pitch, noteValue, time);
        }, notes);

        part.start();
        Tone.Transport.start();
    };

    const deleteLastNote = () => {
        if (!exerciseNotes.length) {
            return;
        }

        const newExerciseNotes = [...exerciseNotes];
        newExerciseNotes.pop();
        setExcerciseNotes(newExerciseNotes);
    }

    const printNotes = () => {
        return "VB%" + exerciseNotes.map((note) => value2Note[note] || "").join('%');
    }

  return (
      <React.Fragment>
        <div className="rythmic-dictation--container music--container">
            <div>
                {printNotes()}
            </div>
            <button onClick={() => addNote(2)}>
                W
            </button>
            <button onClick={() => addNote(4)}>
                Q
            </button>
            <button onClick={() => addNote(8)}>
                R
            </button>
            <button onClick={() => addNote(16)}>
                T
            </button>
        </div>
        <div>
            <button onClick={deleteLastNote}>
                Borrar última nota
            </button>
            <button onClick={playNotes}>
                prueba de sonido
            </button>
        </div>
      </React.Fragment>
  );
}

export default RythmicDictation;
