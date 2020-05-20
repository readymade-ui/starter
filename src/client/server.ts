import { RdNavComponent } from './app/component/nav';
import { HomeComponent } from './app/view/home';
import { AboutComponent } from './app/view/about';

// mock BroadcastChannel for SSR
function BroadcastChannel(channel) { }
global['BroadcastChannel'] = BroadcastChannel;
global['observer$'] = {
  observe: () => {}
};

const routes = [
    { path: '/', component: HomeComponent },
    { path: '/about', component: AboutComponent }
];

export { routes, RdNavComponent };