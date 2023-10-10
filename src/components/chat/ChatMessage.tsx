// import React from "react";
// import { ChatContext, Message, MessageAction, focusInput } from "./ChatContext";
// import { twMerge } from "tailwind-merge";
// import ChatSystemActionButton from "./ChatSystemActionButton";
// import ChatMessageActionButton from "./ChatMessageActionButton";
// import { AuthContext } from "@/common/auth";

// interface ChatMessageProps {
//   message: Message;
// }

// const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
//   const {user} = React.useContext(AuthContext);
//   const disabled = !user;
//   const {
//     sendMessage,
//     setInputValue,
//   } = React.useContext(ChatContext);

//   const handleOnClick = React.useCallback((action: MessageAction) => {
//     if (action.type === "message") {
//       sendMessage(action.content);
//       return;
//     }

//     if (action.type === "template") {
//       setInputValue(action.content);
//       focusInput();
//       return;
//     }
//   }, [sendMessage, setInputValue])

//   if (message.role === "system") {
//     return (
//       <>
//         <div className="chat-message__system">Start with</div>
//         {message.actions && message.actions.length > 0 && (
//           <div className="flex flex-col w-full space-y-2">
//             {message.actions.map((action, idx) => (
//               <ChatSystemActionButton key={idx} onClick={() => handleOnClick(action)} disabled={disabled}>
//                 {action.title}
//               </ChatSystemActionButton>
//             ))}
//           </div>
//         )}
//       </>
//     );
//   }

//   if (message.role === "bot") {
//     return (
//       <div key={message.id} className="inline-block">
//         <div
//           className={twMerge(
//             "chat-message__bot shadow-md",
//             message.actions && message.actions.length > 0
//               ? "chat-message__bot--with-actions"
//               : ""
//           )}
//         >
//           {message.content}
//         </div>
//         {message.actions && message.actions.length > 0 && (
//           <div className="flex max-w-[90%] md:max-w-[60%] shadow-md rounded-br-lg">
//             <div className="w-0 grow flex flex-col">
//               {message.actions.map((action, idx) => (
//                 <ChatMessageActionButton
//                   key={idx}
//                   position={
//                     idx === message.actions!.length - 1 ? "bottom" : "middle"
//                   }
//                   onClick={() => handleOnClick(action)}
//                   disabled={disabled}
//                 >
//                   {action.title}
//                 </ChatMessageActionButton>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   }

//   return <div className={twMerge("chat-message__user")}>{message.content}</div>;
// };

// export default ChatMessage;
