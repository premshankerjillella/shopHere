import React, { useState, createContext, useContext } from "react";
import { ThemeProvider, createMuiTheme, CssBaseline } from "@material-ui/core";

const AppThemeContext = createContext({});
const darkTheme =  createMuiTheme({
    palette: {
      type: 'dark',
      },
  })
  const lightTheme = createMuiTheme({
    palette:{
      type:'light',
    },
  })
const AppThemeProvider = ({ children }) => {
  const [appTheme, setappTheme] = useState(lightTheme); 
  const toggleAppTheme = () =>{
      setappTheme(appTheme == darkTheme ? lightTheme : darkTheme)
  }
  return (
    <AppThemeContext.Provider value={{ appTheme, toggleAppTheme}}>
      {children}
    </AppThemeContext.Provider>
  );
};

const useAppTheme = () => useContext(AppThemeContext);

export { useAppTheme, AppThemeProvider };