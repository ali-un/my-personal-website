import local_font from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "Ali Mostafavi",
  description: "Web Developer, Security, Programmer",
};

const mikhak = local_font({
  src: "../public/fonts/mikhak.woff2",
  display: "swap",
});

const RootLayout = ({ children }) => {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${mikhak.className} bg-background select-none`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
