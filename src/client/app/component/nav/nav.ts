import { Component, CustomElement } from '@readymade/core';

import style from './nav.scss';
import template from './nav.html';


@Component({
    selector: 'rd-nav',
    style: style,
    template: template,
})
class RdNavComponent extends CustomElement {
    constructor() {
        super();
    }
}

customElements.define('rd-nav', RdNavComponent);

export { RdNavComponent };
