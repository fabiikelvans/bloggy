// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import {groq} from "next-sanity";
import { sanityClient } from "../../sanity"

type Data = {
    posts: Post[]
}

// Execute Query
const query = groq`*[_type == 'post']{
 _id,
      title,
      author-> {
      name,
      image
    },
    description,
    slug,
    mainImage,
} | order(createdAt, asc)`

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const posts: Post[] = await sanityClient.fetch(query);
    res.status(200).json({ posts });

}
