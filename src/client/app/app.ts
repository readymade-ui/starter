import { ButtonComponent, Component, Emitter, Listen, State, html, css } from '@readymade/core';

class ButtonState {
    public model: string = 'Hello Readymade!';
}

@Component({
    selector: 'app-button',
    style: css`
		:host {
			background: rgba(24, 24, 24, 1);
			cursor: pointer;
			color: white;
			font-weight: 400;
		}
	`,
    template: html`
   <span>{{model}}</span>
	`,
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
