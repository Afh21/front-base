import { GET_FETCHING_DATA_USERS, SET_DATA_USER } from "../types/user";

const initialState = {};

export default function(state = initialState, action) {
   switch (action.type) {
      case GET_FETCHING_DATA_USERS:
         return {
            ...state,
            loading: true
         };

      case SET_DATA_USER:
         return {
            ...state,
            loading: false,
            data: action.payload
         };

      default:
         return state;
   }
}
