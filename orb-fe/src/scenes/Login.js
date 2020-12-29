import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

function Login() {
  const [buttonclicked, setButtonClicked] = useState(false);
  const history = useHistory();

  const onButtonClicked = (event) => {
    const path = event.target.attributes.to.nodeValue;
    history.push(path);
  }

  return (
      <div className="login__container">
        <div className="login__form-container">
          <div className="login__form-element login__logo" />
          <div className="login__form-element login__title">
            INICIAR SESIÓN
          </div>
          <div className="login__form-element">
            <input className="login__input" id="username" type="text" placeholder="Dirección de correo electrónico" />
          </div>
          <div className="login__form-element">
            <input className="login__input" id="password" type="password" placeholder="Contraseña" />
          </div>
          <div className="login__form-element">
            <button className="form__button--primary" to="/exercises" onClick={onButtonClicked}>
                Ingresar
            </button>
          </div>
          <div className="login__form-element">
            ¿Haz olvidado tu contraseña?
          </div>
        </div>
        <div className="login__footer">
          <div className="login__totem"></div>
          <div></div>
        </div>
      </ div>
  );

}

export default Login;
