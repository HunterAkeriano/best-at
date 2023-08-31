<template>
  <div class="radio-wrapper">
    <label>
      <input
          type="radio"
          name="radio"
          :value="option"
          @change="$emit('input', option)"
      />

      <span>{{ option }}</span>
    </label>
  </div>
</template>

<script setup>

const props = defineProps({
  option: {
    type: undefined,
    required: true
  }
})
</script>

<style scoped lang="scss">
.radio-wrapper {
  color: #454B58;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;

  label {
    display: flex;
    align-items: center;
  }

  input {
    width: 17px;
    height: 17px;
    margin: 0 9px 0 0;
  }
}
</style>
