import axios from "axios";

function apiGetAllUsers() {
   console.log("into the request");
   try {
      return axios
         .get("https://jsonplaceholder.typicode.com/todos/1")
         .then(result => result.data)
         .catch(err => console.log("error", err));
   } catch (error) {
      console.log("error", error);
   }
}

export { apiGetAllUsers };
