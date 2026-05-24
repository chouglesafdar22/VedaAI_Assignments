"use client";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

interface CardProps {
    id: number;
    assName: string;
    assignedDate: string;
    dueDate: string;
}

export default function AssignmentCard({ id, assName, assignedDate, dueDate }: CardProps) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="relative flex w-full lg:h-40.5 h-29 rounded-3xl p-6 gap-12 bg-white">
                <div className="flex flex-col justify-between w-full h-full">
                    <div className="flex justify-between w-full h-auto">
                        <h3 className="bricolage-grotesque-extrabold lg:text-2xl text-lg leading-[120%] tracking-[0.04em] align-middle text-[#303030]">
                            {assName}
                        </h3>
                        <div className="relative">
                            <BsThreeDotsVertical onClick={() => setOpen(!open)} className="lg:text-2xl text-lg text-[#A9A9A9] cursor-pointer" />
                        </div>
                    </div>
                    <div className="flex justify-between w-full h-auto">
                        <div className="flex justify-center items-center gap-1">
                            <h4 className="bricolage-grotesque-extrabold lg:text-base text-sm leading-[120%] tracking-[0.04em] align-middle text-[#303030]">
                                Assigned on:
                            </h4>
                            <span className="bricolage-grotesque-regular lg:text-base text-sm leading-[120%] tracking-[0.04em] align-middle text-[#000000]/50">{assignedDate}</span>
                        </div>
                        <div className="flex justify-center items-center gap-1">
                            <h4 className="bricolage-grotesque-extrabold lg:text-base text-sm leading-[120%] tracking-[0.04em] align-middle text-[#303030]">
                                Due:
                            </h4>
                            <span className="bricolage-grotesque-regular lg:text-base text-sm leading-[120%] tracking-[0.04em] align-middle text-[#000000]/50">{dueDate}</span>
                        </div>
                    </div>
                </div>
                {open && (
                    <div className="absolute right-14 flex flex-col w-auto h-auto rounded-2xl p-2.5 gap-1 bg-white shadow-[0_32px_48px_rgba(0,0,0,0.05),0_16px_48px_rgba(0,0,0,0.2)]">
                        <div className="flex justify-center items-center px-2 py-2 hover:bg-[#F6F6F6] cursor-pointer rounded-md">
                            <span className="bricolage-grotesque-medium lg:text-sm text-xs leading-[120%] tracking-[0.04em] align-middle text-[#303030] text-left">
                                View Assignment
                            </span>
                        </div>
                        <div className="flex px-2 py-2 hover:bg-[#F6F6F6] cursor-pointer rounded-md">
                            <span className="bricolage-grotesque-medium lg:text-sm text-xs leading-[120%] tracking-[0.04em] align-middle text-[#C53535] text-left">
                                Delete
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}