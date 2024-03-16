export default function History() {
    return(
        <div className="flex bg-slate-800 min-h-screen min-w-screen justify-center pt-32 pl-5 pr-5 pb-16">
            <div className="flex flex-1 flex-col text-white">
                <div className="flex justify-center">
                    <h1 className="font-black text-xl">JYP</h1>
                </div>
                <div className="flex gap-7 mt-3 justify-center">
                    <a href="/aboutUs"><h1>ABOUT</h1></a>
                    <a href="/aboutUs/history"><span className="border-b border-transparent pb-1 border-white">HISTORY</span></a>
                    <a href="/aboutUs/culture"><h1>CULTURE</h1></a>
                </div>

                <div className="flex flex-col mt-20 lg:pl-32 lg:pr-32">
                     <div className="flex flex-row gap-7">
                        <div>a</div>
                        <div>aa</div>
                        <div>aaa</div>
                     </div>
                     <div>
                        b
                     </div>
                </div>
            </div>
        </div>
    )
}