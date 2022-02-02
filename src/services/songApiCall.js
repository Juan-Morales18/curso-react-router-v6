import { helpHttp } from "../helper/helpHttp";

async function songApiCall(search) {
  const { artist, song } = search;

  let artistUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
  let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

  console.log(artistUrl, songUrl);

  const [artistRes, songRes] = await Promise.all([
    helpHttp().get(artistUrl),
    helpHttp().get(songUrl),
  ]);

  console.log(artistRes, songRes);
  const response = {
    artistRes,
    songRes,
  };

  return response;
}

export default songApiCall;
