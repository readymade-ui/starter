/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
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
function setValueByString(obj, path, value) {
    const pList = path.split('.');
    const len = pList.length;
    for (let i = 0; i < len - 1; i++) {
        const elem = pList[i];
        if (!obj[elem]) {
            obj[elem] = {};
        }
        obj = obj[elem];
    }
    obj[pList[len - 1]] = value;
}
function bindTemplate() {
    if (this.bindState) {
        this.bindState();
    }
}
function setState(prop, model) {
    setValueByString(this.$state, prop, model);
}
function compileTemplate(elementMeta, target) {
    if (!elementMeta.style) {
        elementMeta.style = '';
    }
    if (!elementMeta.template) {
        elementMeta.template = '';
    }
    target.prototype.elementMeta = Object.assign(target.elementMeta ? target.elementMeta : {}, elementMeta);
    target.prototype.elementMeta.eventMap = {};
    target.prototype.template = `<style>${elementMeta.style}</style>${elementMeta.template}`;
    target.prototype.bindTemplate = bindTemplate;
    target.prototype.setState = setState;
}
function Component(meta) {
    if (!meta) {
        console.error('Component must include ElementMeta to compile');
        return;
    }
    return (target) => {
        compileTemplate(meta, target);
        if (meta.autoDefine === undefined) {
            meta.autoDefine = true;
        }
        if (meta.autoDefine === true) {
            if (meta.selector && !meta.custom) {
                customElements.define(meta.selector, target);
            }
            else if (meta.selector && meta.custom) {
                customElements.define(meta.selector, target, meta.custom);
            }
            else {
                customElements.define(meta.selector, target);
            }
        }
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

var css_248z = "[is=rd-button]{background:#181818;cursor:pointer;color:#fff;font-weight:700;padding:12px 8px;border-radius:4px}";
styleInject(css_248z);

var template = "<rd-nav>\n  <a href=\"/\">Home</a>\n  <a href=\"/about\">About</a>\n</rd-nav>\n<div class=\"card\">\n    <h1>Home</h1>\n    <p>This page was server side rendered.</p>\n</div>\n";

let HomeComponent = class HomeComponent extends CustomElement {
    constructor() {
        super();
    }
};
HomeComponent = __decorate([
    Component({
        selector: 'app-home',
        style: css_248z,
        template: template,
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);
customElements.define('app-home', HomeComponent);

var css_248z$1 = ":host .card{display:block;border-radius:4px;border:1px solid rgba(0,0,0,.2);box-shadow:0 3px 5px 0 rgba(0,0,0,.25);padding:8px;font-family:sans-serif}";
styleInject(css_248z$1);

var template$1 = "<rd-nav>\n    <a href=\"/\">Home</a>\n    <a href=\"/about\">About</a>\n</rd-nav>\n<div class=\"card\">\n    <h1>About</h1>\n    <p>This page was server side rendered.</p>\n</div>\n";

let AboutComponent = class AboutComponent extends CustomElement {
    constructor() {
        super();
    }
};
AboutComponent = __decorate([
    Component({
        selector: 'app-about',
        style: css_248z$1,
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
