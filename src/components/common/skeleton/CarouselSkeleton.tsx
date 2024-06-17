import React from "react";
import { Card, Skeleton } from "@nextui-org/react";

export default function App() {
  return (
    <Card
      className="w-[200px] space-y-5 p-4 bg-[var(--black3)] flex-shrink-0"
      radius="lg"
    >
      <Skeleton
        disableAnimation={true}
        className="rounded-lg bg-[var(--black2)]"
      >
        <div className="h-24 rounded-lg bg-default-300"></div>
      </Skeleton>
      <div className="space-y-3">
        <Skeleton
          disableAnimation={true}
          className="w-3/5 rounded-lg bg-[var(--black2)]"
        >
          <div className="h-3 w-3/5 rounded-lg bg-[var(--black2)] bg-default-200"></div>
        </Skeleton>
        <Skeleton
          disableAnimation={true}
          className="w-4/5 rounded-l bg-[var(--black2)]"
        >
          <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton
          disableAnimation={true}
          className="w-2/5 rounded-lg bg-[var(--black2)]"
        >
          <div className="h-3 w-2/5 rounded-lg bg-default-300 "></div>
        </Skeleton>
      </div>
    </Card>
  );
}
