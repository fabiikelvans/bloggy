import React from 'react';
import Image from "next/image";
import {BsArrowUpRight} from "react-icons/bs";
import Link from "next/link";
import {urlFor} from "../../sanity";

interface Props {
    posts: Post[];
}

function Header({ posts }: Props) {

    const headerPost = posts[1];

    return (
        <div className='header'>
            <div className="header__title">
                <h1>we are creative </h1>
                <h1 className='t-b'> <span>&</span> innovative</h1>
            </div>

            <div className="header__content">
                <div className="header__content-main">
                    <div className='btn'>
                        <Link href={`/blog/${headerPost.slug.current}`}>
                        <>
                            <span>Explore More</span>
                            <span className='icon'><BsArrowUpRight/></span>
                        </>
                        </Link>
                    </div>

                    <div className="image-wrapper">
                        <Link href={`/blog/${headerPost.slug.current}`}>
                            <Image
                                className='image'
                                src={urlFor(headerPost.mainImage).url()!}
                                alt="Image"
                                layout={"fill"}
                                objectFit={'cover'}
                            />
                        </Link>

                    </div>

                </div>

                <div className='header__content-featured'>
                    {
                        posts.map((post) => (
                    <Link href={`/blog/${post.slug.current}`} key={post._id}>
                        <h3> <span> - </span>
                            {post.title}
                        </h3>
                    </Link>
                        ))
                    }
                </div>

                <div className="header__content-list"></div>
            </div>
        </div>
    );
}

export default Header;