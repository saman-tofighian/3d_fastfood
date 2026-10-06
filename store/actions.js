import * as THREE from 'three';
import state from './index';
import { PIZZA_BASE } from '@/config/foodTypes';
import { computeOrder } from '@/config/pricing';

export function selectFood(food) {
  state.selectedFood = food;
}

export function addStackIngredient(food, key) {
  const id = state.nextId++;
  state.builds[food].stack.push({ id, key, addedAt: Date.now() });
}

export function removeLastIngredient(food) {
  state.builds[food].stack.pop();
}

export function closeFood(food) {
  state.builds[food].closed = true;
  state.builds[food].closedAt = Date.now();
}

export function resetFood(food) {
  if (food === 'pizza') {
    state.builds.pizza = { toppings: [], cheeseLayer: null, baked: false };
  } else {
    state.builds[food] = { stack: [], closed: false };
  }
}

export function addPizzaTopping(key, count = 10) {
  const topping = { key };
  if (key === 'cheese') {
    state.builds.pizza.cheeseLayer = { addedAt: Date.now() };
    return;
  }

  const pieces = Array.from({ length: count }).map(() => {
    const angle = Math.random() * Math.PI * 2;
    const r = Math.sqrt(Math.random()) * PIZZA_BASE.radius * 0.82;
    return {
      id: state.nextId++,
      key,
      x: Math.cos(angle) * r,
      z: Math.sin(angle) * r,
      rot: Math.random() * Math.PI * 2,
      addedAt: Date.now() + Math.random() * 250,
    };
  });

  state.builds.pizza.toppings.push(...pieces);
}

export function bakePizza() {
  state.builds.pizza.baked = true;
}

export function placeOrder(food) {
  const build = state.builds[food];
  const order = computeOrder(food, build);
  state.lastOrder = {
    food,
    ...order,
    orderNumber: Math.floor(1000 + Math.random() * 9000),
    placedAt: Date.now(),
  };
}

export function dismissOrder() {
  state.lastOrder = null;
}
