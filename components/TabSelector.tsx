"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const tabs = ["Most popular", "Hot selling", "Best reviewed"];

interface TabProps {
  text: string;
  selected: boolean;
  setSelected: (text: string) => void;
}

const Tab = ({ text, selected, setSelected }: TabProps) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected
          ? "font-bold"
          : "dark:hover:text-gray-100 border border-[#ddd] font-normal"
      } relative text-[#222] rounded-[100px] px-6 py-1 text-sm transition-colors min-w-[120px] h-[40px]`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="tab"
          transition={{ type: "spring", duration: 0.4 }}
          className="absolute inset-0 z-0 rounded-[100px] bg-white border-2 border-[#222]"
        ></motion.span>
      )}
    </button>
  );
};

const TabSelector = () => {
  const [selected, setSelected] = useState<string>(tabs[0]);
  return (
    <div className="mb-8 flex flex-wrap items-center gap-6 px-5 xl:px-0">
      {tabs.map((tab, index) => (
        <Tab
          text={tab}
          selected={selected === tab}
          setSelected={setSelected}
          key={tab}
        />
      ))}
    </div>
  );
};

export default TabSelector;
