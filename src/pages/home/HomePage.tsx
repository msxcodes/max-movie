"use client";
import { fetchApiData } from "@/utils/apis/fetchApi";
import { getApiConfiguration } from "@/utils/store/slices/homeSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeroBanner from "./Hero/HeroBanner";

export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    getApiConfig();
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

  return (
    <div className="">
      <HeroBanner />
    </div>
  );
}
