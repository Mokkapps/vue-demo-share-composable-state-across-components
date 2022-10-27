<script setup lang="ts">
import { ref } from 'vue';
import useCart from '../composables/useCart';
import useSharedCart from '../composables/useSharedCart';

const { cart, addToCart } = useCart();
const { cart: sharedCart, addToCart: addToSharedCart } = useSharedCart();

const addRandomToCart = () => {
  const randomKey = Math.random().toString(16).substr(2, 8);
  const randomValue = Math.floor(Math.random() * 10);
  addToCart('comp2-' + randomKey, randomValue);
};

const addRandomToSharedCart = () => {
  const randomKey = Math.random().toString(16).substr(2, 8);
  const randomValue = Math.floor(Math.random() * 10);
  addToSharedCart('comp2-' + randomKey, randomValue);
};
</script>

<template>
  <h1>Component 2</h1>
  <button @click="addRandomToCart">Add to cart</button>
  <p>Cart:{{ cart }}</p>
  <button @click="addRandomToSharedCart">Add to shared cart</button>
  <p>Shared cart:{{ sharedCart }}</p>
</template>

<style scoped></style>
