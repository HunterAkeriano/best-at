import StarsRating from './TheStars.vue'; // Замените на путь к вашему компоненту
import Star from '@/assets/icons/Star.vue'; // Замените на путь к вашей иконке звезды

export default {
  title: 'StarsRating',
  component: StarsRating,
  argTypes: {
    rating: {
      control: 'number',
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { StarsRating, Star },
  setup() {
    return { args };
  },
  template: '<StarsRating v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  rating: 3.5, // Укажите рейтинг по умолчанию
};

// Добавьте стили для иллюстрации дизайн-компонента
Default.parameters = {
  design: {
    type: 'figma',
  },
};

// Добавьте стили для отображения в Storybook
Default.decorators = [
  () => ({
    template: '<div style="width: 200px;"><story/></div>',
  }),
];