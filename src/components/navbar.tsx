import Image from "next/image"
import logo from "../../public/jype-logo.png"
import { ImYoutube } from "react-icons/im"
import { BiLogoInstagramAlt } from "react-icons/bi"
import { FaXTwitter } from "react-icons/fa6"
import { FaFacebookF } from "react-icons/fa"

export default function Navbar() {
    return(
        <div className="flex fixed bg-transparent w-full justify-between h-20">
            <div className="flex flex-1 justify-start items-center lg:ml-16 ml-5">
                <a href="/">
                    <Image src={logo} alt="logo" priority={true} className="h-[35px] w-auto"/>
                </a>
            </div>

            <div className="flex flex-1 justify-end items-center lg:mr-16 mr-5 lg gap-11">
                <div className="hidden lg:block">
                    <a target="_blank" href="https://www.youtube.com/jypentertainment">
                        <ImYoutube color="white" size={20} className=""/>
                    </a>
                </div>
                <div className="hidden lg:block">
                    <a target="_blank" href="https://www.instagram.com/jypentertainment/">
                        <BiLogoInstagramAlt color="white" size={22}/>
                    </a>
                </div>
                <div className="hidden lg:block">
                    <a target="_blank" href="https://twitter.com/jypnation">
                        <FaXTwitter color="white" size={18}/>
                    </a>
                </div>
                <div className="hidden lg:block">
                    <a target="_blank" href="https://www.facebook.com/jypnation">
                        <FaFacebookF color="white" size={18}/>
                    </a>
                </div>
                <div>
                <a href="http://localhost:3000/dropdown">
                <button className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white">
                    <svg className="w-5 h-5">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                </a>
                </div>
    
        </div>
    </div>
    )
}