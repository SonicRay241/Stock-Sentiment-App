"use client";

import Card from "../ui/card/card";
import { twMerge } from "tailwind-merge";

type SentimentType = "Bullish" | "Bearish" | "Neutral";

type CardItem = {
    sentiment: SentimentType;
    title: string;
    ticker: string;
    timeAgo: string;
    image: string;
};

const items: CardItem[] = [
    {
        sentiment: "Bullish",
        title: "Market Momentum Surges",
        ticker: "AAPL",
        timeAgo: "2h ago",
        image: "https://images.unsplash.com/photo-1612010167102-d1e8f83833e1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN0b2Nrc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        sentiment: "Neutral",
        title: "Investor Confidence Stabilizes",
        ticker: "MSFT",
        timeAgo: "5h ago",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    },
    {
        sentiment: "Bearish",
        title: "Short-Term Outlook Weakens",
        ticker: "TSLA",
        timeAgo: "1h ago",
        image: "https://images.unsplash.com/photo-1585011650347-c59dbef5a823?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRlc2xhfGVufDB8fDB8fHww",
    },
];

export default function SwipeableSentimentCards() {
    return (
        <div className="w-full overflow-x-auto">
            <div className="flex gap-4 snap-x snap-mandatory scroll-smooth no-scrollbar">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="snap-center shrink-0"
                    >
                        <Card
                            className="relative w-44 h-44 p-0 overflow-hidden"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${item.image})` }}
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

                            {/* Bottom Content */}
                            <div className="relative z-10 h-full flex flex-col justify-end p-4 gap-2">
                                {/* Sentiment Bubble */}
                                <span
                                    className={twMerge(
                                        "w-fit px-3 py-1 rounded-full text-xs font-semibold",
                                        item.sentiment === "Bullish" &&
                                        "bg-emerald-400/80 border border-emerald-400",
                                        item.sentiment === "Bearish" &&
                                        "bg-red-400/80 border border-red-400",
                                        item.sentiment === "Neutral" &&
                                        "bg-blue-400/80 border border-blue-400"
                                    )}
                                >
                                    {item.sentiment}
                                </span>

                                {/* Title */}
                                <span className="text-lg font-semibold text-white leading-snug">
                                    {item.title}
                                </span>

                                {/* Subtitle */}
                                <div className="flex items-center gap-2 text-xs text-white/60">
                                    <span className="font-medium text-white/70">
                                        {item.ticker}
                                    </span>
                                    <span className="h-1 w-1 rounded-full bg-white/40" />
                                    <span>{item.timeAgo}</span>
                                </div>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}