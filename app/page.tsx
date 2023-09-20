"use client"
import Hero from '@/components/home/Hero'
import SearchInput from '@/components/home/SearchInput'
import Image from 'next/image'


export default function Home() {
  return (
   <div className='p-5 sm:px-10 md:px-20'>
    <Hero/>
    <SearchInput/>
   </div>
  )
}
