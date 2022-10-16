import React, {ReactNode} from 'react';
import Nav from "../Header/Nav/Nav";
import Footer from "../Footer/Footer";

import {motion} from "framer-motion";

type Props = {
    children?: ReactNode,
    dark?: boolean
}

const variants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 0 },
}


function Layout({ children , dark } : Props) {
    return (
        <div>
            <motion.main
                initial="hidden"
                animate="enter"
                exit="exit"
                variants={variants}
                transition={{ type: "linear" }}
            >
            <Nav dark={dark}/>
            {children}
            <Footer/>
            </motion.main>
        </div>
    );
}

export default Layout;