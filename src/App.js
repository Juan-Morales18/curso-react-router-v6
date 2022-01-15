import "./App.css";
import { Basics } from "./components/Basics";
import { BrowserRouter } from "react-router-dom";
import { MenuBasics } from "./components/MenuBasics";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>React Router</h1>
        <a
          href="https://reactrouter.com/docs/en/v6"
          target="_blank"
          rel="noreferrer"
        >
          Documentacion
        </a>
        <MenuBasics></MenuBasics>
        <hr></hr>
        <Basics />
      </div>
    </BrowserRouter>
  );
}

export default App;
