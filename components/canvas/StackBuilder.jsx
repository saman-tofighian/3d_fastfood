'use client';

import { useMemo } from 'react';
import { useSnapshot } from 'valtio';

import state from '@/store';
import StackItem from './StackItem';
import { BunBottom, BunTop, BreadSliceBase } from './ingredients';

// موتور مشترک ساخت برگر/ساندویچ - لایه‌ها روی هم می‌شینن
export default function StackBuilder({ food, visuals, ingredientMap, baseHeight, BaseVisual, baseVisualProps, LidVisual, lidVisualProps, lidHeight }) {
  const snap = useSnapshot(state);
  const build = snap.builds[food];

  const layers = useMemo(() => {
    let y = baseHeight;
    const items = [];

    build.stack.forEach((entry) => {
      const spec = ingredientMap[entry.key];
      if (!spec) return;
      const h = spec.height;
      y += h / 2;
      items.push({
        id: entry.id,
        Visual: visuals[entry.key],
        visualProps: spec.visualProps || {},
        targetY: y,
        addedAt: entry.addedAt,
      });
      y += h / 2;
    });

    const lidY = build.closed ? y + lidHeight / 2 : null;
    return { items, lidY };
  }, [build.stack, build.closed, ingredientMap, visuals, baseHeight, lidHeight]);

  return (
    <group>
      <group position={[0, baseHeight / 2, 0]}>
        <BaseVisual {...baseVisualProps} />
      </group>

      {layers.items.map((item) => (
        <StackItem
          key={item.id}
          Visual={item.Visual}
          visualProps={item.visualProps}
          targetY={item.targetY}
          addedAt={item.addedAt}
        />
      ))}

      {build.closed && (
        <StackItem
          Visual={LidVisual}
          visualProps={lidVisualProps}
          targetY={layers.lidY}
          addedAt={build.closedAt}
        />
      )}
    </group>
  );
}
