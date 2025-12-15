import Navbar from "@/components/navbar/navbar";
import MarketSentiment from "@/components/home/marketSentiment";
import Portfolio from "@/components/home/portofolio";
import PortoStocks from "@/components/home/portoStocks";
import PersonalizedNews from "@/components/home/personalizedNews";
import News from "@/components/home/news";
import Top from "@/components/home/Top";
import TopMoversLosersMobile from "@/components/home/TopMover";
import Menubar from "@/components/navbar/menubar";

export default function Page() {
  return (
    <div className="px-3.5 space-y-5">
      <MarketSentiment />
      <Portfolio />
      <PortoStocks />
      <PersonalizedNews />
      <News />
      <Top />
      <TopMoversLosersMobile />
      <Menubar />
    </div>
  );
}
