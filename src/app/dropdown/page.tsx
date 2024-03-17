export default function Dropdown() {
    return( 
        <div>           
            <div className="flex lg:flex-row flex-col pt-16 pl-5 lg:pl-0 pb-16 lg:pb-0 bg-black min-h-screen min-w-screen">
                
                <div className="flex flex-1 flex-col mt-20 lg:items-center items-start gap-5">
                    <a href="/aboutUs"><h1 className="font-black text-white text-xl">ABOUT</h1></a>
                    <div className="flex flex-col gap-3 lg:items-center items-start">
                        <a href="/aboutUs"><h1 className="text-white hover:underline">JYPE</h1></a>
                        <a href="/aboutUs/history"><h1 className="text-white hover:underline">HISTORY</h1></a>
                        <a href="/aboutUs/culture"><h1 className="text-white hover:underline">CULTURE</h1></a>
                    </div>
                </div>

                <div className="flex flex-1 flex-col lg:mt-20 mt-10 lg:items-center items-start gap-5">
                    <a href="/products"><h1 className="font-black text-white text-xl">PRODUCTS</h1></a>
                    <div className="flex flex-col gap-3">
                        <a href="/products"><h1 className="text-white hover:underline">ARTIST</h1></a>
                        <a href="/products/album"><h1 className="text-white hover:underline">ALBUM</h1></a>
                        <a href="/products/video"><h1 className="text-white hover:underline">VIDEO</h1></a>
                    </div>
                </div>

                <div className="flex flex-1 flex-col lg:mt-20 mt-10 lg:items-center items-start gap-5">
                    <a href="/teams"><h1 className="font-black text-white text-xl ">OUR TEAMS</h1></a>
                    <div className="flex flex-col gap-3">
                        <a href="/teams"><h1 className="text-white hover:underline">MEMBERS</h1></a>
                        <a href="/teams/contact"><h1 className="text-white hover:underline">CONTACT</h1></a>
                    </div>
                </div>
            </div>
        </div>
    )
}