import '../styles/styles.scss'
import type { AppProps } from 'next/app'
// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import {AnimatePresence, motion} from "framer-motion";

import NextNProgress from 'nextjs-progressbar';

import {useTransitionFix} from "../hooks/useTransitionFix";

function MyApp({ Component, pageProps, router }: AppProps) {

    const transitionCallback = useTransitionFix();

    return  (

        <AnimatePresence exitBeforeEnter onExitComplete={transitionCallback}>
            <NextNProgress color="#FF7836" startPosition={0.3} stopDelayMs={200} height={3} />
            <Component {...pageProps} />
        </AnimatePresence>
      )

}

export default MyApp
