"use client";
import React from "react";
import ContentWrapper from "./ContentWrapper";
import { ITrendingMovies } from "@/interface/Interface";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import LazyImage from "./LazyImg";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import CircleRating from "./CircleRating";
import Genres from "./Genres";
import { redirect, useRouter } from "next/navigation";
import CarouselSkeleton from "./skeleton/CarouselSkeleton";

interface CarsoulProps {
  data: ITrendingMovies[];
  loading: boolean;
}

export default function Carsoul({ data, loading }: CarsoulProps) {
  const { url } = useSelector((state: any) => state.home);

  const router = useRouter();

  return (
    <div className="w-full ">
      <ContentWrapper className="relative">
        <>
          <BsFillArrowLeftCircleFill className="text-[30px] absolute top-[44%] translate-y-[-50%] cursor-pointer opacity-50 z-10 hidden md:block hover:opacity-80 left-[30px] " />
          <BsFillArrowRightCircleFill className=" text-[30px] absolute top-[44%] translate-y-[-50%] cursor-pointer opacity-50 z-10 hidden md:block right-[30px] hover:opacity-80" />
          {!loading ? (
            <div className="flex overflow-y-hidden gap-4 w-full py-10">
              {data?.map((item) => {
                const posterUrl = item.poster_path
                  ? url.poster + item.poster_path
                  : "";

                return (
                  <div
                    onClick={() =>
                      router.push(`/${item.media_type}/${item.id}`)
                    }
                    className="w-[125px] rounded-md md:w-[calc(18%-16px)] space-y-2 cursor-pointer flex-shrink-[0]"
                    key={item.id}
                  >
                    <div className="w-full rounded-lg relative">
                      <LazyImage
                        src={posterUrl}
                        className="size-full object-cover object-center rounded-lg"
                      />
                      <span className="absolute left-1 bottom-2">
                        <CircleRating
                          rating={Number(item.vote_average.toFixed(1))}
                        />
                      </span>
                      <span className="absolute right-1 bottom-2 hidden md:block">
                        <Genres data={item.genre_ids.slice(0, 2)} />
                      </span>
                      <span className="absolute right-1  top-1 md:hidden">
                        <Genres data={item.genre_ids.slice(0, 1)} />
                      </span>
                    </div>
                    <div className="text-white gap-1 flex flex-col">
                      <span className="text-sm md:text-[16px] text-ellipsis overflow-hidden whitespace-nowrap">
                        {item.title || item.name}
                      </span>
                      <span className="text-xs md:text-sm opacity-50">
                        {dayjs(item.release_date).format("MMM DD, YYYY")}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex gap-4 py-10 overflow-y-hidden">
              <CarouselSkeleton />
              <CarouselSkeleton />
              <CarouselSkeleton />
              <CarouselSkeleton />
              <CarouselSkeleton />
              <CarouselSkeleton />
              <CarouselSkeleton />
            </div>
          )}
        </>
      </ContentWrapper>
    </div>
  );
}
