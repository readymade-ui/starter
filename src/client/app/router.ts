import { Router } from '@readymade/router';

const routing = [
  { path: '/', component: 'app-home' },
  { path: '/about', component: 'app-about' }
];

const router = new Router('#root', routing);

export { router };
