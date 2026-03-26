import "./globals.css";

export const metadata = {
  title: "Makhana Jetelis - Premium Quality Makhana Worldwide",
  description: "Indulge in our premium quality Makhana, sourced from the finest farms. Sized at 6 Suta / 19 MM for the perfect crunch. Available for luxury gifting and global delivery.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

