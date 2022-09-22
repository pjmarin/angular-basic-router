import { LitElement, html, css, property } from 'lit-element';
import { openWcLogo } from './open-wc-logo.js';

import { until } from 'lit-html/directives/until.js';



export class BasicRouter extends LitElement {
  @property({ type: String }) title = 'My app';

  static styles = css`
    :host {
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      margin: 0 auto;
      background-color: var(--basic-router-background-color);
    }

    /*textarea {
      margin: 0 auto;
      width: 95%;
      height: 100%;
      display: block !important;
      min-height: 90vh;
    }

    pre {
      text-overflow: ellipsis;
      overflow: auto;
      white-space: pre-line;
    }*/

    pre {
      display: -webkit-box;
      -webkit-line-clamp: 20000;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
   
  `;

  async displayItems() {
    // const content: Promise<string> = fetch('https://data.cityofchicago.org/resource/8pix-ypme.json').then(r => r.text());
    // return JSON.stringify(JSON.parse(await content), undefined, 2);

    const content: Promise<string> = fetch('https://data.cityofchicago.org/resource/8pix-ypme.json').then(async (r) => JSON.stringify(JSON.parse((await r.text())), undefined, 2));
    return content;
  }

  async displayItemsNoPretty() {
    const content: Promise<string> = fetch('https://data.cityofchicago.org/resource/8pix-ypme.json').then(r => r.text());
    return content;
  }

  render() {
    


    return html`
      <button>click aqui</button>
      <div class="contenedor">
        <pre>
          ${until(this.displayItemsNoPretty(), html`<span>Loading...</span>`)}
        </pre>
      </div>
      `
  }
}
