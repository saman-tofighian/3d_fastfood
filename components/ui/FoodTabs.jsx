'use client';

import { useSnapshot } from 'valtio';
import state from '@/store';
import { selectFood } from '@/store/actions';

const TABS = [
  { key: 'burger', label: '🍔 برگر' },
  { key: 'sandwich', label: '🥪 ساندویچ' },
  { key: 'pizza', label: '🍕 پیتزا' },
];

export default function FoodTabs() {
  const snap = useSnapshot(state);

  return (
    <div className="top-24 left-1/2 z-20 absolute flex gap-x-2 bg-diner2/90 shadow-xl backdrop-blur-xl p-1.5 border border-cream/10 rounded-full -translate-x-1/2">
      {TABS.map((tab) => (
        <button
          key={tab.key}
          onClick={() => selectFood(tab.key)}
          className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors cursor-pointer ${
            snap.selectedFood === tab.key
              ? 'bg-ketchup text-cream'
              : 'text-cream/60 hover:text-cream'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
