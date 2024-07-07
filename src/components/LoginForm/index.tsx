import { FormEvent, useState } from "react";
import Field from "./Field";

import "./styles.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { login, logout } from "../../store/actions/authentication";
import { NavLink } from "react-router-dom";

function LoginForm() {
  const [formValues, setFormValues] = useState({
    email: "bob@mail.io",
    password: "bobo",
  });
  // const [isLogged, setIsLogged] = useState(false);

  const dispatch = useAppDispatch();
  const pseudo = useAppSelector((state) => state.user.pseudo);
  const logged = useAppSelector((state) => state.user.logged);

  const handleLogout = () => {
    // setIsLogged(false);
    dispatch(logout());
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(login(formValues));
    console.log(dispatch(login(formValues)));
  };

  const handleChangeField = (name: "email" | "password") => (value: string) => {
    // changeField(value, name);
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className="login-form">
      {logged && (
        <div className="login-form-logged">
          <p className="login-form-message">Bienvenue {pseudo}</p>
          <NavLink to="/favorites">Mes favoris</NavLink>
          <button
            type="button"
            className="login-form-button"
            onClick={handleLogout}
          >
            Déconnexion
          </button>
        </div>
      )}
      {!logged && (
        <form
          autoComplete="off"
          className="login-form-element"
          onSubmit={handleSubmit}
        >
          <Field
            placeholder="Adresse Email"
            onChange={handleChangeField("email")}
            value={formValues.email}
          />
          <Field
            type="password"
            placeholder="Mot de passe"
            onChange={handleChangeField("password")}
            value={formValues.password}
          />
          <button type="submit" className="login-form-button">
            OK
          </button>
        </form>
      )}
    </div>
  );
}


export default LoginForm;
