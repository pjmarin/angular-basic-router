import { html, fixture, expect } from '@open-wc/testing';

import { BasicRouter } from '../src/BasicRouter.js';
import '../src/basic-router.js';

describe('BasicRouter', () => {
  let element: BasicRouter;
  beforeEach(async () => {
    element = await fixture(html`<basic-router></basic-router>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
