import React from "react";

import { capitalizeFirstChar } from "../helper/helpFunctions";

function SongLyric({ title, lyric }) {
  return (
    <section>
      <h3>{capitalizeFirstChar(title)}</h3>
      <blockquote style={{ whiteSpace: "pre-wrap" }}>{lyric}</blockquote>
    </section>
  );
}

export default SongLyric;
