"use client";
import { useState } from "react";
import Image from "next/image";
import { FaRegBell } from "react-icons/fa";
import { MdMenu, MdClose } from "react-icons/md";
import { MdOutlineGroups } from "react-icons/md";
import { LuChartPie } from "react-icons/lu";
import { usePathname } from "next/navigation";
import Menu from "./Menu";

const menuItems = [
    { id: 1, icon: <MdOutlineGroups />, text: "My Groups", href: "/groups" },
    { id: 2, icon: <LuChartPie />, text: "My Library", href: "/library" },
];

export default function MoblieNavbar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    return (
        <>
            <nav className="lg:hidden fixed top-1 z-50 flex w-full h-20 rounded-2xl justify-between items-center px-3.5 py-3 bg-linear-to-b from-transparent to-white/60 backdrop-blur-[96px]">
                <div className="flex items-center gap-2">
                    <Image
                        src={"/Images/vedaai_logo2.png"}
                        alt="VedaAI Logo"
                        width={28}
                        height={28}
                        className="w-7 h-7 rounded-[8.4px]"
                    />
                    <h1 className="text-xl text-[#303030] bricolage-grotesque-bold leading-5 tracking-[0.06em]">
                        VedaAI
                    </h1>
                </div>

                <div className="flex items-center gap-3">
                    <div className="relative w-9 h-9 flex items-center justify-center rounded-full">
                        <FaRegBell className="text-2xl w-6 h-6 text-[#303030]" />
                        <span className="absolute top-0.5 right-0.5 w-2 h-2 bg-[#FF5623] rounded-full"></span>
                    </div>
                    <Image
                        src={"/Images/safdar.jpg"}
                        alt="profile"
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full object-cover"
                    />
                    <div
                        onClick={() => setOpen(!open)}
                        className="w-6 h-6 flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out"
                    >
                        {open ? (
                            <MdClose className="text-2xl text-[#1D1B20]" />
                        ) : (
                            <MdMenu className="text-2xl text-[#1D1B20]" />
                        )}
                    </div>
                </div>
            </nav>

            {open && (
                <div className="absolute top-20 right-0 flex flex-col w-full h-auto py-2 px-3 items-start bg-white rounded-l-2xl shadow-lg transition-transform duration-300 ease-in-out">
                    <div className="flex flex-col w-full h-auto gap-1.5">
                        {menuItems.map((item) => {
                            const active = pathname === item.href;
                            return (
                                <Menu
                                    key={item.href}
                                    icon={item.icon}
                                    text={item.text}
                                    href={item.href}
                                    active={active}
                                    className={"w-full"}
                                />
                            );
                        })}
                    </div>
                </div>
            )}
        </>
    )
};