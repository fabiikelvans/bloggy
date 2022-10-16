import React from 'react';
import Image from "next/image";
import Link from "next/link";

interface Props {
    title: string;
    description: string;
    image: string;
    authorName: string;
    authorImage: string;
    link: string;
}

function FeaturedItem({ title, description, image, authorName, authorImage, link }: Props) {

    return (
        <div>
            <div className="featured__content">
                <div className="featured__content-img">
                    <div className="image-wrapper">
                        <Link href={link}>
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
                <div className="featured__content-post">
                    <div className="author">
                        <div className="image-wrapper">
                            <Image
                                className='image'
                                src={authorImage}
                                alt="Image"
                                layout={"fill"}
                                objectFit={'cover'}
                                priority={true}
                            />
                        </div>
                        <h4>{authorName}</h4>
                    </div>

                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default FeaturedItem;