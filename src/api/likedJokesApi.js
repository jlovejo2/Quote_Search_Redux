import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/likedJokes/";

export function getJokes() {
  console.log(baseUrl);
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function deleteJoke(joke) {
  return fetch(baseUrl + joke.id, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}

export function favoritingJoke(joke) {
  console.log("entered favorite joke function...");
  return fetch(baseUrl, {
    method: "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(joke),
  })
    .then(handleResponse)
    .catch(handleError);
}
