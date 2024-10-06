import { Component, CustomElement } from '@readymade/core';
import html from './home.html?raw';
import style from './home.scss?raw';

@Component({
  selector: 'app-home',
  style: style,
  template: html,
})
class HomeComponent extends CustomElement {
  constructor() {
    super();
  }
  public connectedCallback() {
    this.animateIn();
  }
  public animateIn() {
    if (!this.shadowRoot.querySelector) return;
    this.shadowRoot.querySelector('.app__icon').animate(
      [
        { opacity: '0', transform: 'translateZ(-1000px)' },
        { opacity: '1', transform: 'translateZ(0px)' },
      ],
      {
        duration: 2000,
        easing: 'cubic-bezier(0.19, 1, 0.22, 1)',
        fill: 'forwards',
      },
    );
  }
}

const template = () => `
<app-home>
  <template shadowroot="open">
  <style>
  ${style}
  </style>
  ${html}
  </template>
</app-home>
`;

export { HomeComponent, template };
