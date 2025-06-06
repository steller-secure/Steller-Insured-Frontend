"use client";

import { motion } from "framer-motion";
import React from "react";
import { FilterCategory } from "../types/features";

interface FilterControlsProps {
  categories: FilterCategory[];
  activeFilter: FilterCategory;
  onFilterChange: (filter: FilterCategory) => void;
  onKeyDown: (event: React.KeyboardEvent, action: () => void) => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({
  categories,
  activeFilter,
  onFilterChange,
  onKeyDown,
}) => {
  return (
    <motion.div
      className="flex justify-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <div className="flex flex-wrap gap-3 max-w-4xl justify-center">
        {categories.map((category, index) => (
          <motion.button
            key={category}
            onClick={() => onFilterChange(category)}
            onKeyDown={(e) => onKeyDown(e, () => onFilterChange(category))}
            className={`
              relative px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-[#22BBF9] focus:ring-opacity-50
              ${
                activeFilter === category
                  ? "text-white shadow-lg"
                  : "text-gray-300 bg-gray-800/50 border border-gray-700 hover:border-[#22BBF9]/50 hover:text-[#22BBF9] hover:bg-[#22BBF9]/5"
              }
            `}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{ scale: 0.95 }}
          >
            {activeFilter === category && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#22BBF9] to-[#1DA1DB] rounded-xl"
                layoutId="activeFilter"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}

            <span className="relative z-10 capitalize">
              {category === "all" ? "All Features" : category}
            </span>

            {activeFilter === category && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#22BBF9] to-[#1DA1DB] rounded-xl blur-md opacity-50 -z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default FilterControls;
