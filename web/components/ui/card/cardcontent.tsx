import { ReactNode } from "react"

export default function Card(props: {
    children: ReactNode
}) {
    return (
        <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 py-4 px-6 text-foreground w-full">
            {props.children}
        </div>
    )
}