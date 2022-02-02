import { useNavigate } from "react-router-dom";
import avatarDefault from "../assets/microphone.png";

function SongTableRow({ id, song, handleDeleteSong }) {

  let {bio, search} = song;

  let avatar = bio.artists[0].strArtistThumb || avatarDefault;
  let artistName = search.artist;
  let songName = search.song;

  const navigate = useNavigate();

  return (
    <tr>
      <td>
        <img src={avatar} alt={artistName} className="avatar"></img>
      </td>
      <td>{artistName}</td>
      <td>{songName}</td>
      <td>
        <button onClick={() => navigate(`/${id}`)}>Ver</button>
        <button onClick={() => handleDeleteSong(id)}>Eliminar</button>
        {/*Arrow function: Para que no sea ejecutada inmediatamente */}
      </td>
    </tr>
  );
}

export { SongTableRow };
