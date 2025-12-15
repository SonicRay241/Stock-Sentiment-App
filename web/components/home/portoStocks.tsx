"use client";

import { TrendingUp, TrendingDown } from "lucide-react";

export default function TopMovers() {
    // AI-controlled placeholders
    const topMovers = [
        {
        symbol: "AAPL",
        change: 0,
        isPositive: true,
        },
        {
        symbol: "TSLA",
        change: 0,
        isPositive: false,
        },
    ];

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
                TOP MOVERS
                </span>
            </div>

            {/* Top 2 stocks */}
            <div className="space-y-3">
                {topMovers.map((stock, index) => (
                <div
                    key={index}
                    className="flex items-center justify-between"
                >
                    {/* Stock symbol */}
                    <span className="text-sm font-medium text-foreground">
                    {stock.symbol}
                    </span>

                    {/* Movement */}
                    <div
                    className={`flex items-center gap-1.5 text-sm font-medium ${
                        stock.isPositive
                        ? "text-emerald-400"
                        : "text-red-400"
                    }`}
                    >
                    {stock.isPositive ? (
                        <TrendingUp className="h-4 w-4" />
                    ) : (
                        <TrendingDown className="h-4 w-4" />
                    )}
                    <span>
                        {stock.isPositive ? "+" : "-"}
                        {stock.change}%
                    </span>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </div>
        </div>
    );
}
