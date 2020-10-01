import { handleResponse, handleError } from "./apiUtils";
const chuckNorrisJokeURL = process.env.API_CHUCK_NORRIS_JOKE_URL;

export function getChuckNorrisJoke() {
  return fetch(chuckNorrisJokeURL + "jokes/random/", {
    method: "GET",
  })
    .then(handleResponse)
    .catch(handleError);
}
