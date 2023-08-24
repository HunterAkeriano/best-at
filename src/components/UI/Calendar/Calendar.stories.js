import TheCalendar from './TheCalendar.vue'

import { action } from '@storybook/addon-actions'

export default {
    component: TheCalendar,
    title: 'Calendar',
    tags: ['autodocs'],
    //👇 Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
}

// export const actionsData = {
//     nextBtn: action('pin-task'),
//     prevBtn: action('archive-task'),
// };

export const Default = {
    args: {

    },
};

export const Mini = {
    args: {
        miniCalendar: true
    },
};

export const Month = {
    args: {
        monthCalendar: true
    },
};
