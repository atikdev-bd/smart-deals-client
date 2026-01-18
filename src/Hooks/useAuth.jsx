import { use } from "react";
import { AuthContext } from "../context/AuthContext";

const useAuth = () => {
  const contextInfo = use(AuthContext);
  return contextInfo;
};

export default useAuth;
