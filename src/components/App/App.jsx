import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doGetAllUsers } from "../../redux/actions/user";

function App() {
   const user = useSelector(state => state.user);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(doGetAllUsers());
   }, [dispatch]);

   return <>Hola mundo! - {JSON.stringify(user)} </>;
}

export default App;
