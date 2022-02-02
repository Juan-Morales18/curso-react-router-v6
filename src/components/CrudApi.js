import React, { useState, useEffect } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import { helpHttp } from "../helper/helpHttp";
import Loader from "./Loader";
import Message from "./Messages";
import { HashRouter, NavLink, Routes, Route } from "react-router-dom";

function CrudApi() {
  const [db, setDb] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null); // Permite almacencar de manera temporal los datos a editar
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = "http://localhost:5000/saints";

  useEffect(() => {
    setLoading(true);
    api.get(url).then((res) => {
      console.log(res);
      if (!res.err) {
        setDb(res);
        setError(null);
      } else {
        setDb(null);
        setError(res);
      }
      setLoading(false);
    }); // La funcion devuelve una promesa, por ello se le pone su respectivo .then
  }, []);

  const createData = (formData) => {
    formData.id = Date.now();

    let options = {
      body: formData,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((res) => {
      console.log("post response: ", res);
      if (!res.err) {
        setDb([...db, res]); // La peticion devuelve el objeto enviado
      } else {
        setError(res); //La api devuelve un objeto de error
      }
    });
  };

  const updateData = (formData) => {
    let endpoint = `${url}/${formData.id}`;
    console.log(endpoint);

    let options = {
      body: formData,
      headers: { "content-type": "application/json" },
    };

    api.put(endpoint, options).then((res) => {
      console.log("put response:", res);
      if (!res.err) {
        //Se toman los datos del formulario para actualizar la tabla y no el resultado de la peticion
        let newData = db.map((el) => (el.id === formData.id ? formData : el));
        setDb(newData); // La peticion devuelve el objeto enviado
      } else {
        setError(res); //La api devuelve un objeto de error
      }
    });
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `Estas seguro que deseas eliminar el registro con ${id} `
    );

    if (isDelete) {
      let endpoint = `${url}/${id}`;

      let options = {
        headers: { "content-type": "application/json" },
      };

      api.del(endpoint, options).then((res) => {
        console.log("delete response", res); //La peticion devuelve un objeto vacio
        if (!res.err) {
          //La fila de la tabla se elimina con el id ddel objeto del formulario, no de la respuesta de la peticion
          let newData = db.filter((el) => el.id !== id);
          setDb(newData);
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };

  return (
    <>
      <HashRouter >
        <header>
          <h2>CRUD API con rutas</h2>
          <nav>
            <NavLink to="santos/">Santos</NavLink>
            <NavLink to="santos/agregar">Agregar</NavLink>
          </nav>
        </header>

        <Routes >
          <Route
            path="santos/"
            element={
              <>
                {loading && <Loader />}
                {error && (
                  <Message
                    msg={`Error ${error.status} ${error.statusText}`}
                    bgColor="#dc3545"
                  />
                )}
                {db && (
                  <CrudTable
                    data={db}
                    setDataToEdit={setDataToEdit}
                    deleteData={deleteData}
                  ></CrudTable>
                )}
              </>
            }
          ></Route>

          <Route
            path="santos/agregar"
            element={
              <CrudForm
                createData={createData}
                updateData={updateData}
                dataToEdit={dataToEdit}
                setDataToEdit={setDataToEdit}
              ></CrudForm>
            }
          ></Route>
          <Route
            path="santos/editar/:id"
            element={
              <CrudForm
                createData={createData}
                updateData={updateData}
                dataToEdit={dataToEdit}
                setDataToEdit={setDataToEdit}
              ></CrudForm>
            }
          ></Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default CrudApi;
