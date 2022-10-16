import React from 'react';
import Image from "next/image";
import {BsArrowUpRight} from "react-icons/bs";
import Link from "next/link";

interface Props {
    title: string;
    description: string;
    image: string;
    _createdAt: string;
    link: string;
}

function TrendingItem({ title, description, image, _createdAt, link } : Props) {
    return (
        <div className='trending__item'>
            <div className="trending__item-image">
                <div className="image-wrapper">
                    <Link href={link} >
                        <Image
                            className='image'
                            src={image}
                            alt="Image"
                            layout={"fill"}
                            objectFit={'cover'}
                        />
                    </Link>

                </div>
            </div>

            <div className="trending__item-date">
                <h5> { _createdAt } </h5>
            </div>

            <div className="trending__item-title">
                <Link href={link} ><h1> {title} </h1></Link>
            </div>

            <div className="trending__item-summary">
                <p>
                    {description}
                </p>
            </div>

            <div className="trending__item-btn">
                <Link href={link}>
                <button>
                    Read more
                    <span> <BsArrowUpRight/> </span>
                </button>
                </Link>
            </div>
        </div>
    );
}

export default TrendingItem;