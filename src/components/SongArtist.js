import React from "react";

import { capitalizeFirstChar } from "../helper/helpFunctions";

function SongArtist({ artist }) {
  return (
    <section>
      <h3>{capitalizeFirstChar(artist.strArtist)}</h3>
      <img src={artist.strArtistThumb} alt={artist.strArtist}></img>
      <p>
        {artist.intBornYear} - {artist.intDiedYear || "Presente"}
      </p>
      <p>{artist.strCountry}</p>
      <p>{artist.strGenre}</p>
      <a href={`https://${artist.strWebsite}`} target="_blank" rel="noreferrer">
        {artist.strWebsite}
      </a>
      <p>{artist.strBiographyES}</p>
    </section>
  );
}

export default SongArtist;
