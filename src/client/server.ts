import { RCodeComponent } from './app/component/code';
import { RNavComponent } from './app/component/nav';
import { AboutComponent } from './app/view/about';
import { HomeComponent } from './app/view/home';

// mock BroadcastChannel for SSR
function BroadcastChannel(channel) {}
global['BroadcastChannel'] = BroadcastChannel as any;
global['observer$'] = {
  observe: () => {}
};

const routes = [
  { path: '/', component: HomeComponent },
  { path: '/about', component: AboutComponent }
];

export { routes, RNavComponent, RCodeComponent };
