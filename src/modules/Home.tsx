import { Disclosure } from "@headlessui/react";
import React, { useState } from "react";
import ProgressInformation from "../components/Progress/ProgressInformation";
import { LogoutIcon, UploadIcon } from '@heroicons/react/solid';
import { useMediaQuery } from "react-responsive";


export default function Home() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' }
                                            , undefined
                                            , (matches: any) => setShowStream(!matches));
    const [hoverStream, setHoverStream] = useState(true);
    const [showStream, setShowStream] = useState(!isTabletOrMobile);

    return (
        <main 
            onMouseOver={() => setHoverStream(true)}
            onMouseOut={() => setHoverStream(false)}
            className="flex flex-col lg:flex-row h-[calc(100vh-4rem)]"
        >
            <Disclosure defaultOpen as="section" className="h-full lg:flex-1 flex flex-col lg:flex-row ">
                {({ open }: {open: boolean}) => (
                    <>
                    {/* Collapsible Side bar */}
                    <Disclosure.Panel static={isTabletOrMobile} as="div" className="order-2 lg:order-1 w-full lg:w-auto lg:h-full overflow-y-auto styled-scrollbars lg:overflow-y-visible">
                        <div className="relative h-min lg:h-full">
                            <ProgressInformation />

                            {/* Toggle Button when side bar is opened */}
                            <Disclosure.Button className="absolute top-3 right-3">
                                <div className="hidden lg:block hover:bg-[rgba(82,82,91,0.9)] p-[5px] rounded-md">
                                    <span className="sr-only">Collapse progression side bar</span>
                                    <LogoutIcon width="20" height="20" className={`fill-zinc-100 scale-x-[-1]`} />
                                </div>
                            </Disclosure.Button>

                            {/* Toggle Button to show/hide Stream */}
                            <button onClick={() => setShowStream(!showStream)} className="cursor-pointer z-10 absolute top-2 right-3">
                                <div className="block lg:hidden hover:bg-[rgba(82,82,91,0.9)] p-[5px] rounded-md" >
                                    <span className="sr-only">Toggle show/hide stream</span>
                                    <UploadIcon width="20" height="20" className={`fill-zinc-100 ${!showStream && 'rotate-180'}`} />
                                </div>
                            </button>
                        </div>
                    </Disclosure.Panel>

                    {/* <TwitchEmbed /> */}
                    {
                        showStream &&
                        <article className="flex-1 order-1 lg:order-2 relative w-full h-full">

                                <iframe title="twitch-stream" 
                                    src={`https://player.twitch.tv/?channel=edisonparklive&parent=${window.location.hostname}&muted=true&autoplay=false`}
                                    className="w-full h-full aspect-video lg:aspect-auto"
                                    allowFullScreen>
                                </iframe>

                            {/* Toggle Button when side bar is closed */}
                            <Disclosure.Button className="absolute bottom-1/2 z-10 pl-2 order-2 hidden lg:block">
                                <div className="hover:bg-[rgba(82,82,91,0.5)] p-[5px] rounded-md">
                                    <span className="sr-only">Expand progression side bar</span>
                                    <LogoutIcon width="20" height="20" className={`fill-zinc-100 ${ open ? 'hidden' : !hoverStream? 'hidden' : 'block' } transform`} />
                                </div>
                            </Disclosure.Button>
                        </article>
                    }

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
    );
}