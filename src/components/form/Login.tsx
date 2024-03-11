import MiniAirbeanLogo from "../../assets/mini-airbeanLogo.svg";
import "./login.scss";

interface LoginProps {
  closeOverlay: () => void;
}

const Login = ({ closeOverlay }: LoginProps) => {
  return (
    <div className="login-container">
      <header className="login-Header">
        <img className="login-HeadImg" src={MiniAirbeanLogo} />
        <h1 className="login-title">Välkommen till AirBean-familjen!</h1>
        <p className="login-text">
          Genom att skapa ett konto nedan kan du spara och se din orderhistorik.
        </p>
      </header>
      <section className="login-sectionContainer">
        <form className="login-formContainer" action="submit">
          <div>
            <label>Namn</label>
            <input type="text" name="" id="" placeholder="Coffe KaffeHaturrr" />
          </div>
          <div>
            <label>Epost</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="coffe.KaffeHaturrr@zocom.se"
            />
          </div>
          <label className="checkbox-container">
            <input type="checkbox" />
            <span className="checkmark"></span>
            GDPR Ok!
          </label>
        </form>
      </section>
      <button className="login-button" onClick={closeOverlay}>
        Brew me a cup!
      </button>
    </div>
  );
};

export default Login;
