import { CustomElement, Component } from '@readymade/core';

import style from './about.css';
import template from './about.html';

@Component({
    selector: 'app-about',
    style: style,
    template: template,
})
class AboutComponent extends CustomElement {

    constructor() {
        super();
    }
}

customElements.define('app-about', AboutComponent);

export { AboutComponent };
