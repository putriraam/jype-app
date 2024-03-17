import Image from "next/image"
import jypark from "../../../public/jypark.jpg"
import twopm from "../../../public/2pm.jpeg"
import day6 from "../../../public/day6.jpg"
import twice from "../../../public/twice.jpg"

export default function AboutUs() {
    return(
        <div className="flex bg-rose-600 min-h-screen min-w-screen justify-center pt-32 pl-5 pr-5 pb-16">
            <div className="flex flex-1 flex-col text-white">
                <div className="flex justify-center">
                    <h1 className="font-black text-xl">PRODUCTS</h1>
                </div>
                <div className="flex gap-7 mt-3 justify-center">
                    <a href="/aboutUs"><span className="border-b border-transparent pb-1 border-white">ARTIST</span></a>
                    <a href="/aboutUs/history"><h1>ALBUM</h1></a>
                    <a href="/aboutUs/culture"><h1>VIDEO</h1></a>
                </div>
                <div className="flex lg:mt-16 mt-8 lg:pl-12 pl-0 lg:pr-12 pr-0">
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 font-bold">
                        <div>
                            <h1 className="lg:block hidden">J. Y. Park</h1>
                            <Image src={jypark} alt="jypark" className="sm:w-72 w-screen hover:brightness-50 transition duration-100 hover:text-center" />
                        </div>
                        <div>
                            <h1 className="lg:block hidden">2PM</h1>
                            <Image src={twopm} alt="twopm" className="sm:w-72 w-screen hover:brightness-50 transition duration-100" />
                        </div>
                        <div>
                            <h1 className="lg:block hidden">DAY6</h1>
                            <Image src={day6} alt="day6" className="sm:w-72 w-screen hover:brightness-50 transition duration-100" />
                        </div>
                        <div>
                        <h1 className="lg:block hidden">TWICE</h1>
                            <Image src={twice} alt="twice" className="sm:w-72 w-screen hover:brightness-50 transition duration-100" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}