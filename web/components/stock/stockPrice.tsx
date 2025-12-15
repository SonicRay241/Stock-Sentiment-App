"use client";

import { TrendingUp } from "lucide-react";

export default function StockPrice() {
    const price = "$174.55";
    const dailyChange = 1.23;
    const isPositive = true;

    return (
        <div className="flex flex-col">
            {/* Price */}
            <span className="text-4xl font-bold text-foreground">
                {price}
            </span>

            {/* Change */}
            <div className="mt-2 flex items-center gap-2 text-sm">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-3 py-1 text-emerald-400">
                    <TrendingUp className="h-4 w-4" />
                    <span className="font-medium">
                        {isPositive ? "+" : ""}
                        {dailyChange}%
                    </span>
                </div>

                <span className="text-foreground/60">
                    Today
                </span>
            </div>
        </div>
    );
}
