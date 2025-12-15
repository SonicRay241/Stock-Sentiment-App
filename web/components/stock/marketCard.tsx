"use client";

import { PieChartIcon, TrendingUpIcon } from "lucide-react";
import Card from "../ui/card/card";
import CardHeader from "../ui/card/cardheader";
import Divider from "../ui/divider";

export default function MarketCard() {
    const marketCap = "2.7T";
    const peRatio = 28.4;

    return (
        <Card className="relative">
            <div className="space-y-3">
                {/* Header */}
                <CardHeader className="justify-between">
                    <span className="text-xs text-muted-foreground">
                        MARKET CAP
                    </span>
                    <PieChartIcon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>

                <div className="text-3xl font-bold text-foreground">
                    {marketCap}
                </div>

                {/* Status */}
                <div className="flex items-center gap-1.5 text-sm text-emerald-400">
                    <TrendingUpIcon className="h-4 w-4" />
                    <span>High Cap</span>
                </div>

                <Divider />

                {/* P/E */}
                <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">P/E</span>
                    <span className="font-medium text-foreground">
                        {peRatio}
                    </span>
                </div>
            </div>
        </Card>
    );
}
