import Pagination from '../Pagination/ThePagination.vue'
import { action } from '@storybook/addon-actions';

export default {
  title: 'Pagination',
  component: Pagination,
  argTypes: {
    totalPages: {
      control: 'number',
    },
    currentPage: {
      control: 'number',
    },
    changePage: {
      action: 'changePage',
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { Pagination },
  setup() {
    return { args };
  },
  template: '<Pagination v-bind="args" @changePage="changePage" />',
});

export const Default = Template.bind({});
Default.args = {
  totalPages: 5,
  currentPage: 1,
};

export const WithCustomCurrentPage = Template.bind({});
WithCustomCurrentPage.args = {
  totalPages: 10,
  currentPage: 5,
};

export const LastPage = Template.bind({});
LastPage.args = {
  totalPages: 8,
  currentPage: 8,
};

const changePage = action('changePage');
const methods = {
  changePage,
};
Template.bind({}).methods = methods;