"use client";
import { Plus, ArrowRight } from "lucide-react";

export default function TradeFooter() {
    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card backdrop-blur-md">
            <div className="flex items-center justify-center gap-3 h-20 px-4 max-w-md mx-auto">
                {/* Watch Button */}
                <button className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-700/50 hover:bg-gray-700/70 text-foreground rounded-full transition-colors">
                    <Plus className="w-5 h-5" />
                    <span className="font-medium">Watch</span>
                </button>

                {/* Trade APPL Button */}
                <button className="flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-foreground rounded-full flex-1 transition-colors">
                    <span className="font-semibold">Trade APPL</span>
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </nav>
    );
    }