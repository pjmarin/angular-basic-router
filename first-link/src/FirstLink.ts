import { html, css, LitElement, property } from 'lit-element';

export class FirstLink extends LitElement {
  static styles = css`
    :host {
    }
  `;

  @property({ type: String }) title = 'Hey there';

  @property({ type: Number }) counter = 5;

  

  render() {
    return html`
      <p>my first link is finally working !!!</p>
    `;
  }
}
