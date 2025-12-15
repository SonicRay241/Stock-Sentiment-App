"use client";
import { Plus } from "lucide-react";
export default function AssetDeci() {
return (
    <nav>
        <div className="flex items-center justify-center gap-3 h-10 w-full">
            {/* Sell Asset */}
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-700/50 hover:bg-gray-700/70 text-foreground rounded-full transition-colors flex-1">
                <Plus className="w-5 h-5" />
                <span className="font-medium">Sell Asset</span>
            </button>
            {/* Buy Asset */}
            <button className="flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-foreground rounded-full flex-1 transition-colors">
                <Plus className="w-5 h-5" />
                <span className="font-semibold">Buy Asset</span>
            </button>
        </div>
    </nav>
    );
}