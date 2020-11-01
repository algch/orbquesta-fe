import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

function SignUp() {
  const history = useHistory();

  const goBack = () => {
    history.push('/');
  };

  return (
    <div>
      <div>Registro... en construcción</div>
      <button onClick={goBack}>Regresar</button>
    </div>
  );
}

export default SignUp;
