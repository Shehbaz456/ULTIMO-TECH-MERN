import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = function ({ children }) {

  // const API = import.meta.env.VITE_APP_URI_API
  const API = import.meta.env.VITE_APP_URI_API;
  // console.log("API URL:", API); // Check if API is correctly fetched

  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [services, setServices] = useState([]);
  const AuthorizationToken = `Bearer ${token}`;


  // Storing Token in Local Storage
  const storeTokenInLS = (ServerToken) => {
    setToken(ServerToken);
    return localStorage.setItem("token", ServerToken);
  };

  let isLoggedIn = !!token;

  // Takeling Logout functinality
  const LogoutUser = () => {
    setToken("");
    setUser(null); // Clear user on logout
    return localStorage.removeItem("token");
  };

  // JWT Authentication - get corrently logged in user data
  const userAuthentication = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API}/api/auth/user`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: AuthorizationToken,
        },
      });
      
      if(response.status === 401) {
        console.log("Unauthorized: Token might be invalid or expired. Logging out...");
        setUser(null); // Clear user
        LogoutUser();  // Clear invalid token from local storage
        setIsLoading(false);
      }
      if(response.ok) {
        const data = await response.json();
        console.log("user data", data.userData);
        setUser(data.userData);
        setIsLoading(false);
        
      }

    } catch (error) {
      console.error("Error fetching user data", error);
    } finally {
      setIsLoading(false);
    }
  };

  // services logic
  const getServices = async () => {
    try {
      const response = await fetch(`${API}/api/data/service`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setServices(data);
      
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  useEffect(() => {
    getServices();
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        storeTokenInLS,
        LogoutUser,
        user,
        services,
        AuthorizationToken,
        isLoading,
        API,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const AuthContextValue = useContext(AuthContext);
  if (!AuthContextValue) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return AuthContextValue;
};
