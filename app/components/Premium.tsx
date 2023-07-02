/** @format */

"use client";

import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Heading from "./Heading";
import PremiumCard from "./PremiumCard";

import CloseIcon from '@mui/icons-material/Close';

type DialogProps = {
    onClose: () => void;
};

function MyDialog({ onClose }: DialogProps) {

    // const [isEthSwitchOn, setIsEthSwitchOn] = useState(false);
    // const [isPolySwitchOn, setIsPolySwitchOn] = useState(false);
    // const [isAvaSwitchOn, setIsAvaSwitchOn] = useState(false);
    // const [isArbSwitchOn, setIsArbSwitchOn] = useState(false);
    // const [isBscSwitchOn, setIsBscSwitchOn] = useState(false);

    // const handleSwitchEthToggle = () => {
    //     setIsEthSwitchOn(!isEthSwitchOn);
    // };

    // const handleSwitchPolyToggle = () => {
    //     setIsPolySwitchOn(!isPolySwitchOn);
    // };

    // const handleSwitchAvaToggle = () => {
    //     setIsAvaSwitchOn(!isAvaSwitchOn);
    // };

    // const handleSwitchArbToggle = () => {
    //     setIsArbSwitchOn(!isArbSwitchOn);
    // };

    // const handleSwitchBscToggle = () => {
    //     setIsBscSwitchOn(!isBscSwitchOn);
    // };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">

            {/* Add your dialog content here */}
            <Transition appear show={true} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={onClose}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-black p-6 text-left align-middle shadow-xl transition-all">
                                    <div className="flex justify-between">
                                        <Dialog.Title
                                            as="h3"
                                            className="text-lg font-medium leading-6 text-white"
                                        >
                                            <span>Create</span>
                                        </Dialog.Title>

                                        <CloseIcon sx={{ color: "white" }} onClick={onClose} />
                                    </div>

                                    <div className="flex flex-col mt-2 text-slate-400">
                                        <span className="ml-2">Name</span>
                                        <input
                                            type="text"
                                            className="border bg-black text-white border-gray-800 w-full rounded-md px-3 py-1 text-white-500 my-1"
                                        />
                                    </div>

                                    <div className="flex flex-col mt-2 text-slate-400">
                                        <span className="ml-2">Txs number via bridges per wallet</span>
                                        <input
                                            type="text"
                                            className="border bg-black text-white border-gray-800 w-full rounded-md px-3 py-1 text-white-500 my-1"
                                        />
                                    </div>

                                    <span className="ml-2 text-slate-400">Choose Network</span>
                                    <div className="flex flex-wrap text-slate-400 m-3">
                                        <div className="flex items-center justify-start text-slate-400 ml-2">
                                            <input
                                                type="checkbox"
                                                id="checkbox"
                                                className="form-checkbox text-blue-500"
                                            />
                                            <span className="ml-2">Ethereum</span>

                                        </div>

                                        <div className="flex items-center justify-start text-slate-400 ml-2">
                                            <input
                                                type="checkbox"
                                                id="checkbox"
                                                className="form-checkbox text-blue-500"
                                            />
                                            <span className="ml-2">Arbitrum</span>

                                        </div>

                                        <div className="flex items-center justify-start text-slate-400 ml-2">
                                            <input
                                                type="checkbox"
                                                id="checkbox"
                                                className="form-checkbox text-blue-500"
                                            />
                                            <span className="ml-2">Avax</span>

                                        </div>

                                        <div className="flex items-center justify-start text-slate-400 ml-2">
                                            <input
                                                type="checkbox"
                                                id="checkbox"
                                                className="form-checkbox text-blue-500"
                                            />
                                            <span className="ml-2">Polygon</span>

                                        </div>

                                        <div className="flex items-center justify-start text-slate-400 ml-2">
                                            <input
                                                type="checkbox"
                                                id="checkbox"
                                                className="form-checkbox text-blue-500"
                                            />
                                            <span className="ml-2">BSC</span>

                                        </div>
                                    </div>

                                    <div className="flex flex-col mt-2 text-slate-400">
                                        <span className="ml-2">Max gass per txs($)</span>
                                        <input
                                            type="text"
                                            className="border bg-black text-white border-gray-800 w-full rounded-md px-3 py-1 text-white-500 my-1"
                                        />
                                    </div>

                                    <div className="flex flex-col mt-2 text-slate-400">
                                        <span className="ml-2">Random actions</span>
                                        <input
                                            type="text"
                                            className="border bg-black text-white border-gray-800 w-full rounded-md px-3 py-1 text-white-500 my-1"
                                        />
                                    </div>

                                    <div className="flex flex-col mt-2 text-slate-400">
                                        <span className="ml-2">Sleeping interval between txs in seconds</span>
                                        <div className="flex justify-between">
                                            <input
                                                type="text"
                                                className="border bg-black text-white border-gray-800 w-full rounded-md px-3 py-1 text-white-500 my-1"
                                            />
                                            <input
                                                type="text"
                                                className="border bg-black text-white border-gray-800 w-full rounded-md px-3 py-1 text-white-500 my-1 ml-3"
                                            />
                                        </div>

                                    </div>

                                    <div className="flex flex-col mt-2 text-slate-400">
                                        <span className="ml-2">Private Key</span>
                                        <input
                                            type="text"
                                            className="border bg-black text-white border-gray-800 w-full rounded-md px-3 py-1 text-white-500 my-1"
                                        />
                                    </div>

                                    <div className="mt-4 flex items-center justify-center">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={onClose}
                                        >
                                            Create
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

        </div>
    );
}

type Props = {};

function Premium({ }: Props) {

    const [isModalOpen, setModalOpen] = useState(false);

    const handleCreate = () => {
        setModalOpen(true);
    };

    const handleClose = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <section className="text-slate-400 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-10">
                        <Heading text="Dashboard" />
                    </div>
                    <div className="inline-flex lg:justify-start ml-5 lg:ml-0">
                        <button className="bg-slate-800 py-1 px-3 focus:outline-none hover:bg-inherit rounded-2xl text-base mt-4 md:mt-0 gap-2 border-2 border-slate-500 ease shadow-lg" onClick={handleCreate}>
                            <span className="inline-flex py-1 px-3 gap-2 justify-center items-center">
                                <p className="text-lg">Create</p>
                            </span>
                        </button>
                    </div>
                    {isModalOpen && <MyDialog onClose={handleClose} />}
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
