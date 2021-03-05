import { CustomElement, Component, Emitter, Listen, State } from '@readymade/core';

class ButtonState {
    public model: string = 'Hello Readymade!';
    public message: string = 'Sent from Readymade';
}

@Component({
    selector: 'rd-button',
    style: `
    :host {
        background: rgba(24, 24, 24, 1);
        cursor: pointer;
        color: white;
        font-weight: 700;
        padding: 12px 8px;
        border-radius: 4px;
    }
    `,
    template: `<span>{{model}}</span>`,
})
class RdButtonComponent extends CustomElement {

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

customElements.define('rd-button', RdButtonComponent);

export { RdButtonComponent };
