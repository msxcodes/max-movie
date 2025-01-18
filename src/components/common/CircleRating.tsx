import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function CircleRating({
  rating,
  className,
}: {
  rating: number;
  className?: boolean;
}) {
  return (
    <CircularProgressbar
      value={rating}
      maxValue={10}
      text={rating?.toString()}
      className="text-[34px]"
      styles={buildStyles({
        textColor: `${className ? "white" : "black"}`,
        textSize: "30px",
        pathColor: `${rating >= 7 ? "green" : rating < 7 && rating > 4 ? "orange" : "red"
          }`,
        trailColor: `${!className ? "white" : "black"}`,
        backgroundColor: "white",
      })}
    />
  );
}
