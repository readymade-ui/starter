import { Component, CustomElement } from '@readymade/core';
import template from './nav.html';
import style from './nav.scss';

@Component({
  selector: 'rd-nav',
  style: style,
  template: template
})
class RdNavComponent extends CustomElement {
  constructor() {
    super();
  }
}

export { RdNavComponent };
