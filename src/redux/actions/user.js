import { GET_USER_BY_ID, GET_ALL_USERS } from "../types/user";

const doGetAllUsers = data => ({ type: GET_ALL_USERS, payload: data });
const doGetUserDataById = id => ({ type: GET_USER_BY_ID, payload: id });

export { doGetUserDataById, doGetAllUsers };
