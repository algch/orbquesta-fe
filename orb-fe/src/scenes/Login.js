import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

function Login() {
  const [buttonclicked, setButtonClicked] = useState(false);
  const history = useHistory();

  const onButtonClicked = (event) => {
    const path = event.target.attributes.to.nodeValue;
    history.push(path);
  }

  const getSessionContent = () => {
    if (buttonclicked) {
      return (
        <React.Fragment>
          <div className="login__input">
            <label htmlFor="username">Username{' '}</label>
            <input id="username" type="text" />
          </div>
          <div className="login__input">
            <label htmlFor="password">Password{' '}</label>
            <input id="password" type="password" />
          </div>
          <button className="login__button-secondary" to="/exercises" onClick={onButtonClicked}>
              Iniciar sesión
          </button>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <button className="login__button-primary" onClick={() => setButtonClicked(true)}>
          INICIAR SESIÓN O REGISTRARSE
        </button>
      </React.Fragment>
    );
  };

  return (
      <div className="login--container">
          <div className="login__logo" />
          {getSessionContent()}
          <button className="login__button-secondary" to="/about" onClick={onButtonClicked}>
            Orientación para maestros y padres
          </button>
      </ div>
  );

}

export default Login;
