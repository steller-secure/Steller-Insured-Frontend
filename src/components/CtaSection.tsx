"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";

type Variant = "A" | "B";

const CTA_VARIANTS = {
  A: {
    title: "Get Insured Now!",
    description: "Protect your future with Stark Insurance.",
    button: "Get Started",
  },
  B: {
    title: "Secure Your Life Today!",
    description: "Affordable plans for everyone.",
    button: "Join Now",
  },
};

export const CtaSection: React.FC = () => {
  const [variant, setVariant] = useState<Variant>("A");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess("Thank you! We'll be in touch soon.");
      setEmail("");
      // TODO: Add analytics tracking here
    }, 1500);
  };

  const handleButtonClick = () => {
    // TODO: Add analytics tracking for button click here
  };

  const toggleVariant = () => {
    setVariant(variant === "A" ? "B" : "A");
  };

  const { title, description, button } = CTA_VARIANTS[variant];

  return (
    <section className="cta-section py-20 bg-darkBlue relative overflow-hidden">
      <div className="cta-content bg-darkBlue relative overflow-hidden p-8 rounded-lg shadow-lg max-w-3xl mx-auto text-center">
        <h2>{title}</h2>
        <p>{description}</p>
        <form className="cta-form" onSubmit={handleSubmit} noValidate>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            disabled={loading}
            onChange={(e) => setEmail(e.target.value)}
            className="cta-input  bg-darkBlue text-white border border-gray-300 rounded-lg p-3 mb-4 w-full"
            autoComplete="email"
            required
          />
          <Button  className="bg-[#22BBF9] text-white hover:bg-[#22BBF9]/90"
            type="submit"
            size="lg"
            disabled={loading || !email}
            onClick={handleButtonClick}
          >
            {loading ? "Submitting..." : button}
          </Button>
        </form>
        {success && <div className="cta-success">{success}</div>}
        {error && <div className="cta-error">{error}</div>}
        <Button className="bg-transparent border border-[#22BBF9]/50 text-[#22BBF9] hover:bg-[#22BBF9]/10"
          variant="secondary"
          size="sm"
          onClick={toggleVariant}
          style={{ marginTop: "1rem" }}
        >
          Switch to Variant {variant === "A" ? "B" : "A"}
        </Button>
      </div>
    </section>
  );
};