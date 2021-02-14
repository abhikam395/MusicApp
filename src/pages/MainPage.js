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

import Loadable from 'react-loadable';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const NavbarComponent = React.lazy(() => import('./../components/navbar/index.jsx'));
const HomePage = React.lazy(() => import('./../pages/HomePage'));
const ExplorePage = React.lazy(() => import('./../pages/ExplorePage'));
const LibraryPage = React.lazy(() => import('./../pages/LibraryPage'));
const AlbumsPage = React.lazy(() => import('./../pages/newreleases/AlbumsPage'));
const PageNotFound = React.lazy(() => import('./../pages/PageNotFound'));

export default function MainPage() {
    return(
        <div className="main main--size main--theme" id="main">
            <Suspense fallback={<h1>Loading</h1>}>
                <Router>
                    <NavbarComponent/>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/library" component={LibraryPage}/>
                        <Route path="/explore" component={ExplorePage}/>
                        <Route exact path="/new_releases/albums" component={AlbumsPage}/>
                        <Route component={PageNotFound}/>
                    </Switch>
                </Router>
            </Suspense>
        </div>
    )
}