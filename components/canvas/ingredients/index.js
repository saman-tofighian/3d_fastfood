import Patty from './Patty';
import CheeseSlice from './CheeseSlice';
import Lettuce from './Lettuce';
import TomatoSlice from './TomatoSlice';
import OnionRing from './OnionRing';
import PickleSlice from './PickleSlice';
import Bacon from './Bacon';
import BreadSlice from './BreadSlice';
import HamSlice from './HamSlice';
import FriedEgg from './FriedEgg';
import CucumberSlice from './CucumberSlice';

// رجیستری: کلید ماده -> کامپوننت بصری واقعی‌ش (برای برگر و ساندویچ)
export const BURGER_VISUALS = {
  patty: Patty,
  cheese: CheeseSlice,
  lettuce: Lettuce,
  tomato: TomatoSlice,
  onion: OnionRing,
  pickle: PickleSlice,
  bacon: Bacon,
};

export const SANDWICH_VISUALS = {
  ham: HamSlice,
  cheese: CheeseSlice,
  lettuce: Lettuce,
  tomato: TomatoSlice,
  cucumber: CucumberSlice,
  egg: FriedEgg,
};

export { default as BunBottom } from './BunBottom';
export { default as BunTop } from './BunTop';
export { default as BreadSliceBase } from './BreadSlice';
