"use client"

import { ReactNode } from "react"

export default function SectionTitle(props: {
    children: ReactNode
}) {
    return (
        <div className="">
            <h2 className="text-lg font-semibold text-foreground">
                {props.children}
            </h2>
        </div>
    )
}
