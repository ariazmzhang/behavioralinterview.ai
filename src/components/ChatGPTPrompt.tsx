// 2. based on the text, generate customized prompt
import React, { useState }from 'react';
import {CTA} from '../components';

function ChatGPTPrompt({ textContent, onGeneratedPrompt }: { textContent: string; onGeneratedPrompt: (prompt: string) => void; }) {
    const [chatGPTPrompt, setChatGPTPrompt] = useState("");
    const [isCompleted, setIsCompleted] = useState(false);

    const generatePrompt = (textContent:string) => {
        const prompt = `Here is the resume of a candidates who is looking for a job in amazon, 
        please generate 10 behavioral questions along with the answers based on the resume: ${textContent}`;
        setIsCompleted(true);

        // setChatGPTPrompt(prompt);
        // Call the callback to send the generated prompt to the parent component
        onGeneratedPrompt(prompt);
        
    };

  return (
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
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        ></path>
      </svg>
    </span>

    <h3 className="font-base leading-tight">Nail the Behavioural Qs</h3>
    <p className="text-sm">
      The one place for all your professional experience
    </p>
    <CTA className={`mt-3 ${
          isCompleted ? 'bg-green-200' : 'bg-white'
        } font-bold`} onClick={() => generatePrompt(textContent)}>Prompt it</CTA>
  </li>
  );
}

export default ChatGPTPrompt;
