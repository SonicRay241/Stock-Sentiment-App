"use client";

import {
    TrendingUpIcon,
    TrendingDownIcon,
    MinusIcon,
} from "lucide-react";
import Card from "../ui/card/card";
import { twMerge } from "tailwind-merge";
import { NewsItem } from "@/lib/api/news";

export default function NewsCard(props: NewsItem) {

    function sentimentStyles(sentiment: NewsItem["sentiment"]) {
        return twMerge(
            "px-2 py-0.5 rounded-full text-xs font-semibold border bg-blue-400/20 text-blue-400 border-blue-400/30",
            sentiment === "Bullish" &&
            "bg-emerald-400/20 text-emerald-400 border-emerald-400/30",
            sentiment === "Bearish" &&
            "bg-red-400/20 text-red-400 border-red-400/30",
        );
    }

    function sentimentIcon(sentiment: NewsItem["sentiment"]) {
        switch (sentiment) {
            case "Bullish":
                return <TrendingUpIcon className="h-4 w-4 text-emerald-400" />;
            case "Bearish":
                return <TrendingDownIcon className="h-4 w-4 text-red-400" />;
            case "Neutral":
                return <MinusIcon className="h-4 w-4 text-blue-400" />;
        }
    }

    return (
        <Card className="px-4 flex gap-3">
            {/* Image */}
            <div className="size-24 shrink-0 rounded-xl overflow-hidden border border-white/10">
                <img
                    src={props.image}
                    alt={props.title}
                    className="h-full w-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
                {/* Sentiment row */}
                <div className="flex items-center gap-2 mb-1">
                    <span className={sentimentStyles(props.sentiment)}>
                        {props.sentiment}
                    </span>
                    <span className="text-xs text-muted-foreground">
                        {props.ticker}
                    </span>
                    <span className="text-xs text-muted-foreground">
                        · {props.timeAgo}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-sm font-semibold text-white mb-1 line-clamp-2">
                    {props.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-white/80 mb-3 line-clamp-3">
                    {props.description}
                </p>

                {/* Impact */}
                <div className="flex items-center gap-2">
                    {sentimentIcon(props.sentiment)}
                    <span className="text-xs font-medium text-foreground">
                        {props.impact}
                    </span>
                </div>
            </div>
        </Card>
    );
}
