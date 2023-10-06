import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Hero, Header, MobileMenu,CTA, Card,ChatMessageActionButton } from '../components';
import React, { useState } from 'react';

const navigation = [
  { name: "Blog", href: "/blog" },
  { name: "Page", href: "/page" },
  { name: "root", href: "/root" },
];

export default function Blog() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  <Header setMobileMenuOpen={setMobileMenuOpen} />

  return (
    <div className="bg-white w-screen h-screen flex flex-row justify-center items-center">
     <Card className="py-8 px-8 space-y-4">
        <div className="text-slate-800 text-sm">Follow the instruction and talk to Copilot to build up your CV.</div>
      </Card>
      <div className="z-50">

     
      <ChatMessageActionButton position="top" onClick={() => alert('Top button clicked!')}>
        Top Button
      </ChatMessageActionButton>

      <ChatMessageActionButton position="middle">
        Middle Button
      </ChatMessageActionButton>

      <ChatMessageActionButton position="bottom" disabled>
        Bottom Button (Disabled)
      </ChatMessageActionButton>
     

      </div>
      
    </div>
  );
}
