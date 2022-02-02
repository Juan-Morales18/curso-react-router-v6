import React from "react";
import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";
import Messages from "./Messages";

function SongDetails({ search, lyric, bio }) {
  if (!lyric || !bio) return null;

  return (
    <>
      {lyric.err || lyric.error || lyric.name === "AbortError" ? (
        <Messages
          msg={`No se encontro la cancion: "${search.song}"`}
          bgColor="#572364"
        />
      ) : (
        <SongLyric title={search.song} lyric={lyric.lyrics}></SongLyric>
      )}

      {bio.artists ? (
        <SongArtist artist={bio.artists[0]} />
      ) : (
        <Messages
          msg={`No existe el interprete: "${search.artist}"`}
          bgColor="#FF0000"
        />
      )}
    </>
  );
}

export default SongDetails;
