import { html, TemplateResult } from 'lit-html';
import '../src/basic-router.js';

export default {
  title: 'BasicRouter',
  component: 'basic-router',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ title, backgroundColor = 'white' }: ArgTypes) => html`
  <basic-router style="--basic-router-background-color: ${backgroundColor}" .title=${title}></basic-router>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
