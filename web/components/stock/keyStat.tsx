"use client";

import { twMerge } from "tailwind-merge";
import Card from "../ui/card/card";
import CardHeader from "../ui/card/cardheader";

type Cell = {
    label: string;
    value: string;
    color?: "green" | "red" | "neutral";
};

export default function KeyStatisticsTable() {
    const rows: Cell[][] = [
        [
            { label: "Open", value: "$1,620", color: "green" },
            { label: "Prev", value: "$1,565" },
            { label: "Lot", value: "26.60K", color: "red" },
        ],
        [
            { label: "High", value: "$1,675", color: "green" },
            { label: "ARA", value: "$1,665" },
            { label: "Val", value: "$3.90B", color: "red" },
        ],
        [
            { label: "Low", value: "$1,335", color: "red" },
            { label: "ARB", value: "$1,135" },
            { label: "Avg", value: "$1467", color: "red" },
        ],
        [
            { label: "F buy", value: "407.13M", color: "green" },
            { label: "F Sell", value: "407.13M", color: "red" },
            { label: "Freq", value: "124.K", color: "green" },
        ],
    ];

    return (
        <Card className="px-2.5 overflow-hidden">
            <CardHeader className="px-1.5 mb-0">
                <span>KEY STATISTICS</span>
            </CardHeader>

            {/* Table */}
            <table
                className="w-full table-fixed border-separate text-sm border-spacing-y-1"
            >
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, colIndex) => (
                                <td
                                    key={colIndex}
                                    className={twMerge(
                                        "px-2 py-2 align-middle",
                                        colIndex !== 0 && "border-l border-border/60"
                                    )}
                                >
                                    <div className="flex items-center justify-between gap-1 overflow-hidden">
                                        {/* Label */}
                                        <span className="shrink-0 text-xs text-foreground/50">
                                            {cell.label}
                                        </span>

                                        {/* Value */}
                                        <span
                                            className={twMerge(
                                                "truncate tabular-nums text-foreground",
                                                cell.color === "green" && "text-emerald-400",
                                                cell.color === "red" && "text-red-400"
                                            )}
                                        >
                                            {cell.value}
                                        </span>
                                    </div>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </Card>
    );
}
