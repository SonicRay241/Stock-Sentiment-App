import MenuBar from "@/components/navbar/menubar"
import { ReactNode } from "react"

export default function Layout(props: {
    children: ReactNode
}) {
    return (
        <>
            {props.children}
            <div className="h-20"></div>
            <MenuBar />
        </>
    )
}