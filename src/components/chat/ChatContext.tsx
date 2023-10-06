import { AuthContext } from "@/common/auth";
import React from "react";

export interface MessageAction {
  title: string;
  content: string;
  type: "template" | "message" | "file-upload";
}
export interface Message {
  id: string;
  content: string;
  role: "user" | "bot" | "system";
  actions?: MessageAction[];
  createdAt: Date;
}

interface IChatContext {
  messages: Message[];
  sendMessage: (content: string) => void;
  loading: boolean;
  inputValue: string;
  setInputValue: (val: string) => void;
  inputFocused: boolean;
  setInputFocused: (val: boolean) => void;
}

export const ChatContext = React.createContext<IChatContext>({
  messages: [],
  sendMessage: () => {},
  loading: false,
  inputValue: "",
  setInputValue: () => {},
  inputFocused: false,
  setInputFocused: () => {},
});

export const CHAT_INPUT_ID = "copilot-input";
export const getInput = () =>
  document.getElementById(CHAT_INPUT_ID) as HTMLInputElement | null;
export const getIsInputFocused = () => {
  const input = getInput();
  return document.activeElement === input && input;
};
export const focusInput = () => {
  const input = getInput();
  if (document.activeElement !== input && input) {
    input.focus();
  }
};
export const blurInput = () => {
  const input = getInput();
  if (document.activeElement === input && input) {
    input.blur();
  }
};

export function useChatContext() {
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: "0",
      content: "Start with",
      role: "system",
      createdAt: new Date(),
      actions: [
        {
          type: "template",
          title: "How to answer this question?",
          content: "Hi, could you tell me how to answer this question: ",
        },
        {
          type: "message",
          title: "What's PAR?",
          content: "Hi, could you tell me what's PAR?",
        },
        {
          type: "template",
          title: "Why don't you tell me more about yourself?",
          content: "Sure, my name is ",
        },
      ],
    },
    {
      id: "1",
      content: "How to answer this question: Tell me about yourself?",
      role: "user",
      createdAt: new Date(),
    },
    {
      id: "2",
      content: "Why don't you start with telling me more about yourself?",
      role: "bot",
      createdAt: new Date(),
      actions: [
        {
          title: "Sure, my name is",
          content: "Sure, my name is ",
          type: "template",
        },
        {
          title: "What do you need to know?",
          content: "What do you need to know?",
          type: "message",
        },
      ],
    },
  ]);
  const [loading, setLoading] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const [inputFocused, setInputFocused] = React.useState(false);

  const sendMessage = React.useCallback((content: string) => {
    setLoading(true);
    setMessages((messages) => [
      ...messages,
      {
        id: messages.length.toString(),
        content: content,
        role: "user",
        createdAt: new Date(),
      },
    ]);
    setInputValue("");
    fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ text: content }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMessages((messages) => [
          ...messages,
          {
            id: messages.length.toString(),
            content: data.text,
            role: "bot",
            createdAt: new Date(),
          },
        ]);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  React.useEffect(() => {
    document.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        if (getIsInputFocused()) {
          const content = getInput()?.value;
          if (content) {
            sendMessage(content);
          }
        }
        return;
      }

      if (e.code === "Slash") {
        e.preventDefault();
        focusInput();
        return;
      }

      if (e.code === "Escape") {
        e.preventDefault();
        blurInput();
        return;
      }
    });
  }, []);

  React.useEffect(() => {
    if (loading) {
      blurInput();
      setInputFocused(false);
    }
  }, [loading])

  return {
    messages,
    sendMessage,
    loading,
    inputValue,
    setInputValue,
    inputFocused,
    setInputFocused,
  };
}
