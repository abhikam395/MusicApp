import React, { Component, Fragment, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import './library.scss';

const RecentActivityLayout = React.lazy(() => import('./../layouts/library/RecentActivityLibraryLayout'));
const MenusLibraryComponent = React.lazy(() => import('./../components/library/MenusLibraryComponent.jsx'));

const PlaylistsPage = React.lazy(() => import('./../pages/PlaylistPageLibraryPage'));
const ArtistsPage = React.lazy(() => import('./../pages/ArtistsLibraryPage'));
const AlbumsPage = React.lazy(() => import('./../pages/AlbumsLibraryPage'));
const SongsPage = React.lazy(() => import('./../pages/SongsLibraryPage'));
const SubscriptionsPage = React.lazy(() => import('./../pages/SubscriptionsLibraryPage'));


export default class LibraryPage extends Component {

    constructor(props){
        super(props);
    }

    render(){
        let { path, url } = this.props.match;
        return (
            <Fragment>
                <RecentActivityLayout/>
                <MenusLibraryComponent {...this.props}/>
                <Suspense fallback={<div>Loading</div>}>
                    <Switch>
                        <Route path={path} exact component={PlaylistsPage}/>
                        <Route path={`${path}/albums`} component={AlbumsPage}/>
                        <Route path={`${path}/songs`} component={SongsPage}/>
                        <Route path={`${path}/artists`} component={ArtistsPage}/>
                        <Route path={`${path}/subscriptions`} component={SubscriptionsPage}/>
                    </Switch>
                </Suspense>
            </Fragment>
        )
    }
}