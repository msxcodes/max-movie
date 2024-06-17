import React from "react";
import { useSelector } from "react-redux";

export default function Genres({ data }: { data: any }) {
  const { category } = useSelector((state: any) => state.home);
  return (
    <div className="text-white font-medium text-xs flex flex-col items-end">
      {data?.map((item: any, i: number) => {
        if (!category[item]?.name) return;
        return (
          <div
            key={i}
            className="bg-[var(--pink)] w-max px-2 whitespace-nowrap mb-1 rounded-sm"
          >
            {category[item]?.name};
          </div>
        );
      })}
    </div>
  );
}
