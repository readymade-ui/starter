
import { RdRouter } from './router/index';

const routing = [
    { path: '/', component: 'app-home' },
    { path: '/about', component: 'app-about' }
];

const rdrouter = new RdRouter('#root', routing);

export { rdrouter }