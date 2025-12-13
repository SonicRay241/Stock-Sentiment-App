"use client";

import { TrendingUp, TrendingDown } from "lucide-react";

type MarketItem = {
  symbol: string;
  change: number; // %
};

export default function TopMoversLosersMobile() {
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
    <div className="px-2">
      <div className="w-[90vw]">
        <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-4">
          <div className="flex gap-4">

            {/* Top Movers */}
            <div className="flex-1">
              <span className="text-xs font-semibold tracking-wide text-emerald-400 block mb-2">
                TOP MOVERS
              </span>

              <div className="space-y-2">
                {movers.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-emerald-400" />
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
            <div className="w-px bg-white/15" />

            {/* Top Losers */}
            <div className="flex-1">
              <span className="text-xs font-semibold tracking-wide text-red-400 block mb-2">
                TOP LOSERS
              </span>

              <div className="space-y-2">
                {losers.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <TrendingDown className="h-4 w-4 text-red-400" />
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
        </div>
      </div>
    </div>
  );
}
