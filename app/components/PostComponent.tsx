import React from 'react'
import Link from 'next/link'
import { Post } from '../utils/interface'
import { Lilita_One, VT323} from 'next/font/google'


interface Props {
    post:Post
}

const font = Lilita_One({weight:"400",subsets:['latin']})
const dateFont = VT323({weight:"400",subsets:['latin']})

export const PostComponent = ({post}:Props) => {
    return (
        <div className={cardStyle}>
            <Link href={`/posts/${post?.slug?.current}`}>
                <h2 className={`${font.className} text-2xl dark:text-slate-300`}>{post?.title}</h2>
                <p className={`${dateFont.className} my-2 text-purple-800`}>{new Date(post?.publishedAt).toDateString()}</p>
                <p className='dark:text-gray-400 mb-4 line-clamp-2'>{post?.excerpt}</p>
            </Link>
            {/* tags*/}
            <div className='flex gap-2'>
                {post?.tags?.map((tag)=> 
                <span key={tag?._id} className='mr-2 p-1 rounded-sm text-sm lowersace dark:bg-gray-950 border dark:border-gray-900'>#{tag?.name}</span>
                )}
            </div>
        </div>
    )
}

const cardStyle = ` 
mb-8
p-4
border-gray-900
rounded-md
shadow-sm
shadow-purple-950
hover:shadow-md
hover:bg-purple-500 
hover:text-white
hover:dark:bg-gray-950
`

