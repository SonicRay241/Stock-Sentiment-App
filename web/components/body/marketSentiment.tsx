import { LineChart } from "lucide-react";

export default function MarketSentimentMobile() {
    // AI-controlled placeholders
    const sentimentValue = 80; // 0–100 (AI will update)
    const sentimentLabel = "Analyzing"; // AI will update
    const progress = 80; // 0–100 (AI will update)

    return (
        <div className="flex justify-start px-2">
        <div className="w-[90vw]">
            <div
            className="
                rounded-2xl
                bg-white/10 backdrop-blur-md
                border border-white/20
                p-4 text-foreground
            "
            >
            {/* Header */}
            <div className="flex items-center gap-2 mb-4">
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-white/15">
                <LineChart className="h-4 w-4 text-white/90" />
                </div>
                <span className="text-xs font-semibold tracking-wide text-white/80">
                MARKET SENTIMENT
                </span>
            </div>

            {/* Sentiment (AI-controlled) */}
            <div className="mb-2">
                <div className="flex items-end gap-2">
                <span className="text-2xl font-semibold text-white">
                    {sentimentValue}
                </span>
                <span className="text-sm font-medium text-white/70 mb-0.5">
                    {sentimentLabel}
                </span>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-3">
                <div className="h-2 w-full rounded-full bg-white/15 overflow-hidden">
                <div
                    className="h-full rounded-full bg-white/60 transition-all duration-500"
                    style={{ width: `${progress}%` }}
                />
                </div>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed text-foreground">
                Market sentiment evolves along the way, shaped by how investors react
                to news, trends, and momentum over time.
            </p>
            </div>
        </div>
        </div>
    );
}
