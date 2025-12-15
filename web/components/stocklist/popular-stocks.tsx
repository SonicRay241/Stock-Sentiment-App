import { StockItem } from "./stock-item"

const popularStocks = [
  { symbol: "NVDA", name: "Nvidia Corp", price: "485.02", change: "+3.4%", positive: true },
  { symbol: "TSLA", name: "Tesla Inc", price: "123.02", change: "-1.2%", positive: false },
  { symbol: "META", name: "Meta Platforms", price: "453.02", change: "-0.5%", positive: false },
  { symbol: "MSFT", name: "Microsoft Corp", price: "234.02", change: "0.0%", neutral: true },
]

export function PopularStocks() {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Popular Stocks</h2>
        <button className="text-sm text-blue-400 hover:text-blue-300">View All</button>
      </div>
      <div className="space-y-3">
        {popularStocks.map((stock) => (
          <StockItem key={stock.symbol} {...stock} />
        ))}
      </div>
    </div>
  )
}
