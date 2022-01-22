import { Link, Routes, Route } from "react-router-dom";
import { ReactTopic } from "./ReactTopic";

function ReactComponentsTopic() {
  return (
    <>
      <h4>Temas de funciones de React Funcionales 🆚 Clases</h4>
      <ul>
        <li>
          <Link to="funciones">Componentes Funcionales</Link>
        </li>
        <li>
          <Link to="clases">Componentes de Clase</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/:topic" element={<ReactTopic></ReactTopic>}></Route>
      </Routes>
    </>
  );
}

export { ReactComponentsTopic};
