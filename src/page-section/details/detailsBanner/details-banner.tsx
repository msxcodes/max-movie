"use client";
import CircleRating from "@/components/common/CircleRating";
import ContentWrapper from "@/components/common/ContentWrapper";
import Genres from "@/components/common/Genres";
import LazyImage from "@/components/common/LazyImg";
import useFetch from "@/hooks/useFetch";
import { useParams } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";
import FallbackPoster from "../../../../public/no-poster.png";
import { PiLayoutBold } from "react-icons/pi";
import { FaRegCirclePlay } from "react-icons/fa6";
import { BsPlayCircle } from "react-icons/bs";
import dayjs from "dayjs";
import ReactPlayer from "react-player";
import TrailerModal from "./components/trailer-modal";
import "./details-banner.css"

interface DetailsBannerProps {
  videoData: any;
  creditsData: any;
}

export default function DetailsBanner({
  videoData,
  creditsData,
}: DetailsBannerProps) {
  const params = useParams<{ mediatype: string; id: string }>();
  const { data, loading } = useFetch(`/${params?.mediatype}/${params?.id}`);
  const { url } = useSelector((state: any) => state.home);

  const videoKey = videoData?.results?.[0]?.key;

  const videoUrl = `https://www.youtube.com/watch?v=${videoKey}`;
  console.log(videoUrl);

  const director = creditsData?.crew?.filter(
    (item: any) => item.job === "Director"
  );
  const writer = creditsData?.crew?.filter(
    (item: any) => item.job === "Writer" || item.job === "Characters"
  );

  const genre_ids = data?.genres?.map((data: any) => data.id);
  const posterUrl =
    url?.poster === undefined
      ? FallbackPoster.src
      : url.poster + data?.poster_path;

  const toHoursAndMinutes = (totalMinutes: number) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

  return (
    <div className="w-full container bg-[var(--black)] pt-[100px] mb-[50px]">
      {!loading ? (
        <>
          {!!data && (
            <React.Fragment>
              <ContentWrapper>
                <div className="content-box flex relative md:flex-row">
                  <div className="poster-img w-full block rounded-xl">
                    <LazyImage
                      src={posterUrl}
                      className="max-w-[350px] h-full rounded-lg"
                    />
                  </div>
                  <div className="text-white flex flex-col justify-end">
                    <div className="text-2xl title">{`${data.title
                      } (${data.release_date?.slice(0, 4)})`}</div>
                    <div className="text-sm mb-4 tagline italic opacity-50 md:text-xl">
                      {data.tagline}
                    </div>
                    <div style={{ marginBottom: "16px" }}>
                      <Genres className="genres" data={genre_ids} />
                    </div>
                    <div className="rating-box flex items-center">
                      <div className="bg-[var(--black2)] rounded-full">
                        <CircleRating
                          rating={data?.vote_average?.toFixed(1)}
                          className
                        />
                      </div>
                      <TrailerModal url={videoUrl} title={data?.title} />
                    </div>
                    <div className="" style={{ marginBottom: "24px" }}>
                      <div className="" style={{ fontSize: "24px", marginBottom: "8px", lineHeight: "32px" }}>Overview</div>
                      <p className="" style={{ paddingRight: "150px", lineHeight: "24px", opacity: "0.7" }}>
                        {data?.overview}
                      </p>
                    </div>
                    <div style={{ padding: "16px 0px" }} className="border-b border-[rgba(255,255,255,0.1)]  flex ">
                      <div className="flex  flex-wrap" style={{ marginRight: "8px", gap: "4px" }}>
                        <span style={{ fontWeight: "600" }} className="font-[600]">Status: </span>
                        <span className="opacity-50 "> {data?.status} </span>
                      </div>
                      <div className="mr-2 flex gap-1  flex-wrap"
                        style={{ marginRight: "8px", gap: "4px" }}
                      >
                        <span style={{ fontWeight: "600" }} className="font-[600]">Release Date: </span>
                        <span className="opacity-50 ">
                          {" "}
                          {dayjs(data?.release_date).format(
                            "MMM DD, YYYY"
                          )}{" "}
                        </span>
                      </div>
                      <div className="mr-2 flex gap-1  flex-wrap" style={{ marginRight: "8px", gap: "4px" }}>
                        <span style={{ fontWeight: "600" }} className="font-[600]">Runtime: </span>
                        <span className="opacity-50 ">
                          {" "}
                          {toHoursAndMinutes(data?.runtime)}{" "}
                        </span>
                      </div>
                    </div>

                    {/* Director section  */}
                    {director?.length > 0 && (
                      <div className="border-b border-[rgba(255,255,255,0.1)] py-4 flex ">
                        <div className="mr-2 flex gap-1  flex-wrap" style={{ marginRight: "8px", gap: "4px" }}>
                          <span style={{ fontWeight: "600" }} className="font-[600]">Director: </span>{" "}
                          <span className="opacity-50 ">
                            {" "}
                            {director.map((data: any, index: number) => {
                              return (
                                <span className="" key={index}>
                                  {data?.name}
                                  {director.length - 1 !== index && ", "}
                                </span>
                              );
                            })}{" "}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* WRITER SECTION  */}
                    {writer?.length > 0 && (
                      <div className="border-b border-[rgba(255,255,255,0.1)] py-4 flex ">
                        <div className="mr-2 flex gap-1  flex-wrap" style={{ marginRight: "8px", gap: "4px" }}>
                          <span style={{ fontWeight: "600" }} className="font-[600]">Writer: </span>{" "}
                          <span className="opacity-50 ">
                            {" "}
                            {writer?.map((data: any, index: number) => {
                              return (
                                <span className="" key={index}>
                                  {data?.name}

                                  {writer.length - 1 !== index && ", "}
                                </span>
                              );
                            })}{" "}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </ContentWrapper>
            </React.Fragment>
          )}
        </>
      ) : (
        <div className="detailsBannerSkeleton">
          <ContentWrapper>
            <>
              <div className="left skeleton"></div>
              <div className="right">
                <div className="row skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row skeleton"></div>
              </div>
            </>
          </ContentWrapper>
        </div>
      )}
    </div>
  );
}
