import {
  JetBrains_Mono as FontMono,
  Open_Sans as OpenSans,
} from "next/font/google"

export const fontSans = OpenSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})
