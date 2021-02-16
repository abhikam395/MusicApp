import React, { Component, Fragment } from 'react';
import './explore.scss';

const CategoriesLayout = React.lazy(() => import('./../layouts/explore/CategoriesExploreLayout'));
const NewAlbumsLayout = React.lazy(() => import('../layouts/explore/NewAlbumsExploreLayout'));
const MoodsGenresLayout = React.lazy(() => import('../layouts/explore/MoodsGenresExploreLayout'));
const TrendingLayout = React.lazy(() => import('./../layouts/explore/TrendingExploreLayout'));
const NewMusicVideosLayout = React.lazy(() => import('./../layouts/explore/NewMusicVideosExploreLayout'));

export default class ExplorePage extends Component {

    render(){
        return(
            <Fragment>
                <CategoriesLayout {...this.props}/>
                <NewAlbumsLayout/>
                <MoodsGenresLayout/>
                <TrendingLayout/>
                <NewMusicVideosLayout/>
            </Fragment>
        )
    }
}