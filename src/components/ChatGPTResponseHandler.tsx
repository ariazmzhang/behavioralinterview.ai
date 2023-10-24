import React, { useState } from 'react';
import {CTA} from '../components';
import {
  BriefcaseIcon,
} from "@heroicons/react/24/outline";

// ChatGPTResponseHandler component
function ChatGPTResponseHandler({ chatGPTPrompt, onGeneratedAnswer }: { chatGPTPrompt: string; onGeneratedAnswer: (prompt: string) => void;  }) {
    type ApiResponse = {
        message: string;
      };
  const [apiResponse, setApiResponse] = useState<null | ApiResponse>(null);
  const [isCompleted, setIsCompleted] = useState(false);

  const generateAnswer = async () => {
    try {
      // Send the ChatGPT prompt to the chatGPT API for processing
      const response = await fetch("/api/processCV", {
        method: "POST",
        body: JSON.stringify({ prompt: chatGPTPrompt }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Receive the response from the chatGPT API
      const data = await response.json();
      console.log("Data from the API: ", data.content);

      setApiResponse(data.content);
      onGeneratedAnswer(data.content);
      setIsCompleted(true);

    } catch (error) {
      console.error("Error processing CV: ", error);
    } 
  };

  return (
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
            <CTA className={`mt-3 font-bold ${isCompleted ? 'bg-green-200' : 'bg-white'}`} onClick={() => generateAnswer()}>Generate</CTA>
          </li>
  );
}

export default ChatGPTResponseHandler;
