import { twMerge } from "tailwind-merge"

export default function Divider(props: {
    orientation?: "horizontal" | "vertical"
    className?: string
}) {
    const orientation = props.orientation || "horizontal"

    return (
        <div className={twMerge(
            "bg-border",
            orientation == "horizontal"
                ? "h-px"
                : "w-px",
            props.className
        )} />
    )
}