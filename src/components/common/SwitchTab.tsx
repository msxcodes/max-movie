import React, { useState } from "react";

interface SwitchTabProps {
  item: string[];
  onTabChange: (value: string, index: number) => void;
}

export default function SwitchTab({ item, onTabChange }: SwitchTabProps) {
  const [position, setPosition] = useState<number>(0);
  const [selected, setSelected] = useState<number>(0);
  const onTabClick = (value: string, index: number) => {
    setPosition(index * 100);
    setSelected(index);
    onTabChange(value, index);
  };

  return (
    <div className=" h-[34px] rounded-3xl bg-white p-0.5">
      <div className="flex items-center h-[30px] relative">
        {item.map((item, index) => (
          <span
            onClick={() => onTabClick(item, index)}
            className={`${
              selected === index && "text-white"
            } font-medium w-[100px] cursor-pointer h-full z-10 flex items-center justify-center transition-all duration-300`}
            key={index}
          >
            {item}
          </span>
        ))}
        <span
          className="h-[30px] w-[100px] rounded-2xl absolute  bg-gradient-to-tr from-blue-600 to-purple-400 transition-all duration-300 "
          style={{ left: position }}
        ></span>
      </div>
    </div>
  );
}
