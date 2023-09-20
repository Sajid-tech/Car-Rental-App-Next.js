import Image from 'next/image'
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
   <div>
    <h1>Subscribe</h1>
    <UserButton />
   </div>
  )
}
