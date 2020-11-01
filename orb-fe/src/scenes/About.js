import React from 'react';
import { useHistory} from 'react-router-dom';

function About() {
  const history = useHistory();

  const goBack = () => {
    history.push('/');
  };

  return (
    <div>
      Información para maestros y padres
      <button onClick={goBack}>Regresar</button>
    </div>
  );
}

export default About;
