import { ReactNode } from "react"

export default function CardHeader(props: {
    children: ReactNode
}) {
    return (
        <div className="flex items-center gap-2 mb-2 text-muted-foreground text-sm">
            {props.children}
        </div>
    )
}