import React, { useEffect, useState } from "react";
import imgDesktop from "../../public/images/landingDesktop.png";
import Image from "next/image";
import ChatBubble from "./ChatBubble";
import ContactPopup from "./ContactPopup";
import useClickOut from "../hooks/useClickOut";

const HeroSection = () => {
  const [date, setDate] = useState(new Date());
  const [message, setMessage] = useState<string>("")
  const [showPopUp, setShowPopUp] = useState<boolean>(false)
  const [showSuccess, setShowSuccess] = useState<boolean>(false)
  const domRef = useClickOut(() => {
    setShowPopUp(false)
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 60 * 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if(showSuccess) {
      setTimeout(() => {
        setShowSuccess(false)
    }, 3000)
    }
  }, [showSuccess]);

  const Screen = () => {
    return (
      <div
        className="absolute sm:text-white screen flex justify-between flex-col screen"
      >
          <div>
          <p className="text-xs text-center">
          Today{" "}
          {date.getUTCHours() < 10
            ? `0${date.getUTCHours()}`
            : date.getUTCHours()}
          :
          {date.getUTCMinutes() < 10
            ? `0${date.getUTCMinutes()}`
            : date.getUTCMinutes()}
        </p>
        <div className="px-2 mt-2">
          <ChatBubble text="Hey there!" />
          <ChatBubble text="I’m Adetimilehin Adeyosola" />
          <ChatBubble text="A UI/UX Designer" />
        </div>
          </div>
       
        <div className="rotate-1 sm:rotate-0 input">
          <div className="flex justify-between items-center px-3">
            <svg
              className="w-4 hidden sm:block"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_111_8)">
                <path
                  d="M13.0048 6.38749L11.7361 5.11999L5.39232 11.4625C5.14248 11.7124 4.94432 12.0091 4.80914 12.3356C4.67395 12.6621 4.60441 13.012 4.60447 13.3654C4.60452 13.7188 4.67419 14.0687 4.80947 14.3952C4.94476 14.7217 5.14303 15.0183 5.39295 15.2681C5.64287 15.518 5.93956 15.7161 6.26606 15.8513C6.59257 15.9865 6.94251 16.056 7.29589 16.056C7.64928 16.0559 7.99919 15.9863 8.32565 15.851C8.65211 15.7157 8.94873 15.5174 9.19857 15.2675L16.8111 7.65624C17.6521 6.81501 18.1246 5.67412 18.1245 4.48455C18.1243 3.29498 17.6517 2.15418 16.8104 1.31312C15.9692 0.472049 14.8283 -0.000391847 13.6388 -0.000274636C12.4492 -0.000157426 11.3084 0.472508 10.4673 1.31374L2.47482 9.30499L2.45732 9.32124C0.0135742 11.765 0.0135742 15.725 2.45732 18.1675C4.90107 20.61 8.86107 20.61 11.3048 18.1675L11.3211 18.15L11.3223 18.1512L16.7786 12.6962L15.5098 11.4287L10.0536 16.8825L10.0373 16.8987C9.19999 17.7344 8.06532 18.2038 6.88232 18.2038C5.69933 18.2038 4.56465 17.7344 3.72732 16.8987C3.31228 16.4828 2.98341 15.989 2.75959 15.4457C2.53577 14.9024 2.4214 14.3202 2.42302 13.7326C2.42465 13.145 2.54224 12.5635 2.76907 12.0214C2.99589 11.4794 3.32748 10.9874 3.74482 10.5737L3.74357 10.5725L11.7373 2.58124C12.7861 1.53124 14.4936 1.53124 15.5436 2.58124C16.5936 3.63124 16.5923 5.33749 15.5436 6.38624L7.93107 13.9975C7.76071 14.1542 7.53639 14.239 7.30497 14.2342C7.07355 14.2295 6.85292 14.1355 6.68916 13.9719C6.52541 13.8083 6.43119 13.5877 6.42619 13.3563C6.42119 13.1249 6.50579 12.9005 6.66232 12.73L13.0061 6.38624L13.0048 6.38749Z"
                  fill="white"
                  fillOpacity="0.75"
                />
              </g>
              <defs>
                <clipPath id="clip0_111_8">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              className="w-4 sm:hidden"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_111_8)">
                <path
                  d="M13.0048 6.38749L11.7361 5.11999L5.39232 11.4625C5.14248 11.7124 4.94432 12.0091 4.80914 12.3356C4.67395 12.6621 4.60441 13.012 4.60447 13.3654C4.60452 13.7188 4.67419 14.0687 4.80947 14.3952C4.94476 14.7217 5.14303 15.0183 5.39295 15.2681C5.64287 15.518 5.93956 15.7161 6.26606 15.8513C6.59257 15.9865 6.94251 16.056 7.29589 16.056C7.64928 16.0559 7.99919 15.9863 8.32565 15.851C8.65211 15.7157 8.94873 15.5174 9.19857 15.2675L16.8111 7.65624C17.6521 6.81501 18.1246 5.67412 18.1245 4.48455C18.1243 3.29498 17.6517 2.15418 16.8104 1.31312C15.9692 0.472049 14.8283 -0.000391847 13.6388 -0.000274636C12.4492 -0.000157426 11.3084 0.472508 10.4673 1.31374L2.47482 9.30499L2.45732 9.32124C0.0135742 11.765 0.0135742 15.725 2.45732 18.1675C4.90107 20.61 8.86107 20.61 11.3048 18.1675L11.3211 18.15L11.3223 18.1512L16.7786 12.6962L15.5098 11.4287L10.0536 16.8825L10.0373 16.8987C9.19999 17.7344 8.06532 18.2038 6.88232 18.2038C5.69933 18.2038 4.56465 17.7344 3.72732 16.8987C3.31228 16.4828 2.98341 15.989 2.75959 15.4457C2.53577 14.9024 2.4214 14.3202 2.42302 13.7326C2.42465 13.145 2.54224 12.5635 2.76907 12.0214C2.99589 11.4794 3.32748 10.9874 3.74482 10.5737L3.74357 10.5725L11.7373 2.58124C12.7861 1.53124 14.4936 1.53124 15.5436 2.58124C16.5936 3.63124 16.5923 5.33749 15.5436 6.38624L7.93107 13.9975C7.76071 14.1542 7.53639 14.239 7.30497 14.2342C7.07355 14.2295 6.85292 14.1355 6.68916 13.9719C6.52541 13.8083 6.43119 13.5877 6.42619 13.3563C6.42119 13.1249 6.50579 12.9005 6.66232 12.73L13.0061 6.38624L13.0048 6.38749Z"
                  fill="#434343"
                  fillOpacity="0.75"
                />
              </g>
              <defs>
                <clipPath id="clip0_111_8">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div className="w-9/12 relative">
            <input
              type="text"
              placeholder="Send message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-white sm:bg-opacity-30 outline-none placeholder:sm:text-white placeholder:text-sm px-4 rounded-2xl py-1 text-sm"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2" onClick={() => setShowPopUp(!showPopUp)}>
            <svg className="sendBtn" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.7825 0.217495C17.6813 0.11675 17.5534 0.0469978 17.4139 0.0164399C17.2744 -0.014118 17.1291 -0.00421136 16.995 0.0449951L0.495001 6.045C0.352702 6.09897 0.230191 6.19496 0.143739 6.32021C0.0572872 6.44546 0.0109863 6.59405 0.0109863 6.74624C0.0109863 6.89844 0.0572872 7.04703 0.143739 7.17228C0.230191 7.29753 0.352702 7.39352 0.495001 7.44749L6.9375 10.02L11.6925 5.25L12.75 6.30749L7.9725 11.085L10.5525 17.5275C10.6081 17.667 10.7043 17.7867 10.8286 17.8709C10.953 17.9552 11.0998 18.0001 11.25 18C11.4016 17.9969 11.5486 17.9479 11.6718 17.8596C11.795 17.7712 11.8885 17.6476 11.94 17.505L17.94 1.005C17.9911 0.872302 18.0034 0.727818 17.9755 0.588388C17.9477 0.448958 17.8807 0.320328 17.7825 0.217495Z" fill="#7A81F3"/>
            </svg>
            </button>
            
            </div>
            
            <svg
              className="w-3 hidden sm:block"
              viewBox="0 0 16 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 11.7065C0 13.1675 0.29816 14.4645 0.894479 15.5975C1.49825 16.7305 2.33683 17.6399 3.4102 18.3256C4.48358 19.004 5.73212 19.4027 7.15583 19.522V22.1272H3.00769C2.76916 22.1272 2.5679 22.2092 2.40391 22.3732C2.23993 22.5372 2.15793 22.7384 2.15793 22.9769C2.15793 23.208 2.23993 23.4055 2.40391 23.5695C2.5679 23.7335 2.76916 23.8155 3.00769 23.8155H12.9923C13.2308 23.8155 13.4321 23.7335 13.5961 23.5695C13.7601 23.4055 13.8421 23.208 13.8421 22.9769C13.8421 22.7384 13.7601 22.5372 13.5961 22.3732C13.4321 22.2092 13.2308 22.1272 12.9923 22.1272H8.84416V19.522C10.2679 19.4027 11.5164 19.004 12.5898 18.3256C13.6632 17.6399 14.498 16.7305 15.0943 15.5975C15.6981 14.4645 16 13.1675 16 11.7065V9.43676C16 9.20568 15.918 9.00815 15.754 8.84416C15.59 8.68018 15.3925 8.59818 15.1614 8.59818C14.9229 8.59818 14.7216 8.68018 14.5577 8.84416C14.3937 9.00815 14.3117 9.20568 14.3117 9.43676V11.6394C14.3117 12.9066 14.0508 14.0172 13.529 14.9713C13.0072 15.9255 12.273 16.6671 11.3263 17.1964C10.3871 17.7181 9.28022 17.979 8.00559 17.979C6.73096 17.979 5.62031 17.7181 4.67365 17.1964C3.727 16.6671 2.99278 15.9255 2.471 14.9713C1.94922 14.0172 1.68833 12.9066 1.68833 11.6394V9.43676C1.68833 9.20568 1.60634 9.00815 1.44235 8.84416C1.27836 8.68018 1.0771 8.59818 0.838574 8.59818C0.607501 8.59818 0.40997 8.68018 0.245982 8.84416C0.0819939 9.00815 0 9.20568 0 9.43676V11.7065ZM8.00559 15.5751C8.74354 15.5751 9.39203 15.4037 9.95108 15.0608C10.5176 14.7179 10.9536 14.2446 11.2593 13.6408C11.5723 13.0296 11.7289 12.3252 11.7289 11.5276V4.04752C11.7289 3.24994 11.5723 2.54927 11.2593 1.94549C10.9536 1.33426 10.5176 0.857209 9.95108 0.514326C9.39203 0.171442 8.74354 0 8.00559 0C7.26019 0 6.60797 0.171442 6.04892 0.514326C5.48987 0.857209 5.05381 1.33426 4.74074 1.94549C4.42767 2.54927 4.27114 3.24994 4.27114 4.04752V11.5276C4.27114 12.3252 4.42767 13.0296 4.74074 13.6408C5.05381 14.2446 5.48987 14.7179 6.04892 15.0608C6.60797 15.4037 7.26019 15.5751 8.00559 15.5751Z"
                fill="white"
                fillOpacity="0.75"
              />
            </svg>
            <svg
              className="w-3 sm:hidden"
              viewBox="0 0 16 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 11.7065C0 13.1675 0.29816 14.4645 0.894479 15.5975C1.49825 16.7305 2.33683 17.6399 3.4102 18.3256C4.48358 19.004 5.73212 19.4027 7.15583 19.522V22.1272H3.00769C2.76916 22.1272 2.5679 22.2092 2.40391 22.3732C2.23993 22.5372 2.15793 22.7384 2.15793 22.9769C2.15793 23.208 2.23993 23.4055 2.40391 23.5695C2.5679 23.7335 2.76916 23.8155 3.00769 23.8155H12.9923C13.2308 23.8155 13.4321 23.7335 13.5961 23.5695C13.7601 23.4055 13.8421 23.208 13.8421 22.9769C13.8421 22.7384 13.7601 22.5372 13.5961 22.3732C13.4321 22.2092 13.2308 22.1272 12.9923 22.1272H8.84416V19.522C10.2679 19.4027 11.5164 19.004 12.5898 18.3256C13.6632 17.6399 14.498 16.7305 15.0943 15.5975C15.6981 14.4645 16 13.1675 16 11.7065V9.43676C16 9.20568 15.918 9.00815 15.754 8.84416C15.59 8.68018 15.3925 8.59818 15.1614 8.59818C14.9229 8.59818 14.7216 8.68018 14.5577 8.84416C14.3937 9.00815 14.3117 9.20568 14.3117 9.43676V11.6394C14.3117 12.9066 14.0508 14.0172 13.529 14.9713C13.0072 15.9255 12.273 16.6671 11.3263 17.1964C10.3871 17.7181 9.28022 17.979 8.00559 17.979C6.73096 17.979 5.62031 17.7181 4.67365 17.1964C3.727 16.6671 2.99278 15.9255 2.471 14.9713C1.94922 14.0172 1.68833 12.9066 1.68833 11.6394V9.43676C1.68833 9.20568 1.60634 9.00815 1.44235 8.84416C1.27836 8.68018 1.0771 8.59818 0.838574 8.59818C0.607501 8.59818 0.40997 8.68018 0.245982 8.84416C0.0819939 9.00815 0 9.20568 0 9.43676V11.7065ZM8.00559 15.5751C8.74354 15.5751 9.39203 15.4037 9.95108 15.0608C10.5176 14.7179 10.9536 14.2446 11.2593 13.6408C11.5723 13.0296 11.7289 12.3252 11.7289 11.5276V4.04752C11.7289 3.24994 11.5723 2.54927 11.2593 1.94549C10.9536 1.33426 10.5176 0.857209 9.95108 0.514326C9.39203 0.171442 8.74354 0 8.00559 0C7.26019 0 6.60797 0.171442 6.04892 0.514326C5.48987 0.857209 5.05381 1.33426 4.74074 1.94549C4.42767 2.54927 4.27114 3.24994 4.27114 4.04752V11.5276C4.27114 12.3252 4.42767 13.0296 4.74074 13.6408C5.05381 14.2446 5.48987 14.7179 6.04892 15.0608C6.60797 15.4037 7.26019 15.5751 8.00559 15.5751Z"
                fill="#434343"
                fillOpacity="0.75"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="-pt-32 sm:mt-0 sm:pt-20 hero">
       <div className={`fixed top-20 sm:top-32 z-40 ${showSuccess ? "opacity-100" : "opacity-0"} transition-opacity bg-green-500 bg-opacity-90 p-4 text-white text-base rounded left-1/2 -translate-x-1/2 text-center`}>
          Your message has been sent successfully.
        </div>
      <div className={`relative w-full hidden sm:block hero-desktop`}>
      <Screen />
    </div>
    <div className={`relative w-full sm:hidden hero-mobile`}>
      <Screen />
    </div>
    {showPopUp && <ContactPopup setShowSuccess={setShowSuccess} setShowPopUp={setShowPopUp} message={message} setMessage={setMessage} domRef={domRef} />}
    </div>
  );
};

export default HeroSection;
