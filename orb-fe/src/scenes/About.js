import React from 'react';
import { useHistory} from 'react-router-dom';

function About() {
  const history = useHistory();

  const goBack = () => {
    history.push('/');
  };

  return (
    <div>
      <div>Orientación y aviso de privacidad... en construcción</div>
      <button onClick={goBack}>Regresar</button>
    </div>
  );
}

export default About;
