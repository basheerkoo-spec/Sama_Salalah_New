export const metadata = {
  title: 'Sama Salalah Real Estate',
  description: 'Sama Salalah real estate booking system'
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
