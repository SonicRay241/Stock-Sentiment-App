"use client"

import { ButtonHTMLAttributes, ReactNode } from "react"

export default function Button(props: {
    children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>) {
    <button
        className="
                    flex h-7 w-7 items-center justify-center
                    rounded-md bg-white/10 hover:bg-white/20
                    transition
                "
        aria-label="Toggle portfolio visibility"
    >
        {props.children}
    </button>
}