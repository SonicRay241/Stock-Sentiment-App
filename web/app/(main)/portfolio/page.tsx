import BalancePorto from "@/components/portfolio/totalBalance";
import AssetDecision from "@/components/portfolio/assetdecision";
import SectionTitle from "@/components/home/sectionTitle";
import { HoldAsset } from "@/components/portfolio/holding";

export default function Page() {
    return (
        <div className="px-3.5 space-y-5">
            <BalancePorto />
            <AssetDecision />
            <SectionTitle>Your Holdings</SectionTitle>
            <HoldAsset />
        </div>
    );
} 