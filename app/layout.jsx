import { Inter } from 'next/font/google'
import '@styles/globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Chacha Chats',
  description: 'A SIH Innovation by Team Sarvagya',
}

export default function RootLayout({ children }) {
  return (
   
    <html lang='en'>
    <body>
            <div className="main">
                <div className="gradient" />
            </div>
            <main className="app">
                {children}
            </main>
    </body>

</html>
  )
}
