import React, { Component, Suspense } from 'react';
import './main.scss';

import { 
    BrowserRouter as Router, 
    Link, 
    Route, 
    Switch 
} 
from 'react-router-dom';

const NavbarComponent = React.lazy(() => import('./../components/navbar/index.jsx'));
const HomePage = React.lazy(() => import('./../pages/HomePage'));

export default class MainPage extends Component {
    render() {
        return(
            <div className="main main--size main--theme" id="main">
                <Suspense fallback={<h1>Loading</h1>}>
                    <NavbarComponent/>
                    <Router>
                        <Switch>
                            <Route path="/" exact component={HomePage}/>
                        </Switch>
                    </Router>
                </Suspense>
            </div>
        )
    }
}