import Image from "next/image";
import React from "react";
import process from "../../public/images/process.png";
import processBg from "../../public/images/processBg.png";
import Heading from "./elements/Heading";

const DesignProcess = () => {
  return (
    <div className="mt-28">
        <Heading text="My design process" align="center" />
      <div
        style={{
          background: `url(${processBg.src})`,
          backgroundPosition: "center",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
        className="flex justify-center py-4 mt-14"
      >
        <div className="w-medium">
          <Image src={process} alt={"design process"} />
        </div>
      </div>
    </div>
  );
};

export default DesignProcess;
