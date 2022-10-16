import React from 'react';
import {HiOutlineMenu} from "react-icons/hi";
import Link from "next/link";

interface Props {
    dark?: boolean
}

function Nav( {dark} : Props) {

    return (
        <div className={`nav ${dark ? 'nav-dark' : ''} `}>
                <div className="nav__logo">
                    <Link href={'/'}>bloggy.</Link>
                </div>
                <div className="nav__toggle">
                    <HiOutlineMenu/>
                </div>
        </div>
    );
}

export default Nav;