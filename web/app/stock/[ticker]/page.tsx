"use client"

import StockPrice from "@/components/stock/stockPrice";
import StockChart from "@/components/stock/stockChart";
import KeyStatistics from "@/components/stock/keyStat";
import TradeFooter from "@/components/stock/footer";
import SentimentCard from "@/components/stock/sentimentCard";
import MarketCard from "@/components/stock/marketCard";
import { createContext, ReactNode, useContext } from "react";
import { useParams } from "next/navigation";

const TickerContext = createContext("")

export function TickerProvider(props: {
    children: ReactNode
    value: string
}) {
    return (
        <TickerContext.Provider value={props.value}>
            {props.children}
        </TickerContext.Provider>
    )
}

export function useTickerInfo() {
    return useContext(TickerContext)
}

export default function Page() {
    const params = useParams<{ ticker: string }>()

    return (
        <TickerProvider value={params.ticker}>
            <div className="px-3.5 space-y-3.5 pb-20">
                <StockPrice />
                <StockChart />
                <div className="flex items-stretch gap-3.5 w-full">
                    <SentimentCard />
                    <MarketCard />
                </div>
                <KeyStatistics />
                <TradeFooter />
            </div>
        </TickerProvider>
    );
}
