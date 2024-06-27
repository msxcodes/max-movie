import ContentWrapper from "@/components/common/ContentWrapper";
import LazyImage from "@/components/common/LazyImg";
import React from "react";
import { useSelector } from "react-redux";
import avatar from "../../../../public/avatar.png";

interface CastSectionProps {
  data: any;
  loading: boolean;
}

export default function CastSection({ data, loading }: CastSectionProps) {
  const { url } = useSelector((state: any) => state.home);
  return (
    <div className="relative mb-[50px] ">
      <ContentWrapper>
        <>
          <h3 className="text-2xl mb-5 text-white">Top Cast</h3>
          <div className="text-white mb-5 flex gap-8 overflow-hidden overflow-x-scroll">
            {data?.map((item: any) => {
              const profileImg =
                item?.profile_path && url.profile != undefined
                  ? url?.profile + item?.profile_path
                  : avatar.src;
              return (
                <div
                  key={item.id}
                  className="flex flex-col w-[350px] items-center gap-4 "
                >
                  <div className="size-[125px] rounded-full overflow-hidden">
                    <LazyImage
                      src={`${profileImg}`}
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="text-white text-center flex flex-col gap-2">
                    <div className="">{item.name}</div>
                    <div className="opacity-50">{item.character}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      </ContentWrapper>
    </div>
  );
}
