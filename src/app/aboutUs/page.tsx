import Image from "next/image"
import jyp from "../../../public/jyp.png"

export default function AboutUs() {
    return(
        <div className="flex bg-slate-800 min-h-screen min-w-screen justify-center pt-32 pl-5 pr-5 pb-16">
            <div className="flex flex-1 flex-col text-white">
                <div className="flex justify-center">
                    <h1 className="font-black text-xl">JYP</h1>
                </div>
                <div className="flex gap-7 mt-3 justify-center">
                    <a href="/aboutUs"><span className="border-b border-transparent pb-1 border-white">ABOUT</span></a>
                    <a href="/aboutUs/history"><h1>HISTORY</h1></a>
                    <a href="/aboutUs/culture"><h1>CULTURE</h1></a>
                </div>
                <div className="flex justify-center mt-16">
                    <Image src={jyp} alt="jyp" />
                </div>
                <div className="flex flex-col mt-10 lg:pl-72 lg:pr-72 gap-4">
                    <h1 className="font-bold text-lg">Leader In Entertainment</h1>
                    <h1>is the value and goal that JYP Entertainment constantly pursues. Based on this motto, JYP Entertainment strives to become the leading company that brings change to the entertainment industry.</h1>
                    <h1>Led by Asia's best producer Jin Young Park, the company has produced many global artists, including god, Rain, Wonder Girls, 2PM, 2AM, miss A, GOT7, TWICE, Stray Kids, ITZY, Xdinary Heroes, and NMIXX in Korea; NiziU in Japan; BOY STORY, and YAOCHEN in China.</h1>
                    <h1>In the business area, the company has expanded K-pop's influence by communicating with the worldwide music industry through the company's oversea subsidiaries JYP USA, JYP JAPAN, and JYP CHINA. Additionally, the company founded JYP Three Sixty to expand the IP business to the platform business.</h1>
                    <h1>The company also invests in discovering and raising creative, proactive talents and lives up to the core values of being a 'Leading Company' and 'Respected Company' as the 'Leader in Entertainment.'</h1>
                    <h1>JYP Entertainment abides by the law, morality, and social norms by managing the business transparently. As the industry leader, the company will continue to carry out duties and responsibilities as a trustworthy member of society.</h1>
                </div>
            </div>
        </div>
    )
}