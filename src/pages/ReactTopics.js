import { Link, Routes, Route } from "react-router-dom";
import { ReactComponentsTopic } from "./ReactComponentsTopic";
import { ReactTopic } from "./ReactTopic";
import { ReactTopicsHome } from "./ReactTopicsHome";

function ReactTopics() {
  return (
    <div>
      <h3>Enfoques de React</h3>
      <ul>
        <li>
          <Link to="jsx">JSX</Link> {/*Con to="/jsx" NO FUNCIONA */}
        </li>
        <li>
          <Link to="props">Props</Link>
        </li>
        <li>
          <Link to="estado">Estado</Link>
        </li>
        <li>
          <Link to="componentes">Componentes</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<ReactTopicsHome />}></Route>
        <Route path="/:topic" element={<ReactTopic />}></Route>
        <Route path="/componentes/*" element={<ReactComponentsTopic />} />
      </Routes>
    </div>
  );
}

export { ReactTopics };
