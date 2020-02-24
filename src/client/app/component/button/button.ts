import { ButtonComponent, Component, Emitter, Listen, State } from '@readymade/core';

import style from './button.scss';
import template from './button.html';

class ButtonState {
    public model: string = 'Hello Readymade!';
    public message: string = 'Sent from Readymade';
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

    @Emitter('bang', { bubbles: true, composed: true }, 'main')
    @Listen('click')
    public onClick(event: MouseEvent) {
        this.sendMessage(this.getState().message);
    }
    @Listen('keyup')
    public onKeyUp(event: KeyboardEvent) {
        if (event.key === 'Enter') {
            this.sendMessage(this.getState().message);
        }
    }

    sendMessage(msg: string) {
        this.emitter.broadcast(new CustomEvent('bang', {
            detail: {
                message: msg
            }
        }), 'main');
    }
}

customElements.define('rd-button', RdButtonComponent, { extends: 'button' });

export { RdButtonComponent };
