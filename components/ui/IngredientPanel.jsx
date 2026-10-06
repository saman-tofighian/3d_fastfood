'use client';

import { useSnapshot } from 'valtio';
import { HiOutlineArrowUturnLeft, HiOutlineTrash } from 'react-icons/hi2';

import state from '@/store';
import {
  addStackIngredient,
  removeLastIngredient,
  closeFood,
  resetFood,
  addPizzaTopping,
  bakePizza,
  placeOrder,
} from '@/store/actions';
import { BURGER_INGREDIENTS, SANDWICH_INGREDIENTS, PIZZA_TOPPINGS } from '@/config/foodTypes';
import { computeOrder, formatToman } from '@/config/pricing';

const CATALOGS = {
  burger: BURGER_INGREDIENTS,
  sandwich: SANDWICH_INGREDIENTS,
  pizza: PIZZA_TOPPINGS,
};

const CLOSE_LABEL = {
  burger: 'بستن برگر 🍔',
  sandwich: 'بستن ساندویچ 🥪',
};

export default function IngredientPanel() {
  const snap = useSnapshot(state);
  const food = snap.selectedFood;
  const build = snap.builds[food];
  const catalog = CATALOGS[food];
  const isPizza = food === 'pizza';
  const isDone = isPizza ? build.baked : build.closed;
  const order = computeOrder(food, build);

  const handleAdd = (key) => {
    if (isDone) return;
    if (isPizza) addPizzaTopping(key);
    else addStackIngredient(food, key);
  };

  return (
    <aside className="top-1/2 right-6 sm:right-10 z-20 absolute bg-diner2/90 shadow-2xl backdrop-blur-xl px-6 py-6 border border-cream/10 rounded-2xl w-64 -translate-y-1/2">
      <p className="mb-3 text-cream/40 text-[11px] tracking-widest uppercase">
        {isPizza ? 'مواد روی پیتزا' : 'مواد لایه‌ای'}
      </p>

      <div className="flex flex-col gap-y-1.5 max-h-[32vh] overflow-y-auto">
        {catalog.map((item) => (
          <button
            key={item.key}
            onClick={() => handleAdd(item.key)}
            disabled={isDone}
            className="flex items-center justify-between gap-x-2.5 bg-cream/5 hover:bg-cream/10 disabled:opacity-40 px-3.5 py-2.5 rounded-xl text-cream/85 text-sm transition-colors cursor-pointer disabled:cursor-not-allowed"
          >
            <span className="flex items-center gap-x-2.5">
              <span className="rounded-full w-3 h-3 shrink-0" style={{ backgroundColor: item.color }} />
              {item.label}
            </span>
            <span className="text-cream/35 text-[10px]">+{(item.price / 1000).toFixed(0)}ت</span>
          </button>
        ))}
      </div>

      {/* جمع فاکتور زنده */}
      <div className="flex justify-between items-center mt-4 pt-3 border-cream/10 border-t text-sm">
        <span className="text-cream/50">جمع فعلی</span>
        <span className="font-bold text-mustard">{formatToman(order.total)}</span>
      </div>

      <div className="flex flex-col gap-y-2 mt-4">
        {!isPizza && (
          <button
            onClick={() => removeLastIngredient(food)}
            disabled={build.stack.length === 0 || build.closed}
            className="flex justify-center items-center gap-x-1.5 bg-cream/5 hover:bg-cream/10 disabled:opacity-40 py-2 rounded-lg text-cream/60 text-xs transition-colors cursor-pointer"
          >
            <HiOutlineArrowUturnLeft size={13} />
            حذف لایه‌ی آخر
          </button>
        )}

        {!isDone && (
          <button
            onClick={() => (isPizza ? bakePizza() : closeFood(food))}
            className="bg-cream/10 hover:bg-cream/20 py-2.5 rounded-xl font-semibold text-cream text-sm transition-colors cursor-pointer"
          >
            {isPizza ? 'پختن پیتزا 🔥' : CLOSE_LABEL[food]}
          </button>
        )}

        {isDone && (
          <button
            onClick={() => placeOrder(food)}
            className="bg-mustard hover:bg-mustard/90 shadow-lg shadow-mustard/20 py-3 rounded-xl font-bold text-diner text-sm transition-colors cursor-pointer"
          >
            ثبت سفارش ✅
          </button>
        )}

        <button
          onClick={() => resetFood(food)}
          className="flex justify-center items-center gap-x-1.5 bg-cream/5 hover:bg-cream/10 py-2 rounded-lg text-cream/50 text-xs transition-colors cursor-pointer"
        >
          <HiOutlineTrash size={13} />
          شروع دوباره
        </button>
      </div>
    </aside>
  );
}
