import React from 'react';
import {Head} from "../../seo/Head/Head";
import Header from "../../components/Header/Header";
import Featured from "../../components/Blog/Featured/Featured";
import Trending from "../../components/Blog/Trending/Trending";
import Accordion from "../../components/Accordion/Accordion";
import Layout from "../../components/Layout/Layout";
import Nav from "../../components/Header/Nav/Nav";
import SingleBlogHeader from "../../components/Blog/Single/SingleBlogHeader";
import SingleBlogSidebar from "../../components/Blog/Single/SingleBlogSidebar";
import {sanityClient, urlFor} from "../../sanity";
import {GetStaticPaths, GetStaticProps} from "next";
import PortableText from "react-portable-text";

interface Props {
    post: Post;
}

function Post( {post} : Props ) {
    return (
        <div>
            <Head title='Bloggy Home page' description='This is image'/>

            <Layout dark={true}>
                <div className='blog'>
                    <SingleBlogHeader
                        title={post.title}
                        description={post.description}
                        image={urlFor(post.mainImage).url()!}
                    />

                    <div className="blog__body">
                        <div className="blog__body-content">

                            <PortableText
                                className=''
                                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                                content={post.body}
                                serializers={{
                                    figure: ({ children } : any) => (
                                        <figure className='image-content'  > {children} </figure>
                                    ),
                                    h2: (props: any) => (
                                        <h1 className='text-2xl font-bold my-5' {...props} />
                                    ),
                                    li: ({ children }: any) => (
                                        <li className='ml-4 list-disc'> {children} </li>
                                    ),
                                    link: ({ href, children} : any) => (
                                        <a href={href} className='text-blue-500 hover:underline'>
                                            {children}
                                        </a>
                                    ),
                                }}
                            />
                        </div>

                        <SingleBlogSidebar/>
                    </div>
                </div>
            </Layout>
        </div>
    );
}


export const getStaticPaths : GetStaticPaths = async() => {
    const query = `
    *[_type == 'post'] {
        _id,
        slug{
            current
        }
    }`;

    const posts = await sanityClient.fetch(query);

    const paths = posts.map((post : Post) => ({
        params: {
            slug: post.slug.current,
        }
    }));

    return {
        paths,
        fallback: 'blocking',
    }
}


export const getStaticProps: GetStaticProps = async({params}) => {

    const query = `  *[_type == "post" && slug.current == $slug][0] { 
        _id, 
        _createdAt,
        title,
        author-> {
            name,
            image
        },
    description,
    mainImage,
    slug,
    body,
    }`
    ;


    const post = await sanityClient.fetch(query, {
        slug: params?.slug,
    });

    if(!post){
        return {
            notFound: true
        }
    }
    return {
        props: {
            post,
            revalidate: 10, // update cache after 10 sec
        }
    }
}

export default Post;