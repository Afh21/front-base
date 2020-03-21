import { call, put } from "redux-saga/effects";

import { doGetError } from "../../actions/global";
import { doSetDataUser, doIsFetchingData } from "../../actions/user";

import { apiGetAllUsers } from "../../api/user";

function* sagaGetAllUsers() {
   try {
      yield put(doIsFetchingData());
      const result = yield call(apiGetAllUsers);
      yield put(doSetDataUser(result));
   } catch (error) {
      yield put(doGetError(error));
   }
}

export { sagaGetAllUsers };
