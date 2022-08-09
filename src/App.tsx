import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import MainRoutes from './routes/MainRoutes'
import './index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
    return (
        <Router>
            <MainRoutes />
        </Router>
    );
};

export default App;