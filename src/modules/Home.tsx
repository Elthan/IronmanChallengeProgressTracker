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
            className="flex flex-col lg:flex-row h-[calc(100vh-4rem)]"
        >
            <Disclosure defaultOpen>
                {({ open }) => (
                    <>
                    {/* Collapsible Side bar */}
                    <Disclosure.Panel className={`relative overflow-y-auto order-3 lg:order-1 flex flex-col h-full lg:w-96 bg-[#18181B]`}>
                        <ProgressInformation />
                        <Disclosure.Button>
                            <div className="absolute top-3 right-3 hover:bg-[rgba(82,82,91,0.6)] p-[5px] rounded-md">
                                <span className="sr-only">Collapse progression side bar</span>
                                <LogoutIcon width="20" height="20" className={`fill-zinc-100 scale-x-[-1]`} />
                            </div>
                        </Disclosure.Button>
                    </Disclosure.Panel>

                    {/* Toggle Button */}
                    <Disclosure.Button className="order-2 h-full hidden lg:block">
                        <div className={`fixed pl-2`} >
                            <div className="hover:bg-[rgba(82,82,91,0.5)] p-[5px] rounded-md">
                                <span className="sr-only">Expand progression side bar</span>
                                <LogoutIcon width="20" height="20" className={`fill-zinc-100 ${ open ? 'hidden' : !hoverStream ? 'hidden' : 'block'} transform`} />
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
                        <>
                        {/* <TwitchEmbed /> */}
                        <iframe title="twitch-stream" 
                                src={`https://player.twitch.tv/?channel=edisonparklive&parent=${window.location.hostname}&muted=true&autoplay=true`}
                                className="w-full h-full"
                                allowFullScreen>
                        </iframe>

                        <Disclosure.Panel>
                            <iframe title="twitch-chat"
                                    src={`https://www.twitch.tv/embed/edisonparklive/chat?darkpopout&parent=${window.location.hostname}`}
                                    height="100%"
                                    width="340">
                            </iframe>
                        </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    );
}