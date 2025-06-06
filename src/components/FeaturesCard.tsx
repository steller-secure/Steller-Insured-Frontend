"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { cardVariants, tooltipVariants } from "../styles/variants";
import { FeatureCardProps } from "../types/features";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, {
    once: true,
    amount: 0.3,
    margin: "0px 0px -100px 0px",
  });

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      const card = cardRef.current;
      if (card) {
        card.focus();
      }
    }
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover="hover"
      whileTap="tap"
      className="h-full"
    >
      <TooltipProvider>
        <Tooltip delayDuration={300}>
          <TooltipTrigger asChild>
            <motion.div
              className="card-gradient border border-[#94BCCA] rounded-[10px] p-6 h-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#22BBF9] focus:ring-opacity-50 relative overflow-hidden"
              tabIndex={0}
              role="article"
              aria-label={`Feature: ${feature.title}`}
              onKeyDown={handleKeyDown}
              whileHover={{
                borderColor: "#22BBF9",
                boxShadow: "0 25px 50px -12px rgba(34, 187, 249, 0.2)",
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#22BBF9]/5 to-purple-600/5 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="relative z-10">
                <div className="flex flex-col gap-3 mb-3">
                  <span>{feature.icon}</span>
                  <h3 className="text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          </TooltipTrigger>

          <TooltipContent
            side="top"
            className="max-w-sm p-0 bg-transparent border-0"
            sideOffset={15}
          >
            <motion.div
              variants={tooltipVariants}
              initial="hidden"
              animate="visible"
              className="bg-gray-900/95 backdrop-blur-sm border border-[#94BCCA] rounded-[10px] py-4 px-6 shadow-2xl"
            >
              <div className="space-y-3">
                <motion.div
                  className="flex items-center gap-2 text-[#22BBF9] text-base font-semibold"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {feature.icon}
                  <span>{feature.title}</span>
                </motion.div>

                <div className="space-y-3 text-sm text-gray-300">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <strong className="text-white">Benefits:</strong>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      {feature.benefits.map((benefit, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + idx * 0.1 }}
                          className="text-xs leading-relaxed"
                        >
                          {benefit}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </motion.div>
  );
};

export default FeatureCard;
