import { SongTableRow } from "./SongTableRow";

function SongTable({ mySongs, handleDeleteSong }) {
  return (
    <div>
      <h2>Mis canciones favoritas</h2>
      <table>
        <thead>
          <tr>
            <th colSpan="2">Artista</th>
            <th>Cancion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {mySongs.length > 0 ? (
            mySongs.map((song, index) => (
              <SongTableRow
                key={index}
                song={song}
                id={index}
                handleDeleteSong={handleDeleteSong}
              ></SongTableRow>
            ))
          ) : (
            <tr>
              <td colSpan="4">Sin canciones favoritas</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export { SongTable };
