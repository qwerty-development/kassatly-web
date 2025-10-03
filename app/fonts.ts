import localFont from 'next/font/local'
import { Noto_Sans_Arabic } from 'next/font/google'

// Frutiger Cn fonts (NO FALLBACKS - for testing)
export const frutigerCn = localFont({
  src: [
    {
      path: './fonts/FrutigerCn-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/FrutigerCn-Bold.woff2', 
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-frutiger-cn',
  display: 'swap',
})

// Arabic font from Google Fonts
export const notoSansArabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-noto-arabic',
  display: 'swap',
})
