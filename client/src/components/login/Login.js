import React, { useState } from 'react';
import { useHistory } from "react-router"
import './Login.css';

const Login = () => {

    const [ login, setLogin ] = useState(null)
    const [ password, setPassword ] = useState(null)
    const [ formErrors, setFormErrors ] = useState({
        login: "",
        password: ""
    })
    const [ ping, setPing ] = useState(null)

    const formValid = ({ formErrors, ...rest }) => {
        let valid = true;

        //validate if form errors is empty
        Object.values(formErrors).forEach(val => {
            val.length > 0 && (valid = false);
            console.log(val);
        });

        //validate if form errors is filled out
        Object.values(rest).forEach(val => {
            val == null && (valid = false)
            console.log(val);
        });
        return valid;
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (formValid({formErrors, login, password})) {
            console.log(`-- Connexion -- 
          Login : ${this.state.login}
          Mot de passe : ${this.state.password}
          `);

            fetch("http://localhost:8080/api/ping")
                .then(res => res.text())
                .then(res => this.setState({ ping: res }))
                .then(res => console.log("Done"))

        } else {
            console.error('Formulaire invalide - Message derreur')
        }
    };

    const handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;

        const newFormErrors = { ...formErrors }
        switch (name) {
            case 'login':
                newFormErrors.login = value.length < 6 ? 'minimum 6 caractères' : "";
                break;

            case 'password':
                newFormErrors.password = value.length < 6 ? 'minimum 6 caractères' : "";
                break;

            default:
                break;
        }

        console.log(formErrors);
        setFormErrors(newFormErrors)
        console.log(formErrors);

    };

    return (
        <div className="wrapper">
            <div className="form-wrapper">
                <h1>Connexion</h1>
                <form onSubmit={handleSubmit} noValidate>
                    <div className="login">
                        <label htmlFor="login">Login</label>
                        <input type="login" className={formErrors.login.length > 0 ? "error" : null} placeholder="Login" name="login" noValidate onChange={handleChange} />
                        {formErrors.login.length > 0 && (
                            <span className="errorMessage"> {formErrors.login}</span>
                        )}
                    </div>


                    <div className="password">
                        <label htmlFor="password"> Mot de passe</label>
                        <input type="password" className={formErrors.password.length > 0 ? "error" : null} placeholder="Mot de passe" name="password" noValidate onChange={handleChange} />
                        {formErrors.password.length > 0 && (
                            <span className="errorMessage"> {formErrors.password}</span>
                        )}
                    </div>


                    <div className="logInAccount">
                        <button type="submit">Connexion</button>
                    </div>
                    <p>{ping}</p>
                </form>
            </div>
        </div>
    );
};

export default Login;