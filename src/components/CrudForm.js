import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const initialForm = {
  name: "",
  constellation: "",
  id: null,
};

function CrudForm({ createData, updateData, dataToEdit, setDataToEdit }) {
  const [form, setForm] = useState(initialForm);
  let navigate = useNavigate();

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value, //Se utiliza el spread para actualizar o modificar las propiedades del objeto inicial
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.constellation) {
      alert("Datos incompletos");
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
    navigate("/santos/"); //Envia a a ruta principal
  };

  const handleReset = () => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <div>
      <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="constellation"
          placeholder="Constelacion"
          value={form.constellation}
          onChange={handleChange}
        />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
}

export default CrudForm;
