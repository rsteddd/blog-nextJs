import { Header } from '@/app/components/Header'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <div>
            <Header title='404 - page Not Found'/>
            <div>
                <Link href="/">Return Home</Link>
            </div>
        </div>
    )
}

export default NotFound