import { GET_ERROR } from "../types/global";

const doGetError = error => ({
   type: GET_ERROR,
   payload: error
});

export { doGetError };
