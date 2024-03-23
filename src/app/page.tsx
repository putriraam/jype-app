import Image from "next/image"
import { FaAngleDoubleDown } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { IoMdStarHalf } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import twice4k from "../../public/twice4k.jpg"
import jypark from "../../public/jypark.webp"
import day6 from "../../public/day6.jpg"
import twice from "../../public/tw.jpg"
import skz from "../../public/skz.jpg"
import xdh from "../../public/xdh.jpg"
import nmixx from "../../public/nmixx.jpg"
import jypbuilding from "../../public/download.png"
import Link from "next/link";

export default function Home() {
  return (
    <div>
        <div className="flex h-screen bg-transparent fixed justify-center items-end w-screen z-[-1]">
          <FaAngleDoubleDown size={60} color="black" className="animate-bounce sticky top-full mb-10"/>
        </div>
        <video src="video.mp4" autoPlay muted loop className="w-[100%] sticky top-0 bg-fixed overflow-y-scroll bg-cover h-screen object-cover z-[-10]"/>  
    
        <div className="bg-white">
          <div className="flex"> 
            <Image src={twice4k} alt="" className="object-cover" data-aos="fade-up"/>
          </div>

            <div className="flex flex-col px-5 lg:px-16">
              <div className="flex flex-col items-center mb-16 text-justify">
                <h1 data-aos="fade-up" className="text-2xl font-extrabold lg:mx-32 mx-0 mt-20 mb-5">COMPANY OVERVIEW</h1>
                <h1 data-aos="fade-up" className="mt-1 font-medium lg:mx-32 mx-0">JYP Entertainment is one of the "Big Three" entertainment companies in South Korea, alongside SM Entertainment and YG Entertainment. It was founded by Park Jin-young, a well-known singer, songwriter, and record producer, who has played a significant role in shaping the Korean entertainment industry. The company has made substantial contributions to the global phenomenon known as "Hallyu," or the Korean Wave, by producing successful K-pop artists and groups.</h1>
                
                <div className="flex lg:flex-row flex-col justify-center items-center w-full mt-10">
                    <div data-aos="zoom-in" className="flex justify-center pr-10 pl-16">
                    <Image src={jypark} alt="jypark" className="w-52 h-52 rounded-full object-cover"/>
                    </div>
                    <div data-aos="zoom-in" className="flex flex-col lg:mt-0 mt-7 lg:justify-start justify-center">
                    <h1>Company Name: JYP Entertainment</h1>
                    <h1>Founded: April 25, 1997</h1>
                    <h1>Founder: Park Jin-young (also known as J.Y. Park)</h1>
                    <h1>Headquarters: Seoul, South Korea</h1>
                    </div>
                </div>

                <div className="flex overflow-x-hidden w-full h-full lg:px-16 px-5 mt-16 gap-5 lg:flex-row flex-col justify-evenly items-center text-white">  
                    <Link href="/aboutUs">
                    <div data-aos="fade-up-right" className="flex bg-black text-center p-3 gap-3 justify-center items-center w-72 h-16 rounded-xl">
                      <h1 className="font-bold">ABOUT US</h1>
                      <FaArrowUpRightFromSquare/>
                    </div>
                    </Link>
                    <Link href="/aboutUs/history">
                    <div data-aos="fade-up" className="flex bg-black text-center p-3 gap-3 justify-center items-center w-72 h-16 rounded-xl px-5">
                      <h1 className="font-bold">THE HISTORY</h1>
                      <FaArrowUpRightFromSquare/>
                    </div>
                    </Link>
                    <Link href="/teams">
                    <div data-aos="fade-up-left" className="flex bg-black p-3 gap-3 text-center justify-center items-center w-72 h-16 rounded-xl">
                      <h1 className="font-bold">OUR TEAM</h1>
                      <FaArrowUpRightFromSquare/>
                    </div> 
                    </Link>
                </div>
                <div className="flex flex-col py-5 w-full">
                    <div className="divider"></div>
                </div>

                <div className="flex lg:flex-row flex-col justify-center items-center w-full">
                <div className="flex flex-col lg:items-start items-center lg:w-1/2 w-full">
                  <h1 data-aos="fade-right" className="text-2xl font-extrabold lg:mr-32 mx-0">OUR PRODUCTS</h1>
                  <h1 data-aos="fade-right" className="lg:mr-32 mx-0 mt-3 text-justify"> JYP Entertainment releases albums for their artists, including popular groups such as TWICE, Stray Kids, GOT7, ITZY, and DAY6. These albums often include physical copies with CDs, photobooks, lyric sheets, and other collectibles.</h1>
                </div>
              
                <div className="flex flex-col items-center">
                  <h1 data-aos="fade-left" className="font-bold text-xl mb-3 mt-5">ALBUM</h1>
                  <div data-aos="zoom-in" className="w-96 h-56 carousel rounded-box">
                      <div className="carousel-item w-full">
                      <Image src={twice} className="object-cover" alt="twice" />
                      </div> 
                      <div className="carousel-item w-full">
                      <Image src={nmixx} className="object-cover" alt="nmixx" />
                      </div> 
                      <div className="carousel-item w-full">
                      <Image src={day6} className="object-cover" alt="day6" />
                      </div>  
                  </div>
                  <h1 data-aos="fade-left" className="font-bold text-xl mb-3 mt-5">LIGHTSTICK</h1>
                  <div data-aos="zoom-in" className="w-96 h-56 carousel rounded-box">
                      <div className="carousel-item w-full">
                      <Image src={skz} className="object-cover" alt="twice" />
                      </div> 
                      <div className="carousel-item w-full">
                      <Image src={xdh} className="object-cover" alt="nmixx" />
                      </div> 
                  </div>
                </div>
                </div>
                <div className="flex flex-col py-5 w-full">
                    <div className="divider"></div>
                </div>

                <div className="flex flex-col items-center">
                <h1 className="text-2xl font-extrabold lg:mx-32 mx-0 mb-5">COMPANY REVIEW</h1>
                <div className="w-full overflow-x-hidden">
                        <div className="chat chat-start lg:mx-16 mx-5">
                            <div data-aos="zoom-in" className="chat-bubble text-sm bg-blue-400 text-white">
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
                            <div data-aos="zoom-in" className="chat-bubble text-sm bg-rose-400 text-white">
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
                            <div data-aos="zoom-in" className="chat-bubble text-sm bg-purple-500 text-white">
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
                            <div data-aos="zoom-in" className="chat-bubble text-sm bg-orange-400 text-white">
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

                <div className="flex flex-col py-5 w-full">
                    <div className="divider"></div>
                </div>

                <div className="flex flex-col w-screen mb-16">
                  <div data-aos="fade-up" className="relative flex w-full h-56">
                  <Image src={jypbuilding} alt="" className="w-full object-cover"/>
                  </div>
                  <div className="absolute flex h-56 items-center lg:ml-16 mx-5">
                    <h1 data-aos="zoom-in" className="font-black lg:text-6xl text-2xl border-4 p-2 border-slate-900">LEADER IN ENTERTAIMENT</h1>
                  </div>
                </div>
              </div>
            </div>
        </div>
  </div>  
  );
}
