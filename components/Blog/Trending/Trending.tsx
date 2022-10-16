import React, {useCallback, useRef} from 'react';
import {BsArrowLeftSquare, BsArrowRightSquare} from "react-icons/bs";
import TrendingItem from "./TrendingItem";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Pagination} from "swiper";
import {urlFor} from "../../../sanity";
SwiperCore.use([Pagination]);

interface Props {
    posts: Post[]
}

function Trending({ posts }: Props) {

    const sliderRef = useRef(null);

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

    return (
        <div className='trending'>
            <div className="trending__header">
            <div className="trending__header-title">
                <h1>trending post</h1>
            </div>

            <div className="trending__header-icons">
               <div>
                   <BsArrowLeftSquare onClick={handlePrev} />
               </div>
                <div>
                    <BsArrowRightSquare  onClick={handleNext}/>
                </div>
            </div>
            </div>

            <div className="trending__content">
                {/*@ts-ignore*/}
                <Swiper ref={sliderRef}
                    spaceBetween={50}
                    slidesPerView={2}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 2000 }}
                    navigation={false}
                    breakpoints={{
                        500: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        992: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {
                        posts.map((post) => (
                            <SwiperSlide key={post._id}>
                                <TrendingItem
                                    title={post.title}
                                    description={post.description}
                                    image={urlFor(post.mainImage).url()!}
                                    _createdAt={post._createdAt}
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

export default Trending;