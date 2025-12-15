import { TrendingUpIcon, TrendingDownIcon, MinusIcon } from "lucide-react";
import Card from "../ui/card/card";

type NewsItem = {
  sentiment: "Bullish" | "Bearish" | "Neutral";
  impact: "High Impact" | "Medium Impact" | "Low Impact";
  title: string;
  description: string;
  image: string;
};

export default function LatestNewsMobile() {
  // AI-controlled placeholders
  const news: NewsItem[] = [
    {
      sentiment: "Bullish",
      impact: "High Impact",
      title: "Tech stocks rally as AI optimism grows",
      description:
        "Investors pushed major tech shares higher today, driven by renewed confidence in AI-led growth and strong earnings momentum. ",
      image:
        "https://images.unsplash.com/photo-1642543348749-6cbdc6f2f2b4?q=80&w=600&auto=format&fit=crop",
    },
    {
      sentiment: "Bearish",
      impact: "Medium Impact",
      title: "Markets retreat ahead of inflation data",
      description:
        "Traders remain cautious as upcoming inflation numbers may influence rate expectations and near-term market direction.",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=600&auto=format&fit=crop",
    },
  ];

  function sentimentColor(sentiment: NewsItem["sentiment"]) {
    switch (sentiment) {
      case "Bullish": return "text-emerald-400"
      case "Bearish": return "text-red-400"
      case "Neutral": return "text-white/70"
    }
  }

  function sentimentIcon(sentiment: NewsItem["sentiment"]) {
    switch (sentiment) {
      case "Bullish": return <TrendingUpIcon className="h-4 w-4" />
      case "Bearish": return <TrendingDownIcon className="h-4 w-4" />
      case "Neutral": return <MinusIcon className="h-4 w-4" />
    }
  }

  return (
    news.map((item, index) => (
      <Card key={index} className="px-4">
        <div className="flex gap-3">
          <div className="size-24 shrink-0 rounded-xl overflow-hidden border border-white/10">
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <span
              className={`text-xs font-semibold tracking-wide mb-1 block ${sentimentColor(
                item.sentiment
              )}`}
            >
              {item.sentiment.toUpperCase()}
            </span>
            <h3 className="text-sm font-semibold text-white mb-1 line-clamp-2">
              {item.title}
            </h3>

            <p className="text-sm leading-relaxed text-white/80 mb-3 line-clamp-3">
              {item.description}
            </p>

            <div className="flex items-center gap-2">
              <span className={sentimentColor(item.sentiment)}>
                {sentimentIcon(item.sentiment)}
              </span>
              <span className="text-xs font-medium text-foreground">
                {item.impact}
              </span>
            </div>
          </div>
        </div>

      </Card>
    ))
  );
}
