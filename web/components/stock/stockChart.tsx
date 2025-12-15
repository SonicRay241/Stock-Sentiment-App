"use client";

import Card from "../ui/card/card";
import {
    LineChart,
    Line,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { useState } from "react";

const data = [
    { value: 120 },
    { value: 135 },
    { value: 128 },
    { value: 132 },
    { value: 125 },
    { value: 140 },
    { value: 150 },
    { value: 148 },
    { value: 155 },
];

const ranges = ["1H", "1D", "1W", "1M", "1Y"];

export default function StockChart() {
    const [activeRange, setActiveRange] = useState("1D");

    return (
        <Card>
            <div className="flex flex-col">
                {/* Time range selector */}
                <div className="mb-4 flex items-center justify-center">
                    {/* Outer bubble */}
                    <div className="rounded-2xl bg-background p-2">
                        {/* Middle bubble */}
                        <div className="rounded-xl bg-background p-1">
                            <div className="flex items-center gap-1">
                                {ranges.map((range) => (
                                    <button
                                        key={range}
                                        onClick={() => setActiveRange(range)}
                                        className={`relative px-4 py-1.5 text-sm font-medium rounded-lg transition
                                            ${activeRange === range
                                                ? "text-foreground"
                                                : "text-foreground/60 hover:text-foreground"
                                            }`}
                                    >
                                        {/* Active (inner) bubble */}
                                        {activeRange === range && (<>
                                            <span className="absolute inset-0 rounded-lg bg-blue-600 shadow-md" />                                        </>)}

                                        <span className="relative z-10">
                                            {range}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Chart */}
                <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                            <XAxis hide />
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
                            />
                            <Line
                                type="monotone"
                                dataKey="value"
                                stroke="#3b82f6"
                                strokeWidth={4}
                                dot={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* Divider */}
                <div className="my-4 h-px bg-white/10" />

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
        </Card>
    );
}
