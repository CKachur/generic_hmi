import React from 'react';

import AppHeader from './AppHeader';
import AppLauncher from './AppLauncher';

let apps = [
    { id: 1, name: 'Spotify', image: '/src/img/app-spotify.png', link: '/media' },
    { id: 2, name: 'NPR', image: '/src/img/app-npr.png', link: '/media' },
    { id: 3, name: 'VSCO', image: '/src/img/app-vsco.png', link: '/media' },
    { id: 4, name: 'Waze', image: '/src/img/app-waze.png', link: '/media' },
    { id: 5, name: 'Starbucks', image: '/src/img/app-starbucks.png', link: '/media'},
    { id: 6, name: 'Overcast', image: '/src/img/app-overcast.png', link: '/media'},
]

export default class HMIMenu extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <AppHeader appName="Menu" />
                <AppLauncher apps={apps} />
            </div>
        )
    }
}