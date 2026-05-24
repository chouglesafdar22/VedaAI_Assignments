"use client";
import Link from "next/link";

interface menuProps {
    icon: React.ReactNode;
    text: string;
    active: boolean;
    href: string;
    className?:string;
};

export default function Menu({ icon, text, active, href,className }: menuProps) {
    return (
        <Link
            href={href}
            className={`flex justify-start items-center lg:w-63.5 w-16 lg:h-10 h-16 rounded-lg py-2.25 px-3 gap-2 ${active ? "text-[#303030]" : "text-[#5E5E5E]/80"} ${className}`}>
            <span className="bricolage-grotesque-regular lg:text-base text-xs leading-[140%] tracking-[0.04em] align-middle">{icon}</span>
            <span className="bricolage-grotesque-regular lg:text-base text-xs leading-[140%] tracking-[0.04em] align-middle">{text}</span>
        </Link>
    )
};