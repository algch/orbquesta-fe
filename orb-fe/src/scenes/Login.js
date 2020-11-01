import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [buttonclicked, setButtonClicked] = useState(false);

  const getSessionContent = () => {
    if (buttonclicked) {
      return (
        <React.Fragment>
          <div className="login__input">
            <label for="username">Username{' '}</label>
            <input id="username" type="text" />
          </div>
          <div className="login__input">
            <label for="password">Password{' '}</label>
            <input id="password" type="password" />
          </div>
          <div className="login__link">
            <Link to="/exercises">
              Iniciar sesión
            </Link>
          </div>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <button className="login__button" onClick={() => setButtonClicked(true)}>
          Inicia sesión o regístrate
        </button>
      </React.Fragment>
    );
  };

  return (
      <div className="login--container">
          {getSessionContent()}
      </ div>
  );

}

export default Login;
