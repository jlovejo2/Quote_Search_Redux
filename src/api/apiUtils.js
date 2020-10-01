export async function handleResponse(response) {
  console.log("entered handle response");
  if (response.ok) return response.json();
  if (response.status === 400) {
    // So, a server-side validation error occurred.
    // Server side validation returns a string error message, so parse as text instead of json.
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error("Network response was not ok.");
}

// In a real app, would likely call an error logging service.
export function handleError(error) {
  // eslint-disable-next-line no-console
  console.error("API call failed. " + error);
  throw error;
}

export function removeItem(array, action) {
  return array.filter((item, index) => index !== action.index);
}

export function insertItem(array, state) {
  console.log("in insert item function: ", array, state);
  let newArray = array.slice();
  newArray.splice(0, state);
  console.log("returned array: ", newArray);
  return newArray;
}

export function updateObjInArr(array, action) {
  return array.map((objInArray, index) => {
    if (index !== action.index) {
      return objInArray;
    } else {
      return { ...objInArray, ...action.item };
    }
  });
}

export function testFunction() {}
