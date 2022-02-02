import "./App.css";
import { Basics } from "./components/Basics";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { MenuBasics } from "./components/MenuBasics";
import CrudApi from "./components/CrudApi";
import SongSearch from "./components/SongSearch";

function App() {
  return (
    <div className="App">
      <SongSearch></SongSearch>
      <hr></hr>

      <CrudApi></CrudApi>
      <hr></hr>

      <HashRouter>
        <h2>Hash Router</h2>
        <MenuBasics></MenuBasics>
      </HashRouter>
      <hr></hr>

      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
