"use client";

import { BrainIcon } from "lucide-react";
import Card from "../ui/card/card";
import CardHeader from "../ui/card/cardheader";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Button from "../ui/button";
import Link from "next/link";

export default function SentimentCard(props: {
    ticker: string
}) {
    // AI-controlled placeholders

    const [sentimentValue, setSentimentValue] = useState(87); // 0–100 (AI will update)
    const sentimentLabel: "Bullish" | "Neutral" | "Bearish" = sentimentValue < 41 ? "Bearish" : (sentimentValue > 60 ? "Bullish" : "Neutral")
    const sentimentSourceCount = 142;

    return (
        <Link className="block w-full" href={`/stock/${props.ticker}/similar`}>
            <Card className={twMerge(
                twMerge(
                    "relative space-y-3 bg-linear-to-b from-transparent to-primary/30 transition-all duration-500",
                    sentimentLabel == "Bullish" && "to-emerald-400/30",
                    sentimentLabel == "Bearish" && "to-red-400/30",
                )
            )}>

                <CardHeader className="justify-between">
                    <span className="text-xs tracking-wide text-muted-foreground">
                        SENTIMENT
                    </span>
                    <BrainIcon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>

                {/* Score */}
                <div className={twMerge(
                    "text-4xl font-bold text-primary transition-all duration-500",
                    sentimentLabel == "Bullish" && "text-emerald-400",
                    sentimentLabel == "Bearish" && "text-red-400",
                )}>
                    {sentimentValue}
                </div>

                {/* Label */}
                <div className="text-sm font-medium mb-1">
                    {sentimentLabel}
                </div>

                {/* Description */}
                <div className="text-xs text-muted-foreground">
                    Based on {sentimentSourceCount} sources in last 24h
                </div>

                {/* Progress bar */}
                <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                    <div
                        className={twMerge(
                            "size-full rounded-full bg-primary transition-all duration-500",
                            "text-primary",
                            sentimentLabel == "Bullish" && "bg-emerald-400",
                            sentimentLabel == "Bearish" && "bg-red-400",
                        )}
                        style={{ maxWidth: `${sentimentValue}%` }}
                    />
                </div>
            </Card>
        </Link>
    );
}
