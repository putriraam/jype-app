import Image from "next/image"
import { IoMdCall } from "react-icons/io";
import { getItem } from "@/lib/randomUser";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "OUR TEAMS",
    description: "JYP Entertaiment | OUR TEAMS"
}

export default async function Teams(){
    const member = await getItem()
    console.log(member.results[0])
    return(
        <div className="flex bg-white flex-col w-full pt-20 px-5 pb-16">
            <h1 className="text-center font-extrabold text-2xl mb-5">OUR TEAMS</h1>
            
                    <div className="flex mt-10 lg:flex-row flex-col">
                        <div className="flex flex-col lg:w-1/2 w-full text-justify lg:px-32">
                            <h1 className="mb-2 font-bold text-lg">COMMITEE TEAMS</h1>
                            <h1>Our Commitee Teams serves as the engine behind our efforts to integrate environmental stewardship, social responsibility, and strong governance principles into everything we do. We&apos;re a diverse team of passionate individuals united by a shared vision of creating a positive impact on our planet and society.</h1>
                            <h1 className="mb-2 font-bold text-lg lg:mt-16 mt-7">ADVISORY COMMITEE TEAMS</h1>
                            <h1>Our Advisory Committee Teams works hand in hand with internal stakeholders, including senior leadership, department heads, and cross-functional teams, to integrate considerations into our business operations and decision-making processes. Through collaboration and engagement, we strive to embed sustainability principles into the fabric of our organization and drive meaningful, lasting change.</h1>
                            <h1 className="mb-2 font-bold text-lg lg:mt-16 mt-7">TASK FORCE TEAMS</h1>
                            <h1> Our Task Force Teams is poised to champion sustainability, drive positive social impact, and uphold the highest standards of governance. We firmly believe that integrating principles into our operations is not only essential for mitigating risks but also for fostering long-term value creation and societal well-being.</h1>
                        </div>

                        <div className="lg:w-1/2 w-full lg:mt-0 mt-10 grid sm:grid-cols-2 grid-cols-1 gap-8">
                        {member.results.map((user:any) => {
                            return (
                            <div className="flex flex-row" key={user.id.value}>
                                <div className="flex items-center mb-3">
                                    <div className="flex-shrink-0">
                                        <Image className="w-24 h-24 rounded-full object-cover" src={`${user.picture.large}`} width="100" height="100" alt="image"/>
                                    </div>
                                    <div className="flex-1 min-w-0 ms-4">
                                        <p className="mb-2 font-medium text-black truncate">
                                            {user.name.first} {user.name.last}
                                        </p>
                                        <p className="my-2 text-sm truncate">
                                            {user.email}
                                        </p>
                                        <p className="flex gap-2 items-center text-sm truncate">
                                            <IoMdCall color="black" size={15}/>{user.phone}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            )}
                        )}
                    </div>
            </div>
        </div>
    )
}