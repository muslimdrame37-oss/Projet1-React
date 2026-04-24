import React from "react";

type variant = "primary" | "secondary" | "danger"

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: variant
}

export function Button({ variant = "primary", className, ...rest }: Props) {
    
    const base = "inline-flex items-center rounded-2xl px-4 py-2 font-semibold transition duration-200"
    const variants = {
        primary: "bg-slate-900 text-white hover:opacity-95",
        secondary: "bg-slate-100 text-slate-900 hover:bg-slate-300",
        danger: "bg-red-600 text-white hover:bg-red-500"
    }

    return (
        <a className={`${base} ${variants[variant]} ${className}`} {...rest} />
    )

}