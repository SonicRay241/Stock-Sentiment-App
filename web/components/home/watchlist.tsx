"use client";

import { TrendingUpIcon, TrendingDownIcon } from "lucide-react";
import Card from "../ui/card/card";
import CardHeader from "../ui/card/cardheader";
import { StockItem, StockItemProps } from "../stocklist/stock-item";

export default function WatchList() {
    const topMovers: StockItemProps[] = [
        {
            symbol: "NVDA",
            name: "Nvidia Corp",
            price: "$485.02",
            change: "-3.4%",
            positive: true,
            neutral: false
        },
        {
            symbol: "TSLA",
            name: "Tesla Inc",
            price: "$215.99",
            change: "-1.2%",
            positive: false,
            neutral: false
        },
    ];

    return (
        <Card>
            <div className="space-y-3">
                {topMovers.map((stock, index) => (
                    <StockItem key={index} {...stock} />
                ))}
            </div>
        </Card>
    );
}
