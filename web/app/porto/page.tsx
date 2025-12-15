import Navbar from "@/components/navbar/navbar";
import BalancePorto from "@/components/porto/totalBalance";
import AssetDecision from "@/components/porto/assetdecision";
import SectionTitle from "@/components/home/sectionTitle";
import { HoldAsset } from "@/components/porto/holding";
import Menubar from "@/components/navbar/menubar";

export default function Page() {
    return (
        <div className="px-3.5 space-y-5">
            <BalancePorto />
            <AssetDecision />
            <SectionTitle>Your Holding </SectionTitle>
            <HoldAsset />
            <div className="h-16"></div>
            <Menubar />
        </div>
    );
} 