import { Baskervville } from "next/font/google";
import { Poppins } from "next/font/google";

// Primary font: Baskerville (using Baskervville from Google Fonts as closest match)
// If you have custom Baskerville font files, you can use next/font/local instead
export const baskerville = Baskervville({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-baskerville",
  display: "swap",
});

// Secondary font: Poppins
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

