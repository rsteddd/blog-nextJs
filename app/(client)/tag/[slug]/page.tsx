import { Header } from '@/app/components/Header'
import { PostComponent } from '@/app/components/PostComponent'
import { Post } from '@/app/utils/interface'
import { client } from '@/sanity/lib/client'
import { post } from '@/sanity/schemas/post'
import React from 'react'

interface Params {
    params :{
        slug : string
    }
}


async function getPostByTag(tag:string) {
    const query = `
    *[_type == "post" && references(*[_type == "tag" && slug.current == "${tag}"]._id)]{
        title,
        slug,
        publishedAt,
        excerpt,
        // _id,
        tags[]-> {
          _id,
          slug,
          name
        }
      }
    `
    const posts = await client.fetch(query)
    return posts
}
export const revalidate = 60

const page = async ( {params}:Params) => {
    const posts:Array<Post> = await getPostByTag(params.slug)
    console.log(posts, "posts by tag")
    return (
        <div>
            <Header title={`#${params?.slug}`} tags/>
            <div>
                {posts?.length > 0 && posts?.map((post) =>(
                    <PostComponent key={post?._id} post={post}/>
                ))}
            </div>
        </div>
    )
}

export default page
