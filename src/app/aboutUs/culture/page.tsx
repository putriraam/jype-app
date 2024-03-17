export default function Culture() {
    return(
        <div className="flex bg-slate-800 min-h-screen min-w-screen justify-center pt-32 pl-5 pr-5 pb-16">
            <div className="flex flex-1 flex-col text-white">
                <div className="flex justify-center">
                    <h1 className="font-black text-xl">ABOUT</h1>
                </div>
                <div className="flex gap-7 mt-3 justify-center">
                    <a href="/aboutUs"><h1>JYPE</h1></a>
                    <a href="/aboutUs/history"><h1>HISTORY</h1></a>
                    <a href="/aboutUs/culture"><span className="border-b border-transparent pb-1 border-white">CULTURE</span></a>
                </div>
            </div>
        </div> 
    )
}