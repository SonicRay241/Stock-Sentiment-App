import { ArrowRightIcon } from "lucide-react";
import Button from "../ui/button";
import LatestNews from "../news-list/news";
import Link from "next/link";

export default function News() {
  return (
    <>
      <LatestNews />
      <Link href="/news">
        <Button className="bg-card border border-border rounded-xl py-2 text-sm">
          <span>View more</span>
          <ArrowRightIcon className="size-4" />
        </Button>
      </Link>
    </>
  );
}
