import { useParams } from "react-router-dom";
import SongDetails from "../components/SongDetails";

function SongPage({ mySongs }) {
  let { id: songId } = useParams();

  let currentSong = mySongs[songId];
  let { search, lyric, bio } = currentSong;

  return (
    <>
      <SongDetails search={search} lyric={lyric} bio={bio}></SongDetails>
    </>
  );
}

export { SongPage };
