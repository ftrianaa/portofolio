'use client';

// Import necessary dependencies from 'react'
import { useEffect, useState } from 'react';
// Import necessary dependencies from '@fluentui/react-components'
import {
  createDOMRenderer,
  RendererProvider,
  FluentProvider,
  SSRProvider,
  teamsHighContrastTheme
} from '@fluentui/react-components';
import Header from '../../public/components/Header';
import { Karla } from 'next/font/google';
import './globals.css';
import Footer from '../../public/components/Footer';

// Create a DOM renderer for Fluent UI.
const renderer = createDOMRenderer();

const karla = Karla({ subsets: ['latin'] });

/**
 * Providers component.
 *
 * This component wraps other components with a set of providers
 * for Fluent UI, SSR, and a custom renderer.
 *
 * @param {Object} props - The properties for the Providers component.
 * @param {React.ReactNode} props.children - The child components to be wrapped by the Providers.
 * @returns {React.Element} The Providers component with child components.
 */
export function Providers({ children }) {
  const [hasMounted, setHasMounted] = useState(false);
  const [padding, setPadding] = useState('2em 5em');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setPadding('0.5em'); // For small screens
      } else if (window.innerWidth < 960) {
        setPadding('1em'); // For medium screens
      } else {
        setPadding('2em 5em'); // For large screens
      }
    };

    // Set initial padding
    handleResize();

    // Attach event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <RendererProvider renderer={renderer || createDOMRenderer()}>
      <SSRProvider>
        <FluentProvider theme={teamsHighContrastTheme}>
          <div className={karla.className}>
            <div style={{ padding }}>
              <Header />
              <div style={{ minHeight: '80vh' }}>
                {children}
              </div>
            </div>
            <Footer />
          </div>
        </FluentProvider>
      </SSRProvider>
    </RendererProvider>
  );
}
