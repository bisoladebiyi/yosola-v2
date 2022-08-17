import React from "react";
import { IHeading } from "../../utils/interfaces";

const Heading: React.FC<IHeading> = ({
  text,
  variant,
  color,
  align,
  chelsea,
  nova
}) => {
  return (
    <div>
      {chelsea ? (
        <div className="flex items-center justify-center w-full">
          <p className="text-center text-xl sm:text-3xl justify-center font-semibold px-3 py-2 border-l-4 border-primary-dark inline-block">
            {text}
          </p>
        </div>
       
      ) : nova ? (

          <div className="flex items-center justify-center w-full">
          <p className="text-center text-xl sm:text-3xl justify-center font-semibold relative px-3 py-2 novaHeading inline-block">
            {text}
          </p>
        </div>
      ) : (
        <div className={`text-${align}`}>
        <p
          className={`${color === "light" ? "text-light" : "text-dark"} ${
            variant === "large"
              ? "text-3xl sm:text-5xl"
              : variant === "small"
              ? "text-xl sm:text-3xl"
              : "text-3xl sm:text-4xl"
          } font-semibold headingStyle relative inline-block`}
        >
          {text}
        </p>
      </div>
      )}
    </div>
  );
};

export default Heading;
