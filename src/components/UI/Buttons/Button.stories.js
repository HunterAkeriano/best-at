// Button.stories.js

import Button from './Button.vue';

export default {
  title: 'Buttons',
  component: Button,
};
export const Default = {
  render: () => ({
    components: { Button },
    template: '<Button primary label="Button" />',
  }),
  args: {
    backgroundColor: '#ff0',
    label: 'Button',
  },
};