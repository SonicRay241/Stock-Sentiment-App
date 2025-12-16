"use client"

import { HomeIcon, SearchIcon, NewspaperIcon, BriefcaseIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export default function MenuBar() {
    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-t border-border">
            <div className="flex items-center justify-around h-16">
                <NavButton
                    href="/"
                    icon={<HomeIcon className="h-5 w-5" />}
                >
                    Home
                </NavButton>
                <NavButton
                    href="/explore"
                    icon={<SearchIcon className="h-5 w-5" />}
                >
                    Explore
                </NavButton>
                <NavButton
                    href="/news"
                    icon={<NewspaperIcon className="h-5 w-5" />}
                >
                    News
                </NavButton>
                <NavButton
                    href="/portfolio"
                    icon={<BriefcaseIcon className="h-5 w-5" />}
                >
                    Portfolio
                </NavButton>
            </div>
        </nav>
    );
}

function NavButton(props: {
    href: string
    icon?: ReactNode
    children: ReactNode
}) {
    const pathname = usePathname()

    return (
        <Link href={props.href} className={twMerge(
            "flex flex-col items-center gap-1 text-muted-foreground p-4",
            pathname == props.href && "text-foreground"
        )}>
            {props.icon}
            <span className="text-xs font-medium">{props.children}</span>
        </Link>
    )
}
