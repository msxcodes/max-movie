import ContentWrapper from "@/components/common/ContentWrapper";
import LazyImage from "@/components/common/LazyImg";
import SerachBar from "@/components/common/SerachBar";
import useFetch from "@/hooks/useFetch";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./HeroBanner.css"

export default function HeroBannerSection() {
    const [background, setBackground] = useState<string>("");

    const { data, loading } = useFetch("/movie/upcoming");
    const { url } = useSelector((state: any) => state.home);

    useEffect(() => {
        const bgPoster =
            url?.backdrop +
            data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
        setBackground(bgPoster);
    }, [data]);

    return (
        <div className="w-full flex items-center hero-banner relative bg-[#04152d] ">
            <div className="w-full effect-box absolute bottom-0 left-0 "></div>
            {!loading && (
                <div className="size-full absolute left-0 top-0 overflow-hidden opacity-50">
                    <LazyImage
                        src={background}
                        className="szie-full banner-img object-cover object-center"
                    />
                </div>
            )}
            <ContentWrapper>
                <div className="max-w-[800px] gap-2 flex flex-col relative text-center text-white mx-auto items-center content-box">
                    <h2 className="text-5xl">Welcome</h2>
                    <p className="text-lg">
                        Millions of movies, TV shows and people discover.Explore Now
                    </p>
                    <div className="search-bar w-full flex items-center">
                        <SerachBar />
                    </div>
                </div>
            </ContentWrapper>
        </div>
    );
}
