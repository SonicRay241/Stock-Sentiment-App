"use client";

import { useEffect, useState } from "react";
import { BellIcon } from "lucide-react";

export default function Navbar({ userName = "User" }: { userName?: string }) {
    const [dateText, setDateText] = useState("");
    const [greeting, setGreeting] = useState("Good Morning");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();

            // Greeting based on hour
            const hour = now.getHours();
            if (hour < 12) setGreeting("Good Morning");
            else if (hour < 18) setGreeting("Good Afternoon");
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
        <nav className="sticky top-0 left-0 right-0 z-50 bg-background px-4 py-3 shadow-md h-16">
            <div className="flex items-center justify-between text-foreground">
                {/* Left */}
                <div className="flex items-center gap-3">
                    {/* Blooming avatar */}
                    <div className="relative flex items-center justify-center">
                        <div className="absolute h-14 w-14 rounded-full bg-emerald-400/30 blur-xl animate-[pulse_3s_ease-in-out_infinite]" />
                        <div className="absolute h-12 w-12 rounded-full bg-emerald-500/40 blur-lg" />
                        <div className="absolute h-10 w-10 rounded-full bg-emerald-600/30 blur-md" />

                        <div className="relative h-10 w-10 overflow-hidden rounded-full border border-border">
                            <img
                                src="https://i.pravatar.cc/100"
                                alt="Profile"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="leading-tight">
                        <p className="text-sm font-semibold">
                            {greeting}, {userName}
                        </p>
                        <p className="text-[11px] text-muted-foreground">
                            {dateText}
                        </p>
                    </div>
                </div>

                {/* Right */}
                <button className="flex h-9 w-9 items-center justify-center rounded-full bg-muted hover:bg-muted/80 active:scale-95 transition">
                    <BellIcon className="h-4 w-4" />
                </button>
            </div>
        </nav>

    );
}
