import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import MainRoutes from './routes/MainRoutes'
import './index.css';

const App = () => {
    return (
        <Router>
            <MainRoutes />
        </Router>
    );
};

export default App;