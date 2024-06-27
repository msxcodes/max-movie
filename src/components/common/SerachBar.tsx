"use client";
import useFetch from "@/hooks/useFetch";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SerachBar({ hideBtn }: { hideBtn?: boolean }) {
  const route = useRouter();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const inputHandler = (event: any) => {
    if (event.key === "Enter" && event.key.length > 0) {
      route.push(`search/${searchQuery}`);
    }
  };

  const { data, loading } = useFetch(`/search/movie?query=IF`);

  return (
    <>
      <input
        className="w-[calc(100%-100px)] text-black h-full border-none outline-none  rounded-l-3xl px-4 text-sm"
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={inputHandler}
        type=""
        placeholder="Search for a movie or tv show...."
      />
      {hideBtn || (
        <button
          onClick={inputHandler}
          className="w-[100px] cursor-pointer border-none outline-none bg-gradient-to-r from-blue-600 to-purple-400 h-full rounded-r-3xl "
        >
          Search
        </button>
      )}
    </>
  );
}
