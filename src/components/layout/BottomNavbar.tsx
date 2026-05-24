"use client";
import { FaPlus } from "react-icons/fa6";
import Menu from "./Menu";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { CgFileAdd } from "react-icons/cg";
import { usePathname } from "next/navigation";
import { IoSparkles } from "react-icons/io5";

const menuItems = [
    { id: 1, icon: <RxDashboard />, text: "Home", href: "/" },
    { id: 3, icon: <MdOutlineLibraryBooks />, text: "Assignment's", href: "/assignment" },
    { id: 2, icon: <CgFileAdd />, text: "Library", href: "/library" },
    { id: 4, icon: <IoSparkles />, text: "AI Toolkit", href: "/toolkit" },
]

export default function BottomNavbar() {
    const pathname = usePathname();
    return (
        <div className="lg:hidden flex items-center justify-center fixed bottom-2 p-1.5 flex-col w-full h-auto gap-3.25 bg-[#F0F0F0]/5">
            <div className="flex justify-end items-center w-full h-auto gap-2.5">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-[0_32px_48px_rgba(0,0,0,0.2),0_16px_48px_rgba(0,0,0,0.12)]">
                    <FaPlus className="text-base text-[#FF5623]" />
                </div>
            </div>
            <div className="flex w-full h-auto rounded-2xl justify-between py-1.5 px-2 bg-[#181818] shadow-[0_32px_48px_rgba(0,0,0,0.2),0_16px_48px_rgba(0,0,0,0.12)]">
                {menuItems.map((item) => {
                    const active = pathname === item.href
                    return (
                        <Menu
                            key={item.href}
                            icon={item.icon}
                            text={item.text}
                            href={item.href}
                            active={active}
                            className={"flex-col text-center"}
                        />
                    )
                })}
            </div>
        </div>
    )
};