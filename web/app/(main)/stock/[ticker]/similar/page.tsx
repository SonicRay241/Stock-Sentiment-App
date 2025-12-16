import MarketSentiment from "@/components/home/marketSentiment";
import TopNews from "@/components/news-list/topNews";
import Button from "@/components/ui/button";

export default function Page() {
  return (
    <div className="px-3.5 space-y-4">
      <MarketSentiment />
      <TopNews />
      <Button className="bg-card border border-border rounded-xl py-2 text-sm">
        <span>Load more</span>
      </Button>
    </div>
  );
}
