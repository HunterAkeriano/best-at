import Range from './TheRange.vue'; 

export default {
  title: 'Range',
  component: Range,
  argTypes: {
    value: {
      control: 'array',
    },
    lowestPriceProps: {
      control: 'number',
    },
    highestPriceProps: {
      control: 'number',
    },
    width: {
      control: 'number',
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { Range },
  setup() {
    return { args };
  },
  template: '<Range v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  value: [0, 1000000], // Диапазон значений по умолчанию
  lowestPriceProps: 0, // Нижняя граница диапазона
  highestPriceProps: 1000000, // Верхняя граница диапазона
  width: 260, // Ширина компонента
};

// Добавьте стили для отображения в Storybook
Default.decorators = [
  () => ({
    template: '<div style="width: 300px;"><story/></div>',
  }),
];