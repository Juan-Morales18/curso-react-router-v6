import React, { useState } from "react";

const initialForm = {
  artist: "",
  song: "",
};

function SongForm({ handleSearch, handleSaveSong }) {
  const [form, setForm] = useState(initialForm);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.artist || !form.song) {
      alert("Datos incompletos");
      setIsDisabled(true);
      return;
    } else {
      handleSearch(form);
      setForm(initialForm);
      setIsDisabled(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="artist"
          placeholder="Nombre del artista"
          onChange={handleChange}
          value={form.artist}
        ></input>
        <input
          type="text"
          name="song"
          placeholder="Nombre de la cancion"
          onChange={handleChange}
          value={form.song}
        ></input>
        <input type="submit" value="Enviar"></input>
        <input
          type="button"
          disabled={isDisabled}
          value="Agregar a favoritos"
          onClick={handleSaveSong}
        ></input>
      </form>
    </div>
  );
}

export default SongForm;
