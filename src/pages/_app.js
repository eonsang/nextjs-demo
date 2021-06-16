import React from 'react';
import { wrapper } from '../store';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../components/globalStyle';
import theme from '../utils/theme';



function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default wrapper.withRedux(MyApp);

