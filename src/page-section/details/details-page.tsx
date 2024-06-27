"use client";
import React from "react";
import DetailsBanner from "./detailsBanner/details-banner";
import useFetch from "@/hooks/useFetch";
import { useParams } from "next/navigation";
import CastSection from "./cast/cast-section";
import Carsoul from "@/components/common/Carsoul";
import ContentWrapper from "@/components/common/ContentWrapper";
import { SiMlb } from "react-icons/si";

export default function DetailsPage() {
  const params = useParams<{ mediatype: string; id: string }>();
  const { data, loading } = useFetch(
    `/${params?.mediatype}/${params?.id}/videos`
  );
  const { data: creditsData, loading: creditsLoading } = useFetch(
    `/${params?.mediatype}/${params?.id}/credits`
  );
  const { data: similarList, loading: similarLoading } = useFetch(
    `/${params?.mediatype}/${params?.id}/similar`
  );
  const { data: recommendList, loading: recommendLoading } = useFetch(
    `/${params?.mediatype}/${params?.id}/recommendations`
  );

  console.log(similarList);
  return (
    <div>
      <DetailsBanner videoData={data} creditsData={creditsData} />
      <CastSection data={creditsData?.cast} loading={creditsLoading} />

      {/* Recommend movies  */}
      <div className="mt-4 md:mt-12">
        <ContentWrapper className="flex justify-between items-center">
          <>
            <h2 className="text-white text-lg md:text-2xl font-medium">
              Recommendations
            </h2>
          </>
        </ContentWrapper>
        <Carsoul data={recommendList?.results} loading={recommendLoading} />
      </div>

      {/* SIMILAR MOVIES  */}
      <div className="mt-4 md:mt-12">
        <ContentWrapper className="flex justify-between items-center">
          <>
            <h2 className="text-white text-lg md:text-2xl font-medium">
              Similar Movies
            </h2>
          </>
        </ContentWrapper>
        <Carsoul data={similarList?.results} loading={similarLoading} />
      </div>
    </div>
  );
}
