"use client";
import { CiFilter, CiSearch } from "react-icons/ci";

export default function Filter() {
    return (
        <div className="flex w-full h-16 rounded-[20px] justify-between lg:px-4 px-1 bg-[#FFFFFF]">
            <div className="flex justify-center items-center w-auto h-auto">
                <div className="flex justify-center items-center gap-0.5 w-auto h-auto">
                    <CiFilter className="lg:text-lg text-base bricolage-grotesque-medium text-[#A9A9A9]" />
                    <h3 className="bricolage-grotesque-bold lg:text-sm text-xs leading-[140%] tracking-[0.04em] align-middle text-[#A9A9A9]">Filter By</h3>
                </div>
            </div>
            <div className="flex items-center w-auto h-auto gap-3 lg:px-4 px-1 lg:py-2 py-1">
                <div className="flex items-center w-full h-11 gap-2.5 rounded-[100px] border border-black/20 lg:px-4 px-1 lg:py-2.75 py-1">
                    <div className="flex items-center w-full h-auto gap-0.5">
                        <CiSearch className="text-[#A9A9A9] lg:text-lg text-base bricolage-grotesque-medium" />
                        <input
                            type="text"
                            placeholder="Search Assignment"
                            className="bricolage-grotesque-bold lg:text-sm text-xs leading-[140%] tracking-[0.04em] align-middle text-[#A9A9A9] lg:px-2.5 px-1 py-0"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}