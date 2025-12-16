"use client"

import { FilterChips } from "@/components/stocklist/filter-chips"
import { MarketIndexCarousel } from "@/components/stocklist/market-index-carousel"
import { WatchList } from "@/components/stocklist/watch-list"
import { PopularStocks } from "@/components/stocklist/popular-stocks"

export default function StockListPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto">

        {/* Filter Chips */}
        <FilterChips />

        {/* Market Overview Carousel */}
        <MarketIndexCarousel />

        {/* Watch List and Popular Stocks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-6 py-6">
          <WatchList />
          <PopularStocks />
        </div>
      </div>
    </div>
  )
}