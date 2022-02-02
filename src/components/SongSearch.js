import React, { useEffect, useState } from "react";
import SongForm from "./SongForm";
import SongDetails from "./SongDetails";
import Loader from "./Loader";
import songApiCall from "../services/songApiCall";

import "../index.css";
import { HashRouter, Link, Routes, Route } from "react-router-dom";
import { Error404 } from "../pages/Error";
import { SongTable } from "./SongTable";
import { SongPage } from "../pages/SongPage";

let mySongsInit = JSON.parse(localStorage.getItem("mySongs")) || [];

function SongSearch() {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mySongs, setMySongs] = useState(mySongsInit);

  //Se ejecuta cuando el valor del search y mySongs cambia
  useEffect(
    function () {
      if (search === null) return; //Para evitar renderizados innecesarios
      console.log("Peticion a APIs en ejecucion");
      setLoading(true);
      songApiCall(search).then((res) => {
        setBio(res.artistRes);
        setLyric(res.songRes);
        setLoading(false);
      });

      localStorage.setItem("mySongs", JSON.stringify(mySongs)); //Guarda los favoritos en localStorage
    },
    [search, mySongs]
  );

  const handleSaveSong = () => {

    let currentSong = {
      search,
      lyric,
      bio,
    };

    let songs = [...mySongs, currentSong];
    setMySongs(songs); //Se utiliza el estado previo debido a que el estado es asincrono
    localStorage.setItem("mySongs", JSON.stringify(songs)); //Guarda los favoritos en localStorage
    setSearch(null);
  };

  const handleDeleteSong = (id) => {
    let isDelete = window.confirm(`Eliminar cancion con id ${id} ?`);

    if (isDelete) {
      let songs = mySongs.filter((song, index) => index !== id);
      setMySongs(songs);
      localStorage.setItem("mySongs", JSON.stringify(songs));
    }
  };

  const handleSearch = (data) => {
    setSearch(data);
  };

  return (
    <div>
      <HashRouter basename="canciones">
        <header>Buscador de canciones con RUTAS y LocalStorage</header>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        {loading && <Loader />}
        <article className="grid-1-2">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SongForm
                    handleSearch={handleSearch}
                    handleSaveSong={handleSaveSong}
                  ></SongForm>
                  <SongTable
                    mySongs={mySongs}
                    handleDeleteSong={handleDeleteSong}
                  ></SongTable>
                  {search && !loading && (
                    <SongDetails
                      search={search}
                      lyric={lyric}
                      bio={bio}
                    ></SongDetails>
                  )}
                </>
              }
            ></Route>
            <Route path="/:id" element={<SongPage mySongs={mySongs} />}></Route>
            <Route path="/*" element={<Error404 />}></Route>
          </Routes>
        </article>
      </HashRouter>
    </div>
  );
}

export default SongSearch;
