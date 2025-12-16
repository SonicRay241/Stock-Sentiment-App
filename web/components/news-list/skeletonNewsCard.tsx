import Card from "../ui/card/card";

export default function SkeletonNewsCard() {
    return (
        <Card className="px-4 flex gap-3">
            {/* Image */}
            <div className="size-24 rounded-xl bg-muted-foreground/50 animate-pulse">
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 animate-pulse">
                {/* Sentiment row */}
                <div className="flex items-center gap-2 mb-2">
                    <span className="w-16 h-5 rounded-full bg-muted-foreground/50">

                    </span>
                    <span className="w-24 h-3.5 rounded-full bg-muted-foreground/50">

                    </span>
                </div>

                {/* Title */}
                <div className="text-sm font-semibold text-white mb-2 line-clamp-2 space-y-2">
                    <div className="h-3.5 w-full rounded-full bg-muted-foreground/50"></div>
                    <div className="h-3.5 w-[20%] rounded-full bg-muted-foreground/50"></div>
                </div>

                {/* Description */}
                <div className="leading-relaxed text-white/80 mb-3 line-clamp-3 space-y-2">
                    <div className="h-3.5 w-[80%] rounded-full bg-muted-foreground/50"></div>
                    <div className="h-3.5 w-full rounded-full bg-muted-foreground/50"></div>
                    <div className="h-3.5 w-[40%] rounded-full bg-muted-foreground/50"></div>
                </div>

                {/* Impact */}
                <div className="flex items-center gap-2">
                    <div className="h-3.5 w-24 rounded-full bg-muted-foreground/50"></div>
                </div>
            </div>
        </Card>
    )
}