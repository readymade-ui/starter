import { ButtonComponent, Component, Emitter, Listen, State, html } from '@readymade/core';

import style from './app.css';
import template from './app.html';

class ButtonState {
    public model: string = 'Hello Readymade!';
}

@Component({
    selector: 'app-button',
    style: style,
    template: template,
})
class AppButtonComponent extends ButtonComponent {

    constructor() {
        super();
    }

    @State()
    public getState() {
        return new ButtonState();
    }

    @Emitter('bang', { bubbles: true, composed: true })
    @Listen('click')
    public onClick(event: MouseEvent) {
        this.emitter.broadcast('bang');
    }
    @Listen('keyup')
    public onKeyUp(event: KeyboardEvent) {
        if (event.key === 'Enter') {
            this.emitter.broadcast('bang');
        }
    }
}

customElements.define('app-button', AppButtonComponent, { extends: 'button' });

export { ButtonComponent, Component, Emitter, Listen, State, ButtonState, AppButtonComponent };
