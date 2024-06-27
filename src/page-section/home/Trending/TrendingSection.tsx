import Carsoul from "@/components/common/Carsoul";
import ContentWrapper from "@/components/common/ContentWrapper";
import SwitchTab from "@/components/common/SwitchTab";
import useFetch from "@/hooks/useFetch";
import React, { useState } from "react";

export default function TrendingSection() {
  const tabItem = ["Day", "Week"];
  const [endPoint, setEndPoint] = useState<string>("day");

  const { data, loading } = useFetch(`/trending/movie/${endPoint}`);

  const onTabChange = (value: string) => {
    setEndPoint(value === "Day" ? "day" : "week");
  };

  let a = 12 + 56;
  console.log(a);

  return (
    <div className="mt-4 md:mt-12">
      <ContentWrapper className="flex justify-between items-center">
        <>
          <h2 className="text-white text-lg md:text-2xl font-medium">
            Trending Section
          </h2>
          <SwitchTab item={tabItem} onTabChange={onTabChange} />
        </>
      </ContentWrapper>
      <Carsoul data={data?.results} loading={loading} />
    </div>
  );
}
