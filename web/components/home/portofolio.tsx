"use client";

import { EyeIcon, EyeOffIcon, TrendingUpIcon } from "lucide-react";
import { useState } from "react";
import Card from "../ui/card/card";
import CardHeader from "../ui/card/cardheader";
import Button from "../ui/button";
import { twMerge } from "tailwind-merge";

export default function Portfolio() {
    const [hidden, setHidden] = useState(true);

    // AI-controlled placeholders
    const portfolioValue = "$12,450.75"; // AI will update
    const dailyChange = 0; // percentage (AI will update)
    const isPositive = true; // AI will decide direction

    return (
        <Card>
            <CardHeader>
                <span className="">
                    Total portfolio
                </span>
            </CardHeader>

            {/* Portfolio value */}
            <div className="flex items-center gap-2">
                <span className={twMerge(
                    "text-2xl font-semibold transition-all",
                    hidden && "blur-sm"
                )}>
                    {portfolioValue}
                </span>
                <Button
                    onClick={() => setHidden(!hidden)}
                    className="size-6 bg-transparent"
                    aria-label="Toggle portfolio visibility"
                >
                    {hidden
                        ? <EyeOffIcon className="h-4 w-4" />
                        : <EyeIcon className="h-4 w-4" />
                    }
                </Button>
            </div>

            <div
                className={`mt-2 flex items-center gap-1.5 text-sm ${isPositive ? "text-emerald-400" : "text-red-400"
                    }`}
            >
                <TrendingUpIcon className="h-4 w-4" />
                <span className="font-medium">
                    {isPositive ? "+" : ""}
                    {dailyChange}%
                </span>
                <span className="text-white/60">Today</span>
            </div>
        </Card >
    );
}
