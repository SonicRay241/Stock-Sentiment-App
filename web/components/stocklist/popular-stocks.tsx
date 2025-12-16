import Link from "next/link"
import Card from "../ui/card/card"
import { StockItem } from "./stock-item"

const popularStocks = [
  { symbol: "NVDA", name: "Nvidia Corp", price: "485.02", change: "+3.4%", positive: true },
  { symbol: "TSLA", name: "Tesla Inc", price: "123.02", change: "-1.2%", positive: false },
  { symbol: "META", name: "Meta Platforms", price: "453.02", change: "-0.5%", positive: false },
  { symbol: "MSFT", name: "Microsoft Corp", price: "234.02", change: "0.0%", neutral: true },
]

export function PopularStocks() {
  return (
    <div className="space-y-3">
      {popularStocks.map((stock) => (
        <Link href={`/stock/${stock.symbol}`} className="block" key={stock.symbol}>
          <Card key={stock.symbol}>
            <StockItem {...stock} />
          </Card>
        </Link>
      ))}
    </div>
  )
}
