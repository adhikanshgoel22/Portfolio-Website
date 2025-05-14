import React from "react";
import Image from "next/image";
import lnk from "./linkedin.png";
import git from "./github.png";
import mail from "./mail2.png";

const Connect = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-10 px-4 sm:px-6 lg:px-8 "
      id="connect"
    >
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-8">
        Let&apos;s Connect
      </h1>

      <div className="flex gap-8 sm:gap-10 md:gap-14 justify-center items-center">
        <a
          href="https://www.linkedin.com/in/adhikansh-goel-45416b261/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={lnk} alt="LinkedIn" width={60} height={60} />
        </a>
        <a
          href="https://github.com/adhikanshgoel22"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={git} alt="GitHub" width={60} height={60} />
        </a>
        <a
          href="mailto:adhikanshgoel22@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={mail} alt="Email" width={60} height={60} />
        </a>
      </div>
    </div>
  );
};

export default Connect;
