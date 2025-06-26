import type { AppProps } from 'next/app';
import { I18nProvider } from 'next-localization';
import Bootstrap from 'src/Bootstrap';
import 'assets/main.scss';
import { SitecorePageProps } from '@sitecore-content-sdk/nextjs';
import { JSX } from 'react';
import Head from 'next/head';

// Added by SolutionEngineering
import ColorPaletteStyle from 'src/components/SolutionEngineering/ColorPaletteStyle';

// Added by SolutionEngineering
interface ExtendedAppProps extends AppProps<SitecorePageProps> {
  siteColors: Record<string, string>;
}

function App({ Component, pageProps }: ExtendedAppProps): JSX.Element {
  const { dictionary, ...rest } = pageProps;

  return (
    <>
      <Bootstrap {...pageProps} />
      <Head>
        {/* Added by SolutionEngineering: inject Sitecore color palette */}
        <ColorPaletteStyle />
      </Head>

      <I18nProvider lngDict={dictionary} locale={pageProps.locale}>
        <Component {...rest} />
      </I18nProvider>
    </>
  );
}

export default App;
