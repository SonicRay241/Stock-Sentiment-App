"use client";
import { ArrowRightIcon, PlusIcon } from "lucide-react";
import Button from "../ui/button";
import { useTickerInfo } from "@/app/stock/[ticker]/page";

export default function TradeFooter() {
    const ticker = useTickerInfo()

    return (
        <nav className="fixed flex items-center justify-center gap-2 bottom-0 left-0 right-0 z-50 bg-card backdrop-blur-md h-16 px-3.5 py-2">
            {/* Watch Button */}
            <Button className="h-full border bg-card hover:brightness-110 transition-all rounded-xl">
                <PlusIcon className="w-5 h-5" />
                <span className="font-medium">Watch</span>
            </Button>

            {/* Trade APPL Button */}
            <Button className="px-8 py-3 bg-primary hover:brightness-110 transition-all rounded-xl">
                <span className="font-medium">Trade {ticker}</span>
                <ArrowRightIcon className="w-5 h-5" />
            </Button>
        </nav>
    );
}