import { Component, CustomElement } from '@readymade/core';
import template from './about.html';
import style from './about.scss';

@Component({
  selector: 'app-about',
  style: style,
  template: template
})
class AboutComponent extends CustomElement {
  constructor() {
    super();
  }
}

export { AboutComponent };
