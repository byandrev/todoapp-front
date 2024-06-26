import { useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";

function useUser() {
  const { user, token, loading, login, logout } = useContext(UserContext);

  return {
    user,
    token,
    loading,
    login,
    logout,
  };
}

export default useUser;
