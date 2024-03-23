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

          <div className="flex absolute h-screen w-full bg-transparent mt-28 justify-center items-center">
            <h1 className="text-6xl text-white font-black border-4 border-black ps-2">The shining this moment of TWICE</h1>
          </div>
          <div> 
            <Image src={twice4k} alt="" className="" />
          </div>
            
            <div className="p-4 sm:p-8">
              <div className="font-inter text-2xl font-extrabold tracking-tight text-black">
                
              </div>
              <div className="mt-1 text-sm font-medium">
                
              </div>
              <p className="mt-4 leading-7 text-slate-500">
                
              </p>
              <p className="mt-4 leading-7 text-slate-500 pb-16">
               
              </p>
            </div>
            
        </div>
  </div>  
  );
}
