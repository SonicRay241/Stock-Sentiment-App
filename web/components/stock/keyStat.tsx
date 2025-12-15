"use client";

import Card from "../ui/card/card";

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
        <Card className="p-0 overflow-hidden">
            <div className="px-4 py-4">
                {/* Header */}
                <h3 className="mb-4 text-sm tracking-wide text-foreground/80">
                    KEY STATISTICS
                </h3>

                {/* Table */}
                <table
                    className="w-full table-fixed border-separate text-sm"
                    style={{ borderSpacing: "0 8px" }} // 👈 row gap
                >
                    <tbody>
                        {rows.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((cell, colIndex) => (
                                    <td
                                        key={colIndex}
                                        className={`bg-card px-2 py-2 align-middle ${
                                            colIndex !== 0
                                                ? "border-l border-border/60"
                                                : ""
                                        }`}
                                    >
                                        <div className="flex items-center gap-1.5 overflow-hidden">
                                            {/* Label */}
                                            <span className="w-12 shrink-0 text-xs text-foreground/50">
                                                {cell.label}
                                            </span>

                                            {/* Value */}
                                            <span
                                                className={`truncate font-semibold tabular-nums ${
                                                    cell.color === "green"
                                                        ? "text-emerald-400"
                                                        : cell.color === "red"
                                                        ? "text-red-400"
                                                        : "text-foreground"
                                                }`}
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
            </div>
        </Card>
    );
}
