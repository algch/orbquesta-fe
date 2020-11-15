import React, { useState, useEffect } from 'react';
import * as Tone from 'tone';

import LessonVideo from 'components/LessonVideo';
import NoteSelector from 'components/NoteSelector';
import OrbquestaClient from 'clients/Orbquesta';

const METRONOME = [4, 4, 4, 4];
const CORRECT_ANSWER = [4, 4, -4, 4];

class Bar {

}

class TimeSignature {

}

function RythmicDictation() {
  const [exerciseNotes, setExcerciseNotes] = useState([]);
  const [videoUrl, setVideoUrl] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await OrbquestaClient.get('/users/1');
        const lessonId = userResponse.data.next_lesson;
        const lessonResponse = await OrbquestaClient.get(`/lessons/${lessonId}`);
        setVideoUrl(lessonResponse.data.video_url);
      } catch (error) {
        console.log(Object.keys(error), error.message);
        console.log("config ", error.config);
        console.log("request ", error.request);
        console.log("response ", error.response);
      }
    };
    fetchData();
  });
  const synth = new Tone.MetalSynth().toDestination();
  Tone.Transport.bpm.value = 90;

  const value2Note = {
    '2': 'W',
    '4': 'Q',
    '8': 'E',
    '16': 'T',
    '-4': 'A',
    '-16': 'S',
  };
  const addNote = (noteValue)  => {
    setExcerciseNotes([...exerciseNotes, noteValue]);
  };

  const playNotes = (notesToPlay) => {
    const noteValues = [];
    let noteTime = new Tone.Time(0);
    const notes = notesToPlay.map(note => {
      let prevNoteTime = noteTime;
      const parsedNote = Math.abs(note)
      const noteValue = `${parsedNote}n`;
      noteTime += Tone.Time(noteValue);
      noteValues.push(noteValue);
      const pitch = note <= 0 ? null : "G3";
      return [prevNoteTime, pitch];
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
    <div className="page--container">
      <div className="rythmic-dictation--container music--container">
        <div>
            {printNotes()}
        </div>
        <NoteSelector onNoteSelected={addNote} />
        <LessonVideo url={videoUrl} />
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
    </ div>
  );
}

export default RythmicDictation;
