"use client";

import { useEffect, useState } from "react";
import NewsCard from "./newscard";
import { getLatestNews, NewsItem } from "@/lib/api/news";
import SkeletonNewsCard from "./skeletonNewsCard";

export default function LatestNews() {
    const [news, setNews] = useState<NewsItem[]>([])

    useEffect(() => {
        const items = getLatestNews()
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
