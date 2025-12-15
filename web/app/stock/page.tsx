import Navbar from "@/components/navbar/navbar";
import StockPrice from "@/components/stock/stockPrice";
import StockChart from "@/components/stock/stockChart";
import SentimentMarketCapBubbles from "@/components/stock/sentiment-market";
import KeyStatistics from "@/components/stock/keyStat";
import TradeFooter from "@/components/stock/footer";

export default function Page() {
    return (
        <div className="px-3.5 space-y-5">
            <StockPrice />
            <StockChart />
            <SentimentMarketCapBubbles />
            <KeyStatistics />
            <TradeFooter />
        </div>
    );
} 



