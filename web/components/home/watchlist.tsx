"use client";

import { TrendingUpIcon, TrendingDownIcon } from "lucide-react";
import Card from "../ui/card/card";
import CardHeader from "../ui/card/cardheader";

export default function WatchList() {
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
        <Card>
            <CardHeader>
                <span>
                    Watchlist
                </span>
            </CardHeader>

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
                            className={`flex items-center gap-1.5 text-sm font-medium ${stock.isPositive
                                ? "text-emerald-400"
                                : "text-red-400"
                                }`}
                        >
                            {stock.isPositive ? (
                                <TrendingUpIcon className="h-4 w-4" />
                            ) : (
                                <TrendingDownIcon className="h-4 w-4" />
                            )}
                            <span>
                                {stock.isPositive ? "+" : "-"}
                                {stock.change}%
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
}
