import React, { Component, Suspense} from 'react';
import './home.scss';

const MixedSongsHomeLayout  = React.lazy(() => import('../layouts/MixedSongsHomeLayout'));
const YourFavouriteHomeLayout = React.lazy(() => import('../layouts/YourFavouriteHomeLayout'));
const LivePerformanceHomeLayout = React.lazy(() => import('./../layouts/LivePerformanceHomeLayout'));

export default class HomePage extends Component {

    render(){
        return (
            <main className="homepage homepage--size">
                <Suspense fallback={<h4>Loading..</h4>}>
                    <MixedSongsHomeLayout/>
                    <YourFavouriteHomeLayout/>
                    <LivePerformanceHomeLayout/>
                </Suspense>
            </main>
        )
    }
}