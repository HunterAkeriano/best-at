<template>
  <div class="calendar" :class="{ 'calendar--mini': miniCalendar }" >
    <div class="calendar__header" v-if="!miniCalendar">
      <button id="prevBtn">&lt;</button>
      <h2 id="weekRange"></h2>
      <button id="nextBtn">&gt;</button>
    </div>
    <table class="calendar__table">
      <thead>
      <tr>
        <th></th>
        <th v-for="(day, index) in weekArray" :key="index">
          {{ getLocalDate(day) }}
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(interval, index) in hoursArray" :key="index">
        <td class="hours">{{ interval }}</td>
        <td class="cell" v-for="cell in 7" :key="cell" @click="console.log(interval, cell-1)"></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'


const props = defineProps({
  miniCalendar: {
    type: Boolean,
    default: false
  }
})

const today = new Date()
const weekArray = ref([])
const hoursArray = ref([])

function getCurrentWeek() {
  for (let i = 0; i < 7; i++) {
    const nextDay = new Date(today)
    nextDay.setDate(today.getDate() + i)
    weekArray.value.push(nextDay)
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
    const endHour = 20
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
  const options = { month: 'short' }
  const dateFormatter = new Intl.DateTimeFormat('ru-RU', options)
  return date.getDate() + ' ' + dateFormatter.formatToParts(date)[0].value
}

onMounted(() => {
  getCurrentWeek()
  getHours()
})
</script>

<style lang="scss">
.calendar {
  max-width: 800px;
  border: 1px solid #DCE3E8;
  background: #FFF;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  &__table {
    width: 100%;
    border-collapse: collapse;

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

.calendar--mini {
  max-width: 405px;

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
