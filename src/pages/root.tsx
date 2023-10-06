import Card from "@/components/Card";
import React from "react";

import { PDFViewer } from "@react-pdf/renderer";
// import CVDocument from "@/components/pages/cv/Document";
import Link from "@/components/Link";

export default function CVPage() {
  return (
    <div className="w-full h-full flex flex-row space-x-8">
      <div className="grow shrink-0 flex flex-col space-y-4">
        <Card className="px-4 py-2 text-xs rounded-lg flex flex-row space-x-1 items-center">
          <Link gradient={true} underline={false} className="text-slate-900">
            Home
          </Link>
          <span className="text-gray-900/50">/</span>
          <Link gradient={true} underline={false} className="text-slate-900">
            Build your CV
          </Link>
        </Card>
        <Card className="py-8 px-8 space-y-4">
          <div className="text-slate-800 text-sm">Follow the instruction and talk to Copilot to build up your CV.</div>
        </Card>
        <Card className="h-full py-8 px-8 space-y-4">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Hi, I&apos;m{" "}
            <span
              contentEditable
              className="animate-text text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500"
            >
              Jocelyn Mai
            </span>
          </h1>
          <Card className="text-slate-900">I worked at ___ as ___ from ___ to ___.</Card>
        </Card>
      </div>
      <Card className="grow px-8 py-8 h-fit">
        {/* <div className="aspect-w-1000 aspect-h-1294 aspect-none"> */}
        {/* <PDFViewer showToolbar={false} className="aspect-LETTER" width="100%">
          <CVDocument />
        </PDFViewer> */}
        {/* </div> */}
      </Card>
    </div>
  );
}
