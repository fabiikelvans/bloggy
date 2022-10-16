import React from 'react';
import Link from "next/link";
import {BsFacebook, BsTwitter} from "react-icons/bs";
import {AiFillInstagram} from "react-icons/ai";

function Footer() {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer__logo">
                    <Link href={'/'}>bloggy.</Link>
                </div>
                <div className="footer__about">
                    <div className="footer-title">
                        <h5>About</h5>
                    </div>
                    <div className="footer-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>

                <div className="footer__contact">
                    <div className="footer-title">
                        <h5>Contact</h5>
                    </div>
                    <div className="footer-content">
                        <Link href={'/'}>info@bloggy.com</Link>
                        <Link href={'/'}>+254 123 456 789</Link>
                    </div>
                </div>
                <div className="footer__social">
                    <div className="footer__social-link">
                        <Link href={'/'}><BsTwitter/></Link>
                    </div>
                    <div className="footer__social-link">
                    <Link href={'/'}><BsFacebook/></Link>
                    </div>
                        <div className="footer__social-link">
                    <Link href={'/'}><AiFillInstagram/></Link>
                        </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer__copyright">
                    <div className='footer__copyright-copy'>&copy; Copyright Bloggy. </div>
                    <div className="footer__copyright-docs">
                        <Link href={'/'}>Privacy Policy</Link>
                        <Link href={'/'}>Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;