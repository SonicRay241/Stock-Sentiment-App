"use client"

import { LineChartIcon } from "lucide-react";
import Card from "../ui/card/card";
import CardHeader from "../ui/card/cardheader";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function MarketSentiment() {
    const [sentimentValue, setSentimentValue] = useState(50); // 0–100 (AI will update)
    const sentimentLabel: "Positive" | "Neutral" | "Negative" = sentimentValue < 41 ? "Negative" : (sentimentValue > 60 ? "Positive" : "Neutral")

    return (
        <Card className={twMerge(
            "bg-linear-to-b from-transparent to-primary/30 transition-all duration-500",
            sentimentLabel == "Positive" && "to-emerald-400/30",
            sentimentLabel == "Negative" && "to-red-400/30",
        )}>
            <CardHeader>
                <LineChartIcon className="h-4 w-4" />
                <span className="">
                    S&amp;P 500
                </span>
            </CardHeader>

            <div className="flex items-center gap-2">
                <span className="text-2xl font-semibold">
                    {sentimentValue}
                </span>
                <span className={twMerge(
                    "text-primary transition-all duration-500",
                    sentimentLabel == "Positive" && "text-emerald-400",
                    sentimentLabel == "Negative" && "text-red-400",
                )}>
                    {sentimentLabel}
                </span>
            </div>

            <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                <div
                    className={twMerge(
                        "size-full rounded-full bg-primary transition-all duration-500",
                        "text-primary",
                        sentimentLabel == "Positive" && "bg-emerald-400",
                        sentimentLabel == "Negative" && "bg-red-400",
                    )}
                    style={{ maxWidth: `${sentimentValue}%` }}
                />
            </div>

            <p className="text-sm leading-relaxed text-foreground mt-4">
                Market sentiment evolves along the way, shaped by how investors react
                to news, trends, and momentum over time.
            </p>
            {/* <Button onClick={() => setSentimentValue(Math.floor(Math.random() * 100))}>adwd</Button> */}
        </Card >
    );
}
