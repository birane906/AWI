import './App.css';

function App() {
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1>Créer un compte </h1>
        <form onSubmit={this.handleSubmit} noValidate>
          
          <div className="firstName">
            <label htmlFor="firstName"> Prénom</label>
            <input type="text" className= "" placeholder="Prénom" name="firstName" noValidate onChange={this.handleChange}></input>
          </div>


          <div className="lastName">
            <label htmlFor="lastName"> Nom</label>
            <input type="text" className= "" placeholder="Nom" name="lastName" noValidate onChange={this.handleChange}></input>
          </div>


          <div className="email">
            <label htmlFor="email"> Adresse mail</label>
            <input type="text" className= "" placeholder="Adresse mail" name="email" noValidate onChange={this.handleChange}></input>
          </div>


          <div className="password">
            <label htmlFor="password"> Mot de passe</label>
            <input type="text" className= "" placeholder="Mot de passe" name="password" noValidate onChange={this.handleChange}></input>
          </div>



        </form>
      </div>
    </div>
  );
}

export default App;
