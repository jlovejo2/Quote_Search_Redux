import { handleResponse, handleError } from "./apiUtils";
const taylorSwiftQuoteURL = process.env.API_TAYLOR_SWIFT_URL;

export function getTaylorSwift() {
  //promise based api that is built into modern browsers
  return fetch(taylorSwiftQuoteURL).then(handleResponse).catch(handleError);
}
