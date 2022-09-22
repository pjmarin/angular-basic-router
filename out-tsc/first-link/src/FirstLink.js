import { __decorate } from "tslib";
import { html, css, LitElement, property } from 'lit-element';
export class FirstLink extends LitElement {
    constructor() {
        super(...arguments);
        this.title = 'Hey there';
        this.counter = 5;
    }
    render() {
        return html `
      <p>my first link is finally working !!!</p>
    `;
    }
}
FirstLink.styles = css `
    :host {
    }
  `;
__decorate([
    property({ type: String })
], FirstLink.prototype, "title", void 0);
__decorate([
    property({ type: Number })
], FirstLink.prototype, "counter", void 0);
//# sourceMappingURL=FirstLink.js.map