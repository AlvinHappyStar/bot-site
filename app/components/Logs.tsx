/** @format */


import React from "react";
import Heading from "./Heading";

type Props = {};

function Logs({ }: Props) {

    const stats = [
        {
            status: "Active",
            address: "0x14...ce66",
            bridges: 0,
            chains: 3,
            volume: "$0.00",
            fees: "$0.02",
            random_actions: 1,
            active_days: "1 day",
            start_date: "an hour ago"
        },
        {
            status: "Active",
            address: "0x40...e111",
            bridges: 4,
            chains: 5,
            volume: "$1136.14",
            fees: "$3.79",
            random_actions: 5,
            active_days: "2 days",
            start_date: "9 hours ago"
        },
        {
            status: "Active",
            address: "0x5c...cc3f",
            bridges: 17,
            chains: 6,
            volume: "$0.00",
            fees: "$0.02",
            random_actions: 18,
            active_days: "2 days",
            start_date: "a day ago"
        },
        {
            status: "Active",
            address: "0x28...e130",
            bridges: 14,
            chains: 6,
            volume: "$4686.28",
            fees: "$12.69",
            random_actions: 14,
            active_days: "2 days",
            start_date: "a day ago"
        }
    ];

    return (
        <div className="max-w-7xl mx-auto mb-10 sm:px-6 lg:px-8">
            <div className="text-white overflow-hidden mt-10 shadow-xl sm:rounded-lg">
                <div className="flex flex-col text-center w-full mb-20">
                    <Heading text="Logs" />
                </div>
                <table className="table-fixed w-full">
                    <thead>
                        <tr className="bg-slate-500 text-white w-full">
                            <th className="w-1/9 py-4 uppercase ...">STATUS</th>
                            <th className="w-1/9 py-4 uppercase ...">address</th>
                            <th className="w-1/9 py-4 uppercase ...">bridges</th>
                            <th className="w-1/9 py-4 uppercase ...">chains</th>
                            <th className="w-1/9 py-4 uppercase ...">volume</th>
                            <th className="w-1/9 py-4 uppercase ...">fees</th>
                            <th className="w-1/9 py-4 uppercase ...">random actions</th>
                            <th className="w-1/9 py-4 uppercase ...">active days</th>
                            <th className="w-1/9 py-4 uppercase ...">start date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            stats.map((s) => (
                                <tr>
                                    <td className="py-3 text-center">{s.status}</td>
                                    <td className="p-3 text-center">{s.address}</td>
                                    <td className="p-3 text-center">{s.bridges}</td>
                                    <td className="p-3 text-center">{s.chains}</td>
                                    <td className="p-3 text-center">{s.volume}</td>
                                    <td className="p-3 text-center">{s.fees}</td>
                                    <td className="p-3 text-center">{s.random_actions}</td>
                                    <td className="p-3 text-center">{s.active_days}</td>
                                    <td className="p-3 text-center">{s.start_date}</td>
                                </tr>
                            ))}


                    </tbody>
                </table>

            </div>
        </div>
    );
}

export default Logs;
