import React from "react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Features", href: "#" },
  { name: "Community", href: "#" },
  { name: "Pricing", href: "#" },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white w-screen h-screen flex flex-row justify-center items-center">
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-white/60 hover:ring-white">
              Check out our roadmap.{" "}
              <a href="#" className="font-semibold text-indigo-500/50">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Beh
              <span className="animate-text text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                a
              </span>
              vioral Interv
              <span className="animate-text text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                i
              </span>
              ew
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral-50">
              Nail behavioral interviews with AI powered Story Toolbox.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/build"
                className="rounded-md animate-text  bg-gradient-to-r from-purple-400 to-blue-500 px-8 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Start Your Journey
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
