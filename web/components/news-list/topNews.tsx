"use client";

import NewsCard from "./newscard";

type NewsItem = {
    sentiment: "Bullish" | "Bearish" | "Neutral";
    impact: "High Impact" | "Medium Impact" | "Low Impact";
    title: string;
    description: string;
    ticker: string;
    timeAgo: string;
    image: string;
};

export default function TopNews() {
    const news: NewsItem[] = [
        {
            sentiment: "Bullish",
            impact: "High Impact",
            ticker: "AAPL",
            timeAgo: "2h ago",
            title: "Tech stocks rally as AI optimism grows",
            description:
                "Investors pushed major tech shares higher today, driven by renewed confidence in AI-led growth.",
            image:
                "https://images.unsplash.com/photo-1642543348749-6cbdc6f2f2b4?q=80&w=600&auto=format&fit=crop",
        },
        {
            sentiment: "Bearish",
            impact: "Medium Impact",
            ticker: "TSLA",
            timeAgo: "1h ago",
            title: "Markets retreat ahead of inflation data",
            description:
                "Traders remain cautious as upcoming inflation numbers may influence rate expectations.",
            image:
                "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=600&auto=format&fit=crop",
        },
        {
            sentiment: "Neutral",
            impact: "Low Impact",
            ticker: "MSFT",
            timeAgo: "4h ago",
            title: "Microsoft shares consolidate after recent gains",
            description:
                "Microsoft stock traded sideways as investors assessed valuation following recent upside momentum.",
            image:
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
        },
    ];

    return (
        <div className="space-y-3.5">
            {news.map((item, index) => (
                <NewsCard
                    {...item}
                    key={index}
                />
            ))}
        </div>
    );
}
