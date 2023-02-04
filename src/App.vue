<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      count: 0
    }
  }
});
</script>

<template>
  <button @click="count++">Count is: {{ count }}</button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>