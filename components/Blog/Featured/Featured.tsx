import React, {RefObject, useCallback, useEffect, useRef, useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import {BsArrowLeftSquare, BsArrowRightSquare} from "react-icons/bs";
// Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Pagination} from "swiper";
import FeaturedItem from "./FeaturedItem";
import TrendingItem from "../Trending/TrendingItem";
import {urlFor} from "../../../sanity";
SwiperCore.use([Pagination]);

const categories = [
    {
        name: 'All',
    },
    {
        name: 'Design',
    },
    {
        name: 'Experience',
    },
    {
        name: 'Marketing',
    },
];

interface Props {
    posts: Post[]
}


function Featured({ posts }: Props) {

    const [active, setActive] = useState(categories[0]);

    const activeLink = () => {
        setActive(categories[1]);
    }




    const sliderRef = useRef<SwiperCore>(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        // @ts-ignore
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        // @ts-ignore
        sliderRef.current.swiper.slideNext();
    }, []);

    // @ts-ignore
    return (
        <div className='featured section'>
            <div className="featured__header">
                <div className="featured__header-title">
                    <span>top </span>
                    <span>pick </span>
                    <span>article</span>
                </div>
                <div className={`featured__header-category `}>
                    <ul>
                        {categories.map((category) => (
                        <li key={category.name} className={``}>
                            {category.name}
                        </li>
                            ))}
                    </ul>
                </div>
            </div>

            <div>
                <div className="arrow-icons">
                    <div>
                        <BsArrowLeftSquare onClick={handlePrev} />
                    </div>
                    <div>
                        <BsArrowRightSquare  onClick={handleNext}/>
                    </div>
                </div>
            </div>

            <div className='featured__wrapper'>
                {/*@ts-ignore*/}
                <Swiper ref={sliderRef}
                        spaceBetween={50}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 2000 }}
                        navigation={false}
                        breakpoints={{
                            500: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 1,
                            },
                            992: {
                                slidesPerView: 1,
                            },
                        }}
                >
                    {
                        posts.map((post) => (
                            <SwiperSlide key={post._id}>

                                <FeaturedItem
                                    title={post.title}
                                    description={post.description}
                                    image={urlFor(post.mainImage).url()!}
                                    authorImage={urlFor(post.author.image).url()!}
                                    authorName={post.author.name}
                                    link={`/blog/${post.slug.current}`}
                                />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

            </div>
        </div>
    );
}

export default Featured;