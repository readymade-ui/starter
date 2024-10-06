const contentTemplate = `
  <h1>Page</h1>
  <p>
    This is a page.
  </p>
`;

const shadowTemplate = `<div id="content-root">${contentTemplate}</div> `;

export class PageView extends HTMLElement {
  constructor() {
    super();
    const shadowRoot: ShadowRoot = this.attachShadow({ mode: "open" });
    const template = document.createElement("template");
    template.innerHTML = shadowTemplate;
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

export const template = () => `
<page-view>
  <template shadowroot="open">
    <div id="content-root">
      ${contentTemplate}
    </div>
  </template>
</page-view>
`;

customElements.define("page-viee", PageView);
