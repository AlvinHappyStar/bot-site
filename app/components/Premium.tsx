/** @format */


import React from "react";
import Heading from "./Heading";
import PremiumCard from "./PremiumCard";
import PremiumPopularCard from "./PremiumPopularCard";

type Props = {};

function Premium({}: Props) {
    return (
        <div>
            <section className="text-slate-400 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <Heading text="Dashboard" />
                    </div>
                    <div className="flex flex-wrap -m-3">
                        <PremiumCard
                            key={"A"}
                            progress="28/28 txs"
                            chains="6"
                            maxFee="$1.15"
                            random_actions="4 per 10 txs"
                            name="w2"
                            status={true}
                        />
                        <PremiumCard
                            key={"B"}
                            progress="12/12 txs"
                            chains="6"
                            maxFee="$1.3"
                            random_actions="6 per 10 txs"
                            name="w85"
                            status={true}
                        />
                        <PremiumCard
                            key={"C"}
                            progress="25/25 txs"
                            chains="5"
                            maxFee="$1.3"
                            random_actions="3 per 10 txs"
                            name="w7"
                            status={true}
                        />
                        <PremiumCard
                            key={"D"}
                            progress="14/27 txs"
                            chains="6"
                            maxFee="$1.3"
                            random_actions="5 per 10 txs"
                            name="w53"
                            status={false}
                        />
                        <PremiumCard
                            key={"E"}
                            progress="14/27 txs"
                            chains="6"
                            maxFee="$1.3"
                            random_actions="5 per 10 txs"
                            name="w53"
                            status={false}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Premium;
