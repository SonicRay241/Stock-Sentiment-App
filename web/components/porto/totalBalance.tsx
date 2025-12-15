"use client";

import { EyeIcon, EyeOffIcon, TrendingUpIcon } from "lucide-react";
import { useState } from "react";
import Card from "../ui/card/card";
import CardHeader from "../ui/card/cardheader";
import Button from "../ui/button";
import { twMerge } from "tailwind-merge";

export default function PortfolioAndMarketSentiment() {
    const [hidden, setHidden] = useState(true);

    const portfolioValue = "$12,450.75";
    const dailyChange = 0;
    const isPositive = true;

    const totalGain = 1245.3; // AI will update
    const formattedGain = `$${totalGain.toLocaleString()}`;

    const [sentimentValue] = useState(50);
    const sentimentLabel: "Positive" | "Neutral" | "Negative" =
        sentimentValue < 41 ? "Negative" : sentimentValue > 60 ? "Positive" : "Neutral";

    return (
        <div className="space-y-6">
            <Card
                className={twMerge(
                    "bg-linear-to-b from-transparent to-primary/30 transition-all duration-500",
                    sentimentLabel === "Positive" && "to-emerald-400/30",
                    sentimentLabel === "Negative" && "to-red-400/30"
                )}
            >
                <CardHeader>
                    <div className="flex flex-col">
                        <span>Total Balance</span>
                    </div>
                </CardHeader>

                {/* Balance with Toggle */}
                <div className="flex items-center gap-2">
                    <span
                        className={twMerge(
                            "text-2xl font-semibold transition-all",
                            hidden && "blur-sm"
                        )}
                    >
                        {portfolioValue}
                    </span>

                    <Button
                        onClick={() => setHidden(!hidden)}
                        className="size-6 bg-transparent"
                        aria-label="Toggle portfolio visibility"
                    >
                        {hidden ? (
                            <EyeOffIcon className="h-4 w-4" />
                        ) : (
                            <EyeIcon className="h-4 w-4" />
                        )}
                    </Button>
                </div>

                {/* Total Gain and Percentage Change */}
                <div className="flex items-center gap-3 mt-2">
                    {/* Total Nominal Gain */}
                    <span
                        className={twMerge(
                            "text-sm font-medium",
                            totalGain >= 0
                                ? "text-emerald-400"
                                : "text-red-400"
                        )}
                    >
                        {totalGain >= 0 ? "+" : ""}
                        {formattedGain}
                    </span>

                    {/* Trend Percentage */}
                    <div
                        className={twMerge(
                            "flex items-center gap-1.5 text-sm font-medium",
                            isPositive ? "text-emerald-400" : "text-red-400"
                        )}
                    >
                        <TrendingUpIcon className="h-4 w-4" />
                        <span>
                            {isPositive ? "+" : ""}
                            {dailyChange}%
                        </span>
                    </div>
                </div>

                {/* Progress */}
                <div className="mt-4 h-2 w-full rounded-full bg-muted overflow-hidden">
                    <div
                        className={twMerge(
                            "h-full rounded-full transition-all duration-500",
                            sentimentLabel === "Positive" && "bg-emerald-400",
                            sentimentLabel === "Negative" && "bg-red-400",
                            sentimentLabel === "Neutral" && "bg-primary"
                        )}
                        style={{ width: `${sentimentValue}%` }}
                    />
                </div>
            </Card>
        </div>
    );
}