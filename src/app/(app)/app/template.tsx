"use client";
import React from "react";
import GradientBackground from "@/components/GradientBackground";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [menu, setMenu] = React.useState(false);
  const [inputFocused, setInputFocused] = React.useState(false);

  React.useEffect(() => {
    document.addEventListener("keyup", (e) => {
      if (e.code === "Slash") {
        const input = document.getElementById("copilot-input");
        if (document.activeElement !== input && input) {
          input.focus();
        }
      }

      if (e.code === "Escape") {
        const input = document.getElementById("copilot-input");
        if (document.activeElement === input && input) {
          input.blur();
        }
      }
    });
  }, []);

  return (
    <>
    <GradientBackground/>
      <div className="relative w-full h-full flex flex-col md:flex-row px-8 pt-8 pb-16 md:pt-16">
        <div className="flex relative rounded-lg w-full flex-col md:w-40 md:h-full md:mr-16 md:space-y-8">
          <Card className="hidden md:flex flex-col  py-8 px-4 space-y-4">
            <img src="/logo.png" className="w-10 h-10" />
            <div className="relative w-fit text-slate-900 text-xl font-extralight space-y-2">
              <span>Hi, Jocelyn</span>
              <div className="absolute h-1 left-0 right-8 bg-gradient-to-r from-purple-400 to-blue-500" />
            </div>
          </Card>
          <div className="relative flex md:hidden flex-row  py-4 px-2 justify-between">
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-row justify-center items-center">
              <Bars3Icon
                className="h-6 w-6"
                aria-hidden="true"
                onClick={() => setMenu(true)}
              />
            </div>
            <div className="relative w-fit text-slate-900 text-xl font-extralight space-y-2">
              <span>Hi, Jocelyn</span>
              <div className="absolute h-1 left-0 right-8 bg-gradient-to-r from-purple-400 to-blue-500" />
            </div>
            <img src="/logo.png" className="w-10 h-10" />
          </div>
          <Card
            className={`${
              menu ? "flex" : "hidden"
            } w-[60vw] h-[72vh] absolute z-50 top-[10vh] left-16 right-16 py-8 px-4 flex-col space-y-3 md:flex md:static md:z-0 md:top-[unset] md:right-[unset] md:w-[unset] md:h-[unset] md:grow md:py-8 md:px-4 md:space-y-4 md:mt-16`}
          >
            <div className="text-slate-600 text-center font-light text-lg">
              Menu
            </div>
            <div className="flex flex-col">
              <Button active={pathname === "/app/cv"}>CV</Button>
              <div className="text-xs text-slate-800/50 pl-4 pr-4">
                A nice CV is the first step to your job offer
              </div>
            </div>
            <div className="flex flex-col">
              <Button active={pathname === "/app/story-toolbox"}>
                Story Toolbox
              </Button>
              <div className="text-xs text-slate-800/50 pl-4 pr-4">
                Get yourself PAR-pared for the interviews
              </div>
            </div>
            <div className="flex flex-col">
              <Button active={pathname === "/app/final-push"}>
                Final Push
              </Button>
              <div className="text-xs text-slate-800/50 pl-4 pr-4">
                Are you ready? Here&apos;s some more tips
              </div>
            </div>
            <div className="flex flex-col">
              <Button active={pathname === "/app/community"}>
                Community
              </Button>
              <div className="text-xs text-slate-800/50 pl-4 pr-4">
                Interviewees help interviewees!
              </div>
            </div>
            <div className="grow" />
            <Button className="font-light">Account</Button>
            <Button className="font-light">Feedback</Button>
            <div className="block md:hidden absolute bottom-3 left-0 right-0 text-xs text-slate-400 text-center">
              v0.0.1
            </div>
          </Card>
          <div className="hidden md:block absolute bottom-3 left-0 right-0 text-xs text-slate-400 text-center">
            v0.0.1
          </div>
        </div>
        <Card className="mt-8 md:mt-[unset] grow h-full flex flex-col space-y-8 overflow-y-auto">
          {children}
        </Card>
        {inputFocused && (
          <div className="absolute z-40 left-6 right-6 top-0 h-[calc(100vh-8rem)] md:left-[20vw] md:right-36 md:h-[calc(100vh-9rem)] overflow-y-auto">
            <div className="flex flex-col justify-end items-end space-y-3 min-h-[100%]">
              <div className="bg-white/80 rounded-full text-slate-600 px-4 py-2">
                What is this?
              </div>
              <div className="bg-white/80 rounded-full text-slate-600 px-4 py-2">
                Well, it generates these chat animations for you!{" "}
              </div>
              <div className="bg-white/80 rounded-full text-slate-600 px-4 py-2">
                🤯🤯
              </div>
              <div className="bg-white/80 rounded-full text-slate-600 px-4 py-2">
                Oh..so it&apos;s like we&apos;re actually talking!
              </div>
              <div className="bg-white/80 rounded-full text-slate-600 px-4 py-2">
                Good for memes and marketing materials
              </div>
              <div className="bg-white/80 rounded-full text-slate-600 px-4 py-2">
                Yep you can generate videos to edit it on veed.io or just
                download it as a GIF! 🤣
              </div>
              <div className="bg-white/80 rounded-full text-slate-600 px-4 py-2">
                Amazing, will use them!
              </div>
            </div>
          </div>
        )}
        <div className="absolute z-40 left-6 right-6 bottom-8 md:left-[20vw] md:right-12 md:bottom-12 flex flex-row">
          <Card
            className={`h-16 grow flex flex-row justify-center items-center px-4 md:px-8 py-4 ${
              inputFocused ? "bg-white/80" : "bg-white/30"
            }`}
          >
            <input
              id="copilot-input"
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
              className="w-full border-transparent focus:border-transparent focus:ring-0 focus:outline-none active:border-transparent active:ring-0 bg-transparent caret-purple-400 animate-text text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500"
              placeholder={
                inputFocused
                  ? "Press Esc to exit Copilot mode"
                  : "Press / and speak with Copilot"
              }
            />
          </Card>
          <img
            src="/assets/robot.png"
            className="w-16 h-16 cursor-pointer shrink-0 ml-8"
          />
        </div>
        {menu && (
          <div
            className="absolute z-30 left-0 right-0 top-0 bottom-0 bg-black/10 backdrop-blur-[1px] flex flex-row justify-center items-center"
            onClick={() => setMenu(false)}
          ></div>
        )}
        {inputFocused && (
          <div
            className="absolute z-30 left-0 right-0 top-0 bottom-0 bg-black/10 backdrop-blur-[1px] flex flex-row justify-center items-center"
            onClick={() => setInputFocused(false)}
          ></div>
        )}
      </div>
    </>
  );
}
