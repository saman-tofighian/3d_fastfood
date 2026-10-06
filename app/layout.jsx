import './globals.css';

export const metadata = {
  title: 'سامان توفیقیان',
  description:
    'یک غذاساز سه‌بعدی با مواد اولیه‌ی انتخابی برای برگر، ساندویچ و پیتزا',
};

export default function RootLayout({ children }) {
  return (
    <html lang='fa' dir='rtl'>
      <body className='bg-diner font-sans antialiased'>{children}</body>
    </html>
  );
}
