import React, { Component } from "react";
import './App.css';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

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
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      formErrors : {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      }
    };


  }

  handleSubmit = e => {
    e.preventDefault();

    if(formValid(this.state)){
      console.log(`-- Inscription -- 
      Prénom : ${this.state.firstName}
      Nom : ${this.state.lastName}
      Email : ${this.state.email}
      Mot de passe : ${this.state.password}
      `);
    }else{
      console.error('Formulaire invalide - Message derreur')
    }
  };


  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;


    switch(name){
      case 'firstName':
        formErrors.firstName = value.length < 2 ? 'minimum 2 caractères' : "";
        break;
      
      case 'lastName':
        formErrors.lastName = value.length < 2  ? 'minimum 2 caractères' : "";
        break;
      
      case 'email':
        formErrors.email = emailRegex.test(value)  ? '' : "format email incorrect";
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
        <h1>Créer un compte </h1>
        <form onSubmit={this.handleSubmit} noValidate>
          
          <div className="firstName">
            <label htmlFor="firstName"> Prénom</label>
            <input type="text" className= {formErrors.firstName.length > 0 ? "error" : null} placeholder="Prénom" name="firstName" noValidate onChange={this.handleChange}/>
            {formErrors.firstName.length > 0 && (
            <span className="errorMessage"> {formErrors.firstName}</span>
          )}
          </div>
          

          <div className="lastName">
            <label htmlFor="lastName"> Nom</label>
            <input type="text" className= {formErrors.lastName.length > 0 ? "error" : null} placeholder="Nom" name="lastName" noValidate onChange={this.handleChange}/>
            {formErrors.lastName.length > 0 && (
            <span className="errorMessage"> {formErrors.lastName}</span>
          )}
          </div>


          <div className="email">
            <label htmlFor="email"> Adresse mail</label>
            <input type="email" className= {formErrors.email.length > 0 ? "error" : null} placeholder="Adresse mail" name="email" noValidate onChange={this.handleChange}/>
            {formErrors.email.length > 0 && (
            <span className="errorMessage"> {formErrors.email}</span>
          )}
          </div>


          <div className="password">
            <label htmlFor="password"> Mot de passe</label>
            <input type="password" className= {formErrors.password.length > 0 ? "error" : null} placeholder="Mot de passe" name="password" noValidate onChange={this.handleChange}/>
            {formErrors.password.length > 0 && (
            <span className="errorMessage"> {formErrors.password}</span>
          )}
          </div>


          <div className="createAccount">
            <button type="submit"> Créer un compte</button>
            <small> Avez vous déjà un compte ? </small>


          </div>

        </form>
      </div>
    </div>
  );
}
}

export default App;
