import React, { useState } from 'react';
import { useHistory } from "react-router"
import './Login.css';

const Login = () => {

    const [ login, setLogin ] = useState(null)
    const [ password, setPassword ] = useState(null)
    const history = useHistory()

    const formValid = () => {
        return login != "" && password != "";
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (formValid()) {
            console.log(`-- Connexion -- 
          Login : ${login}
          Mot de passe : ${password}
          `);

            fetch("http://localhost:8080/api/ping")
                .then( _ => history.push("/dashboard"))

        } else {
            console.error('Formulaire invalide - Message derreur')
        }
    };

    const handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;

        switch (name) {
            case 'login':
                setLogin(value)
                break;

            case 'password':
                setPassword(value)
                break;

            default:
                break;
        }
        console.log(login, password);
    };

    return (
        <div className="wrapper">
            <div className="form-wrapper">
                <h1>Connexion</h1>
                <form onSubmit={handleSubmit} noValidate>
                    <div className="login">
                        <label htmlFor="login">Login</label>
                        <input type="login" className={login != null ? (login.length == 0 ? "error" : null) : null} placeholder="Login" name="login" noValidate onChange={handleChange} />
                    </div>


                    <div className="password">
                        <label htmlFor="password"> Mot de passe</label>
                        <input type="password" className={password != null ? (password.length == 0 ? "error" : null) : null} placeholder="Mot de passe" name="password" noValidate onChange={handleChange} />
                    </div>


                    <div className="logInAccount">
                        <button type="submit" disabled={!formValid()}>Connexion</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;