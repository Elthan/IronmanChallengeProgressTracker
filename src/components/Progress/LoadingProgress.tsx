export default function LoadingProgress() {
    return (
        <div className="w-1/4 border-inherit border-2 md:-skew-x-6 transform shadow-lg shadow-slate-800 hover:shadow-black hover:border-4 
                    bg-primary-600 rounded-t-md rounded-b-md">
            <div className="flex flex-col flex-no-wrap m-full h-full justify-between  blur-sm">
                <div className="flex flex-col justify-between bg-gradient-to-t order-1 p-1 md:p-4 m-0.5 h-40 md:h-96 rounded-t-md from-primary-600 to-analogous-200">
                    <div className="flex md:skew-x-6 justify-center font-bold text-md sm:text-2xl md:text-2xl lg:text-4xl text-slate-800 blur-md">
                        GAME NAME
                    </div>
                    <div className="flex md:skew-x-6 justify-center md:p-4 blur-md">
                        <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                    </div>
                    <div className="flex md:skew-x-6 justify-self-end justify-center italic text-sm md:text-xl lg:text-2xl text-slate-600"></div>
                </div>
                <div className="order-2 h-full w-full border-t-2 border-b-2 border-slate-400 flex flex-col justify-end">
                    <div style={{ height: `0%` }}
                         className="bg-complementary-600 p-1.5 leading-none shadow-md shadow-gray-500 text-white pb-6">
                            0
                    </div>
                </div>
            </div>
        </div>
    )
}