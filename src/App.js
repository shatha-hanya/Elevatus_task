/* App.js holding Home Component*/

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home";
import "./Style/Style.css";

export default function App() {
    return (
        <>
            <Router>
                    <Route path="/"><Home /></Route>
            </Router>
        </>
    );
}
