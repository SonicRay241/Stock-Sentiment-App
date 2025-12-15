"use client";

import { Eye, EyeOff, TrendingUp } from "lucide-react";
import { useState } from "react";
import Card from "../card/card";
import CardHeader from "../card/cardheader";

export default function Portfolio() {
    const [hidden, setHidden] = useState(true);

    // AI-controlled placeholders
    const portfolioValue = "$12,450.75"; // AI will update
    const dailyChange = 0; // percentage (AI will update)
    const isPositive = true; // AI will decide direction

    return (
        <Card>
            <CardHeader>
                <span className="text-muted-foreground">
                    Total Portfolio
                </span>
            </CardHeader>

            {/* Portfolio value */}
            <div className="flex items-center gap-2">
                <span className="text-2xl font-semibold text-foreground">
                    {portfolioValue}
                </span>


            </div>

            {/* Daily change (AI-controlled) */}
            <div
                className={`mt-2 flex items-center gap-1.5 text-sm ${isPositive ? "text-emerald-400" : "text-red-400"
                    }`}
            >
                <TrendingUp className="h-4 w-4" />
                <span className="font-medium">
                    {isPositive ? "+" : ""}
                    {dailyChange}%
                </span>
                <span className="text-white/60">Today</span>
            </div>
        </Card >
    );
}
