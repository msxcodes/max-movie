import ContentWrapper from "@/components/common/ContentWrapper";
import LazyImage from "@/components/common/LazyImg";
import SerachBar from "@/components/common/SerachBar";
import useFetch from "@/hooks/useFetch";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function HeroBanner() {
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
    <div className="w-full flex items-center h-[400px] md:h-[500px] relative bg-[#04152d]">
      {!loading && (
        <div className="size-full absolute left-0 top-0 overflow-hidden opacity-50">
          <LazyImage
            src={background}
            className="size-full object-cover object-center"
          />
        </div>
      )}
      <div className="w-full h-[250px] absolute bottom-0 left-0 bg-gradient-to-b from-[rgba(4,21,45,0)] to-[#04152d]"></div>
      <ContentWrapper>
        <div className="max-w-[800px] gap-2 flex flex-col relative text-center text-white mx-auto items-center">
          <h2 className="font-semibold text-5xl md:text-7xl">Welcome</h2>
          <p className="text-lg font-medium md:text-2xl mb-10">
            Millions of movies, TV shows and people discover.Explore Now
          </p>
          <div className="w-full h-[40px]  md:h-[50px] flex items-center">
            <SerachBar />
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
}
