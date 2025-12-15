"use client";

import { ReactNode, useEffect, useState } from "react";
import { BellIcon, ChevronLeftIcon } from "lucide-react";
import { useParams, usePathname } from "next/navigation";
import Button from "../ui/button";

export default function Navbar() {
    return (
        <nav className="sticky top-0 left-0 right-0 z-50 bg-linear-to-b from-background/75 via-background/60 to-transparent px-4 py-3 h-16">
            <div
                className="absolute inset-0 backdrop-blur-md -z-10"
                style={{
                    maskImage: "linear-gradient(to top, transparent, black 35%);"
                }}>
            </div>
            <div className="flex items-center justify-between">
                <NavContent />

                <Button className="size-9 rounded-full bg-muted hover:bg-muted/80 active:scale-95 transition">
                    <BellIcon className="size-4" />
                </Button>
            </div>
        </nav>
    );
}

function NavContent() {
    const pathname = usePathname()

    if (/\/stock\/.+/g.test(pathname)) {
        return <StockPageInfo />
    }
    else if (/\/portfolio/g.test(pathname)) {
        return <Generic title="Portfolio" />
    }
    else if (/\/news/g.test(pathname)) {
        return <Generic title="News" />
    }
    else if (/\/explore/g.test(pathname)) {
        return <Generic title="Explore" />
    }
    else {
        return <UserInfo />
    }
}

function Generic(props: {
    title: string
}) {
    return (
        <>
            <Avatar />
            <h1>{props.title}</h1>
        </>
    )
}

function StockPageInfo() {
    const params = useParams<{ ticker: string }>()

    return (
        <WithBack>
            <h1 className="text-sm">{params.ticker}</h1>
            <p className="text-muted-foreground text-xs">NASDAQ</p>
        </WithBack>
    )
}

function WithBack(props: {
    children: ReactNode
}) {
    return (
        <>
            <Button
                className="size-9 rounded-full bg-muted hover:bg-muted/80 active:scale-95 transition"
                onClick={() => history.back()}
            >
                <ChevronLeftIcon className="size-5" />
            </Button>
            <div className="flex flex-col items-center">
                {props.children}
            </div>
        </>
    )
}

function UserInfo(props: {
    userName?: string
}) {
    const [dateText, setDateText] = useState("");
    const [greeting, setGreeting] = useState("Good Morning");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();

            // Greeting based on hour
            const hour = now.getHours();
            if (hour < 12 && hour > 4) setGreeting("Good Morning");
            else if (hour > 12 && hour < 18) setGreeting("Good Afternoon");
            else setGreeting("Good Evening");

            // Date text
            const formattedDate = now.toLocaleDateString("en-US", {
                month: "short",
                day: "2-digit",
            });

            setDateText(`${formattedDate}, Market Open`);
        };

        updateTime();
        const interval = setInterval(updateTime, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-center gap-3">
            <Avatar />

            <div className="leading-tight">
                <p className="text-sm font-semibold">
                    {greeting}, {props.userName || "User"}
                </p>
                <p className="text-[11px] text-muted-foreground">
                    {dateText}
                </p>
            </div>
        </div>
    )
}

function Avatar() {
    return (
        <div className="relative flex items-center justify-center">
            <div className="absolute h-14 w-14 rounded-full bg-emerald-400/30 blur-xl animate-[pulse_3s_ease-in-out_infinite]" />
            <div className="absolute h-12 w-12 rounded-full bg-emerald-500/40 blur-lg" />
            <div className="absolute h-10 w-10 rounded-full bg-emerald-600/30 blur-md" />

            <div className="relative h-10 w-10 overflow-hidden rounded-full border border-border">
                <img
                    src="/100.jpg"
                    alt="Profile"
                    className="h-full w-full object-cover"
                />
            </div>
        </div>
    )
}