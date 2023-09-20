import Image from "next/image"
import { UserButton } from "@clerk/nextjs";
export default function Navbar(){
    return(
        <div className="flex item-center justify-between p-3 shadown-sm border-b-[1px]">
            <Image src='/logo.png'
            alt="logo"
            width={100}
            height={100}
            />
            <div className=" hidden md:flex gap-5"> {/* intially its hidden but when its medium screen it will show menu */}
                <h2 className="hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white">Home</h2>
                <h2 className="hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white">History</h2>
                <h2 className="hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white">Contact Us</h2>
                
            </div>
            <UserButton/>
        </div>
    )
}