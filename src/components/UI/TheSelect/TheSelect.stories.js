import TheSelect from './TheSelect.vue'; // Укажите путь к вашему компоненту

export default {
  title: 'Select',
  component: TheSelect,
  argTypes: {
    items: { control: 'object' }, // Указание типа аргумента
  },
};

const Template = (args) => ({
  components: { TheSelect },
  setup() {
    return { ...args };
  },
  template: `
  <div style='max-width: 200px; max-height: 100px;'>
    <TheSelect :items="items"/>
  </div>
`,
});

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      id: 0,
      title: '06:00 - 08:00',
    },
    {
      id: 1,
      title: '08:00 - 10:00',
    },

    {
      id: 2,
      title: '10:00 - 12:00',
    },
    {
      id: 3,
      title: '12:00 - 14:00',
    },
    {
      id: 3,
      title: '14:00 - 16:00',
    },
    {
      id: 4,
      title: '16:00 - 18:00',
    },
    {
      id: 4,
      title: '18:00 - 20:00',
    }
  ],
};