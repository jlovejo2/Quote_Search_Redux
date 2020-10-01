import { handleResponse, handleError } from "./apiUtils";
const dadJokeURL = process.env.API_DAD_JOKE_URL;

export function getDadJoke() {
  //promise based api that is built into modern browsers
  return fetch(dadJokeURL, {
    method: "GET",
    headers: { Accept: "application/json" },
  })
    .then(handleResponse)
    .catch(handleError);
}
