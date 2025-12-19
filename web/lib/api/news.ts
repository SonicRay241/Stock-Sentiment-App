

export type NewsItem = {
  sentiment: "Bullish" | "Bearish" | "Neutral";
  impact: "High Impact" | "Medium Impact" | "Low Impact";
  ticker?: string;
  timeAgo?: string;
  title: string;
  description: string;
  image: string;
};

const latestNews: NewsItem[] = [
        {
            sentiment: "Bullish",
            impact: "High Impact",
            ticker: "NVDA",
            timeAgo: "45m ago",
            title: "Nvidia stock rises on stronger-than-expected earnings and margin expansion",
            description:
                "Nvidia gained after reporting quarterly earnings that exceeded expectations, driven by improved margins and disciplined cost management.",
            image:
                "https://images.unsplash.com/photo-1555618565-9f2b0323a10d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                "https://images.unsplash.com/photo-1670942298778-f339cac1fe01?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG5ldGZsaXh8ZW58MHx8MHx8fDA%3D",
        },
    ];

const topNews: NewsItem[] = [
        {
            sentiment: "Bullish",
            impact: "High Impact",
            ticker: "AAPL",
            timeAgo: "2h ago",
            title: "Tech stocks rally as AI optimism grows",
            description:
                "Investors pushed major tech shares higher today, driven by renewed confidence in AI-led growth.",
            image:
                "https://images.unsplash.com/photo-1691643158804-d3f02eb456a3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN0b2Nrc3xlbnwwfHwwfHx8MA%3D%3D",
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

export function getLatestNews(): Promise<NewsItem[]> {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve(latestNews)
            }, 2000)
        }
        catch {
            reject("Error loading news")
        }
    })
}

export function getTopNews(): Promise<NewsItem[]> {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve(topNews)
            }, 2000)
        }
        catch {
            reject("Error loading news")
        }
    })
}