"use client";
import Banner from "@/components/Banner";
import Card from "@/components/Card";
import React, { useState } from 'react';
import { Hero, Header, MobileMenu } from '../components';


export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="relative py-8 px-8">
      <a
        className="flex flex-row space-x-8 items-center justify-between"
        href="#"
      >
        <img
          className="h-8 w-8"
          src="/logo.png"
          alt="behavioral-interview.ai logo"
        />
        <span className="font-bold tracking-tight text-gray-900">
          Beh
          <span className="animate-text text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            a
          </span>
          vioral Interv
          <span className="animate-text text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            i
          </span>
          ew
        </span>
      </a>
      <article className="mt-24 text-gray-900">
        <div className="mb-4 flex flex-row space-x-2 md:space-x-4">
          <span className="bg-white/30 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
            Pro Tips
          </span>
          <span className="bg-white/30 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
            Behavioral Interview
          </span>
        </div>
        <div className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Interview Pro Tips: How to nail a behavioral interview
        </div>
        <div className="md:mb-12 mt-6 text-gray-800 text-xs font-medium">
          Kang Cheng • 5 min read
        </div>
        <Banner className="my-8 -mx-8" />
        <div className="flex flex-col md:flex-row-reverse">
          {/* <div className="grow mb-4 -mx-8 md:mx-[unset] md:mb-0 md:px-8 flex flex-row md:flex-col md:space-y-8">
            <img
              className="w-full h-auto md:rounded-lg"
              src="https://i0.wp.com/joinhandshake.com/wp-content/uploads/2021/09/behavioral-interview-tips.png"
            />
          </div> */}
          <div className="grow mb-4 -mx-8 md:mx-[unset] md:mb-0 md:px-8 w-screen overflow-x-auto space-x-4 flex flex-row md:flex-col md:space-x-[unset] md:space-y-8">
            <img
              className="w-4/5 md:w-full h-auto rounded-lg"
              src="https://i0.wp.com/joinhandshake.com/wp-content/uploads/2021/09/behavioral-interview-tips.png"
            />
            <img
              className="w-4/5 md:w-full h-auto rounded-lg"
              src="https://i0.wp.com/joinhandshake.com/wp-content/uploads/2021/09/behavioral-interview-tips.png"
            />
            <img
              className="w-4/5 md:w-full h-auto rounded-lg"
              src="https://i0.wp.com/joinhandshake.com/wp-content/uploads/2021/09/behavioral-interview-tips.png"
            />
            <img
              className="w-4/5 md:w-full h-auto rounded-lg"
              src="https://i0.wp.com/joinhandshake.com/wp-content/uploads/2021/09/behavioral-interview-tips.png"
            />
          </div>
          <Card className="h-fit bg-white/30 px-6 py-6 -mx-4 md-mx-[unset] md:max-w-[50%] shrink-0">
            {/* <h2 className="mb-8 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">How to nail a behavioral interview</h2> */}
            <p className="mb-4">
              Behavioral interviews focus on a candidate’s past experiences to
              assess how they’ve navigated specific situations and utilized
              skills relevant to the position. Rather than asking theoretical
              “How would you handle ___?” questions, your interviewer will focus
              instead on concrete “How did you handle ___?” prompts.{" "}
            </p>
            <ol className="pl-4">
              <li className="mb-4 list-decimal">
                Come prepared with examples of your past experiences. Questions
                asked in behavioral interviews should be based on the core
                competencies for the position, so give the job description a
                close read and think about experiences you have that demonstrate
                your abilities in desired areas.{" "}
              </li>
              <li className="mb-4 list-decimal">
                When answering prompts during your behavioral interview, use the
                STAR (situation, task, action, result) format to effectively
                demonstrate your experience and impact. Here’s how Allstate,
                which hires many students and recent grads on Handshake,
                suggests thinking about the STAR framework:
                <ol className="mt-4 pl-16">
                  <li className="mb-4 list-disc">
                    Situation: “Describe and provide relevant details of your
                    example, explain the context of the situation and why it
                    connects to the question.”
                  </li>
                  <li className="mb-4 list-disc">
                    Task: “Describe your role in the situation. This can help
                    establish the level of responsibility you had in the
                    previous role.”
                  </li>
                  <li className="mb-4 list-disc">
                    Action: “Explain how you addressed the situation and what
                    steps you took to overcome the challenge. A good answer
                    shows how you added value to the situation and made logical
                    decisions.”
                  </li>
                  <li className="mb-4 list-disc">
                    Result: “At the end of your answer, explain the outcome of
                    the situation. A quality answer includes concrete examples
                    and quantifiable achievements, including the direct effects
                    of your efforts in your response.”{" "}
                  </li>
                </ol>
              </li>
              <li className="mb-4 list-decimal">
                Remember the basics. Allstate reminds all of its candidates
                that—especially when interviewing virtually—it’s best practice
                to speak strongly, confidently, and clearly, always remaining
                cognizant of your body language. Just like you wouldn’t want to
                mumble or cross your arms throughout an in-person interview,
                avoid these habits during your video calls!{" "}
              </li>
              <li className="mb-4 list-decimal">
                Don’t hesitate to ask questions. Remember, job interviews are
                for you, too! If you need clarity on a prompt, or have a
                question that you’d love to dig into a bit more with your
                interviewer, be sure to speak up. This process exists for both
                you and your prospective boss to have the chance to assess
                whether you’re a good fit for the position! As a
                thought-starter, check out this list of thoughtful interview
                questions while you’re preparing for your chat with the
                recruiter or hiring manager.{" "}
              </li>
            </ol>
            <p className="mb-4">
              Check out our guide on the types of interviews and how to prepare
              for them.
            </p>
          </Card>
        </div>

        <Banner className="my-8 -mx-8" />
      </article>
      <div className="mb-8 text-gray-900/30 text-sm text-center">
        ©2023 behavioral-interview.ai. All rights reserved.
      </div>
    </div>
  );
}
