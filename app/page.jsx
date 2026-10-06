'use client';

import dynamic from 'next/dynamic';

import Header from '@/components/ui/Header';
import FoodTabs from '@/components/ui/FoodTabs';
import IngredientPanel from '@/components/ui/IngredientPanel';
import OrderReceipt from '@/components/ui/OrderReceipt';

const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: false });

export default function Page() {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      <Header />
      <div className="absolute inset-0 z-0">
        <Scene />
      </div>
      <FoodTabs />
      <IngredientPanel />
      <OrderReceipt />
    </main>
  );
}
