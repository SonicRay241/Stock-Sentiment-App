import { Search, Bell } from "lucide-react"

export function SearchHeader() {
  return (
    <header className="sticky top-0 z-10 bg-background border-b border-border">
      <div className="flex items-center justify-between p-6 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-secondary">
            <img src="/diverse-user-avatars.png" alt="User" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-xl font-semibold">Stock List</h1>
        </div>
        <button className="p-2 hover:bg-muted rounded-lg transition-colors">
          <Bell size={24} />
        </button>
      </div>

      <div className="px-6 pb-4">
        <div className="relative w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
          <input
            type="text"
            placeholder="Search tickers, news, or sectors"
            className="w-full bg-input border border-border rounded-xl pl-12 pr-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </div>
    </header>
  )
}