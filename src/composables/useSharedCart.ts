import { Ref, ref } from 'vue';

const cart: Ref<Record<string, number>> = ref({});

const useCart = () => {
  const addToCart = (key: string, value: number) => {
    cart.value[key] = value;
  };

  return {
    cart,
    addToCart,
  };
};

export default useCart;
