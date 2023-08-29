import InputComponent from './TheInput.vue';
import { action } from '@storybook/addon-actions';

export default {
  title: 'InputComponent',
  component: InputComponent,
  argTypes: {
    text: {
      control: 'text',
    },
    width: {
      control: 'number',
    },
    changeText: { action: 'changeText' }, 
  },
};

const Template = (args, { argTypes }) => ({
  components: { InputComponent },
  setup() {
    return { args };
  },
  template: '<InputComponent v-bind="args" @changeText="changeText" />',
});

export const Default = Template.bind({});
Default.args = {
  text: 'Initial Text', 
  width: 220, 
};

// Mock the changeText event
const changeText = action('changeText');
const methods = {
  changeText,
};
Template.bind({}).methods = methods;