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
const PageNotFoundPage = React.lazy(() => import('./../pages/PageNotFound'));
const MoodsAndGenrePage = React.lazy(() => import('./../pages/MoodsAndGenrePage'));
const NewReleasePage = React.lazy(() => import('./../pages/newreleases/NewReleasePage'));
const ChartsPage = React.lazy(() => import('./../pages/ChartsPage'));
const PlaylistPage = React.lazy(() => import('./../pages/PlaylistPage'));

export default function mainPage(props) {
    return(
        <div className="main main--size main--theme" id="main">
                <Router>
                    <Suspense fallback={<LoadingComponent/>}>
                        <NavbarComponent/>
                        <Suspense fallback={<LoadingComponent/>}>
                            <Switch>
                                <Route exact path="/" component={HomePage}/>
                                <Route path="/library" component={LibraryPage}/>
                                <Route path="/explore" component={ExplorePage}/>
                                <Route path="/charts" component={ChartsPage}/>
                                <Route exact path="/new_releases" component={NewReleasePage}/>
                                <Route path="/new_releases/albums" component={AlbumsPage}/>
                                <Route path="/new_releases/videos" component={VideosPage}/>
                                <Route path="/moods_and_genres" component={MoodsAndGenrePage}/>
                                <Route exact path="/playlist" component={PlaylistPage}/>
                                <Route component={PageNotFoundPage}/>
                            </Switch>
                        </Suspense>
                    </Suspense>
                </Router>
        </div>
    )
}