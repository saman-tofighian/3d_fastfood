'use client';

import { useSnapshot } from 'valtio';
import { AnimatePresence, motion } from 'framer-motion';
import { HiOutlineCheckCircle } from 'react-icons/hi2';

import state from '@/store';
import { dismissOrder, resetFood } from '@/store/actions';
import { formatToman } from '@/config/pricing';

const FOOD_EMOJI = { burger: '🍔', sandwich: '🥪', pizza: '🍕' };

export default function OrderReceipt() {
  const snap = useSnapshot(state);
  const order = snap.lastOrder;

  const handleClose = () => {
    if (order) resetFood(order.food);
    dismissOrder();
  };

  return (
    <AnimatePresence>
      {order && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="z-50 fixed inset-0 flex justify-center items-center bg-black/70 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 20 }}
            className="bg-cream shadow-2xl p-7 rounded-2xl w-[90vw] max-w-sm"
          >
            <div className="flex flex-col items-center text-center">
              <HiOutlineCheckCircle className="text-green-600" size={44} />
              <h2 className="mt-3 font-bold text-diner text-xl">سفارش ثبت شد!</h2>
              <p className="mt-1 text-diner/50 text-sm">
                شماره‌ی سفارش: <b className="text-ketchup">#{order.orderNumber}</b>
              </p>
            </div>

            <div className="bg-diner/5 mt-5 p-4 rounded-xl">
              <div className="flex justify-between mb-2 text-diner/60 text-xs">
                <span>{order.baseLabel}</span>
                <span>{formatToman(order.basePrice)}</span>
              </div>
              {order.items.map((it, i) => (
                <div key={i} className="flex justify-between mb-2 text-diner/70 text-xs">
                  <span>{it.label}</span>
                  <span>{formatToman(it.price)}</span>
                </div>
              ))}
              <div className="flex justify-between items-center mt-3 pt-3 border-diner/15 border-t">
                <span className="font-bold text-diner text-sm">مجموع</span>
                <span className="font-bold text-ketchup text-lg">{formatToman(order.total)}</span>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="bg-diner hover:bg-diner/85 mt-5 py-3 rounded-xl w-full font-semibold text-cream text-sm transition-colors cursor-pointer"
            >
              {FOOD_EMOJI[order.food]} سفارش بعدی
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
