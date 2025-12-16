import MarketSentiment from "@/components/home/marketSentiment";
import Portfolio from "@/components/home/portofolio";
import WatchList from "@/components/home/watchlist";
import News from "@/components/home/news";
import Top from "@/components/home/moversLosers";
import Menubar from "@/components/navbar/menubar";
import SectionTitle from "@/components/home/sectionTitle";
import LatestNews from "@/components/news-list/news";

export default function Page() {
  return (
    <div className="px-3.5 space-y-4">
      <MarketSentiment />
      <Portfolio />
      <WatchList />
      <SectionTitle>Gainers &amp; Losers</SectionTitle>
      <Top />
      <SectionTitle>Personalized News</SectionTitle>
      <News />
    </div>
  );
}
