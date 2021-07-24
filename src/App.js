import './Styles/_global.scss';
import HomePage from "./Pages/Home";
import {ThemeProvider} from "./Container/Main/ThemeProvider";

const App = () => {
    return (
        <ThemeProvider>
            {(isDarkTheme, toggleTheme) => <div className={`${isDarkTheme ? 'theme__dark' : 'theme__light'} h-100`}>
                <div className={'btn-theme-toggle p-1 font12'} onClick={toggleTheme}>{isDarkTheme ? 'Light' : 'Dark'}</div>
                <HomePage/>
            </div>}
        </ThemeProvider>
    );
}

export default App;
