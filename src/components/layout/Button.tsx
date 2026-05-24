"use client";

interface Props {
    icon?: React.ReactNode
    text: string;
}

export default function Button({ icon, text }: Props) {
    return (
        <button className="flex justify-center items-center w-full h-10 rounded-[100px] border-4 border-transparent [background:linear-gradient(#272727,#272727)_padding-box,linear-gradient(to_right,#FF7950,#C0350A)_border-box] text-white py-2.5 px-10 gap-2.5 shadow-[0_32px_48px_rgba(255,255,255,0.2),0_16px_48px_rgba(255,255,255,0.12),inset_0_0_34.5px_rgba(255,255,255,0.25),inset_0_-1px_3.5px_rgba(177,177,177,0.6)] cursor-pointer">
            {icon && (<span className="bricolage-grotesque-medium text-sm leading-6 tracking-[0.04em] align-middle">{icon}</span>)}
            <span className="bricolage-grotesque-medium text-sm leading-6 tracking-[0.04em] align-middle">{text}</span>
        </button>
    )
}