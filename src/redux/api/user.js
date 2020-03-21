import axios from "axios";

function apiGetAllUsers() {
   try {
      return axios
         .get("https://jsonplaceholder.typicode.com/todos/1")
         .then(result => result.data);
   } catch (error) {}
}

export { apiGetAllUsers };
