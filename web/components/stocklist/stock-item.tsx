"use client"

import { LineChart, Line, ResponsiveContainer } from "recharts"

interface StockItemProps {
  symbol: string
  name: string
  price: string
  change: string
  positive?: boolean
  neutral?: boolean
}

export function StockItem({ symbol, name, price, change, positive = false, neutral = false }: StockItemProps) {
  const changeColor = neutral ? "text-muted-foreground" : positive ? "text-emerald-400" : "text-red-400"
  const chartColor = neutral ? "#71717a" : positive ? "#34d399" : "#ef4444"

  // Generate simple chart data based on trend
  const generateChartData = () => {
    const points = 8
    const data = []

    if (positive) {
      // Upward trend
      for (let i = 0; i < points; i++) {
        data.push({ value: 20 + i * 3 + Math.random() * 2 })
      }
    } else if (neutral) {
      // Flat trend
      for (let i = 0; i < points; i++) {
        data.push({ value: 25 + Math.random() * 3 - 1.5 })
      }
    } else {
      // Downward trend
      for (let i = 0; i < points; i++) {
        data.push({ value: 40 - i * 3 + Math.random() * 2 })
      }
    }

    return data
  }

  const chartData = generateChartData()

  return (
    <div className="bg-card border border-border rounded-xl p-5 flex items-center justify-between hover:bg-muted transition-colors cursor-pointer">
      <div className="flex-1">
        <div className="font-semibold text-sm">{symbol}</div>
        <div className="text-xs text-muted-foreground">{name}</div>
      </div>
      <div className="flex-1 px-4">
        <ResponsiveContainer width="100%" height={30}>
          <LineChart data={chartData}>
            <Line type="monotone" dataKey="value" stroke={chartColor} strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="text-right">
        <div className="font-semibold text-sm">{price}</div>
        <div className={`text-xs ${changeColor}`}>{change}</div>
      </div>
    </div>
  )
}