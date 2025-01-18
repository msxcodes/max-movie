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

  const videoKey = videoData?.results?.[0].key;

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
    <div className="w-full bg-[var(--black)] pt-[100px] mb-[50px]">
      {!loading ? (
        <>
          {!!data && (
            <React.Fragment>
              {/* <div className="size-full absolute top-0 left-0 opacity-10 overflow-hidden">
                <LazyImage
                  src={posterUrl}
                  className="size-full object-cover object-center"
                />
              </div> */}
              <div className="absolute top-0 left-0 size-full bg-gradient-to-b from-[rgba(4,21,45,0)] to-[#04152d]"></div>
              <ContentWrapper>
                <div className="flex relative flex-col gap-[25px] md:gap-[50px] md:flex-row">
                  <div className=" w-full block rounded-xl md:max-w-[350px] ">
                    <LazyImage
                      src={posterUrl}
                      className="max-w-[350px] h-full rounded-lg"
                    />
                  </div>
                  <div className="text-white ">
                    <div className="text-2xl md:text-4xl">{`${data.title
                      } (${data.release_date?.slice(0, 4)})`}</div>
                    <div className="text-sm mb-4 italic opacity-50 md:text-xl">
                      {data.tagline}
                    </div>
                    <div className="mb-4">
                      <Genres className="gap-1" data={genre_ids} />
                    </div>
                    <div className="flex gap-6 mb-6 items-center">
                      <div className="bg-[var(--black2)] font-semibold rounded-full size-[70px] md:size-[90px] p-0.5 ">
                        <CircleRating
                          rating={data?.vote_average?.toFixed(1)}
                          className
                        />
                      </div>
                      <TrailerModal url={videoUrl} title={data?.title} />
                    </div>
                    <div className="mb-6">
                      <div className="text-2xl mb-2">Overview</div>
                      <p className="leading-6 md:pr-[150px]">
                        {data?.overview}
                      </p>
                    </div>
                    <div className="border-b border-[rgba(255,255,255,0.1)] py-4 flex ">
                      <div className="mr-2 flex gap-1  flex-wrap">
                        <span className="font-[600]">Status: </span>
                        <span className="opacity-50 "> {data?.status} </span>
                      </div>
                      <div className="mr-2 flex gap-1  flex-wrap">
                        <span className="font-[600]">Release Date: </span>
                        <span className="opacity-50 ">
                          {" "}
                          {dayjs(data?.release_date).format(
                            "MMM DD, YYYY"
                          )}{" "}
                        </span>
                      </div>
                      <div className="mr-2 flex gap-1  flex-wrap">
                        <span className="font-[600]">Runtime: </span>
                        <span className="opacity-50 ">
                          {" "}
                          {toHoursAndMinutes(data?.runtime)}{" "}
                        </span>
                      </div>
                    </div>

                    {/* Director section  */}
                    {director?.length > 0 && (
                      <div className="border-b border-[rgba(255,255,255,0.1)] py-4 flex ">
                        <div className="mr-2 flex gap-1  flex-wrap">
                          <span className="font-[600]">Director: </span>{" "}
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
                        <div className="mr-2 flex gap-1  flex-wrap">
                          <span className="font-[600]">Writer: </span>{" "}
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
