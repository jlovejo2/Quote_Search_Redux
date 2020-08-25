import { handleResponse, handleError } from "./apiUtils";
const kanyeWestQuoteURL = process.env.API_KANYE_WEST_URL;

export function getKanyeWest() {
  //promise based api that is built into modern browsers
  return fetch(kanyeWestQuoteURL).then(handleResponse).catch(handleError);
}
