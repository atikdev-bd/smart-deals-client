import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


const Home = () => {
  const user = useContext(AuthContext);

  

  console.log(user.user);

  return (
    <div>
      <h1>this is home component</h1>
    </div>
  );
};

export default Home;
