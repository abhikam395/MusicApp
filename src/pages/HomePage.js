import React, { Component, Suspense} from 'react';
import './home.scss';

const MixedSongsLayoutHome  = React.lazy(() => import('../layouts/MixedSongsLayoutHome'));

export default class HomePage extends Component {

    render(){
        return (
            <main className="homepage homepage--size">
                <Suspense fallback={<h4>Loading..</h4>}>
                    <MixedSongsLayoutHome/>
                </Suspense>
            </main>
        )
    }
}