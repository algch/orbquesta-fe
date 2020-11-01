import React, { useState } from 'react';
import * as Tone from 'tone';

const CORRECT_ANSWER = [4, 8, 8, 16, 16, 16, 16, 4];

class Bar {

}

class TimeSignature {

}

function RythmicDictation() {
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

  const playNotes = (notesToPlay) => {
    const noteValues = [];
    let noteTime = new Tone.Time(0);
    const notes = notesToPlay.map(note => {
      let prevNoteTime = noteTime;
      const noteValue = `${note}n`;
      noteTime += Tone.Time(noteValue);
      noteValues.push(noteValue);
      return [prevNoteTime, "G3"];
    });

    var part = new Tone.Part(function(time, pitch){
      const noteValue = noteValues.shift();
      synth.triggerAttackRelease(pitch, noteValue, time);
    }, notes);

    part.start();
    Tone.Transport.start();
  };

  const _isResponseCorrect = () => {
    if(exerciseNotes.length !== CORRECT_ANSWER.length) {
      return false;
    }

    return exerciseNotes.reduce((acc, note, index) => acc && note === CORRECT_ANSWER[index], true);
  };

  const checkAnswer = () => {
    if (_isResponseCorrect()) {
      alert("CORRECTO :D");
    } else {
      alert("INCORRECTO :(");
    }
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
        <button onClick={checkAnswer}>
            Calificar
        </button>
        <button onClick={() => playNotes(CORRECT_ANSWER)}>
            Escuchar ejercicio
        </button>
        <button onClick={() => playNotes(exerciseNotes)}>
            prueba de sonido
        </button>
      </div>
    </React.Fragment>
  );
}

export default RythmicDictation;
