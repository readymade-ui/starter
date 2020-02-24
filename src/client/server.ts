import { HomeComponent } from './app/view/home';
import { AboutComponent } from './app/view/about';

const routes = [
    { path: '/', component: HomeComponent },
    { path: '/about', component: AboutComponent }
];

export { routes };