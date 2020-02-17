import { Router } from '@vaadin/router';

const outlet = document.getElementById('root');

const routing = new Router(outlet);

routing.setRoutes([
    { path: '/', component: 'app-home' },
    { path: '/about', component: 'app-about' }
]);


export { routing }