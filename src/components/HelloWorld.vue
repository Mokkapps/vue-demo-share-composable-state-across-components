<script setup lang="ts">
import { ref } from 'vue';
import Component1 from './Component1.vue';
import Component2 from './Component2.vue';

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <div class="container">
    <Component1 />
    <Component2 />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
