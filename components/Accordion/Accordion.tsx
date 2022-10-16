import React from 'react';
import AccordionItem from "./AccordionItem";

const numbers = [
    {
        id: 1,
    },
    {
        id: 2,
    },
    {
        id: 3,
    },
    {
        id: 4,
    },
];

interface Props {
    posts: Post[]
}

function Accordion({ posts }: Props) {
    return (
        <div className='section accordion'>
            <div className="accordion__title">
                <h1>definite <span>&</span> indefinite articles</h1>
            </div>

            <div className="accordion__content">
                {
                    posts.map((post) => (
                        <AccordionItem
                            key={post._id}
                            title={post.title}
                            description={post.description}
                            link={`/blog/${post.slug.current}`}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default Accordion;