import SearchBar from "@/components/news-list/searchbar";
import { HoldAsset } from "@/components/portfolio/holding";
import Menubar from "@/components/navbar/menubar";

export default function Page() {
    return (
        <div className="px-3.5 space-y-5">
            <SearchBar />
            <HoldAsset />
            <div className="h-16"></div>
            <Menubar />
        </div>
    );
}