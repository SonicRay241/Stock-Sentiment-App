import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

export default function CardHeader(props: {
    children: ReactNode
    className?: string
}) {
    return (
        <div className={twMerge(
            "flex items-center gap-2 mb-2 text-muted-foreground text-sm",
            props.className
        )}>
            {props.children}
        </div>
    )
}