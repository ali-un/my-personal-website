import local_font from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "Ali Mostafavi",
  description: "Web Developer, Security, Programmer",
};

const estedad = local_font({
  src: "../public/fonts/estedad.woff2",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${estedad.className} bg-background select-none`}>
        {children}
      </body>
    </html>
  );
}
