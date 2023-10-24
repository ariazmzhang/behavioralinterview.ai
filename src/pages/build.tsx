import {CTA, Card, RespondCard, CVHandleParent} from '../components';
import {
  PresentationChartBarIcon,
  ChatBubbleBottomCenterTextIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";

import React, {useState} from "react";

export default function Build() {
  type ApiResponse = {
    message: string;
  };
  
  const [chatGPTAnswer, setChatGPTAnswer] = useState('');
  // Define a callback function to update chatGPTAnswer
  const updateChatGPTAnswer = (answer:string) => {
    setChatGPTAnswer(answer);
  };
  console.log("this is the chatGPTAnswer: ", chatGPTAnswer);
 
  return (
    <div className="flex flex-col lg:flex-row flex-grow bg-gray-100 p-10 mt-20">

    <Card className="flex flex-grow flex-col lg:max-w-xs p-8 z-50">
      <div className="flex flex-col space-y-8">
        <ol className="relative ml-4 text-gray-800 font-light">
          <CVHandleParent updateAnswer={updateChatGPTAnswer}/>

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

      <div className="flex flex-col w-full">
        <RespondCard openAIResponse={chatGPTAnswer}/>
      </div>

    </div>
  );
}
