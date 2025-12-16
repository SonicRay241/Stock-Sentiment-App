import SearchBar from "@/components/news-list/searchbar";
import { HoldAsset } from "@/components/portfolio/holding";
import Filters from "@/components/news-list/filters";
import SectionTitle from "@/components/home/sectionTitle";
import { PopularStocks } from "@/components/stocklist/popular-stocks";
import Button from "@/components/ui/button";
import { WatchList } from "@/components/stocklist/watch-list";

export default function Page() {
    return (
        <div className="px-3.5 space-y-3">
            <SearchBar />
            <Filters />
            <SectionTitle>Watch List</SectionTitle>
            <WatchList />
            <Button className="bg-card border border-border rounded-xl py-2 text-sm">
                <span>Load more</span>
            </Button>
            <SectionTitle>Popular Stocks</SectionTitle>
            <PopularStocks />
            <Button className="bg-card border border-border rounded-xl py-2 text-sm">
                <span>Load more</span>
            </Button>
        </div>
    );
}