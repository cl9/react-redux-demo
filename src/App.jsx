import React from 'react';
import AppBreadCrumbs from './AppBreadCrumbs'
import {
    BrowserRouter as Router,
} from 'react-router-dom'

function App() {
    return (
        <Router>
            <AppBreadCrumbs/>
        </Router>
    );
}

export default App;
