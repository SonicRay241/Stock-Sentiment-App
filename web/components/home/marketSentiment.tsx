import { LineChart } from "lucide-react";
import Card from "../card/card";
import CardHeader from "../card/cardheader";

export default function MarketSentiment() {
    // AI-controlled placeholders
    const sentimentValue = 80; // 0–100 (AI will update)
    const sentimentLabel = "Analyzing"; // AI will update
    const progress = 80; // 0–100 (AI will update)

    return (
        <Card>
            <CardHeader>
                <LineChart className="h-4 w-4" />
                <span className="">
                    S&amp;P 500
                </span>
            </CardHeader>

            <div className="flex items-center gap-2">
                <span className="text-2xl font-semibold">
                    {sentimentValue}
                </span>
                <span className="text-sm font-medium">
                    {sentimentLabel}
                </span>
            </div>

            <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                <div
                    className="size-full rounded-full bg-muted-foreground transition-all duration-500"
                    style={{ maxWidth: `${progress}%` }}
                />
            </div>

            <p className="text-sm leading-relaxed text-foreground">
                Market sentiment evolves along the way, shaped by how investors react
                to news, trends, and momentum over time.
            </p>
        </Card >
    );
}
