import Button from './Button.vue';

import { action } from '@storybook/addon-actions';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    width: {
      control: 'number',
    },
    padding: {
      control: 'number',
    },
    fontSize: {
      control: 'number',
    },
    lineHeight: {
      control: 'number',
    },
    uppercaseText: {
      control: 'boolean',
    },
    isCourses: {
      control: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
    },
    pressed: { action: 'pressed' }, // Simulate the pressed event
  },
};

const Template = (args, { argTypes }) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args" @pressed="pressed" >Нажмите</Button>',
});

export const Default = Template.bind({});
Default.args = {
  width: 100,
  padding: 10,
  fontSize: 14,
  lineHeight: 18,
  uppercaseText: false,
  isCourses: false,
  isDisabled: false,
};

export const CoursesButton = Template.bind({});
CoursesButton.args = {
  width: 150,
  padding: 12,
  fontSize: 16,
  lineHeight: 20,
  uppercaseText: true,
  isCourses: true,
  isDisabled: false,
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  width: 120,
  padding: 8,
  fontSize: 12,
  lineHeight: 16,
  uppercaseText: false,
  isCourses: false,
  isDisabled: true,
};

// Mock the pressed event
const pressed = action('pressed');
const methods = {
  pressed,
};
Template.bind({}).methods = methods;