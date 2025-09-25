"use client";

import { useActionState } from "react";
import { signup } from "@/src/lib/actions/auth";
import Image from "next/image";
// import { Wallet } from "lucide-react";
import { FormState } from "@/src/lib/definitions";

export default function SignInForm() {
  const [state, formAction, pending] = useActionState(
    async (_prevState: FormState, formData: FormData) => {
      return await signup(_prevState, formData);
    },
    undefined
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A0F1F] text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl rounded-xl gap-0">
        {/* Left Form Section */}
        <div
          className="bg-[#0B0D1A] p-9 md:p-12 relative rounded-l-xl"
          style={{
            boxShadow:
              "0 0 40px rgba(34, 187, 249, 0.8), 0 0 80px rgba(34, 187, 249, 0.4)",
          }}
        >
          <div className="absolute inset-0 border-2 border-blue-500 opacity-10 rounded-xl pointer-events-none"></div>

          <h1 className="text-[32px] font-bold">Stark Insured</h1>
          <p className="text-[24px] mt-1 font-semibold">Join Stark Insured</p>
          <p className="text-lg text-[#A79E9E] mt-2">
            Create your account and start protecting your digital assets today
          </p>

          <form action={formAction} className="space-y-5 mt-8">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-[#A79E9E] font-bold mb-3.5"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your@email.com"
                className="w-full px-4 py-4 rounded-md bg-[#101935] border border-[#A79E9E] text-[#8E8585] placeholder:text-[#8E8585] text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400 font-bold"
              />
              {state?.errors?.email && (
                <p className="text-sm text-red-500 mt-1">
                  {state.errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-bold mb-3.5 text-[#A79E9E]"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your Password"
                className="w-full px-4 py-4 rounded-md bg-[#101935] border border-[#A79E9E] text-[#8E8585] placeholder:text-[#8E8585] text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400 font-bold"
              />
              {state?.errors?.password &&
                Array.isArray(state.errors.password) && (
                  <ul className="mt-1 text-sm text-red-500 list-disc list-inside space-y-1">
                    {state.errors.password.map((err) => (
                      <li key={err}>{err}</li>
                    ))}
                  </ul>
                )}
            </div>
            <div className="pb-5">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-bold mb-3.5 text-[#A79E9E]"
              >
                Confirm your Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm your Password"
                className="w-full px-4 py-4 rounded-md bg-[#101935] border border-[#A79E9E] text-[#8E8585] placeholder:text-[#8E8585] text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400 font-bold"
              />
              {state?.errors?.confirmPassword && (
                <p className="text-sm text-red-500 mt-1">
                  {state.errors.confirmPassword}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={pending}
              className="w-full py-2 text-darkBlue bg-lightBlue rounded-md flex items-center justify-center gap-2 hover:bg-[#34a2dc] transition disabled:opacity-50 font-bold mt-4"
            >
              {pending ? (
                <>
                  <svg
                    className="w-5 h-5 animate-spin text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                  Signing up...
                </>
              ) : (
                "Sign up"
              )}
            </button>
          </form>

          {/* Wallet Sign-in Button */}
          {/* <div className="mt-6">
            <button
              type="button"
              onClick={() => {}}
              className="w-full py-4 bg-[#111] text-white border border-gray-700 rounded-md font-bold hover:bg-[#222] transition flex justify-center items-center gap-2"
            >
              <Wallet className="w-4 h-4" />
              Sign up with Wallet
            </button>
          </div> */}

          <p className="text-sm text-center mt-6 text-[#A79E9E] font-bold">
            Already have an account?{" "}
            <a
              href="/sign-in"
              className="text-[#37B0E0] hover:underline font-bold"
            >
              Sign in
            </a>
          </p>
        </div>

        {/* Right Image Panel */}
        <div className="bg-[#111827] relative hidden md:flex items-center justify-center rounded-r-xl">
          <div className="absolute inset-0 bg-[#00000033] pointer-events-none"></div>
          <Image
            src="/lovable-uploads/60c0f559176c1d66e933e10caf41e25aebedcfab.jpg"
            alt="Crypto coins"
            width={512}
            height={512}
            className="h-full w-auto object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
