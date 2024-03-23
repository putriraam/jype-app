import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "HISTORY",
    description: "JYP Entertaiment | HISTORY"
}

export default function History() {
    return(
        <div>
        <div className="flex sticky bg-white top-0 h-20 w-screen z-[1]"></div>
        <div className="flex bg-white min-h-screen min-w-screen justify-center pt-20 pl-5 pr-5 pb-16">
            
            <div className="flex flex-1 flex-col text-black">
            <h1 className="text-center font-extrabold text-2xl mb-5">ABOUT</h1>
                <div className="flex gap-10 mt-3 justify-center">
                    <Link href="/aboutUs"><h1>JYP</h1></Link>
                    <Link href="/aboutUs/history"><span className="border-b-4 pb-1 border-y-blue-400 font-semibold">HISTORY</span></Link>
                </div>

                <div className="flex flex-col mt-20 lg:pl-32 lg:pr-32">
                     <div className="flex md:flex-row flex-col md:gap-7 gap-2 mb-16" data-aos="fade-up">
                        <div className="flex mr-16 font-semibold text-base">2024</div>
                            <div className="flex flex-row gap-8">
                                <h1 className="font-bold text-sm">01</h1>
                                <h1 className="font-light text-sm">VCHA Debut</h1>
                            </div>
                     </div>
                     <div className="flex md:flex-row flex-col md:gap-7 gap-2 mb-16" data-aos="fade-up">
                        <div className="flex mr-16 font-semibold text-base">2023</div>
                        <div className="flex flex-col gap-5">
                        <div className="flex flex-row gap-8">
                                <h1 className="font-bold text-sm">11</h1>
                                <h1 className="font-light text-sm">Announced a global strategic partnership with Live Nation</h1>
                            </div>
                            <div className="flex flex-row gap-8">
                                <h1 className="font-bold text-sm">06</h1>
                                <h1 className="font-light text-sm">Announced a strategic partnership with Republic Records</h1>
                            </div>
                            <div className="flex flex-row gap-8">
                                <h1 className="font-bold text-sm">02</h1>
                                <h1 className="font-light text-sm">Established JYP Partners</h1>
                            </div>
                        </div>
                     </div>
                     <div className="flex md:flex-row flex-col md:gap-7 gap-2 mb-20" data-aos="fade-up">
                        <div className="flex mr-16 font-semibold text-base">2022</div>
                        <div className="flex flex-col gap-5">
                            <div className="flex gap-8">
                                <h1 className="font-bold text-sm">03</h1>
                                <h1 className="font-light text-sm">Established JYP USA</h1>
                            </div>
                            <div className="flex gap-8">
                                <h1 className="font-bold text-sm">02</h1>
                                <h1 className="font-light text-sm">NMIXX Debut</h1>
                            </div>
                        </div>
                     </div>
                     <div className="flex md:flex-row flex-col md:gap-7 gap-2 mb-16" data-aos="fade-up">
                        <div className="flex mr-16 font-semibold text-base">2021</div>
                        <div className="flex flex-col gap-5">
                        <div className="flex flex-row gap-8">
                                <h1 className="font-bold text-sm">12</h1>
                                <h1 className="font-light text-sm">Xdinary Heroes Debut</h1>
                            </div>
                            <div className="flex flex-row gap-8">
                                <h1 className="font-bold text-sm">08</h1>
                                <h1 className="font-light text-sm">Established JYP Three Sixty</h1>
                            </div>
                        </div>
                     </div>
                     <div className="flex md:flex-row flex-col md:gap-7 gap-2 mb-16" data-aos="fade-up">
                        <div className="flex mr-16 font-semibold text-base">2020</div>
                            <div className="flex flex-row gap-8">
                                <h1 className="font-bold text-sm">12</h1>
                                <h1 className="font-light text-sm">NiziU Debut</h1>
                            </div>
                     </div>
                     <div className="flex md:flex-row flex-col md:gap-7 gap-2 mb-16" data-aos="fade-up">
                        <div className="flex mr-16 font-semibold text-base">2019</div>
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-row gap-8">
                                <h1 className="font-bold text-sm">06</h1>
                                <h1 className="font-light text-sm">YAOCHEN Debut</h1>
                            </div>
                            <div className="flex flex-row gap-8">
                                <h1 className="font-bold text-sm">02</h1>
                                <h1 className="font-light text-sm">ITZY Debut</h1>
                            </div>
                        </div>
                     </div>
                     <div className="flex md:flex-row flex-col md:gap-7 gap-2 mb-16" data-aos="fade-up">
                        <div className="flex mr-16 font-semibold text-base">2018</div>
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-row gap-8">
                                <h1 className="font-bold text-sm">09</h1>
                                <h1 className="font-light text-sm">BOY STORY Debut</h1>
                            </div>
                            <div className="flex flex-row gap-8">
                                <h1 className="font-bold text-sm">06</h1>
                                <h1 className="font-light text-sm">Relocated head office to Gangdong-daero, Gangdong-gu</h1>
                            </div>
                            <div className="flex flex-row gap-8">
                                <h1 className="font-bold text-sm">03</h1>
                                <h1 className="font-light text-sm">Stray Kids Debut</h1>
                            </div>
                        </div>
                     </div>
                     <div className="flex md:flex-row flex-col md:gap-7 gap-2 mb-16" data-aos="fade-up">
                        <div className="flex mr-16 font-semibold text-base">2017</div>
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-row gap-8">
                                <h1 className="font-bold text-sm">10</h1>
                                <h1 className="font-light text-sm">Implemented a multi-label system</h1>
                            </div>
                            <div className="flex flex-row gap-8">
                                <h1 className="font-bold text-sm">08</h1>
                                <h1 className="font-light text-sm">Established JYP Hong Kong</h1>
                            </div>
                        </div>
                     </div>
                     <div className="flex md:flex-row flex-col md:gap-7 gap-2 mb-16" data-aos="fade-up">
                        <div className="flex mr-16 font-semibold text-base">2015</div>
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-row gap-8">
                                <h1 className="font-bold text-sm">10</h1>
                                <h1 className="font-light text-sm">TWICE Debut</h1>
                            </div>
                            <div className="flex flex-row gap-8">
                                <h1 className="font-bold text-sm">06</h1>
                                <h1 className="font-light text-sm">DAY6 Debut</h1>
                            </div>
                        </div>
                     </div>
                     <div className="flex md:flex-row flex-col md:gap-7 gap-2 mb-16" data-aos="fade-up">
                        <div className="flex mr-16 font-semibold text-base">2014</div>
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-row gap-8">
                                <h1 className="font-bold text-sm">10</h1>
                                <h1 className="font-light text-sm">NakJoon(Bernard Park) Debut</h1>
                            </div>
                            <div className="flex flex-row gap-8">
                                <h1 className="font-bold text-sm">01</h1>
                                <h1 className="font-light text-sm">GOT7 Debut</h1>
                            </div>
                        </div>
                     </div>
                     <div className="flex md:flex-row flex-col md:gap-7 gap-2 mb-16" data-aos="fade-up">
                        <div className="flex mr-16 font-semibold text-base">2013</div>
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-row gap-8">
                                <h1 className="font-bold text-sm">10</h1>
                                <h1 className="font-light text-sm">JYP Mergers</h1>
                            </div>
                        </div>
                     </div>
                     <div className="flex md:flex-row flex-col md:gap-7 gap-2 mb-16" data-aos="fade-up">
                        <div className="flex mr-16 font-semibold text-base">2012</div>
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-row gap-8">
                                <h1 className="font-bold text-sm">10</h1>
                                <h1 className="font-light text-sm">15& Debut</h1>
                            </div>
                            <div className="flex flex-row gap-8">
                                <h1 className="font-bold text-sm">09</h1>
                                <h1 className="font-light text-sm">Baek A Yeon Debut</h1>
                            </div>
                        </div>
                     </div>
                     <div className="flex md:flex-row flex-col md:gap-7 gap-2 mb-16" data-aos="fade-up">
                        <div className="flex mr-16 font-semibold text-base">2010</div>
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-row gap-8">
                                <h1 className="font-bold text-sm">11</h1>
                                <h1 className="font-light text-sm">Established JYP Japan</h1>
                            </div>
                            <div className="flex flex-row gap-8">
                                <h1 className="font-bold text-sm">07</h1>
                                <h1 className="font-light text-sm">miss A Debut</h1>
                            </div>
                        </div>
                     </div>
                     <div className="flex md:flex-row flex-col md:gap-7 gap-2 mb-16" data-aos="fade-up">
                        <div className="flex mr-16 font-semibold text-base">2008</div>
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-row gap-8">
                                <h1 className="font-bold text-sm">09</h1>
                                <h1 className="font-light text-sm">Established JYP China</h1>
                            </div>
                            <div className="flex flex-row gap-8">
                                <h1 className="font-bold text-sm">09</h1>
                                <h1 className="font-light text-sm">2PM Debut</h1>
                            </div>
                            <div className="flex flex-row gap-8">
                                <h1 className="font-bold text-sm">07</h1>
                                <h1 className="font-light text-sm">2AM Debut</h1>
                            </div>
                            <div className="flex flex-row gap-8">
                                <h1 className="font-bold text-sm">01</h1>
                                <h1 className="font-light text-sm">JOO Debut</h1>
                            </div>
                        </div>
                     </div>
                     <div className="flex md:flex-row flex-col md:gap-7 gap-2 mb-16" data-aos="fade-up">
                        <div className="flex mr-16 font-semibold text-base">2007</div>
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-row gap-8">
                                <h1 className="font-bold text-sm">09</h1>
                                <h1 className="font-light text-sm">Wonder Girls Debut</h1>
                            </div>
                        </div>
                     </div>
                     <div className="flex md:flex-row flex-col md:gap-7 gap-2 mb-16" data-aos="fade-up">
                        <div className="flex mr-16 font-semibold text-base">2005</div>
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-row gap-8">
                                <h1 className="font-bold text-sm">06</h1>
                                <h1 className="font-light text-sm">Lim Jeong Hee Debut</h1>
                            </div>
                        </div>
                     </div>
                     <div className="flex md:flex-row flex-col md:gap-7 gap-2 mb-16" data-aos="fade-up">
                        <div className="flex mr-16 font-semibold text-base">2002</div>
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-row gap-8">
                                <h1 className="font-bold text-sm">12</h1>
                                <h1 className="font-light text-sm">Noel Debut</h1>
                            </div>
                            <div className="flex flex-row gap-8">
                                <h1 className="font-bold text-sm">10</h1>
                                <h1 className="font-light text-sm">Byul Debut</h1>
                            </div>
                            <div className="flex flex-row gap-8">
                                <h1 className="font-bold text-sm">05</h1>
                                <h1 className="font-light text-sm">Rain Debut</h1>
                            </div>
                            <div className="flex flex-row gap-8">
                                <h1 className="font-bold text-sm">01</h1>
                                <h1 className="font-light text-sm">Relocated the head office to JYP Center located in Cheongdam-dong, Gangnam-gu, seoul</h1>
                            </div>
                        </div>
                     </div>
                     <div className="flex md:flex-row flex-col md:gap-7 gap-2 mb-16" data-aos="fade-up">
                        <div className="flex mr-16 font-semibold text-base">2001</div>
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-row gap-8">
                                <h1 className="font-bold text-sm">04</h1>
                                <h1 className="font-light text-sm">Changed the company name to JYP Entertainment</h1>
                            </div>
                        </div>
                     </div>
                     <div className="flex md:flex-row flex-col md:gap-7 gap-2 mb-16" data-aos="fade-up">
                        <div className="flex mr-16 font-semibold text-base">2000</div>
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-row gap-8">
                                <h1 className="font-bold text-sm">12</h1>
                                <h1 className="font-light text-sm">Park Jiyoon joined JYPE</h1>
                            </div>
                        </div>
                     </div>
                     <div className="flex md:flex-row flex-col md:gap-7 gap-2 mb-16" data-aos="fade-up">
                        <div className="flex mr-16 font-semibold text-base">1999</div>
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-row gap-8">
                                <h1 className="font-bold text-sm">01</h1>
                                <h1 className="font-light text-sm">god Debut</h1>
                            </div>
                        </div>
                     </div>
                     <div className="flex md:flex-row flex-col md:gap-7 gap-2 mb-16" data-aos="fade-up">
                        <div className="flex mr-16 font-semibold text-base">1997</div>
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-row gap-8">
                                <h1 className="font-bold text-sm">11</h1>
                                <h1 className="font-light text-sm">Established JYPE</h1>
                            </div>
                            <div className="flex flex-row gap-8">
                                <h1 className="font-bold text-sm">05</h1>
                                <h1 className="font-light text-sm">Established JYPE</h1>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    </div>
    )        
}