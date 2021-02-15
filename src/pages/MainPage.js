import React, { Component, Suspense } from 'react';
import './main.scss';

import { 
    BrowserRouter as Router, 
    Route, 
    Switch 
} 
from 'react-router-dom';

import LoadingComponent from './../components/common/LoadingComponent.jsx';

const NavbarComponent = React.lazy(() => import('./../components/navbar/index.jsx'));
const HomePage = React.lazy(() => import('./../pages/HomePage'));
const ExplorePage = React.lazy(() => import('./../pages/ExplorePage'));
const LibraryPage = React.lazy(() => import('./../pages/LibraryPage'));
const AlbumsPage = React.lazy(() => import('./../pages/newreleases/AlbumsPage'));
const VideosPage = React.lazy(() => import('./../pages/newreleases/VideosPage'));
const PageNotFound = React.lazy(() => import('./../pages/PageNotFound'));
const MoodsAndGenrePage = React.lazy(() => import('./../pages/MoodsAndGenrePage'));

export default function MainPage() {
    return(
        <div className="main main--size main--theme" id="main">
            <Suspense fallback={<LoadingComponent/>}>
                <Router>
                    <NavbarComponent/>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/library" component={LibraryPage}/>
                        <Route path="/explore" component={ExplorePage}/>
                        <Route exact path="/new_releases/albums" component={AlbumsPage}/>
                        <Route exact path="/new_releases/videos" component={VideosPage}/>
                        <Route exact path="/moods_and_genres" component={MoodsAndGenrePage}/>
                        <Route component={PageNotFound}/>
                    </Switch>
                </Router>
            </Suspense>
        </div>
    )
}