import React, { Component, Fragment } from 'react';
import './explore.scss';

const CategoriesExploreLayout = React.lazy(() => import('./../layouts/explore/CategoriesExploreLayout'));
const NewAlbumsExploreLayout = React.lazy(() => import('../layouts/explore/NewAlbumsExploreLayout'));
const MoodsGenresExploreLayout = React.lazy(() => import('../layouts/explore/MoodsGenresExploreLayout'));
const TrendingExploreLayout = React.lazy(() => import('./../layouts/explore/TrendingExploreLayout'));

export default class ExplorePage extends Component {

    render(){
        return(
            <Fragment>
                <CategoriesExploreLayout/>
                <NewAlbumsExploreLayout/>
                <MoodsGenresExploreLayout/>
                <TrendingExploreLayout/>
            </Fragment>
        )
    }
}