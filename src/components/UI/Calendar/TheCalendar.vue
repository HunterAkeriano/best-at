<template>
  <div class="calendar" :class="{ 'calendar--mini': miniCalendar, 'calendar--month': monthCalendar }" >
    <div class="calendar__header" v-if="!miniCalendar">
      <LArrow @click="prevBtn"/>

      <div class="calendar__header-title">{{ getCalendarTitle() }}</div>

      <RArrow @click="nextBtn"/>
    </div>
    <table class="calendar__table">
      <thead>
      <tr>
        <th class="hours"></th>
        <th v-for="day in daysArray.length" :key="day">
          {{ getLocalDate(daysArray[day-1]) }}
        </th>
      </tr>
      </thead>

      <tbody>
      <tr v-for="(interval, index) in hoursArray" :key="index">
        <td class="hours">{{ interval }}</td>
        <td class="cell" v-for="cell in daysArray.length" :key="cell" @click="console.log(interval, cell-1)"></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import LArrow from '@/assets/icons/LArrow.vue'
import RArrow from '@/assets/icons/RArrow.vue'


const props = defineProps({
  monthCalendar: {
    type: Boolean,
    default: false
  },
  miniCalendar: {
    type: Boolean,
    default: false
  }
})

const daysArray = ref([])
const hoursArray = ref([])
const currentDate = ref(null)
const currentMonth = ref(null)
const monthNames = [
  "Январь", "Февраль", "Март",
  "Апрель", "Май", "Июнь",
  "Июль", "Август", "Сентябрь",
  "Октябрь", "Ноябрь", "Декабрь"
]

function getCalendarTitle() {
  if (currentDate.value) {
    if (props.monthCalendar) {
      return monthNames[currentDate.value.getMonth()]
    }
    else {
      let nextWeek = new Date()
      nextWeek.setDate(currentDate.value.getDate() + 7)
      let formattedToday = `${currentDate.value.getDate()} ${getFormattedMonthName(currentDate.value.getMonth())} ${currentDate.value.getFullYear()} г.`
      let formattedNextWeek = `${nextWeek.getDate()} ${getFormattedMonthName(nextWeek.getMonth())} ${nextWeek.getFullYear()} г.`
      return `${formattedToday} – ${formattedNextWeek}`
    }
  } else {
    return ''
  }
}

function getCurrentMonth() {
  daysArray.value = []
  const currentYear = currentDate.value.getFullYear()
  const daysInMonth = new Date(currentYear, currentMonth.value + 1, 0).getDate()

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(currentYear, currentMonth.value, day)
    daysArray.value.push(date)
  }
}

function getCurrentWeek() {
  daysArray.value = []
  for (let i = 0; i < 7; i++) {
    const nextDay = new Date(currentDate.value)
    nextDay.setDate(currentDate.value.getDate() + i)
    daysArray.value.push(nextDay)
  }
}

function getHours() {
  if (props.miniCalendar) {
    let hour = 0
    while (hour < 24) {
      const startHour = hour.toString().padStart(2, '0')
      const endHour = ((hour + 4) % 24).toString().padStart(2, '0')
      hoursArray.value.push(`${startHour} - ${endHour}`)
      hour += 4;
    }
  } else {
    const startHour = 8
    const endHour = 23
    for (let hour = startHour; hour <= endHour; hour++) {
      const currentTime = new Date()
      currentTime.setHours(hour, 0, 0)
      const hours = String(currentTime.getHours()).padStart(2, '0')
      const minutes = String(currentTime.getMinutes()).padStart(2, '0')
      hoursArray.value.push(`${hours}:${minutes}`);
    }
  }
}

function getLocalDate(date) {
  if (props.monthCalendar) {
    return date.getDate()
  } else {
    const options = { month: 'short' }
    const dateFormatter = new Intl.DateTimeFormat('ru-RU', options)
    return date.getDate() + ' ' + dateFormatter.formatToParts(date)[0].value
  }
}

function getFormattedMonthName(monthIndex) {
  const formattedMonths = [
    "января", "февраля", "марта",
    "апреля", "мая", "июня",
    "июля", "августа", "сентября",
    "октября", "ноября", "декабря"
  ];
  return formattedMonths[monthIndex];
}

function prevBtn() {
  if (props.monthCalendar) {
    currentMonth.value = currentDate.value.getMonth() - 1
    if (currentMonth.value < 0) {
      currentMonth.value = 11
      currentDate.value.setFullYear(currentDate.value.getFullYear() - 1)
    }
    currentDate.value.setMonth(currentMonth.value)
    getCurrentMonth()
  } else {
    currentDate.value.setDate(currentDate.value.getDate() - 7)
    getCurrentWeek()
  }
}

function nextBtn() {
  if (props.monthCalendar) {
    currentMonth.value = currentDate.value.getMonth() + 1
    if (currentMonth.value > 11) {
      currentMonth.value = 0
      currentDate.value.setFullYear(currentDate.value.getFullYear() + 1)
    }
    currentDate.value.setMonth(currentMonth.value)
    getCurrentMonth()
  } else {
    currentDate.value.setDate(currentDate.value.getDate() + 7)
    getCurrentWeek()
  }
}

onMounted(() => {
  currentDate.value = new Date()
  currentMonth.value = currentDate.value.getMonth()

  if (props.monthCalendar) {
    getCurrentMonth()
  } else {
    getCurrentWeek()
  }
  getHours()
})
</script>

<style lang="scss">
.calendar {
  background: #FFF;
  max-width: 800px;

  &__header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;

    &-title {
      color: #292C32;
      text-align: center;
      font-size: 15px;
      font-weight: 700;
      line-height: 22px;
      margin: 0 10px;
    }
  }

  &__table {
    width: 100%;
    border-collapse: collapse;

    tbody {
      display: block;
      max-height: 301px;
      overflow-y: scroll;

      &::-webkit-scrollbar {
        width: 4px;
      }

      &::-webkit-scrollbar-track {
        background: #DFE3E7;
      }

      &::-webkit-scrollbar-thumb {
        background: #F04973;
      }
    }

    thead, tbody tr {
      display: table;
      width: 100%;
      table-layout: fixed;
    }

    thead {
      width: calc( 100% - 4px );
    }

    th, td {
      text-align: center;
    }

    .cell {
      cursor: pointer;
      border: 1px solid #DCE3E8;

      &:hover {
        background-color: #f0f0f0;
      }
    }
  }

  .hours {
    opacity: 0.6;
    color: #454B58;
    font-weight: 600;
  }
}

.calendar--month {
  max-width: 920px;

  th {
    min-width: 27px;
    min-height: 27px;
  }

  .hours {
    text-align: left;
    width: 54px!important;
  }
}

.calendar--mini {
  max-width: 405px;
  border: 1px solid #DCE3E8;

  th {
    width: 50px;
    height: 34px;
    color: #292C32;
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
    line-height: 12px;
  }

  .hours {
    min-width: 53px;
    height: 26px;
    font-size: 11px;
    border: 1px solid #DCE3E8;
  }
}
</style>
