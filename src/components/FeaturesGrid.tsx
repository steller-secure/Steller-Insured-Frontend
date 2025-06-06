"use client";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { containerVariants } from "../styles/variants";
import { Feature, FilterCategory } from "../types/features";
import FeatureCard from "./FeaturesCard";

interface FeaturesGridProps {
  filteredFeatures: Feature[];
  activeFilter: FilterCategory;
}

const FeaturesGrid: React.FC<FeaturesGridProps> = ({
  filteredFeatures,
  activeFilter,
}) => {
  return (
    <>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
        role="region"
        aria-label="Features list"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key={activeFilter} // Re-trigger animation on filter change
      >
        <AnimatePresence mode="wait">
          {filteredFeatures.map((feature, index) => (
            <FeatureCard
              key={`${feature.title}-${activeFilter}`}
              feature={feature}
              index={index}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {filteredFeatures.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-400 text-lg">
              No features found for the selected category.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FeaturesGrid;
