import { takeEvery, all } from "redux-saga/effects";
import { GET_ALL_USERS } from "../types/user";
import { sagaGetAllUsers } from "./user/index";

function* watchAll() {
   yield all([takeEvery(GET_ALL_USERS, sagaGetAllUsers)]);
}

export default watchAll;
