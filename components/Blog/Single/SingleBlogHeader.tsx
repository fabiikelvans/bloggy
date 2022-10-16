import React from 'react';
import Image from "next/image";

interface Props {
    title: string;
    description: string;
    image: string;
    body?: [object];
}

function SingleBlogHeader({ title, image, description, body, } : Props) {
    return (
        <div className='blog__header'>
            <div className="image-wrapper">
                <Image
                    className='image'
                    src={image}
                    alt="Image"
                    layout={"fill"}
                    objectFit={'cover'}
                />
            </div>
            <div className="blog__header-overlay section">
               <div className='blog__header-content'>
                   <h1 className="blog__header-overlay_title">
                       {title}
                   </h1>

                   <p className="blog__header-overlay_summary">
                       {description}
                   </p>

                   <button className="blog__header-overlay_category">
                       Design
                   </button>
               </div>
            </div>
        </div>
    );
}

export default SingleBlogHeader;