/** @format */

"use client";

import React, { useState } from "react";

type Props = {
    name: string;
    status: boolean;
    progress: string;
    chains: string;
    maxFee: string;
    random_actions: string;
};

function PremiumCard({ name, status, progress, chains, maxFee, random_actions }: Props) {
    const handleStart = () => {
        setStatus(!isStatus);
        console.log(isStatus)
    }

    const [isStatus, setStatus] = useState(status);
    

    return (
        <div className="p-10 xl:w-1/3 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-slate-400 flex flex-col relative overflow-hidden backdrop-brightness-90">

                <div className="flex flex-row text-2xl tracking-widest text-slate-400 title-font mb-4 border-b border-slate-500 font-medium">
                    {name}
                    {isStatus ? <div className="bg-green-500 ml-2 mt-3 w-3 h-3 rounded-full"></div> : <div className="bg-red-500 ml-2 mt-3 w-3 h-3 rounded-full"></div>}
                </div>

                <div className="mb-5">
                    <div className="flex items-center justify-between text-slate-400 mb-2">
                        <span>Progress</span>
                        {progress}
                    </div>

                    <div className="flex items-center justify-between text-slate-400 mb-2">
                        <span>Chains</span>
                        {chains}
                    </div>

                    


                    <div className="flex items-center justify-between text-slate-400 mb-2">
                        <span>Max fee</span>
                        {maxFee}
                    </div>
                    <div className="flex items-center justify-between text-slate-400 mb-2">
                        <span>Random actions</span>
                        {random_actions}
                    </div>
                </div>

                <div className="flex items-center justify-center mt-auto w-full">
                    {isStatus ? <button className="items-center text-center mt-auto text-red-500 border-2 border-red-500 py-2 px-4 focus:outline-none hover:bg-inherit rounded ease" onClick={handleStart}>
                        Pause </button>
                        : <button className="items-center text-center mt-auto text-white border-2 border-green-500 py-2 px-4 focus:outline-none hover:bg-inherit rounded ease" onClick={handleStart}>
                            Start
                        </button>}

                    <button className="items-center mt-auto text-white border-2 border-slate-500 py-2 px-4 ml-4 focus:outline-none hover:bg-inherit rounded ease">
                        View Logs
                    </button>
                </div>

            </div>
        </div >
    );
}

export default PremiumCard;
