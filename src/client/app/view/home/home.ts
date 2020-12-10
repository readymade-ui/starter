import { Component, CustomElement } from '@readymade/core';
import template from './home.html';
import style from './home.scss';

@Component({
  selector: 'app-home',
  style: style,
  template: template,
})
class HomeComponent extends CustomElement {
  constructor() {
    super();
  }
}

export { HomeComponent };
