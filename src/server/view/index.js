/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function attachShadow(instance, options) {
    const shadowRoot = instance.attachShadow(options || {});
    const t = document.createElement('template');
    t.innerHTML = instance.template;
    shadowRoot.appendChild(t.content.cloneNode(true));
    instance.bindTemplate();
}
function bindTemplate() {
    if (this.bindState) {
        this.bindState();
    }
}
function setState(prop, model) {
    this.$state[prop] = model;
}
function compileTemplate(elementMeta, target) {
    target.prototype.elementMeta = Object.assign(target.elementMeta ? target.elementMeta : {}, elementMeta);
    target.prototype.elementMeta.eventMap = {};
    target.prototype.template = `<style>${elementMeta.style}</style>${elementMeta.template}`;
    target.prototype.bindTemplate = bindTemplate;
    target.prototype.setState = setState;
}
function Component(attributes) {
    if (!attributes) {
        console.error('Component must include ElementMeta to compile');
        return;
    }
    return (target) => {
        compileTemplate(attributes, target);
        return target;
    };
}
class CustomElement extends HTMLElement {
    constructor() {
        super();
        attachShadow(this, { mode: 'open' });
        if (this.bindEmitters) {
            this.bindEmitters();
        }
        if (this.bindListeners) {
            this.bindListeners();
        }
        if (this.onInit) {
            this.onInit();
        }
    }
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "[is=rd-button]{background:#181818;cursor:pointer;color:#fff;font-weight:700;padding:12px 8px;border-radius:4px}";
var style = {};
styleInject(css);

var template = "<h1>Home</h1>\n<button is=\"rd-button\"></button>\n";

let HomeComponent = class HomeComponent extends CustomElement {
    constructor() {
        super();
    }
};
HomeComponent = __decorate([
    Component({
        selector: 'app-home',
        style: style,
        template: template,
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);
customElements.define('app-home', HomeComponent);

var css$1 = "";
var style$1 = {};
styleInject(css$1);

var template$1 = "<h1>About</h1>\n<p>This page is about something.</p>\n";

let AboutComponent = class AboutComponent extends CustomElement {
    constructor() {
        super();
    }
};
AboutComponent = __decorate([
    Component({
        selector: 'app-about',
        style: style$1,
        template: template$1,
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);
customElements.define('app-about', AboutComponent);

const routes = [
    { path: '/', component: HomeComponent },
    { path: '/about', component: AboutComponent }
];

export { routes };
