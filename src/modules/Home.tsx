import { Disclosure } from "@headlessui/react";
import React, { useState } from "react";
import ProgressInformation from "../components/Progress/ProgressInformation";
import { LogoutIcon } from '@heroicons/react/solid';


export default function Home() {
    const [hoverStream, setHoverStream] = useState(false);
    
    return (
        <div 
            onMouseOver={() => setHoverStream(true)}
            onMouseOut={() => setHoverStream(false)}
            className="relative flex flex-col lg:flex-row h-[calc(100vh-4rem)]"
        >
            <Disclosure defaultOpen>
                {({ open }) => (
                    <>
                    {/* Collapsible Side bar */}
                    <Disclosure.Panel unmount={false} className={`relative overflow-y-auto order-3 lg:order-1 flex flex-col h-full lg:w-96 bg-[#18181B]`}>
                        <ProgressInformation />

                        {/* Toggle Button when side bar is opened */}
                        <Disclosure.Button>
                            <div className="absolute top-3 right-3 hover:bg-[rgba(82,82,91,0.9)] p-[5px] rounded-md">
                                <span className="sr-only">Collapse progression side bar</span>
                                <LogoutIcon width="20" height="20" className={`fill-zinc-100 scale-x-[-1]`} />
                            </div>
                        </Disclosure.Button>
                    </Disclosure.Panel>

                    {/* Toggle Button when side bar is closed */}
                    <Disclosure.Button className="z-10 order-2 h-full hidden lg:block">
                        <div className={`absolute bottom-1/2 pl-2`} >
                            <div className="hover:bg-[rgba(82,82,91,0.5)] p-[5px] rounded-md">
                                <span className="sr-only">Expand progression side bar</span>
                                <LogoutIcon width="20" height="20" className={`fill-zinc-100 ${ open ? 'hidden' : !hoverStream? 'hidden' : 'block' } transform`} />
                            </div>
                        </div>
                    </Disclosure.Button>
                    </>
                )}
            </Disclosure>

            {/* Embeded Twitch  */}
            <div className="flex order-1 flex-10 lg:order-3 h-full w-full lg:h-[calc(100vh-4rem)]">
                <Disclosure defaultOpen>
                    {({ open }) => (
                        <div className="relative flex flex-row w-full">
                        {/* <TwitchEmbed /> */}
                        <iframe title="twitch-stream" 
                                src={`https://player.twitch.tv/?channel=edisonparklive&parent=${window.location.hostname}&muted=true&autoplay=true`}
                                className="w-full h-full"
                                allowFullScreen>
                        </iframe>

                        {/* Toggle Button when chat is opened */}
                        <Disclosure.Button>
                            <div className={`absolute ${open ? 'top-3 right-[300px]' : 'bottom-1/2 right-4 scale-x-[-1]'} hover:bg-[rgba(82,82,91,0.9)] p-[5px] rounded-md`}>
                                <span className="sr-only">Collapse chat side bar</span>
                                <LogoutIcon width="20" height="20" className={`fill-zinc-100 ${ open ? 'block' : hoverStream? 'block' : 'hidden' }`} />
                            </div>
                        </Disclosure.Button>

                        <Disclosure.Panel unmount={false}>
                            <iframe title="twitch-chat"
                                    src={`https://www.twitch.tv/embed/edisonparklive/chat?darkpopout&parent=${window.location.hostname}`}
                                    height="100%"
                                    width="340">
                            </iframe>

                        </Disclosure.Panel>
                        </div>
                    )}
                </Disclosure>
            </div>
        </div>
    );
}