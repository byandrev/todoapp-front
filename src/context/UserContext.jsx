import {
  useState,
  createContext,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import * as userService from "../services/UserService.js";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [loading, setLoading] = useState(false);

  const login = async (token) => {
    setToken(token)
    setUser({
      username: '',
      token
    })
    
    localStorage.setItem("token", token);
  };

  const logout = useCallback(() => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }, []);

  useEffect(() => {
    const verifyLogin = async () => {
      const tokenInLocalStorage = localStorage.getItem("token");

      if (tokenInLocalStorage) {
        setToken(tokenInLocalStorage);
        setLoading(true);

        const data = await userService.getInfo(tokenInLocalStorage);
        const isLogged = data.code !== 'token_not_valid';

        if (isLogged && !isLogged.error) {
          setUser({ username: isLogged.name, token: tokenInLocalStorage });
        } else {
          setUser(null);
        }

        setLoading(false);
      }
    };

    verifyLogin();
  }, []);

  const value = useMemo(() => {
    return {
      user,
      token,
      loading,
      login,
      logout,
    };
  }, [user, token, loading, login, logout]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserProvider, UserContext };
