import './globals.css';

export const metadata = {
  title: 'Xsite — למידה שמדליקה סקרנות',
  description: 'משחקים ופעילויות חינוכיות לתלמידים בוגרים, מופעלות על ידי מורים.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}