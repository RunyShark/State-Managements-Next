import { store } from '@/store';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className="border-8 border-indigo-800">
        <h1 className="text-center text-7xl">Redux</h1>
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}
