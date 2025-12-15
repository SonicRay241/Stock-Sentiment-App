"use client";

import {
    TrendingUpIcon,
    TrendingDownIcon,
    MinusIcon,
} from "lucide-react";
import Card from "../ui/card/card";
import { twMerge } from "tailwind-merge";

type NewsItem = {
    sentiment: "Bullish" | "Bearish" | "Neutral";
    impact: "High Impact" | "Medium Impact" | "Low Impact";
    title: string;
    description: string;
    ticker: string;
    timeAgo: string;
    image: string;
};

export default function LatestNews() {
    const news: NewsItem[] = [
        {
            sentiment: "Bullish",
            impact: "High Impact",
            ticker: "NVDA",
            timeAgo: "45m ago",
            title: "Nvidia shares jump after strong AI chip demand outlook",
            description:
                "Nvidia surged as analysts raised forecasts on sustained demand for data-center GPUs and AI infrastructure.",
            image:
                "https://images.unsplash.com/photo-1624996752380-8ec242e0c8f9?q=80&w=600&auto=format&fit=crop",
        },
        {
            sentiment: "Bearish",
            impact: "High Impact",
            ticker: "AMZN",
            timeAgo: "1h ago",
            title: "Amazon dips as retail margins face pressure",
            description:
                "Shares fell as investors reacted to rising logistics costs and slower growth in e-commerce spending.",
            image:
                "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop",
        },
        {
            sentiment: "Neutral",
            impact: "Medium Impact",
            ticker: "GOOGL",
            timeAgo: "3h ago",
            title: "Alphabet trades flat ahead of earnings release",
            description:
                "Google’s parent company moved sideways as traders await clarity on ad revenue and AI monetization.",
            image:
                "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=600&auto=format&fit=crop",
        },
        {
            sentiment: "Bullish",
            impact: "Medium Impact",
            ticker: "META",
            timeAgo: "2h ago",
            title: "Meta climbs on ad growth and cost discipline",
            description:
                "Meta shares rose as improved advertising demand and expense control boosted investor confidence.",
            image:
                "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=600&auto=format&fit=crop",
        },
        {
            sentiment: "Bearish",
            impact: "Low Impact",
            ticker: "NFLX",
            timeAgo: "4h ago",
            title: "Netflix slips amid subscriber growth concerns",
            description:
                "Netflix edged lower as analysts questioned the sustainability of recent subscriber additions.",
            image:
                "https://images.unsplash.com/photo-1581091215367-59ab6f1b3c5a?q=80&w=600&auto=format&fit=crop",
        },
    ];

    function sentimentStyles(sentiment: NewsItem["sentiment"]) {
        return twMerge(
            "px-2 py-0.5 rounded-full text-xs font-semibold border",
            sentiment === "Bullish" &&
                "bg-emerald-400/20 text-emerald-400 border-emerald-400/30",
            sentiment === "Bearish" &&
                "bg-red-400/20 text-red-400 border-red-400/30",
            sentiment === "Neutral" &&
                "bg-blue-400/20 text-blue-400 border-blue-400/30"
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
        <div className="space-y-3">
            {news.map((item, index) => (
                <Card key={index} className="px-4">
                    <div className="flex gap-3">
                        {/* Image */}
                        <div className="size-24 shrink-0 rounded-xl overflow-hidden border border-white/10">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="h-full w-full object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                            {/* Sentiment row */}
                            <div className="flex items-center gap-2 mb-1">
                                <span className={sentimentStyles(item.sentiment)}>
                                    {item.sentiment}
                                </span>
                                <span className="text-xs text-white/60">
                                    {item.ticker}
                                </span>
                                <span className="text-xs text-white/40">
                                    · {item.timeAgo}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-sm font-semibold text-white mb-1 line-clamp-2">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm leading-relaxed text-white/80 mb-3 line-clamp-3">
                                {item.description}
                            </p>

                            {/* Impact */}
                            <div className="flex items-center gap-2">
                                {sentimentIcon(item.sentiment)}
                                <span className="text-xs font-medium text-foreground">
                                    {item.impact}
                                </span>
                            </div>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    );
}
