import type {GetServerSideProps, NextPage} from 'next'
import Image from 'next/image'
import Layout from "../components/Layout/Layout";
import {Head} from "../seo/Head/Head";
import Header from "../components/Header/Header";
import Featured from "../components/Blog/Featured/Featured";
import Trending from "../components/Blog/Trending/Trending";
import Accordion from "../components/Accordion/Accordion";
import {fetchPosts} from "../utils/fetchPosts";
import {fetchCategories} from "../utils/fetchCategories";


interface Props {
    categories: Category[];
    posts: Post[];
}


const Home = ({ posts, categories }: Props) => {
  return (
    <div >
      <Head title='Bloggy Home page' description='This is image'/>

      <Layout>
          <Header posts={posts}/>
          <Featured posts={posts}/>
          <Trending posts={posts} />
          <Accordion posts={posts}/>
      </Layout>
    </div>
  )
}

export default Home


// Backend Code

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {

    const categories = await fetchCategories();
    const posts = await fetchPosts();

    return {
        props: {
            categories,
            posts,
        },
    }
}
