import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const primary_font = Nunito_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "GymGuru",
  description: "A workout tracker with built-in data analytics and machine learning to bring your gym progress to the next level.",
};

export default function RootLayout({ children }) {//removed custom-scrollbar. very ugly
  return (
    <html lang= "en" className={`${primary_font.className}  text-text_primary bg-bg_primary`}>
      <head>

      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
/*        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"/>
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#390f0f"/>
<meta name="msapplication-TileColor" content="#da532c"/>
<meta name="theme-color" content="#ffffff"/>
*/