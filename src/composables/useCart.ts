import { Ref, ref } from 'vue';

const useCart = () => {
  const cart: Ref<Record<string, number>> = ref({});

  const addToCart = (key: string, value: number) => {
    cart.value[key] = value;
  };

  return {
    cart,
    addToCart,
  };
};

export default useCart;
