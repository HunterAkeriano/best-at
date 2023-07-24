import Button from './Button.vue';

export default {
  title: 'Buttons',
  component: Button,
};

export const Default = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button :width="args.width" :padding="args.padding" :fontSize="args.fontSize" :lineHeight="args.lineHeight" :uppercaseText="args.uppercaseText" :backgroundColor="args.backgroundColor">Начните сейчас</Button>',
});

Default.args = {
  width: 262,
  padding: 20,
  fontSize: 16,
  lineHeight: 20,
  uppercaseText: true,
};