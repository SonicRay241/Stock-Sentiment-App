import Navbar from "@/components/navbar/navbar";
import SearchBar from "@/components/news-list/searchbar";
import SectionTitle from "@/components/home/sectionTitle";
import SwipeableCards from "@/components/news-list/todayHighlightCard";
import LatestNewsMobile from "@/components/news-list/topNews";
import LatestNews from "@/components/news-list/news";
import Menubar from "@/components/navbar/menubar";

export default function Page() {
    return (
        <div className="px-3.5 space-y-5">
            <SearchBar />
            <SectionTitle>Today's Highlight</SectionTitle>
            <SwipeableCards />
            <SectionTitle>Top News</SectionTitle>
            <LatestNewsMobile />
            <SectionTitle>News </SectionTitle>
            <LatestNews />
            <div className="h-16"></div>
            <Menubar />
        </div>
    );
} 
