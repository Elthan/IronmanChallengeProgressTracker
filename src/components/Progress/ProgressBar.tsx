import { useState } from "react";
import { IProgressBar } from "./IProgressBar";

export default function ProgressBar(values: IProgressBar) {

    const [isTopPercent, setIsTopPercent] = useState(values.topPercent);
    let styling = "bg-complementary-600 text-xs font-medium text-blue-100 text-center p-1.5 leading-none shadow-md shadow-gray-500";
    let width = isTopPercent ? `100%` : `${values.points}%`;
    let text = isTopPercent ? "REACHED TOP 1%" : values.points;

    function handleCheckBox() {
        setIsTopPercent(!isTopPercent)
    }

    return (
        <div className="w-full bg-gray-200 h-2.5 dark:bg-gray-400 my-2">
            { values.topPercent ?
                <div onClick={handleCheckBox} className="w-full bg-gray-200 cursor-pointer">
                    <div className={styling} style={{ width: width }}>{text}</div>
                </div>
                :
                <div className="w-full bg-gray-200">
                    <div className={styling} style={{ width: width }}>{text}</div>
                </div>
            }
        </div>
    )
}