"use client";

import { TrendingUpIcon, TrendingDownIcon } from "lucide-react";
import Card from "../ui/card/card";
import Divider from "../ui/divider";

type MarketItem = {
  symbol: string;
  change: number; // %
};

export default function MoversLosers() {
  // AI-controlled placeholders
  const movers: MarketItem[] = [
    { symbol: "AAPL", change: 4.2 },
    { symbol: "NVDA", change: 3.8 },
    { symbol: "TSLA", change: 2.9 },
  ];

  const losers: MarketItem[] = [
    { symbol: "META", change: -3.1 },
    { symbol: "AMZN", change: -2.6 },
    { symbol: "NFLX", change: -2.2 },
  ];

  return (
    <Card>
      <div className="flex gap-4 items-stretch">
        {/* Top Movers */}
        <div className="flex-1">
          <span className="text-xs font-semibold tracking-wide text-emerald-400 block mb-2">
            Gainers
          </span>

          <div className="space-y-2">
            {movers.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <TrendingUpIcon className="h-4 w-4 text-emerald-400" />
                  <span className="text-sm font-medium text-foreground">
                    {item.symbol}
                  </span>
                </div>

                <span className="text-sm font-semibold text-emerald-400">
                  +{item.change}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <Divider orientation="vertical" />

        {/* Top Losers */}
        <div className="flex-1">
          <span className="text-xs font-semibold tracking-wide text-red-400 block mb-2">
            Losers
          </span>

          <div className="space-y-2">
            {losers.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <TrendingDownIcon className="h-4 w-4 text-red-400" />
                  <span className="text-sm font-medium text-foreground">
                    {item.symbol}
                  </span>
                </div>

                <span className="text-sm font-semibold text-red-400">
                  {item.change}%
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </Card>
  );
}
