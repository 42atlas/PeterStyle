import "./App.css";
import Player from "./components/Player";
import ButtonContact from "./components/ButtonContact";
import "./style/main.css";
import "nes.css/css/nes.min.css";

function App() {
  return (
    <div className="main-container">
      <br />
      <br />
      <br />
      <br />
      <div className="App">
        <img src={require("./images/PETERFINAL.gif")} alt="PETER STYLE" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Player />
        <br />
        <br />
        <br />
        <ButtonContact />
      </div>
    </div>
  );
}

export default App;
