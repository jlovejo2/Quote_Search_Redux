import { handleResponse, handleError } from "./apiUtils";
const ronSwansonQuoteURL = process.env.API_RON_SWANSON_URL;

export function getRonSwanson() {
  //promise based api that is built into modern browsers
  return fetch(ronSwansonQuoteURL).then(handleResponse).catch(handleError);
}
