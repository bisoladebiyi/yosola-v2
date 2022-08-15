import Image from "next/image";
import React from "react";
import chatImg from "../../public/images/chatImg.png";
import { IChatBubble } from "../utils/interfaces";

const ChatBubble: React.FC<IChatBubble> = ({ text }) => {
  return (
    <div className="flex justify-between sm:space-x-2 items-center mb-3 sm:mb-1">
      <div className="w-9">
        <Image src={chatImg} alt="" />
      </div>
      <div className="w-10/12 sm:auto ml-1">
        <div className="bg-primary py-1 px-4 text-sm sm:text-lg rounded-lg inline-block relative text-black font-bold">
          <p>{text}</p>
          <div className="chat-arrow absolute bottom-0 -left-2"></div>
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
