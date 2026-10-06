import {
  BURGER_INGREDIENTS,
  BURGER_BASE_PRICE,
  SANDWICH_INGREDIENTS,
  SANDWICH_BASE_PRICE,
  PIZZA_TOPPINGS,
  PIZZA_BASE_PRICE,
} from './foodTypes';

const burgerMap = Object.fromEntries(BURGER_INGREDIENTS.map((i) => [i.key, i]));
const sandwichMap = Object.fromEntries(SANDWICH_INGREDIENTS.map((i) => [i.key, i]));
const pizzaMap = Object.fromEntries(PIZZA_TOPPINGS.map((i) => [i.key, i]));

export function computeOrder(food, build) {
  if (food === 'pizza') {
    const items = [];
    const toppingKeys = [...new Set(build.toppings.map((t) => t.key))];
    toppingKeys.forEach((key) => {
      const count = build.toppings.filter((t) => t.key === key).length;
      items.push({ label: `${pizzaMap[key].label} ×${count}`, price: pizzaMap[key].price });
    });
    if (build.cheeseLayer) items.push({ label: pizzaMap.cheese.label, price: pizzaMap.cheese.price });

    const total = PIZZA_BASE_PRICE + items.reduce((s, i) => s + i.price, 0);
    return { items, total, baseLabel: 'خمیر پیتزا', basePrice: PIZZA_BASE_PRICE };
  }

  const map = food === 'burger' ? burgerMap : sandwichMap;
  const basePrice = food === 'burger' ? BURGER_BASE_PRICE : SANDWICH_BASE_PRICE;
  const baseLabel = food === 'burger' ? 'نان برگر' : 'نان ساندویچ';

  const counts = {};
  build.stack.forEach((entry) => {
    counts[entry.key] = (counts[entry.key] || 0) + 1;
  });

  const items = Object.entries(counts).map(([key, count]) => ({
    label: `${map[key].label} ×${count}`,
    price: map[key].price * count,
  }));

  const total = basePrice + items.reduce((s, i) => s + i.price, 0);
  return { items, total, baseLabel, basePrice };
}

export function formatToman(n) {
  return n.toLocaleString('fa-IR') + ' تومان';
}
