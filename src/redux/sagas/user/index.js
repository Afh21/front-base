import { call, put } from "redux-saga/effects";

import { doFetchingData, doGetError } from "../../actions/global";
import { doGetAllUsers } from "../../actions/user";
import { apiGetAllUsers } from "../../api/user";

function* sagaGetAllUsers() {
   try {
      yield put(doFetchingData());
      const result = yield call(apiGetAllUsers);
      yield put(doGetAllUsers(result));
   } catch (error) {
      yield put(doGetError(error));
   }
}

export { sagaGetAllUsers };
