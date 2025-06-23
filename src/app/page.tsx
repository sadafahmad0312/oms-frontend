'use client'

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import Loader from './../components/common/Loader';

export default function Home(){
    const router = useRouter()

    useEffect (()=>{
        //For redirection of Upload
        router.push('/upload');

    }, [router])

    return (
        <div>
            <Loader />
        </div>
    )

}