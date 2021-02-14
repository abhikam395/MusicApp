import React, { Component, Fragment, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import './library.scss';

import LoadingComponent from './../components/common/LoadingComponent.jsx';

const RecentActivityLayout = React.lazy(() => import('./../layouts/library/RecentActivityLibraryLayout'));
const MenusLibraryComponent = React.lazy(() => import('./../components/library/MenusLibraryComponent.jsx'));

const PlaylistsPage = React.lazy(() => import('./../pages/PlaylistPageLibraryPage'));
const ArtistsPage = React.lazy(() => import('./../pages/ArtistsLibraryPage'));
const AlbumsPage = React.lazy(() => import('./../pages/AlbumsLibraryPage'));
const SongsPage = React.lazy(() => import('./../pages/SongsLibraryPage'));
const SubscriptionsPage = React.lazy(() => import('./../pages/SubscriptionsLibraryPage'));


export default function LibraryPage(props) {

    let { match } = props;
    
    return (
        <Fragment>
            <RecentActivityLayout/>
            <MenusLibraryComponent {...props} />
            <Suspense fallback={<LoadingComponent/>}>
                <Route path={match.path} exact component={PlaylistsPage}/>
                <Route path={`${match.path}/albums`} component={AlbumsPage}/>
                <Route path={`${match.path}/songs`} component={SongsPage}/>
                <Route path={`${match.path}/artists`} component={ArtistsPage}/>
                <Route path={`${match.path}/subscriptions`} component={SubscriptionsPage}/>
            </Suspense>
        </Fragment>
    )
}