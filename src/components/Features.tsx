"use client";

import { motion } from "framer-motion";
import React, { useCallback, useEffect, useState } from "react";
import { featuresData } from "../data/features";
import { categories, Feature, FilterCategory } from "../types/features";
import FeaturesGrid from "./FeaturesGrid";
import FilterControls from "./FilterControls";

const Features: React.FC = () => {
  const [filteredFeatures, setFilteredFeatures] = useState<Feature[]>([]);
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredFeatures(featuresData);
    } else {
      setFilteredFeatures(
        featuresData.filter((feature) => feature.category === activeFilter)
      );
    }
  }, [activeFilter]);

  const handleFilterChange = useCallback((filter: FilterCategory) => {
    setActiveFilter(filter);
  }, []);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent, action: () => void) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        action();
      }
    },
    []
  );

  return (
    <section
      className="py-20 bg-darkBlue relative overflow-hidden"
      id="features"
      aria-label="Platform Features"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 heading-gradient"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Key Features
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Stark Insured leverages blockchain technology to provide innovative
            insurance solutions that are transparent, efficient, and
            user-centric.
          </motion.p>
        </motion.div>

        <FilterControls
          categories={categories}
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
          onKeyDown={handleKeyDown}
        />

        <FeaturesGrid
          filteredFeatures={filteredFeatures}
          activeFilter={activeFilter}
        />
      </div>

      {/* Background Effects */}
      <motion.div
        className="absolute top-40 left-10 w-72 h-72 bg-lightBlue opacity-5 rounded-full filter blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-purple-600 opacity-5 rounded-full filter blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </section>
  );
};

export default Features;
