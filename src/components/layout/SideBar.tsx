"use client";
import Image from "next/image";
import Button from "./Button";
import { IoSparkles, IoSettingsOutline } from "react-icons/io5";
import Menu from "./Menu";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineGroups, MdOutlineLibraryBooks } from "react-icons/md";
import { FiBook } from "react-icons/fi";
import { LuChartPie } from "react-icons/lu";
import { usePathname } from "next/navigation";

const menuItems = [
    { id: 1, icon: <RxDashboard />, text: "Home", href: "/" },
    { id: 2, icon: <MdOutlineGroups />, text: "My Groups", href: "/groups" },
    { id: 3, icon: <MdOutlineLibraryBooks />, text: "Assignment's", href: "/assignments" },
    { id: 4, icon: <FiBook />, text: "AI Teacher's Toolkit", href: "/teachers" },
    { id: 5, icon: <LuChartPie />, text: "My Library", href: "/library" },
];

export default function SideBar() {
    const pathname = usePathname();
    return (
        <aside className="hidden lg:flex flex-col w-76 h-189 top-3 left-0 justify-between rounded-2xl p-6 bg-[rgba(255, 255, 255, 1)] shadow-[0_32px_48px_rgba(0,0,0,0.2),0_16px_48px_rgba(0,0,0,0.12)]">
            <div className="flex flex-col justify-center w-full h-auto gap-14">
                <div className="flex items-center gap-1">
                    <Image
                        src={"/Images/vedaai_logo2.png"}
                        alt="VedaAI Logo"
                        width={40}
                        height={40}
                    />
                    <h1 className="text-xl text-[#303030] bricolage-grotesque-bold leading-5 tracking-[0.06em]">
                        VedaAI
                    </h1>
                </div>
                <div className="flex justify-center items-center">
                    <Button
                        icon={<IoSparkles />}
                        text={"Create Assignment"}
                    />
                </div>
                <div className="flex flex-col w-62.75 h-auto gap-2">
                    {menuItems.map((item) => {
                        const active = pathname === item.href
                        return (
                            <Menu
                                key={item.href}
                                icon={item.icon}
                                text={item.text}
                                href={item.href}
                                active={active}

                            />
                        )
                    })}
                </div>
            </div>
            <div className="flex flex-col w-[256px] h-auto gap-2">
                <div className="flex flex-row items-center w-full h-auto py-2 px-3 gap-2 text-[#5E5E5E]/80">
                    <span className="bricolage-grotesque-regular text-base leading-[140%] tracking-[0.04em] align-middle">
                        <IoSettingsOutline />
                    </span>
                    <span className="bricolage-grotesque-regular text-base leading-[140%] tracking-[0.04em] align-middle">
                        Setting
                    </span>
                </div>
                <div className="flex flex-row gap-4 w-full h-auto rounded-2xl p-3">
                    <div className="flex w-full h-auto gap-2">
                        <Image
                            src={"/Images/Avatar.png"}
                            alt="Avatar"
                            width={56}
                            height={59}
                            className="w-14 h-14.75 rounded-full"
                        />
                        <div className="flex flex-col w-full h-auto">
                            <h4 className="bricolage-grotesque-bold text-base leading-[140%] tracking-[0.04em] align-middle text-[#303030]">Delhi Public School</h4>
                            <p className="bricolage-grotesque-regular text-sm leading-[140%] tracking-[0.04em] align-middle text-[#5E5E5E]">Bokaro Steel City</p>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
};