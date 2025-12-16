"use client"

import { ResponsiveContainer, AreaChart, Area } from "recharts"

export interface StockItemProps {
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
        data.push({ value: 20 + i * 30 * Math.random() })
      }
      for (let i = 0; i < 3; i++) {
        data.push({ value: (points - 2) * 25 + i * 50 + Math.random() * 40 })
      }
    } else if (neutral) {
      // Flat trend
      for (let i = 0; i < points; i++) {
        data.push({ value: 25 + Math.random() * 40 - 1.5 })
      }
      for (let i = 0; i < 2; i++) {
        data.push({ value: 25 + Math.random() * 4 - 1.5 })
      }
    } else {
      // Downward trend
      for (let i = 0; i < points; i++) {
        data.push({ value: 50 - i * 12 * Math.random() })
      }
      for (let i = 0; i < 3; i++) {
        data.push({ value: 40 - i * 30 + Math.random() * 4 })
      }
    }

    return data
  }

  const chartData = generateChartData()

  return (
    <div className="flex items-center justify-between">
      <div className="flex-1">
        <div className="font-semibold text-sm">{symbol}</div>
        <div className="text-xs text-muted-foreground">{name}</div>
      </div>
      <div className="flex-1 px-4">
        <ResponsiveContainer width="100%" height={30}>
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id={`colorUv${symbol}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={chartColor} stopOpacity={0.8} />
                <stop offset="95%" stopColor={chartColor} stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="value"
              fill={`url(#colorUv${symbol})`}
              stroke={chartColor}
              strokeWidth={2}
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="text-right">
        <div className="font-semibold text-sm">{price}</div>
        <div className={`text-xs ${changeColor}`}>{change}</div>
      </div>
    </div>
  )
}