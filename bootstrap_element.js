import { LitElement, html, css, Directive, directive, repeat, unsafeHTML } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

export { html, css, unsafeHTML, Directive, directive, repeat };

export class BootstrapElement extends LitElement {

  static get styles() {
    return css([this.globalStyle]);
  }

  static register(tagName) {
    fetch('https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css').
      then(res => res.text()).
      then(style => {
        this.globalStyle = style;
        customElements.define(tagName, this);
      });
  }

}
