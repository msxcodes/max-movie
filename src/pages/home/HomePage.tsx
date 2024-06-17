"use client";
import { fetchApiData } from "@/utils/apis/fetchApi";
import {
  getApiConfiguration,
  getCategory,
} from "@/utils/store/slices/homeSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeroBanner from "./Hero/HeroBanner";
import TrendingSection from "./Trending/TrendingSection";
import PopularSection from "./Popular/PopularSection";
import TopRatedSection from "./TopRated/TopRatedSection";
import { IGenres } from "@/interface/Interface";

export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    getApiConfig();
    genresCall();
  }, []);

  const getApiConfig = () => {
    fetchApiData("/configuration")
      .then((res) => {
        const url = {
          backdrop: res.images.secure_base_url + "original",
          poster: res.images.secure_base_url + "original",
          profile: res.images.secure_base_url + "original",
        };
        dispatch(getApiConfiguration(url));
      })
      .catch((err) => console.log(err));
  };

  const genresCall = async () => {
    let promises: any = [];
    let endPoint = ["tv", "movie"];
    let allGenres: any = {};

    endPoint.forEach((item) => {
      promises.push(fetchApiData(`/genre/${item}/list`));
    });

    const data = await Promise.all(promises);
    data.map(({ genres }: { genres: IGenres[] }) => {
      return genres.map((item) => {
        return (allGenres[item.id] = item);
      });
    });

    dispatch(getCategory(allGenres));
  };

  return (
    <div className="">
      <HeroBanner />
      <TrendingSection />
      <PopularSection />
      <TopRatedSection />
    </div>
  );
}
