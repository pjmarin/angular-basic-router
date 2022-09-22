import { html } from 'lit-html';
import '../src/basic-router.js';
export default {
    title: 'BasicRouter',
    component: 'basic-router',
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
const Template = ({ title, backgroundColor = 'white' }) => html `
  <basic-router style="--basic-router-background-color: ${backgroundColor}" .title=${title}></basic-router>
`;
export const App = Template.bind({});
App.args = {
    title: 'My app',
};
//# sourceMappingURL=basic-router.stories.js.map