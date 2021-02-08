import React, { Component, Suspense } from 'react';

const NavbarComponent = React.lazy(() => import('./../components/NavbarComponent.jsx'));

export default class MainPage extends Component {
    render() {
        return(
            <Suspense fallback={<h1>Loading</h1>}>
                <NavbarComponent/>
            </Suspense>
        )
    }
}