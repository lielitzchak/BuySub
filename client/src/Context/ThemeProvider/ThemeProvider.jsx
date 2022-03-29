import React,{createContext,useState,useEffect} from 'react';

export const themeContext = createContext();

export default function ThemeProvider({children}) {

    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(isDarkMode ? 'dark' : 'light');
      }, []);

  return(
    <themeContext.Provider value={{theme,setTheme}}>
        {children}
    </themeContext.Provider>
  )
}
