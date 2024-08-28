/* eslint-disable perfectionist/sort-imports */
import { useEffect } from 'react';
import './global.css';

import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import Router from 'src/routes/sections';
import ThemeProvider from 'src/theme';
import { Toaster } from 'sonner';
import initializeOneSignal from './utils/one-signal';

// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();

  useEffect(() => {
    initializeOneSignal();
  }, []);

  return (
    <ThemeProvider>
      <Router />
      <Toaster
        duration={100000}
        toastOptions={{
          className: 'toast-common',
          classNames: {
            closeButton: 'toast-close-button',
          },
        }}
        richColors
        position="top-center"
        closeButton
      />
    </ThemeProvider>
  );
}
