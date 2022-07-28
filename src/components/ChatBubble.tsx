import Image from "next/image";
import React from "react";
import chatImg from "../../public/images/chatImg.png";
import { IChatBubble } from "../utils/interfaces";

const ChatBubble: React.FC<IChatBubble> = ({ text }) => {
  return (
    <div className="flex space-x-2 items-center mb-1">
      <div className="w-9">
        <Image src={chatImg} alt="" />
      </div>
      <div>
        <div className="bg-primary py-1 px-4 text-lg rounded-lg inline-block relative text-black font-bold">
          <p>{text}</p>
          <div className="chat-arrow absolute bottom-0 -left-2"></div>
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
