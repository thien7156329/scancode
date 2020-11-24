import React from 'react';
const Home = React.lazy(() => import('./component/Home/index'));

const routes = [
    { path: '/', exact: true, name: 'Home page', component: (() => {
        window._$g.rdr('/top');
        return null;
    })},
    { path: '/top', exact: true, name: 'Home', component: Home },
]

export default routes;