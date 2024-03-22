import Image from "next/image"
import twopm from "../../../public/2pm.jpeg"
import day6 from "../../../public/day6.jpg"
import d6 from "../../../public/d6.jpg"
import twice from "../../../public/tw.jpg"
import twphoto from "../../../public/twice.jpg"
import skz from "../../../public/skz.jpg"
import straykids from "../../../public/straykids.jpg"
import itzy from "../../../public/itzy.jpg"
import xdh from "../../../public/xdh.jpg"
import xh from "../../../public/xh.jpeg"
import nmixx from "../../../public/nmixx.jpg"
import nmixxphoto from "../../../public/nmixxphoto.jpg"
import niziu from "../../../public/niziu.jpg"
import { Metadata } from "next"
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";

export const metadata: Metadata = {
    title: "JYPSHOP",
    description: "JYP Entertaiment | Products"
}

export default function AboutUs() {
    return(
        <div className="flex bg-white flex-col w-full justify-center pt-20 lg:px-5 px-0 pb-16">
            <h1 className="text-center font-extrabold text-2xl mb-5">ALBUM</h1>
                <div className="carousel carousel-center w-screen p-4 space-x-4 rounded-box">
                    <div className="carousel-item relative flex-col justify-center items-center group">
                        <div className="flex w-[500px] h-[300px]">
                            <Image src={twice} alt="" className="w-full rounded-box object-cover group-hover:brightness-50" />
                        </div>
                    </div> 
                    <div className="carousel-item relative flex-col justify-center items-center group">
                        <div className="flex w-[500px] h-[300px]">
                            <Image src={nmixx} alt="" className="w-full rounded-box object-cover group-hover:brightness-50 group-hover:space-x-44" />
                        </div>
                    </div> 
                    <div className="carousel-item relative flex-col justify-center items-center group">
                        <div className="flex w-[500px] h-[300px]">
                            <Image src={xdh} alt="" className="w-full rounded-box object-cover group-hover:brightness-50 group-hover:space-x-44" />
                        </div>
                    </div> 
                    <div className="carousel-item relative flex-col justify-center items-center group">
                        <div className="flex w-[500px] h-[300px]">
                            <Image src={skz} alt="" className="w-full rounded-box object-cover group-hover:brightness-50 group-hover:space-x-44" />
                        </div>
                    </div> 
                    <div className="carousel-item relative flex-col justify-center items-center group">
                        <div className="flex w-[500px] h-[300px]">
                            <Image src={day6} alt="" className="w-full rounded-box object-cover group-hover:brightness-50 group-hover:space-x-44" />
                        </div>
                    </div> 
                    </div>
                    <div className="flex flex-col py-5 w-full">
                    <div className="divider"></div>
                </div>
                    <h1 className="text-center font-extrabold text-2xl mb-10">PICK YOUR ARTIST</h1>
                        <div className="lg:px-16 sm:px-5 px-0 mb-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 font-bold" data-aos="fade-up" data-aos-duration="1000">
                            <div>
                                <h1 className="lg:block hidden">2PM</h1>
                                <Image src={twopm} alt="twopm" className="w-[100%] h-[100%] object-cover sm:w-72 hover:brightness-50 transition duration-100" />
                            </div>
                            <div>
                                <h1 className="lg:block hidden">DAY6</h1>
                                <Image src={d6} alt="twopm" className="w-[100%] h-[100%] object-cover sm:w-72 hover:brightness-50 transition duration-100" />
                            </div>
                            <div>
                                <h1 className="lg:block hidden">TWICE</h1>
                                <Image src={twphoto} alt="twopm" className="w-[100%] h-[100%] object-cover sm:w-72 hover:brightness-50 transition duration-100" />
                            </div>
                            <div>
                                <h1 className="lg:block hidden">STRAY KIDS</h1>
                                <Image src={straykids} alt="twopm" className="w-[100%] h-[100%] object-cover sm:w-72 hover:brightness-50 transition duration-100" />
                            </div>
                            <div>
                                <h1 className="lg:block hidden mt-5">XDINARY HEROES</h1>
                                <Image src={xh} alt="twopm" className="w-[100%] h-[100%] object-cover sm:w-72 hover:brightness-50 transition duration-100" />
                            </div>
                            <div>
                                <h1 className="lg:block hidden mt-5">ITZY</h1>
                                <Image src={itzy} alt="twopm" className="w-[100%] h-[100%] object-cover sm:w-72 hover:brightness-50 transition duration-100" />
                            </div>
                            <div>
                                <h1 className="lg:block hidden mt-5">NMIXX</h1>
                                <Image src={nmixxphoto} alt="twopm" className="w-[100%] h-[100%] object-cover sm:w-72 hover:brightness-50 transition duration-100" />
                            </div>
                            <div>
                                <h1 className="lg:block hidden mt-5">NIZIU</h1>
                                <Image src={niziu} alt="jypark" className="w-[100%] h-[100%] object-cover sm:w-72 hover:brightness-50 transition duration-100 hover:text-center" />
                            </div>
                        </div>
                        <div className="flex flex-col py-5 w-full">
                            <div className="divider"></div>
                        </div>

                        <h1 className="text-center font-extrabold text-2xl mb-10">PRODUCT REVIEW</h1>

                        <div className="w-full overflow-x-hidden">
                        <div className="chat chat-start lg:mx-16 mx-5">
                            <div data-aos="fade-right" className="chat-bubble text-sm bg-blue-400 text-white">
                                <h1 className="font-bold text-lg">GOT7 &apos;Breath of Love: Last Piece&apos; Album Review - A Musical Masterpiece</h1>
                                <div className="flex flex-row items-center">
                                    <h1>Rating:</h1>
                                    <IoMdStar color="yellow"/>
                                    <IoMdStar color="yellow"/>
                                    <IoMdStar color="yellow"/>
                                    <IoMdStar color="yellow"/>
                                    <IoMdStar color="yellow"/> 
                                    <h1 className="ml-1">5/5</h1>
                                </div>
                                <h1 className="text-justify">Review: &quot;GOT7&apos;s &apos;Breath of Love: Last Piece&apos; album is a true gem in their discography. Each song on this album feels like a work of art, showcasing the group&apos;s maturity and musical growth. The photobook and packaging are beautifully designed, with stunning visuals that perfectly complement the music. I also appreciate the inclusion of extra goodies like photocards and stickers, which add a personal touch to the album. Whether you&apos;re a longtime Ahgase or a new fan, &apos;Breath of Love: Last Piece&apos; is a must-have addition to your collection. It&apos;s a testament to GOT7&apos;s talent and artistry.&quot;</h1>
                            </div>
                        </div>
                        <div className="chat chat-end lg:mx-16 mx-5">
                            <div data-aos="fade-left" className="chat-bubble text-sm bg-red-300 text-white">
                                <h1 className="font-bold text-lg">TWICE Candy Bong Z - Sweetest Addition to My Concert Experience</h1>
                                <div className="flex flex-row items-center">
                                    <h1>Rating:</h1>
                                    <IoMdStar color="yellow"/>
                                    <IoMdStar color="yellow"/>
                                    <IoMdStar color="yellow"/>
                                    <IoMdStar color="yellow"/>
                                    <IoMdStarHalf color="yellow"/> 
                                    <h1 className="ml-1">4.5/5</h1>
                                </div>
                                <h1 className="text-justify">Review: &quot;I recently got my hands on the TWICE Candy Bong Z lightstick, and I&apos;m absolutely thrilled with it! The design is adorable and perfectly captures TWICE&apos;s colorful and playful vibe. Functionally, it&apos;s fantastic - easy to use and the lights are bright and vibrant, making it a standout accessory at TWICE concerts. The battery life is impressive, lasting through multiple shows without needing a recharge. My only tiny complaint is that I wish it came with a carrying case for easier transport, but overall, I&apos;m extremely happy with my purchase. If you&apos;re a Once, the Candy Bong Z is a must-have for any concert or fan event!&quot;</h1>
                            </div>
                        </div>
                        <div className="chat chat-start lg:mx-16 mx-5">
                            <div data-aos="fade-right" className="chat-bubble text-sm bg-purple-500 text-white">
                                <h1 className="font-bold text-lg">ITZY Official Light Ring - Shine Bright Like ITZY</h1>
                                <div className="flex flex-row items-center">
                                    <h1>Rating:</h1>
                                    <IoMdStar color="yellow"/>
                                    <IoMdStar color="yellow"/>
                                    <IoMdStar color="yellow"/>
                                    <IoMdStar color="yellow"/>
                                    <IoMdStarOutline color="yellow"/>  
                                    <h1 className="ml-1">4/5</h1>
                                </div>
                                <h1 className="text-justify">Review: &quot;The ITZY Official Light Ring is a sleek and stylish accessory for any Midzy attending their concerts. The design is simple yet eye-catching, and the light ring is comfortable to hold during performances. The functionality is straightforward, with easy-to-use buttons and bright, colorful lights that sync perfectly with ITZY&apos;s energetic performances. While I love the overall design and functionality, I wish the battery life was a bit longer to fully enjoy it throughout the entire concert experience. Nevertheless, it&apos;s a must-have for any dedicated Midzy looking to show their support for ITZY!&quot;</h1>
                            </div>
                        </div>
                        <div className="chat chat-end lg:mx-16 mx-5">
                            <div data-aos="fade-left" className="chat-bubble text-sm bg-orange-400 text-white mb-10">
                                <h1 className="font-bold text-lg">DAY6 &apos;The Book of Us: The Demon&apos; Album Review - A Dark and Captivating Journey</h1>
                                <div className="flex flex-row items-center">
                                    <h1>Rating:</h1>
                                    <IoMdStar color="yellow"/>
                                    <IoMdStar color="yellow"/>
                                    <IoMdStar color="yellow"/>
                                    <IoMdStar color="yellow"/>
                                    <IoMdStarOutline color="yellow"/> 
                                    <h1 className="ml-1">4/5</h1>
                                </div>
                                <h1 className="text-justify">Review: &quot;DAY6&apos;s &apos;The Book of Us: The Demon&apos; album is a hauntingly beautiful masterpiece that delves into themes of love, loss, and self-discovery. Each song on this album is like a chapter in a gripping novel, taking listeners on an emotional journey from start to finish. The photobook is filled with mesmerizing visuals that perfectly capture the album&apos;s dark and captivating atmosphere. While I appreciate the inclusion of extra goodies like photo cards and stickers, I wish there were more exclusive content to dive deeper into the album&apos;s concept. Nevertheless, &apos;The Book of Us: The Demon&apos; is a must-have for any My Day. It&apos;s a testament to DAY6&apos;s musical talent and storytelling prowess.&quot;</h1>
                            </div>
                        </div>
                        </div>
                </div>
    )
}