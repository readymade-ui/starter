// router
import { Router, routing } from './routing';

if (import.meta.env.DEV) {
  window['clientRouter'] = new Router('#root', routing);
}

export { Router, routing } from './routing';
// components

// views
export { HomeComponent } from './view/home';
