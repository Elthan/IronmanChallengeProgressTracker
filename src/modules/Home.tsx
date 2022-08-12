import React, { useState } from "react";
import ProgressInformation from "../components/Progress/ProgressInformation";
import Triangle from "../components/svgComponents/Triangle";

export default function Home() {
    const [showStream, setShowStream] = useState(false);

    function toggleShowStream() {
        setShowStream(!showStream);
    }

    return (
        <div className="flex flex-col lg:flex-row h-[calc(100vh-4rem)]">
            <div className={`order-3 lg:order-1 flex flex-col h-full bg-zinc-800 opacity-95 m-full lg:w-96 ${!showStream ? 'flex' : 'hidden'}`}>
                <ProgressInformation />
            </div>
            <div className="order-2 h-full hidden lg:block">
                <button id="triangleButton" className="fixed top-[50%] pl-2" onClick={toggleShowStream}>
                    <Triangle width="24" height="24" cName={`fill-zinc-100 ${ showStream ? 'rotate-90' : '-rotate-90'} transform md:block`} />
                </button>
            </div>
            <div className="order-1 lg:order-3 h-full w-full lg:h-[calc(100vh-4rem)]">
                <iframe title="twitch-stream" src={`https://player.twitch.tv/?channel=edisonparklive&parent=${window.location.hostname}&muted=true&autoplay=true`}
                        className="w-full h-full"
                        allowFullScreen>
                </iframe>
            </div>
        </div>
    );
}