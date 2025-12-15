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

    return (
        <div className="space-y-3">
            {news.map((item, index) => (
                <NewsCard
                    {...item}
                    key={index}
                />
            ))}
        </div>
    );
}
