import { ButtonComponent, Component, Emitter, Listen, State } from '@readymade/core';

import style from './button.scss';
import template from './button.html';

class ButtonState {
    public model: string = 'Hello Readymade!';
}

@Component({
    selector: 'rd-button',
    style: style,
    template: template,
})
class RdButtonComponent extends ButtonComponent {

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

customElements.define('rd-button', RdButtonComponent, { extends: 'button' });

export { RdButtonComponent };
