import { GET_ERROR, IS_FETCHING_DATA } from "../types/global";

const doFetchingData = _ => ({ type: IS_FETCHING_DATA });

const doGetError = error => ({
   type: GET_ERROR,
   payload: error
});

export { doGetError, doFetchingData };
