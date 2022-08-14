import { Disclosure, Transition } from "@headlessui/react";
import React from "react";
import ProgressInformation from "../components/Progress/ProgressInformation";
import Triangle from "../components/svgComponents/Triangle";

export default function Home() {
    return (
        <div className="flex flex-col lg:flex-row h-[calc(100vh-4rem)]">
            <Disclosure defaultOpen>
                {({ open }) => (
                    <>
                    {/* Collapsible Side bar */}
                    <Disclosure.Panel className={`lg:overflow-y-auto order-3 lg:order-1 flex flex-col h-full lg:w-96 bg-[#2E3032]`}>
                        <ProgressInformation />
                    </Disclosure.Panel>

                    {/* Toggle Button */}
                    {/* <Disclosure.Button className="order-2 h-full hidden lg:block">
                        <div className={`fixed inset-y-1/2 pl-2`} >
                            <div className="hover:bg-primary-400 hover:opacity-90 p-[2px] rounded-md">
                                <Triangle width="24" height="24" cName={`fill-zinc-100 ${ open ? '-rotate-90' : 'rotate-90'} transform lg:block`} />
                            </div>
                        </div>
                    </Disclosure.Button> */}

                    {/* Embeded Twitch  */}
                    <div className="order-1 lg:order-3 h-full w-full lg:h-[calc(100vh-4rem)]">
                        <Disclosure.Button as="button" className="hidden lg:block">
                            <div className={`fixed inset-y-1/2 pl-2 `} >
                                <div className="hover:bg-primary-600 hover:opacity-90 p-[2px] rounded-md">
                                    <Triangle width="24" height="24" cName={`fill-zinc-100 ${ open ? '-rotate-90' : 'rotate-90'} transform lg:block`} />
                                </div>
                            </div>
                        </Disclosure.Button>

                        <iframe title="twitch-stream" src={`https://player.twitch.tv/?channel=edisonparklive&parent=${window.location.hostname}&muted=true&autoplay=true`}
                                className="w-full h-full"
                                allowFullScreen>
                        </iframe>
                    </div>
                    </>
                )}
            </Disclosure>
        </div>
    );
}