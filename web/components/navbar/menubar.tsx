"use client"

import { Home, Search, Newspaper, Briefcase } from "lucide-react";

export default function MenuBar() {
    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-t border-border">
            <div className="flex items-center justify-around h-16">

                {/* Home */}
                <div className="flex flex-col items-center gap-1 text-white">
                    <Home className="h-5 w-5" />
                    <span className="text-[11px] font-medium">Home</span>
                </div>

                {/* Search */}
                <div className="flex flex-col items-center gap-1 text-muted-foreground">
                    <Search className="h-5 w-5" />
                    <span className="text-[11px] font-medium">Search</span>
                </div>

                {/* News */}
                <div className="flex flex-col items-center gap-1 text-muted-foreground">
                    <Newspaper className="h-5 w-5" />
                    <span className="text-[11px] font-medium">News</span>
                </div>

                {/* Portfolio */}
                <div className="flex flex-col items-center gap-1 text-muted-foreground">
                    <Briefcase className="h-5 w-5" />
                    <span className="text-[11px] font-medium">Portfolio</span>
                </div>

            </div>
        </nav>
    );
}
