"use client";
import CTA from "@/components/CTA";
import Card from "@/components/Card";
import Link from "@/components/Link";
import {
  PresentationChartBarIcon,
  ChatBubbleBottomCenterTextIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";

import React from "react";

export default function App() {
  return (
    <div className="flex flex-col lg:flex-row flex-grow bg-gray-100 p-10 mt-20">

    <Card className="flex flex-grow flex-col lg:max-w-xs p-8 z-50">
      <div className="flex flex-col space-y-8">
        <ol className="relative ml-4 text-gray-800 font-light">


          {/* -----------------------------1. upload your CV------------------------------ */}
          <li className="relative pb-10 pl-8 border-l border-gray-900/20 dark:border-gray-700 dark:text-gray-400">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>

            <h3 className="font-base leading-tight">Upload your CV</h3>
            <p className="text-sm">
              Please upload your cv so we can know you better
            </p>
            
            <div className="relative mt-4">
              <input 
                type="file" 
                accept=".pdf,.doc,.docx" 
                id="fileUpload" 
                className="absolute opacity-0 w-full h-full cursor-pointer"
                onChange={e => {
                  const fileName = e.target.files[0]?.name;
                  if (fileName) {
                    document.getElementById('fileLabel').innerText = `Selected: ${fileName}`;
                  }
                }}
              />
              <label 
                htmlFor="fileUpload" 
                id="fileLabel"
              >
                <CTA className="text-green-400 font-bold bg-green-200">
                  Upload
                </CTA>
              </label>
            </div>

            
          </li>


          {/* -----------------------------2. build your CV(let chatgpt ask questions about cv to know you better)------------------------------ */}
          <li className="relative pb-10 pl-8 border-l border-gray-900/20 dark:border-gray-700 dark:text-gray-400">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>

            <h3 className="font-base leading-tight">Build your CV</h3>
            <p className="text-sm">
              The one place for all your professional experience
            </p>
            <CTA className="mt-3 text-green-400 font-bold bg-green-200">Revise</CTA>
          </li>


          {/* -----------------------------3. Assemble your Story Toolbox------------------------------ */}
          <li className="relative pb-10 pl-8 border-l border-gray-900/20 dark:border-gray-700 dark:text-gray-400">
            <span className="absolute top-0 flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full bottom-[0.2rem] -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
              <BriefcaseIcon
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
              />
            </span>
            <h3 className="font-base leading-tight">
              Assemble your Story Toolbox
            </h3>
            <p className="text-sm">The ultimate interview prep</p>
            <CTA className="mt-3">Continue</CTA>
          </li>
          <li className="relative pb-10 pl-8 border-l border-gray-900/20 dark:border-gray-700 dark:text-gray-400">
            <span className="absolute top-0 flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full bottom-[0.2rem] -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
              <PresentationChartBarIcon
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
              />
            </span>
            <h3 className="font-base leading-tight">Interviewing tomorrow?</h3>
            <p className="text-sm">
              Let&apos;s get you the last push towards your offer letter
            </p>
            <CTA className="mt-3">Let&apos;s do it</CTA>
          </li>
          <li className="relative pl-8">
            <span className="absolute top-0 flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full bottom-[0.2rem] -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
              <ChatBubbleBottomCenterTextIcon
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
              />
            </span>
            <h3 className="font-base leading-tight">
              How did the last interview go?
            </h3>
            <p className="text-sm">
              Take some notes and share with the community
            </p>
            <CTA className="mt-4">Sure</CTA>
          </li>
        </ol>
      </div>
      
    </Card>

    <Card className="flex flex-grow flex-col lg:w-1/2 p-10 ml-10  z-50">
    <div className="text-start mb-2">
            <h1 className="text-xl font-bold tracking-tight text-black sm:text-xl">
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
          </div>
        <div className="text-slate-800 text-sm">Follow the instruction and talk to Copilot to assemble your story toolbox.</div>
      </Card>
    </div>
  );
}
