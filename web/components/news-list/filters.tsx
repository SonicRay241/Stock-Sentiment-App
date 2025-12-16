"use client"

import { SlidersHorizontalIcon } from "lucide-react"
import { useState } from "react"
import Button from "../ui/button"

export default function Filters() {
    const filters = ["All", "Tech", "Energy", "Finance", "Healthcare", "Consumer", "Industrial", "Materials"]

    const [activeFilter, setActiveFilter] = useState("All")

    return (
        <div className="relative">
            <div className="flex gap-3 overflow-x-auto no-scrollbar pr-12">
                <div className="flex gap-3 min-w-max">
                    {filters.map((filter) => (
                        <Button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-5 h-9 rounded-xl text-sm font-medium transition-colors whitespace-nowrap ${activeFilter === filter
                                ? "bg-foreground text-background"
                                : "bg-card border border-border hover:bg-muted"
                                }`}
                        >
                            {filter}
                        </Button>
                    ))}
                </div>
            </div>
            <div className="absolute right-0 top-0 flex justify-end w-16 bg-linear-to-r from-transparent via-background to-background">
                <Button className="size-9 bg-background border border-border rounded-xl hover:bg-muted transition-colors shrink-0">
                    <div className="size-full rounded-xl flex justify-center items-center bg-card">
                        <SlidersHorizontalIcon className="size-5" />
                    </div>
                </Button>
            </div>
        </div>
    )
}