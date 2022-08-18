import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { IContact } from "../utils/interfaces";

const ContactPopup: React.FC<IContact> = ({ message, setMessage, domRef, setShowPopUp, setShowSuccess }) => {
  const form = useRef<any>();

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
        await emailjs.sendForm(process.env.REACT_APP_SERVICE_ID!, process.env.REACT_APP_TEMPLATE_ID!, form.current, process.env.REACT_APP_PUBLIC_KEY!)
    } catch(e) {
        console.log(e)
    } finally {
        setMessage("")
        setShowPopUp(false)
        setShowSuccess(true)
    }
  };
  return (
    <div className="popup rounded-md p-10 w-11/12 sm:w-1/2 md:w-2/5" ref={domRef}>
      <form action="" onSubmit={sendEmail} ref={form}>
        <label htmlFor="" className="text-primary-dark text-xl font-semibold">
          E-mail address <span className="text-red-500">*</span>
        </label>
        <input
          name="user_email"
          type="email"
          required
          className="bg-light-purp border-primary border block w-full rounded-md h-10 outline-none px-4 placeholder:text-gray-500 placeholder:font-medium mb-5 mt-2"
          placeholder="Enter your email address"
        />
        <label htmlFor="" className="text-primary-dark text-xl font-semibold">
          Full name<span className="text-red-500">*</span>
        </label>
        <input
          name="user_name"
          type="text"
          required
          className="bg-light-purp border-primary border block w-full rounded-md h-10 outline-none px-4 placeholder:text-gray-500 placeholder:font-medium mb-5 mt-2"
          placeholder="Enter your full name"
        />
        <label htmlFor="" className="text-primary-dark text-xl font-semibold">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="bg-light-purp border-primary border block w-full rounded-md h-44 outline-none pt-4 px-4 placeholder:text-gray-500 placeholder:font-medium mb-5 mt-2"
          placeholder="Your message..."
        />
        <button className="flex bg-primary p-3 rounded-md items-center text-gray-600 font-medium">
          Send
          <svg
            className="w-5 ml-1"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.7827 3.2175C20.6815 3.11675 20.5536 3.047 20.4141 3.01644C20.2746 2.98588 20.1293 2.99579 19.9952 3.045L3.49524 9.045C3.35295 9.09897 3.23043 9.19496 3.14398 9.32021C3.05753 9.44546 3.01123 9.59405 3.01123 9.74624C3.01123 9.89844 3.05753 10.047 3.14398 10.1723C3.23043 10.2975 3.35295 10.3935 3.49524 10.4475L9.93775 13.02L14.6927 8.25L15.7502 9.30749L10.9727 14.085L13.5527 20.5275C13.6083 20.667 13.7045 20.7867 13.8289 20.8709C13.9532 20.9552 14.1 21.0001 14.2502 21C14.4018 20.9969 14.5489 20.9479 14.672 20.8596C14.7952 20.7712 14.8887 20.6476 14.9402 20.505L20.9402 4.005C20.9913 3.8723 21.0037 3.72782 20.9758 3.58839C20.9479 3.44896 20.8809 3.32033 20.7827 3.2175Z"
              fill="#021B79"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default ContactPopup;
