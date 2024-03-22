import Image from "next/image"
import jyp from "../../../public/jyp.png"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "ABOUT JYPE",
    description: "JYP Entertaiment | ABOUT JYPE"
}

export default function AboutUs() {
    return(
        <div className="flex bg-white flex-col min-full justify-center pt-20 pb-32 px-5">
            <h1 className="text-center font-extrabold text-2xl mb-5">ABOUT</h1>
                <div className="flex gap-10 mt-3 justify-center">
                    <Link href="/aboutUs"><span className="border-b-4 pb-1 border-y-blue-400 font-semibold">JYPE</span></Link>
                    <Link href="/aboutUs/history"><span>HISTORY</span></Link>
                </div>
                <div className="flex my-12 mt-20 justify-center" data-aos="fade-up">
                    <Image src={jyp} alt="jyp" className="w-[250px]"/>
                </div>
                <div className="flex flex-col gap-4 lg:px-56 text-justify">
                    <h1 className="font-bold text-lg mt-5" data-aos="fade-up">LEADER IN INTERTAIMENT</h1>
                    <h1 data-aos="fade-up">is the value and goal that JYP Entertainment constantly pursues. Based on this motto, JYP Entertainment strives to become the leading company that brings change to the entertainment industry.</h1>
                    <h1 data-aos="fade-up">Led by Asia&apos;s best producer Jin Young Park, the company has produced many global artists, including god, Rain, Wonder Girls, 2PM, 2AM, miss A, GOT7, TWICE, Stray Kids, ITZY, Xdinary Heroes, and NMIXX in Korea; NiziU in Japan; BOY STORY, and YAOCHEN in China.</h1>
                    <h1 data-aos="fade-up">In the business area, the company has expanded K-pop&apos;s influence by communicating with the worldwide music industry through the company&apos;s oversea subsidiaries JYP USA, JYP JAPAN, and JYP CHINA. Additionally, the company founded JYP Three Sixty to expand the IP business to the platform business.</h1>
                    <h1 data-aos="fade-up">The company also invests in discovering and raising creative, proactive talents and lives up to the core values of being a &apos;Leading Company&apos; and &apos;Respected Company&apos; as the &apos;Leader in Entertainment.&apos;</h1>
                    <h1 data-aos="fade-up">JYP Entertainment abides by the law, morality, and social norms by managing the business transparently. As the industry leader, the company will continue to carry out duties and responsibilities as a trustworthy member of society.</h1>
                </div>
                <div className="flex flex-col py-5 w-full">
                    <div className="divider"></div>
                </div>
                <div className="flex lg:flex-row flex-col">
                <div className="flex w-full h-80">
                    <video src="/bg.mp4" autoPlay muted loop className="h-[100%] w-[100%] object-cover" data-aos="fade-right"></video>
                </div>
                <div className="flex w-full pl-5 pr-5 flex-col justify-center items-center">
                    <h1 className="font-bold text-lg mb-5 mt-5" data-aos="fade-left">LEADER OF CHANGE</h1>
                    <h1 className="text-justify" data-aos="fade-up">Under the direction of the company&apos;s value and goal, &apos;LEADER IN ENTERTAINMENT&apos;, JYP Entertainment established the ESG vision of &apos;Leader of Change&apos; to practice sustainable management. As a leader bringing about new changes, we strive to exert a positive influence to create a sustainable world.</h1>
                </div>
                </div>
                <div className="flex flex-col py-5 w-full">
                    <div className="divider"></div>
                </div>
                <div className="flex w-full lg:px-16 px-5 flex-col justify-center items-center">
                    <h1 className="font-bold text-lg mb-5 mt-5" data-aos="fade-down">MANAGEMENT SYSTEM</h1>
                        <h1 className="text-center" data-aos="fade-up">In order to more systematically implement the ESG vision of &apos;Leader of Change&apos;,</h1>
                        <h1 className="text-center" data-aos="fade-up">JYP Entertainment established an ESG Committee under its Board of Directors and operates an ESG Advisory Committeeand ESG Operations Advisory Board to conduct activities related to environmental and social responsibilities.</h1>
                </div>
                <h1 className="lg:px-16 px-5 font-bold mt-16 lg:text-start text-center" data-aos="fade-right" >Management Organization Structure</h1>
                <div className="flex overflow-x-hidden w-full lg:px-16 px-5 mt-5 gap-5 lg:flex-row flex-col justify-evenly items-center">  
                    <div data-aos="fade-up-right" className="flex flex-col bg-slate-100 text-center p-3 justify-center items-center lg:w-96 lg:h-56 w-44 h-50 rounded-xl">
                        <h1 className="font-bold mb-3">Comitee</h1>
                        <h1 className="text-xs">Setting the Direction for Strategies</h1>
                        <h1 className="text-xs">Playing a Central Role in Decision-making</h1>
                    </div>
                    <div data-aos="fade-up" className="flex flex-col bg-slate-100 text-center p-3 justify-center items-center lg:w-96 lg:h-56 w-44 h-50 rounded-xl px-5">
                    <h1 className="font-bold mb-3">Advisory Committee</h1>
                        <h1 className="text-xs">Monitoring Performance and Reviewing Improvement Measures</h1>
                        <h1 className="text-xs">Publication of Sustainablity Report</h1>
                    </div>
                    <div data-aos="fade-up-left" className="flex flex-col bg-slate-100 p-3 text-center justify-center items-center lg:w-96 lg:h-56 w-44 h-50 rounded-xl">
                    <h1 className="font-bold mb-3">Task Force</h1>
                        <h1 className="text-xs">Establishing and Implementing Vision</h1>
                        <h1 className="text-xs">Providing Reports Contentss</h1>
                        <h1 className="text-xs">Supporting Various Projects</h1>
                    </div> 
                </div>
        </div>
    )
}