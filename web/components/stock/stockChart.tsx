"use client";

import Card from "../ui/card/card";
import {
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
    AreaChart,
    Area,
} from "recharts";
import { useState } from "react";
import Divider from "../ui/divider";
import Button from "../ui/button";
import { twMerge } from "tailwind-merge";

const data = [
    { datetime: "Dec 16, 2025 11:00", value: 135 },
    { datetime: "Dec 16, 2025 12:00", value: 120 },
    { datetime: "Dec 16, 2025 13:00", value: 128 },
    { datetime: "Dec 16, 2025 14:00", value: 132 },
    { datetime: "Dec 16, 2025 15:00", value: 125 },
    { datetime: "Dec 16, 2025 16:00", value: 140 },
    { datetime: "Dec 16, 2025 17:00", value: 150 },
    { datetime: "Dec 16, 2025 18:00", value: 148 },
    { datetime: "Dec 16, 2025 19:00", value: 155 },
];

const ranges = ["1H", "1D", "1W", "1M", "1Y"];

export default function StockChart() {
    return (
        <Card className="px-3">
            <div className="flex flex-col">
                <TimeSelector />
                {/* Chart */}
                <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
                            <defs>
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="datetime" hide />
                            <YAxis hide />
                            <Tooltip
                                cursor={false}
                                contentStyle={{
                                    background: "rgba(15,23,42,0.7)",
                                    backdropFilter: "blur(8px)",
                                    border: "1px solid rgba(255,255,255,0.15)",
                                    borderRadius: "10px",
                                    color: "#fff",
                                    fontSize: "12px",
                                }}
                                formatter={(value) => [`$${value}`, "Closing Price"]}
                            />
                            <Area
                                type="monotone"
                                dataKey="value"
                                fill="url(#colorUv)"
                                strokeWidth={2}
                                dot={false}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
                <div className="px-1">
                    <Divider orientation="vertical" className="my-4" />

                    {/* Footer */}
                    <div className="mt-4 flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-foreground/70">
                            {/* Green indicator dot */}
                            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                            <span>High Sentiment Correlation</span>
                        </div>
                        <span className="text-foreground/60">
                            Vol: 45.2M
                        </span>
                    </div>
                </div>
            </div>
        </Card>
    );
}


function TimeSelector() {
    const [activeRange, setActiveRange] = useState("1D");
    return (
        <div className="mx-1 mb-6 p-1.5 flex items-center justify-center gap-1 bg-background rounded-xl">
            {ranges.map((range) => (
                <Button
                    key={range}
                    onClick={() => setActiveRange(range)}
                    className={twMerge(
                        "relative px-4 py-1.5 text-sm font-medium rounded-lg transition bg-transparent",
                        activeRange === range ? "text-foreground bg-primary" : "text-foreground/60 hover:text-foreground"
                    )}
                >
                    <span className="relative z-10">
                        {range}
                    </span>
                </Button>
            ))}
        </div>
    )
}