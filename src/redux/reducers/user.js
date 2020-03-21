import { IS_FETCHING_DATA } from "../types/global";
import { GET_ALL_USERS } from "../types/user";

const initialState = {};

export default function(state = initialState, action) {
   switch (action.type) {
      case IS_FETCHING_DATA:
         return {
            ...state,
            loading: true
         };

      case GET_ALL_USERS:
         return {
            ...state,
            loading: false,
            data: action.payload
         };

      default:
         return state;
   }
}
