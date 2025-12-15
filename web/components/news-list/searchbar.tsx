"use client";

import { Search } from "lucide-react";
import Card from "../ui/card/card";

export default function SearchBar() {
    return (
        <Card className="py-3 px-4">
            <div className="flex items-center gap-3">
                {/* Search Icon */}
                <Search className="h-5 w-5 text-foreground" />

                {/* Input */}
                <input
                    type="text"
                    placeholder="Search stocks, news, topics..."
                    className="w-full bg-transparent text-sm text-foreground placeholder:text-foreground/50 outline-none"
                />
            </div>
        </Card>
    );
}
