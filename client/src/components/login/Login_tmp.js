import React, { Component } from "react";
import { useHistory } from "react-router"
import './Login.css';

const formValid = ({formErrors, ...rest}) => {
  let valid = true;

  //validate if form errors is empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
});

  //validate if form errors is filled out
  Object.values(rest).forEach(val =>{
    val== null && (valid = false)
  });
  

return valid;
};
class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      login: null,
      password: null,
      formErrors : {
        login: "",
        password: ""
      }
    };


  }

  handleSubmit = e => {
    e.preventDefault();

    if(formValid(this.state)){
      console.log(`-- Connexion -- 
      Login : ${this.state.login}
      Mot de passe : ${this.state.password}
      `);

      fetch("http://localhost:8080/api/ping")
        .then(res => res.text())
        .then(res => this.setState({ ping : res}))
        .then(res => console.log("Done"))
        
    }else{
      console.error('Formulaire invalide - Message derreur')
    }
  };


  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;


    switch(name){
      case 'login':
        formErrors.login = value.length < 6  ? 'minimum 6 caractères' : "";
        break;

      case 'password':
        formErrors.password = value.length < 6 ? 'minimum 6 caractères' : "";
        break;

      default:
        break;
    }

    this.setState({formErrors, [name]: value }, ()=> console.log(this.state));

  }; 
  
  render(){
    const{ formErrors} = this.state;

  
    return (
    
    <div className="wrapper">
      <div className="form-wrapper">
        <h1>Connexion</h1>
        <form onSubmit={this.handleSubmit} noValidate>
          <div className="login">
            <label htmlFor="login">Login</label>
            <input type="login" className= {formErrors.login.length > 0 ? "error" : null} placeholder="Login" name="login" noValidate onChange={this.handleChange}/>
            {formErrors.login.length > 0 && (
            <span className="errorMessage"> {formErrors.login}</span>
          )}
          </div>


          <div className="password">
            <label htmlFor="password"> Mot de passe</label>
            <input type="password" className= {formErrors.password.length > 0 ? "error" : null} placeholder="Mot de passe" name="password" noValidate onChange={this.handleChange}/>
            {formErrors.password.length > 0 && (
            <span className="errorMessage"> {formErrors.password}</span>
          )}
          </div>


          <div className="logInAccount">
            <button type="submit">Connexion</button>
          </div>
          <p>{this.state.ping}</p>
        </form>
      </div>
    </div>
  );
}
}

export default Login;
