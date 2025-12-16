"use client"

import { Menu } from "lucide-react"
import { useState } from "react"

const filters = ["All", "Tech", "Energy", "Finance", "Healthcare", "Consumer", "Industrial", "Materials"]

export function FilterChips() {
  const [activeFilter, setActiveFilter] = useState("All")

  return (
    <div className="sticky top-[177px] z-10 bg-background border-b border-border py-4">
      <div className="flex gap-3 px-6 overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 min-w-max">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${activeFilter === filter
                ? "bg-foreground text-background"
                : "bg-card border border-border hover:bg-muted"
                }`}
            >
              {filter}
            </button>
          ))}
          <button className="p-2 bg-card border border-border rounded-full hover:bg-muted transition-colors shrink-0">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}