import {
   GET_FETCHING_DATA_USERS,
   GET_ALL_USERS,
   GET_USER_BY_ID,
   SET_DATA_USER
} from "../types/user";

const doIsFetchingData = _ => ({ type: GET_FETCHING_DATA_USERS });
const doGetAllUsers = _ => ({ type: GET_ALL_USERS });
const doGetUserDataById = id => ({ type: GET_USER_BY_ID, payload: id });
const doSetDataUser = data => ({ type: SET_DATA_USER, payload: data });

export { doIsFetchingData, doGetAllUsers, doGetUserDataById, doSetDataUser };
