import { Router } from '@readymade/router';

const routing = [{ path: '/', component: 'app-home' }];

const router = new Router('#root', routing);

export { router };
