import { Disclosure } from "@headlessui/react";
import React, { useState } from "react";
import ProgressInformation from "../components/Progress/ProgressInformation";
import { LogoutIcon } from '@heroicons/react/solid';


export default function Home() {
    const [hoverStream, setHoverStream] = useState(true);
    
    return (
        <main className="flex flex-col lg:flex-row h-[calc(100vh-4rem)]">
            <Disclosure defaultOpen as="section" className="h-full lg:flex-1 flex flex-col lg:flex-row ">
                {({ open }: {open: boolean}) => (
                    <>
                    {/* Collapsible Side bar */}
                    <Disclosure.Panel unmount={false} as="div" className="order-2 lg:order-1 w-full lg:w-auto lg:h-full overflow-y-auto lg:overflow-y-visible">
                        <div className="relative h-min lg:h-full">
                            <ProgressInformation />

                            {/* Toggle Button when side bar is opened */}
                            <Disclosure.Button className="absolute top-3 right-3">
                                <div className="hidden lg:block hover:bg-[rgba(82,82,91,0.9)] p-[5px] rounded-md">
                                    <span className="sr-only">Collapse progression side bar</span>
                                    <LogoutIcon width="20" height="20" className={`fill-zinc-100 scale-x-[-1]`} />
                                </div>
                             </Disclosure.Button>
                        </div>
                    </Disclosure.Panel>

                    {/* <TwitchEmbed /> */}
                    <article className="flex-1 order-1 lg:order-2 relative w-full h-full">
                        <iframe title="twitch-stream" 
                            src={`https://player.twitch.tv/?channel=edisonparklive&parent=${window.location.hostname}&muted=true&autoplay=false`}
                            className="w-full h-full aspect-video lg:aspect-auto"
                            allowFullScreen>
                        </iframe>

                        {/* Toggle Button when side bar is closed */}
                        <Disclosure.Button className="absolute bottom-1/2 z-10 pl-2 order-2 hidden lg:block">
                            {/* <div className={``} > */}
                                <div className="hover:bg-[rgba(82,82,91,0.5)] p-[5px] rounded-md">
                                    <span className="sr-only">Expand progression side bar</span>
                                    <LogoutIcon width="20" height="20" className={`fill-zinc-100 ${ open ? 'hidden' : !hoverStream? 'hidden' : 'block' } transform`} />
                                </div>
                            {/* </div> */}
                        </Disclosure.Button>
                    </article>
                    </>
                )}
            </Disclosure>




            {/* Twitch chat */}
            <Disclosure defaultOpen as="section" className="hidden lg:block relative h-full">
                {({ open }: {open: boolean}) => (
                    <>
                    <Disclosure.Panel unmount={false} as="div" className="h-full">
                        <div className="h-full">
                            <iframe title="twitch-chat"
                                    src={`https://www.twitch.tv/embed/edisonparklive/chat?no-mobile-redirect=true&darkpopout&parent=${window.location.hostname}`}
                                    className="w-full lg:w-[340px] h-full">
                            </iframe>
                        </div>
                    </Disclosure.Panel>
                    
                    {/* Toggle Button when chat is opened */}
                    <Disclosure.Button className={`hidden lg:block absolute ${open ? 'top-3 right-[300px]' : 'bottom-1/2 right-4 scale-x-[-1]'}`}>
                        <div className={`hover:bg-[rgba(82,82,91,0.9)] p-[5px] rounded-md`}>
                            <span className="sr-only">Collapse chat side bar</span>
                            <LogoutIcon width="20" height="20" className={`fill-zinc-100 ${ open ? 'block' : hoverStream? 'block' : 'hidden' }`} />
                        </div>
                    </Disclosure.Button>
                    </>
                )}
            </Disclosure>
        </main>

        // <div 
        //     className="relative flex flex-col lg:flex-row h-[calc(100vh-4rem)]"
        // >
        //     <Disclosure defaultOpen>
        //         {({ open }: {open: boolean}) => (
        //             <>
        //             {/* Collapsible Side bar */}
        //             <Disclosure.Panel unmount={false} className={`relative overflow-y-auto order-2 lg:order-1 flex flex-col h-min lg:h-full lg:w-96 bg-[#18181B]`}>
        //                 <ProgressInformation />

        //                 {/* Toggle Button when side bar is opened */}
        //                 <Disclosure.Button>
        //                     <div className="hidden lg:block absolute top-3 right-3 hover:bg-[rgba(82,82,91,0.9)] p-[5px] rounded-md">
        //                         <span className="sr-only">Collapse progression side bar</span>
        //                         <LogoutIcon width="20" height="20" className={`fill-zinc-100 scale-x-[-1]`} />
        //                     </div>
        //                 </Disclosure.Button>
        //             </Disclosure.Panel>

        //             {/* Twitch chat on mobile */}
        //             <iframe title="twitch-chat"
        //                 src={`https://www.twitch.tv/embed/edisonparklive/chat?no-mobile-redirect=true&darkpopout&parent=${window.location.hostname}`}
        //                 className="block lg:hidden h-full w-full lg:w-[340px] order-2">
        //             </iframe>

        //             {/* Toggle Button when side bar is closed */}
        //             <Disclosure.Button className="z-10 order-2 h-full hidden lg:block">
        //                 <div className={`absolute bottom-1/2 pl-2`} >
        //                     <div className="hover:bg-[rgba(82,82,91,0.5)] p-[5px] rounded-md">
        //                         <span className="sr-only">Expand progression side bar</span>
        //                         <LogoutIcon width="20" height="20" className={`fill-zinc-100 ${ open ? 'hidden' : !hoverStream? 'hidden' : 'block' } transform`} />
        //                     </div>
        //                 </div>
        //             </Disclosure.Button>
        //             </>
        //         )}
        //     </Disclosure>

        //     {/* <TwitchEmbed /> */}
        //     <iframe title="twitch-stream" 
        //         src={`https://player.twitch.tv/?channel=edisonparklive&parent=${window.location.hostname}&muted=true&autoplay=true`}
        //         className="w-full h-fit lg:h-full aspect-video"
        //         allowFullScreen>
        //     </iframe>

        //     {/* Embeded Twitch  */}
        //     <div className="flex order-1 flex-10 lg:order-3 h-min w-full lg:h-[calc(100vh-4rem)]">
        //         <Disclosure defaultOpen>
        //             {({ open: isOpen }: {open: boolean}) => (
        //                 <div className="relative flex flex-col lg:flex-row w-full">


        //                     {/* Toggle Button when chat is opened */}
        //                     <Disclosure.Button>
        //                         <div className={`hidden lg:block absolute ${isOpen ? 'top-3 right-[300px]' : 'bottom-1/2 right-4 scale-x-[-1]'} hover:bg-[rgba(82,82,91,0.9)] p-[5px] rounded-md`}>
        //                             <span className="sr-only">Collapse chat side bar</span>
        //                             <LogoutIcon width="20" height="20" className={`fill-zinc-100 ${ isOpen ? 'block' : hoverStream? 'block' : 'hidden' }`} />
        //                         </div>
        //                     </Disclosure.Button>

        //                     {/* Twitch chat on non-mobile */}
        //                     <Disclosure.Panel unmount={false} className='lg:h-full'>
        //                         <iframe title="twitch-chat"
        //                                 src={`https://www.twitch.tv/embed/edisonparklive/chat?no-mobile-redirect=true&darkpopout&parent=${window.location.hostname}`}
        //                                 className="hidden lg:block h-full w-full lg:w-[340px]">
        //                         </iframe>
        //                     </Disclosure.Panel>
        //                 </div>
        //             )}
        //         </Disclosure>
        //     </div>
        // </div>
    );
}