'use client'

// Import necessary dependencies from 'react'
import { useEffect, useState } from 'react'
// Import necessary dependencies from '@fluentui/react-components'
import {
  createDOMRenderer,
  RendererProvider,
  FluentProvider,
  SSRProvider,
  teamsHighContrastTheme,
} from '@fluentui/react-components';
import Header from '../../public/components/Header';

// Create a DOM renderer for Fluent UI.
const renderer = createDOMRenderer();
import { Inter, Karla } from 'next/font/google'
import './globals.css'

const karla = Karla({ subsets: ['latin'] })

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
  // Declare a state variable named 'hasMounted' and a function named 'setHasMounted' to update it.
  const [hasMounted, setHasMounted] = useState(false);

  // Use the 'useEffect' hook to set 'hasMounted' to true once the component has mounted.
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // If the component hasn't mounted yet, return nothing.
  if (!hasMounted) {
    return null;
  }

  // If the component has mounted, return a set of providers.
  return (
    <RendererProvider renderer={renderer || createDOMRenderer()}>
      <SSRProvider>
        <FluentProvider theme={teamsHighContrastTheme}>
          <div className={karla.className}>
            <Header />
            {children}
          </div>
        </FluentProvider>
      </SSRProvider>
    </RendererProvider >
  );
}