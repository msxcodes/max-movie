import Carsoul from "@/components/common/Carsoul";
import ContentWrapper from "@/components/common/ContentWrapper";
import SwitchTab from "@/components/common/SwitchTab";
import useFetch from "@/hooks/useFetch";
import React, { useState } from "react";

export default function TopRatedSection() {
  const tabItem = ["Movies", "TV Shows"];
  const [endPoint, setEndPoint] = useState<string>("movie");

  const { data, loading } = useFetch(`/${endPoint}/top_rated`);

  const onTabChange = (value: string) => {
    setEndPoint(value === "Movies" ? "movie" : "tv");
  };

  return (
    <div className="mt-4 md:mt-12">
      <ContentWrapper className="flex justify-between items-center">
        <>
          <h2 className="text-white text-lg md:text-2xl font-medium">
            Top Rated
          </h2>
          <SwitchTab item={tabItem} onTabChange={onTabChange} />
        </>
      </ContentWrapper>
      <Carsoul data={data?.results} loading={loading} />
    </div>
  );
}
