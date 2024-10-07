import Link from 'next/link'
import { Lilita_One } from 'next/font/google'
// import { ArrowBackIcon } from './Icons'

const font = Lilita_One({weight:"400",subsets:['latin']})

export const CMSnavbar = () => {
    return (
        <div className='flex justify-between items-center py-1 px-5'>
            <Link href='/'>
          
                <div className={`${font.className} text-3xl dark:text-amber-50`}>TechInfo 
                <span className='text-purple-500'>Tribune</span> 
                </div>
                </Link>
        </div>
    )
}

export default CMSnavbar
