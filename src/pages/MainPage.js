import React, { Component, Suspense } from 'react';
import './main.scss';

import { 
    BrowserRouter as Router, 
    Link, 
    Redirect, 
    Route, 
    Switch 
} 
from 'react-router-dom';

const NavbarComponent = React.lazy(() => import('./../components/navbar/index.jsx'));
const HomePage = React.lazy(() => import('./../pages/HomePage'));
const ExplorePage = React.lazy(() => import('./../pages/ExplorePage'));
const LibraryPage = React.lazy(() => import('./../pages/LibraryPage'));

export default class MainPage extends Component {
    render() {
        return(
            <div className="main main--size main--theme" id="main">
                <Suspense fallback={<h1>Loading</h1>}>
                    <Router>
                        <NavbarComponent/>
                        <Switch>
                            <Route exact path="/" component={HomePage}/>
                            <Route exact path="/library" component={LibraryPage}/>
                            <Route exacts path="/explore" component={ExplorePage}/>
                            <Route path="/library/*" render={() => {
                                return <Redirect to="/library/artists"></Redirect>
                            }} />
                        </Switch>
                    </Router>
                </Suspense>
            </div>
        )
    }
}