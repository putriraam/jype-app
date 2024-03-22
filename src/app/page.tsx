import Image from "next/image"
import { FaAngleDoubleDown } from "react-icons/fa";
import twice4k from "../../public/twice4k.jpg"

export default function Home() {
  return (
    <div>
        <div className="flex h-screen bg-transparent fixed justify-center items-end w-screen z-[-1]">
          <FaAngleDoubleDown size={60} color="black" className="animate-bounce sticky top-full mb-10"/>
        </div>
        <video src="video.mp4" autoPlay muted loop className="w-[100%] sticky top-0 bg-fixed overflow-y-scroll bg-cover h-screen object-cover z-[-10]"/>  
    
        <div className="bg-white">
          <div className="pb-20">
              <Image src={twice4k} alt="" />
            </div>
            <div className="p-4 sm:p-8">
              <div className="font-inter text-2xl mt-20 font-extrabold tracking-tight text-black">
                The shining this moment of TWICE
              </div>
              <div className="mt-1 text-sm font-medium text-slate-500">
                Adventure calls, conquer mountain trails.
              </div>
              <p className="mt-4 leading-7 text-slate-500">
                In the realm of towering mountains, where the air is crisp and
                the vistas stretch endlessly, one finds solace, exhilaration,
                and a profound connection with the untamed beauty of the natural
                world.
              </p>
              <p className="mt-4 leading-7 text-slate-500 pb-16">
                As the sun rises over the rugged peaks, casting a golden glow on
                the majestic landscape, a sense of awe fills the heart,
                reminding us of the grandeur and power that reside in the
                mountains.
              </p>
            </div>
            
        </div>
  </div>  
  );
}
