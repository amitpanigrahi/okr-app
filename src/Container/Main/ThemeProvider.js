import React, {useState} from "react";

export const ThemeProvider = ({children}) => {
    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const toggleTheme = () => setIsDarkTheme(!isDarkTheme);
    return (
        <ThemeContext.Provider value={{
            isDarkTheme,
            toggleTheme,
        }}>
            {children(isDarkTheme, toggleTheme)}
        </ThemeContext.Provider>
    )
}

const ThemeContext = React.createContext({});

export default ThemeContext;
