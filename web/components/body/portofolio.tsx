"use client";

import { Eye, EyeOff, TrendingUp } from "lucide-react";
import { useState } from "react";

export default function Portfolio() {
    const [hidden, setHidden] = useState(false);

    // AI-controlled placeholders
    const portfolioValue = "$12,450.75"; // AI will update
    const dailyChange = 0; // percentage (AI will update)
    const isPositive = true; // AI will decide direction

    return (
        <div className="flex justify-start px-2">
        <div className="w-[90vw]">
            <div
            className="
                rounded-2xl
                bg-white/10 backdrop-blur-md
                border border-white/20
                p-4 text-foreground
            "
            >
            {/* Header */}
            <div className="mb-3">
                <span className="text-xs font-semibold tracking-wide text-foreground">
                TOTAL PORTFOLIO
                </span>
            </div>

            {/* Portfolio value */}
            <div className="flex items-center gap-2">
                <span className="text-2xl font-semibold text-foreground">
                {hidden ? "••••••" : portfolioValue}
                </span>

                <button
                onClick={() => setHidden(!hidden)}
                className="
                    flex h-7 w-7 items-center justify-center
                    rounded-md bg-white/10 hover:bg-white/20
                    transition
                "
                aria-label="Toggle portfolio visibility"
                >
                {hidden ? (
                    <EyeOff className="h-4 w-4 text-foreground" />
                ) : (
                    <Eye className="h-4 w-4 text-foreground" />
                )}
                </button>
            </div>

            {/* Daily change (AI-controlled) */}
            <div
                className={`mt-2 flex items-center gap-1.5 text-sm ${
                isPositive ? "text-emerald-400" : "text-red-400"
                }`}
            >
                <TrendingUp className="h-4 w-4" />
                <span className="font-medium">
                {isPositive ? "+" : ""}
                {dailyChange}%
                </span>
                <span className="text-white/60">Today</span>
            </div>
            </div>
        </div>
        </div>
    );
}
