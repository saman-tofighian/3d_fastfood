import { GiHotMeal } from 'react-icons/gi';

export default function Header() {
  return (
    <header className="top-0 z-20 absolute flex justify-between items-center px-6 sm:px-10 w-full h-20">
      <div className="flex items-center gap-x-2.5">
        <span className="flex justify-center items-center bg-ketchup/15 border border-ketchup/30 rounded-lg w-9 h-9">
          <GiHotMeal className="text-ketchup" size={19} />
        </span>
        <div>
          <p className="font-bold text-cream text-sm tracking-wide">غذاساز</p>
          <p className="text-cream/40 text-[11px]">برگر، ساندویچ یا پیتزای خودتو بساز</p>
        </div>
      </div>
    </header>
  );
}
