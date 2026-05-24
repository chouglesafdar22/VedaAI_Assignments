"use client";
import { FaArrowLeft } from "react-icons/fa6";
import { RxDashboard } from "react-icons/rx";
import { FaRegBell } from "react-icons/fa";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
    return (
        <nav className="lg:flex hidden xl:min-w-275 lg:max-w-275 h-16 flex-row items-center justify-evenly rounded-2xl bg-white/75 pl-6 pr-3 gap-2.5 fixed top-3 z-50 left-81.75">
            <div className="w-10 h-10 flex flex-row items-center justify-center rounded-[100px] text-[#303030] gap-2.5">
                <FaArrowLeft className="text-2xl" />
            </div>
            <div className="w-4/5 h-5 flex flex-row items-center gap-2">
                <RxDashboard className="text-2xl w-5 h-5 text-[#A9A9A9]" />
                <h4 className="bricolage-grotesque-semibold text-base leading-[100%] tracking-[0.04em] align-middle text-[#A9A9A9]">Assignments</h4>
            </div>
            <div className="relative w-9 h-9 flex items-center justify-center rounded-full">
                <FaRegBell className="text-2xl w-6 h-6 text-[#303030]" />
                <span className="absolute top-0.5 right-0.5 w-2 h-2 bg-[#FF5623] rounded-full"></span>
            </div>
            <div className="flex justify-center items-center w-auto h-full rounded-xl py-1.5 px-3 gap-2 cursor-pointer">
                <Image
                    src={"/Images/Avatar.png"}
                    alt="Avatar"
                    width={50}
                    height={50}
                    className="rounded-full"
                />
                <div className="flex justify-center items-center w-full h-auto gap-1">
                    <h4 className="bricolage-grotesque-bold text-base leading-[140%] tracking-[0.04em] align-middle text-[#303030]">John Doe</h4>
                    <IoIosArrowDown className="text-base w-6 h-6 text-[#303030]" />
                </div>
            </div>
        </nav>
    )
}