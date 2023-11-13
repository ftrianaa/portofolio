// layout.js

// Import global styles
import './globals.css'


// Import custom providers
import { Providers } from './providers';

/**
 * Metadata object for the website
 * @typedef {Object} metadata
 * @property {string} title - The title of the website
 * @property {string} description - A brief description of the website
 */
export const metadata = {
  title: 'Portofolio',
  description: `Hello, I'm Fitriana, a programmer skilled in both front-end and back-end development.This is my personal information along with some portfolios that I've created using Next JS. If you're interested in collaborating with me, you can check the contact page to reach me for further communication.Thank you ^^`,
}

/**
 * RootLayout component
 * Wraps the entire application with the necessary providers
 *
 * @param {Object} props - Component properties
 * @param {React.ReactNode} props.children - Child elements to be wrapped by the RootLayout component
 * @returns {React.Element} The RootLayout component with the wrapped child elements
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/code.png' />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}