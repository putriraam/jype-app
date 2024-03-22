import Image from "next/image"
import logo from "../../public/jyp-black.png"
import { ImYoutube } from "react-icons/im"
import { BiLogoInstagramAlt } from "react-icons/bi"
import { FaXTwitter } from "react-icons/fa6"
import { FaFacebookF } from "react-icons/fa"
import Link from "next/link"

export default function Navbar() {
    return(
        <div className="flex fixed w-full justify-between h-20 z-[1] bg-gradient-to-b from-neutral-700 via-transparent to-transparent">
            <div className="flex justify-start items-center lg:ml-16 ml-5">
                <Link href="/">
                    <Image src={logo} alt="logo" priority={true} className="h-[35px] w-auto "/>
                </Link>
            </div>

            <div className="flex items-center lg:mr-16 mr-5 gap-11">
                <div className="lg:block hidden">
                    <a target="_blank" href="https://www.youtube.com/jypentertainment">
                        <ImYoutube color="black" size={20} className=""/>
                    </a>
                </div>
                <div className="lg:block hidden">
                    <a target="_blank" href="https://www.instagram.com/jypentertainment/">
                        <BiLogoInstagramAlt color="black" size={22}/>
                    </a>
                </div>
                <div className="lg:block hidden">
                    <a target="_blank" href="https://twitter.com/jypnation">
                        <FaXTwitter color="black" size={18}/>
                    </a>
                </div>
                <div className="lg:block hidden">
                    <a target="_blank" href="https://www.facebook.com/jypnation">
                        <FaFacebookF color="black" size={18}/>
                    </a>
                </div>

                <div className="drawer drawer-end">
                    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
                    <div className="drawer-content flex flex-col">
                        <div className="w-full navbar text-black">
                        <div className="flex-none">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div> 
                        </div>
                    </div> 
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
                        <ul className="menu p-4 w-1/2 min-h-full bg-white opacity-75 text-black">
                        <li>
                            <div className="flex flex-1 flex-col lg:mt-32 mt-20 lg:items-center items-start gap-5">
                                <Link href="/aboutUs"><h1 className="font-black text-black text-xl">ABOUT</h1></Link>
                                    <div className="flex flex-col gap-3 lg:items-center items-start">
                                        <Link href="/aboutUs"><h1 className="text-black hover:underline">JYPE</h1></Link>
                                        <Link href="/aboutUs/history"><h1 className="text-black hover:underline">HISTORY</h1></Link>
                                    </div>
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-1 flex-col mt-4 lg:items-center items-start gap-5">
                                <Link href="/products"><h1 className="font-black text-black text-xl">PRODUCTS</h1></Link>
                                <div className="flex flex-col gap-3">
                                    <Link href="/products"><h1 className="text-black hover:underline">JYPSHOP</h1></Link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-1 flex-col mt-4 lg:items-center items-start gap-5">
                                <Link href="/teams"><h1 className="font-black text-black text-xl ">OUR TEAMS</h1></Link>
                                <div className="flex flex-col gap-3">
                                    <Link href="/teams"><h1 className="text-black hover:underline">CONTACT</h1></Link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-1 flex-col mt-10 lg:items-center items-start gap-5">
                                <div className="flex items-center gap-5">
                                    <div className="lg:hidden block">
                                        <a target="_blank" href="https://www.youtube.com/jypentertainment">
                                            <ImYoutube color="black" size={20} className=""/>
                                        </a>
                                    </div>
                                    <div className="lg:hidden block">
                                        <a target="_blank" href="https://www.instagram.com/jypentertainment/">
                                            <BiLogoInstagramAlt color="black" size={22}/>
                                        </a>
                                    </div>
                                    <div className="lg:hidden block">
                                        <a target="_blank" href="https://twitter.com/jypnation">
                                            <FaXTwitter color="black" size={18}/>
                                        </a>
                                    </div>
                                    <div className="lg:hidden block">
                                        <a target="_blank" href="https://www.facebook.com/jypnation">
                                            <FaFacebookF color="black" size={18}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}