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

    return (
        <div className="space-y-6">
            <Card
                className="bg-linear-to-br from-transparent via-transparent to-primary/30 transition-all duration-500"
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
            </Card>
        </div>
    );
}