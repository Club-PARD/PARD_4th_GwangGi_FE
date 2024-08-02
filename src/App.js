import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Router from './Layout/Router';
import {theme} from './Style/theme';
import {ThemeProvider} from 'styled-components';
//채채 왔다감

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Router/>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
