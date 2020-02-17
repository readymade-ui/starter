import { CustomElement, Component } from '@readymade/core';

import style from './home.css';
import template from './home.html';

@Component({
    selector: 'app-home',
    style: style,
    template: template,
})
class HomeComponent extends CustomElement {

    constructor() {
        super();
    }
}

customElements.define('app-home', HomeComponent);

export { HomeComponent };
