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

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${mikhak.className} select-none bg-black`}>
        {children}
      </body>
    </html>
  );
}
