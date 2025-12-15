"use client"

import { ButtonHTMLAttributes, ReactNode } from "react"
import { twJoin, twMerge, } from "tailwind-merge"

export default function Button(props: {
    children?: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={twMerge(
                "flex justify-center items-center rounded-md transition gap-2 bg-primary hover:brightness-110",
                props.className
            )}
        >
            {props.children}
        </button>
    )
}