import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = function ({ children }) {

  // const API = import.meta.env.VITE_APP_URI_API
  const API = import.meta.env.VITE_APP_URI_API;
  console.log("API URL:", API); // Check if API is correctly fetched

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
    return localStorage.removeItem("token");
  };

  // JWT Authentication - get corrently logged in user data
  const userAuthentication = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API}/api/auth/user`, {
        method: "GET",
        headers: {
          Authorization: AuthorizationToken,
        },
      });
      console.log("Response userAuth status:", response);
      if (response.ok) {
        const data = await response.json();
        console.log("user data", data.userData);
        setUser(data.userData);
        setIsLoading(false);
      } else {
        console.error("Error fetching user data");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching user data", error);
    }
  };

  // services logic
  const getServices = async () => {
    try {
      const response = await fetch(`${API}/api/data/service`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Authorization: AuthorizationToken,
        }
      });
      console.log("Services response status:", response); 
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      // const responseText = await response.text(); // Log raw response
      // console.log("Raw response:", responseText);
      // const data = JSON.parse(responseText); // Parse if it's valid JSON
      const data = await response.json();
      console.log(data);
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
