import React, { useState, createContext, useContext } from "react";
import axios from 'axios'
const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username, password) => {

    const temp = { username: username, password: password };
    axios.post('http://localhost:8000/api/token/', {
      "username": username,
      "password": password
    }).then((response) => {
      console.log(response);
      setUser(temp);
    }, (error) => {
      console.log(error);
    });
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };