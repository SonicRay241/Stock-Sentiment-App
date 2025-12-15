import MarketSentiment from "@/components/home/marketSentiment";
import Portfolio from "@/components/home/portofolio";
import WatchList from "@/components/home/watchlist";
import News from "@/components/home/news";
import Top from "@/components/home/moversLosers";
import Menubar from "@/components/navbar/menubar";
import SectionTitle from "@/components/home/sectionTitle";

export default function Page() {
  return (
    <div className="px-3.5 space-y-5">
      <MarketSentiment />
      <Portfolio />
      <WatchList />
      <SectionTitle>Top Movers &amp; Losers</SectionTitle>
      <Top />
      <SectionTitle>Personalized News</SectionTitle>
      <News />
      <div className="h-16"></div>
      <Menubar />
    </div>
  );
}
