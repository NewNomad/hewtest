import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme';
import createEmotionCache from '../createEmotionCache';
import Head from 'next/head';
import type { AppProps } from 'next/app'
import { CacheProvider, EmotionCache } from '@emotion/react';
import { RecoilRoot } from 'recoil';
import { AnimatePresence } from "framer-motion"

const clientSideEmotionCache = createEmotionCache();
interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {

    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>

            <ThemeProvider theme={theme}>
                <CssBaseline />
                <RecoilRoot>
                    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
                        <Component {...pageProps} key={props.router.asPath} />
                    </AnimatePresence>
                </RecoilRoot>
            </ThemeProvider>
        </CacheProvider>
    )
}

export default MyApp