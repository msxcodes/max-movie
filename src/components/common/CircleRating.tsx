import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function CircleRating({ rating }: { rating: number }) {
  return (
    <div className="bg-white font-semibold rounded-full size-12  p-0.5 ">
      <CircularProgressbar
        value={rating}
        maxValue={10}
        text={rating.toString()}
        className="text-[34px]"
        styles={buildStyles({
          textColor: "black",
          textSize: "30px",
          pathColor: `${
            rating >= 7 ? "green" : rating < 7 && rating > 4 ? "orange" : "red"
          }`,
          trailColor: "white",
          backgroundColor: "white",
        })}
      />
    </div>
  );
}
