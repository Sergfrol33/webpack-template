
import './style/index.scss'
import Recipes from "./components/Recipes";
import './style/_hero.scss'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from "./components/Home";
import React from 'react';

const App = () => {
    return (
        <Router>
            <Route path={'/'} exact component={Home}/>
            <Route path={'/recipes'} exact component={Recipes}/>
        </Router>
    )
}

export default App