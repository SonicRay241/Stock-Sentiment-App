import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

export default function Card(props: {
    children?: ReactNode
    className?: string
}) {
    return (
        <div className={twMerge(
            "rounded-2xl bg-card backdrop-blur-md border border-border py-4 px-6 text-foreground w-full",
            props.className
        )}>
            {props.children}
        </div>
    )
}