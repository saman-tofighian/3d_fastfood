import { proxy } from 'valtio';

const state = proxy({
  selectedFood: 'burger',
  nextId: 1,
  lastOrder: null, // { food, items, total, orderNumber }
  builds: {
    burger: { stack: [], closed: false },
    sandwich: { stack: [], closed: false },
    pizza: { toppings: [], cheeseLayer: null, baked: false },
  },
});

export default state;
