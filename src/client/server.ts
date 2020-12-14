import { HomeComponent } from './app/view/home';

// mock BroadcastChannel for server-side rendering
function BroadcastChannel(channel) {}
global['BroadcastChannel'] = BroadcastChannel as any;
global['observer$'] = {
  observe: () => {}
};

const routes = [{ path: '/', component: HomeComponent }];

export { routes };
