import { StockItem } from "./stock-item"

const watchListStocks = [
  { symbol: "NVDA", name: "Nvidia Corp", price: "485.02", change: "+3.4%", positive: true },
  { symbol: "AAPL", name: "Apple Inc", price: "123.02", change: "-1.3%", positive: false },
  { symbol: "GOOGL", name: "Alphabet Inc", price: "234.02", change: "0.0%", neutral: true },
  { symbol: "AMZN", name: "Amazon.com", price: "54.02", change: "+1.5%", positive: true },
]

export function WatchList() {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Watch List</h2>
        <button className="text-sm text-blue-400 hover:text-blue-300">View All</button>
      </div>
      <div className="space-y-3">
        {watchListStocks.map((stock) => (
          <StockItem key={stock.symbol} {...stock} />
        ))}
      </div>
    </div>
  )
}
