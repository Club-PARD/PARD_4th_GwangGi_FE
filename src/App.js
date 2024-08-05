import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Router from './Layout/Router';
import {theme} from './Style/theme';
import { ThemeProvider } from 'styled-components';

import './Style/Font/Font.css';

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
