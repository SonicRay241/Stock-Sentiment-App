"use client";

import { Brain, PieChart, TrendingUp } from "lucide-react";
import Card from "../ui/card/card";

export default function SentimentMarketCapCards() {
    // AI-controlled placeholders
    const sentimentScore = 87;
    const sentimentLabel = "Bullish";
    const sentimentSources = 142;

    const marketCap = "2.7T";
    const peRatio = 28.4;

    return (
        <div className="flex gap-4 w-full">
            {/* Sentiment Card */}
            <Card className="flex-1 relative overflow-hidden">
                {/* Bottom gradient fill */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-400/30 via-emerald-400/10 to-transparent pointer-events-none" />

                <div className="relative z-10 space-y-3">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                        <span className="text-xs tracking-wide text-foreground/60">
                            SENTIMENT
                        </span>
                        <Brain className="h-4 w-4 text-foreground/50" />
                    </div>

                    {/* Score */}
                    <div className="text-4xl font-bold text-emerald-400">
                        {sentimentScore}
                    </div>

                    {/* Label */}
                    <div className="text-sm font-medium text-foreground">
                        {sentimentLabel}
                    </div>

                    {/* Description */}
                    <div className="text-xs text-foreground/50">
                        Based on {sentimentSources} sources in last 24h
                    </div>

                    {/* Progress bar */}
                    <div className="mt-3 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                        <div
                            className="h-full rounded-full bg-emerald-400"
                            style={{ width: `${sentimentScore}%` }}
                        />
                    </div>
                </div>
            </Card>

            {/* Market Cap Card */}
            <Card className="flex-1 relative overflow-hidden">
                <div className="space-y-3">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                        <span className="text-xs tracking-wide text-foreground/60">
                            MARKET CAP
                        </span>
                        <PieChart className="h-4 w-4 text-foreground/50" />
                    </div>

                    {/* Market Cap */}
                    <div className="text-3xl font-bold text-foreground">
                        {marketCap}
                    </div>

                    {/* Status */}
                    <div className="flex items-center gap-1.5 text-sm text-emerald-400">
                        <TrendingUp className="h-4 w-4" />
                        <span>High Cap</span>
                    </div>

                    {/* Divider */}
                    <div className="my-2 h-px bg-border" />

                    {/* P/E */}
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-foreground/60">P/E</span>
                        <span className="font-medium text-foreground">
                            {peRatio}
                        </span>
                    </div>
                </div>
            </Card>
        </div>
    );
}
