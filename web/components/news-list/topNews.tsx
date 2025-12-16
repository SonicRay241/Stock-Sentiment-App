"use client";

import { useEffect, useState } from "react";
import NewsCard from "./newscard";
import SkeletonNewsCard from "./skeletonNewsCard";
import { getTopNews, NewsItem } from "@/lib/api/news";

export default function TopNews() {
    const [news, setNews] = useState<NewsItem[]>([])

    useEffect(() => {
        const items = getTopNews()
        items.then(setNews)
    })
    return (
        <div className="space-y-3">
            {news.length < 1
                ? Array.from(Array(3)).map((_, i) => (
                    <SkeletonNewsCard key={i} />
                ))
                : news.map((item, index) => (
                    <NewsCard
                        {...item}
                        key={index}
                    />
                ))
            }
        </div>
    );
}
