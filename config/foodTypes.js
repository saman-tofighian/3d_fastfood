// ==== برگر ====
export const BURGER_INGREDIENTS = [
  { key: 'patty', label: 'گوشت', color: '#5C3A21', height: 0.2, price: 45000, visualProps: { radius: 0.6, height: 0.2 } },
  { key: 'cheese', label: 'پنیر', color: '#F2C744', height: 0.03, price: 12000, visualProps: { size: 0.95 } },
  { key: 'lettuce', label: 'کاهو', color: '#6FBF5B', height: 0.1, price: 6000, visualProps: { radius: 0.72 } },
  { key: 'tomato', label: 'گوجه', color: '#D6453D', height: 0.07, price: 6000, visualProps: { radius: 0.58 } },
  { key: 'onion', label: 'پیاز', color: '#E5D6E8', height: 0.05, price: 5000, visualProps: { radius: 0.6 } },
  { key: 'pickle', label: 'خیارشور', color: '#8FAF4A', height: 0.05, price: 5000, visualProps: { radius: 0.46 } },
  { key: 'bacon', label: 'بیکن', color: '#8A3A2B', height: 0.04, price: 18000, visualProps: { length: 1.1 } },
];

export const BURGER_BASE_PRICE = 55000;
export const BURGER_BASE = { bottomRadius: 0.68, bottomHeight: 0.2, topRadius: 0.66, topHeight: 0.32 };

// ==== ساندویچ ====
export const SANDWICH_INGREDIENTS = [
  { key: 'ham', label: 'ژامبون', color: '#C97A7A', height: 0.06, price: 30000, visualProps: { width: 1.1, depth: 0.75 } },
  { key: 'cheese', label: 'پنیر', color: '#F2C744', height: 0.03, price: 12000, visualProps: { size: 0.95 } },
  { key: 'lettuce', label: 'کاهو', color: '#6FBF5B', height: 0.1, price: 6000, visualProps: { radius: 0.6 } },
  { key: 'tomato', label: 'گوجه', color: '#D6453D', height: 0.07, price: 6000, visualProps: { radius: 0.5 } },
  { key: 'cucumber', label: 'خیار', color: '#9BC77A', height: 0.05, price: 5000, visualProps: { radius: 0.4 } },
  { key: 'egg', label: 'تخم‌مرغ', color: '#F2E6B8', height: 0.1, price: 15000, visualProps: { radius: 0.48 } },
];

export const SANDWICH_BASE_PRICE = 40000;
export const SANDWICH_BASE = { width: 1.3, depth: 0.9, height: 0.14 };

// ==== پیتزا ====
export const PIZZA_TOPPINGS = [
  { key: 'cheese', label: 'پنیر اضافه', color: '#F2D34D', type: 'layer', price: 20000 },
  { key: 'pepperoni', label: 'پپرونی', color: '#B5342A', type: 'scatter', shape: 'disc', price: 25000 },
  { key: 'mushroom', label: 'قارچ', color: '#D8C3A0', type: 'scatter', shape: 'cap', price: 15000 },
  { key: 'olive', label: 'زیتون', color: '#1E1B16', type: 'scatter', shape: 'ring', price: 10000 },
  { key: 'pepper', label: 'فلفل دلمه', color: '#4F9D4A', type: 'scatter', shape: 'strip', price: 10000 },
  { key: 'corn', label: 'ذرت', color: '#F2C744', type: 'scatter', shape: 'bit', price: 8000 },
];

export const PIZZA_BASE_PRICE = 70000;
export const PIZZA_BASE = { radius: 1.3, height: 0.08, color: '#E8C178' };
