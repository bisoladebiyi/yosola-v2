import React, { useEffect, useState } from "react";
import ContactPopup from "./ContactPopup";
import useClickOut from "../hooks/useClickOut";
import Screen from "./Screen";

const HeroSection = () => {
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const domRef = useClickOut(() => {
    setShowPopUp(false);
  });

  useEffect(() => {
    if (showSuccess) {
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }
  }, [showSuccess]);

  return (
    <div className="-pt-32 sm:mt-0 sm:pt-20 hero">
      <div
        className={`fixed top-20 sm:top-32 z-40 ${
          showSuccess ? "opacity-100" : "opacity-0"
        } transition-opacity bg-green-500 bg-opacity-90 p-4 text-white text-base rounded left-1/2 -translate-x-1/2 text-center`}
      >
        Your message has been sent successfully.
      </div>
      <div className={`relative w-full hidden sm:block hero-desktop`}>
        <Screen setShowPopUp={setShowPopUp} showPopUp={showPopUp} message={message} setMessage={setMessage} />
      </div>
      <div className={`relative w-full sm:hidden hero-mobile`}>
        <Screen setShowPopUp={setShowPopUp} showPopUp={showPopUp} message={message} setMessage={setMessage}  />
      </div>
      {showPopUp && (
        <ContactPopup
          setShowSuccess={setShowSuccess}
          setShowPopUp={setShowPopUp}
          message={message}
          setMessage={setMessage}
          domRef={domRef}
        />
      )}
    </div>
  );
};

export default HeroSection;
