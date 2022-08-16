import Image from "next/image";
import React from "react";
import bannerBg from "../../../public/images/omega/omega-bg.png";
import bannerImg from "../../../public/images/omega/omega-img.png";
import persona1 from "../../../public/images/omega/persona 1.jpg";
import persona2 from "../../../public/images/omega/persona 2.jpg";
import persona3 from "../../../public/images/omega/persona 3.jpg";
import userJourney from "../../../public/images/omega/user journey.jpg";
import problemStatement from "../../../public/images/omega/problem statement.jpg";
import competitive from "../../../public/images/omega/Competitive audit image 1.jpg";
import goal from "../../../public/images/omega/Goal statement 1.jpg";
import userflow from "../../../public/images/omega/USER FLOW 1.jpg";
import story2 from "../../../public/images/omega/BIGPICTURE 1.jpg";
import story1 from "../../../public/images/omega/CLOSEUP IMG 1.jpg";
import proto1 from "../../../public/images/omega/proto2.jpg";
import proto2 from "../../../public/images/omega/proto1.jpg";
import dWireframes from "../../../public/images/omega/digitalWireframes.jpg";
import refine from "../../../public/images/omega/refineDesign.jpg";
import screens from "../../../public/images/omega/omegaScreens.jpg";
import avatar from "../../../public/images/omega/avatar.jpg"
import Layout from "../../components/Layout";
import {
  accessibility,
  findings1,
  findings2,
  painPointsOmega,
} from "../../utils/constants";

const OmegaBakery = () => {
  return (
    <Layout activePage="work">
      <div>
        {/* banner  */}
        <div
          className="pt-24 flex flex-col items-center banner"
          style={{ background: `url(${bannerBg.src})` }}
        >
          <p
            style={{ color: "#FF0084" }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold pt-5 sm:pt-10 -mb-4 sm:-mb-8 md:-mb-14"
          >
            OMEGA BAKERY
          </p>
          <div className="w-4/5 sm:w-3/5 sm:-mb-14">
            <Image src={bannerImg} alt="Omega bakery" />
          </div>
        </div>
        {/* project overview  */}
        <div className="text-lg md:text-xl px-7 sm:px-16 lg:px-28">
          <div className="mt-14">
            <p className="text-pink font-bold text-2xl lg:text-5xl">PROJECT OVERVIEW</p>
            <div className="md:flex justify-between mt-7">
              <div className="mb-5 md:mt-0">
                <p className="uppercase text-darker font-bold text-xl md:text-4xl mb-2 md:mb-3">
                  role
                </p>
                <p className="text-lg md:text-2xl text-dark">UX designer</p>
              </div>
              <div className="mb-5 md:mt-0">
                <p className="uppercase text-darker font-bold text-xl md:text-4xl mb-2 md:mb-3">
                  duration
                </p>
                <p className="text-lg md:text-2xl text-dark">6 weeks</p>
              </div>
              <div className="mb-5 md:mt-0">
                <p className="uppercase text-darker font-bold text-xl md:text-4xl mb-2 md:mb-3">
                  tools
                </p>
                <p className="text-lg md:text-2xl text-dark">Figma</p>
              </div>
            </div>
          </div>
          {/* product summary  */}
          <div className="mt-20 text-dark">
            <div className="mb-10">
              <p className="text-xl md:text-3xl font-bold text-darker mb-5 uppercase">
                The product:
              </p>
              <p>
                Omega bakery is a bakery store located in OAU, Ife,Osun state.
                They offer a wide variety of tasty and delicious pastries. Their
                target customers are stretched beyond the reach of people around
                OAU . The product is designed to enable customers order their
                favourite pastry and get it delivered from omega bakery store
              </p>
            </div>
            <div>
              <p className="text-xl md:text-3xl font-bold text-darker mb-5 uppercase">
                Responsibilities:
              </p>
              <ul className="list-disc ml-4">
                <li>
                  User research which included usability study and interviews
                </li>
                <li>Creating Paper and digital wireframes wireframes</li>
                <li>Low and high fidelity prototyping</li>
                <li>
                  Accounting accessibility, iterating designs, information
                  architecture
                </li>
              </ul>
            </div>
            <div className="mt-10">
              <p className="text-xl md:text-3xl font-bold text-red-600 mb-5 uppercase">
                The problem:
              </p>
              <p>
                There are users that get tired of the long queue outside the
                bakery store? What can be done? How can people who do not have
                time to wait in line be catered for?{" "}
              </p>
            </div>
            <div className="mt-10">
              <p className="text-xl md:text-3xl font-bold text-green-600 mb-5 uppercase">
                The solution:
              </p>
              <p>
                To enable users select their favourite pastry from the menu in
                the bakery app and order for it thereby reducing the amount of
                customers waiting in line in the bakery
              </p>
            </div>
          </div>
          {/* design process & brainstorm  */}
          <div className="mt-28">
            <p className="text-pink uppercase font-black text-xl md:text-2xl mb-8">
              design process
            </p>
            <div className="flex uppercase items-center space-x-6 font-black">
              <div className="w-32 h-32 rounded-full bg-blue-200 text-blue-900 text-base md:text-xl grid place-items-center">
                brainstorm
              </div>
              <svg
                className="w-16"
                viewBox="0 0 87 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M86.1381 22.2064C87.1744 21.1702 87.1744 19.49 86.1381 18.4537L69.2508 1.56638C68.2145 0.530094 66.5343 0.530094 65.498 1.56638C64.4617 2.60267 64.4617 4.28283 65.498 5.31912L80.509 20.3301L65.498 35.341C64.4617 36.3773 64.4617 38.0575 65.498 39.0938C66.5343 40.1301 68.2145 40.1301 69.2508 39.0938L86.1381 22.2064ZM3.26911 17.6765C1.80357 17.6765 0.615522 18.8645 0.615522 20.3301C0.615522 21.7956 1.80357 22.9837 3.26911 22.9837V17.6765ZM84.2617 17.6765L3.26911 17.6765V22.9837L84.2617 22.9837V17.6765Z"
                  fill="#979797"
                />
              </svg>
              <div className="w-32 h-32 rounded-full bg-amber-100 text-amber-600 text-base md:text-xl grid place-items-center">
                define
              </div>
              <svg
                className="w-16"
                viewBox="0 0 87 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M86.1381 22.2064C87.1744 21.1702 87.1744 19.49 86.1381 18.4537L69.2508 1.56638C68.2145 0.530094 66.5343 0.530094 65.498 1.56638C64.4617 2.60267 64.4617 4.28283 65.498 5.31912L80.509 20.3301L65.498 35.341C64.4617 36.3773 64.4617 38.0575 65.498 39.0938C66.5343 40.1301 68.2145 40.1301 69.2508 39.0938L86.1381 22.2064ZM3.26911 17.6765C1.80357 17.6765 0.615522 18.8645 0.615522 20.3301C0.615522 21.7956 1.80357 22.9837 3.26911 22.9837V17.6765ZM84.2617 17.6765L3.26911 17.6765V22.9837L84.2617 22.9837V17.6765Z"
                  fill="#979797"
                />
              </svg>
              <div
                style={{ color: "#BB1A4A" }}
                className="w-32 h-32 rounded-full bg-pink bg-opacity-40 grid text-base md:text-xl place-items-center"
              >
                ideate
              </div>
              <svg
                className="w-16"
                viewBox="0 0 87 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M86.1381 22.2064C87.1744 21.1702 87.1744 19.49 86.1381 18.4537L69.2508 1.56638C68.2145 0.530094 66.5343 0.530094 65.498 1.56638C64.4617 2.60267 64.4617 4.28283 65.498 5.31912L80.509 20.3301L65.498 35.341C64.4617 36.3773 64.4617 38.0575 65.498 39.0938C66.5343 40.1301 68.2145 40.1301 69.2508 39.0938L86.1381 22.2064ZM3.26911 17.6765C1.80357 17.6765 0.615522 18.8645 0.615522 20.3301C0.615522 21.7956 1.80357 22.9837 3.26911 22.9837V17.6765ZM84.2617 17.6765L3.26911 17.6765V22.9837L84.2617 22.9837V17.6765Z"
                  fill="#979797"
                />
              </svg>
              <div className="w-32 h-32 rounded-full bg-orange-200 text-orange-800 bg-opacity-90 text-base md:text-xl grid place-items-center">
                prototype
              </div>
              <svg
                className="w-16"
                viewBox="0 0 87 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M86.1381 22.2064C87.1744 21.1702 87.1744 19.49 86.1381 18.4537L69.2508 1.56638C68.2145 0.530094 66.5343 0.530094 65.498 1.56638C64.4617 2.60267 64.4617 4.28283 65.498 5.31912L80.509 20.3301L65.498 35.341C64.4617 36.3773 64.4617 38.0575 65.498 39.0938C66.5343 40.1301 68.2145 40.1301 69.2508 39.0938L86.1381 22.2064ZM3.26911 17.6765C1.80357 17.6765 0.615522 18.8645 0.615522 20.3301C0.615522 21.7956 1.80357 22.9837 3.26911 22.9837V17.6765ZM84.2617 17.6765L3.26911 17.6765V22.9837L84.2617 22.9837V17.6765Z"
                  fill="#979797"
                />
              </svg>
              <div className="w-32 h-32 rounded-full bg-purple-200 text-purple-800 grid text-base md:text-xl place-items-center">
                test
              </div>
            </div>
          </div>
          <div className="mt-14">
            <p className="text-blue-900 uppercase font-black text-xl md:text-2xl mb-5">
              brainstorm
            </p>
            <p>
              The brainstorm phase involved series of interviews carried out
              with the target users. I wanted to know about their pain points,
              challenges and understand the audience I was designing for. I
              observed that the challenge of waiting in line at the front of the
              bakery wasn’t the only pain point, 85% of users also mention bad
              user experience they’ve experienced when ordering and also the
              inability to access what the bakery has to fully offer
            </p>
          </div>
          {/* research  */}
          <div className="text-brown mt-20 font-medium">
            <div className="shadow w-full md:w-3/5 p-4">
              <p className="text-center mb-3">RESEARCH QUESTIONS</p>
              <ul className="list-disc ml-4">
                <li>How often do you eat pastries</li>
                <li>How well do you go to your bakery store to buy pastries</li>
                <li>What do you do after ordering?</li>
                <li>
                  Tell me about the user experience before and after ordering
                </li>
              </ul>
            </div>
            <div className="flex justify-end mt-10">
              <div className="shadow w-full md:w-3/5 p-4">
                <p className="text-center mb-3">RESEARCH INSIGHTS</p>
                <ul className="list-disc ml-4">
                  <li>95% of users eat pastries everyday</li>
                  <li>
                    Most users love going to the bakery store but find it hard
                    to stay and order
                  </li>
                  <li>
                    Users noted that the experiences they have had while
                    ordering and even down to packaging has not been pleasant
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-10 md:mt-20 py-6 shadow px-5">
              <p className="text-center mb-16 uppercase font-semibold">
                User research: pain points
              </p>
              <div className="md:flex space-y-6 md:space-y-0 md:space-x-10">
                {painPointsOmega.map(({ title, text }, i) => (
                  <div key={i} className="md:w-1/3 flex items-center flex-col">
                    <div
                      style={{ background: "#FFE4D0" }}
                      className="w-16 h-16 text-xl font-black rounded-full grid place-items-center text-orange-400"
                    >
                      {i + 1}
                    </div>
                    <p className="capitalize text-orange-400 mb-3">{title}</p>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* define  */}
          <div className="mt-20">
            <div className="mb-10">
              <p style={{ color: "#C3A608" }} className="uppercase font-black">
                define
              </p>
              <p>
                I used the insights I gathered in the brainstorm stage to find
                concrete ways in which the product can be developed to satisfy
                user needs. I started to define who the product is for, what the
                product does and features to inclide in the product. I
                emphathized with the user and started to identify user pain
                points.
              </p>
            </div>
            <div>
              <p className="uppercase font-black text-darker mb-5">
                USER PERSONAS
              </p>
              <div>
                <figure className="w-8/12 mb-5">
                  <Image src={persona1} alt="user persona" />
                </figure>
                <div className="flex justify-end">
                  <figure className="w-8/12 mb-5">
                    <Image src={persona2} alt="user persona" />
                  </figure>
                </div>
                <figure className="w-8/12">
                  <Image src={persona3} alt="user persona" />
                </figure>
              </div>
            </div>
            <div className="mt-10 md:mt-20">
              <p className="uppercase font-black text-darker mb-5">
                USER JOURNEY MAP
              </p>
              <Image src={userJourney} alt="user journey" />
            </div>
            <div className="mt-10 md:mt-20">
              <p className="uppercase font-black text-darker mb-5">
                PROBLEM STATEMENT
              </p>
              <Image src={problemStatement} alt="PROBLEM STATEMENT" />
            </div>
          </div>
          {/* ideate  */}
          <div className="mt-14 md:mt-32">
            <div className="mb-10">
              <p className="uppercase font-black text-pink">ideate</p>
              <p>
                I ideated with the use of competitive audit and brainstorming
                exercises like “how might we” and crazy eights.
              </p>
            </div>
            <div className="mt-10">
              <p className="uppercase font-black text-darker mb-5">
                COMPETITIVE AUDIT
              </p>
              <Image src={competitive} alt="COMPETITIVE AUDIT" />
            </div>
            <div className="mt-10">
              <p className="uppercase font-black text-darker mb-5">
                GOAL STATEMENT
              </p>
              <Image src={goal} alt="GOAL STATEMENT" />
            </div>
            <div className="mt-10">
              <p className="uppercase font-black text-darker mb-5">
                STORYBOARDS
              </p>
              <div className="flex space-x-5 sm:space-x-10">
                <figure>
                  <Image src={story1} alt="STORYBOARDS" />
                </figure>
                <figure>
                  <Image src={story2} alt="STORYBOARDS" />
                </figure>
              </div>
            </div>
            <div className="mt-10">
              <p className="uppercase font-black text-darker mb-5">USER FLOW</p>
              <Image src={userflow} alt="USER FLOW" />
            </div>
          </div>
          {/* prototype  */}
          <div className="mt-20">
            <div className="mb-10">
              <p style={{ color: "#C65604" }} className="uppercase font-black">
                define
              </p>
              <p>
                After research, I drew 5 different wireframes for the homepage
                with the users pain points and needs in my mind. At the end, I
                was able to combine the best features into one wireframe of the
                homepage
              </p>
              <div className="flex mt-7 space-x-5 sm:space-x-10">
                <figure>
                  <Image src={proto1} alt="prototype" />
                </figure>
                <figure>
                  <Image src={proto2} alt="prototype" />
                </figure>
              </div>
              <div className="mt-10">
                <p className="uppercase font-black text-darker mb-5">
                  DIGITAL WIREFRAMES
                </p>
                <Image src={dWireframes} alt="DIGITAL WIREFRAMES" />
              </div>
              <div className="mt-10">
                <p className="uppercase font-black text-darker mb-5">
                  REDEFINING THE DESIGN
                </p>
                <Image src={refine} alt="REDEFINING THE DESIGN" />
              </div>
            </div>
            <figure className="-mx-7 sm:-mx-24 lg:-mx-28">
              <Image src={screens} alt="screen" />
            </figure>
          </div>
          <div className="mt-20">
            <div className="mb-10">
              <p className="uppercase font-black text-purple-800">test</p>
              <div className="mt-10">
                <p className="uppercase font-black text-darker mb-5">
                  PROTOTYPE TESTING
                </p>
                <div className="text-brown bg-amber-100 p-5 md:p-7">
                  <div className="text-center">
                    <p className="font-semibold uppercase mb-5">
                      Usability study: findings
                    </p>
                    <p>
                      I conducted 2 rounds of unmoderated usability study. The
                      first study helped me redefine my wireframes and it took
                      me a step further in creating my mockups. The second
                      helped me improve usability and accessibility
                    </p>
                  </div>
                  <div className="md:flex mt-10 justify-between pb-5">
                    <div className="mb-10 md:mt-0">
                      <p className="font-bold text-center text-deepPink mb-3">
                        Round 1 Findings
                      </p>
                      {findings1.map((text, index) => (
                        <div key={index} className="flex space-x-3 mb-2">
                          <div
                            style={{ background: "#FFD0DE" }}
                            className="w-10 h-10 grid text-deepPink rounded-full place-items-center font-black"
                          >
                            {index + 1}
                          </div>
                          <p className="w-9/12">{text}</p>
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="font-bold text-center text-deepPink mb-3">
                        Round 2 Findings
                      </p>
                      {findings2.map((text, index) => (
                        <div key={index} className="flex space-x-3 mb-2">
                          <div
                            style={{ background: "#FFD0DE" }}
                            className="w-10 h-10 grid text-deepPink rounded-full place-items-center font-black"
                          >
                            {index + 1}
                          </div>
                          <p className="w-9/12">{text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-20">
              <p className="uppercase font-black text-darker mb-5">
                ACCESSIBILITY CONSIDERATION
              </p>
              <div className="md:flex space-y-5 mt:space-x-5 md:space-x-10 mt-10 px-8 py-10 md:py-20 shadow">
                {accessibility.map((text, i) => (
                  <div key={i} className="md:w-1/3 flex items-center flex-col">
                    <div className="w-16 h-16 text-xl font-black rounded-full grid place-items-center text-green-500 bg-green-100">
                      {i + 1}
                    </div>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-20">
              <p className="uppercase font-black text-pink">takeaway</p>
              <div className="mt-10">
                <p className="text-blue-700 font-bold mb-2">Impact:</p>
                <p>
                  This app has made users realize they have unlimited access to
                  what omega bakery has to offer and do not have to worry about
                  bad UX
                </p>
              </div>
              <div className="mt-10">
                <p style={{ color: "#D69027" }} className="font-bold mb-2">
                  What I learned
                </p>
                <p>
                  I learnt that what I think is a good idea sometimes is not for
                  most users through the usability studies I conducted. I also
                  learnt that all users needs have to be accounted for and the
                  first idea was only a start
                </p>
              </div>
            </div>
            <div className="mt-20">
              <p className="uppercase font-bold text-green-600 text-center">
                Next steps
              </p>
              <div className="mt-10 md:flex justify-center space-y-10 md:space-y-0 md:space-x-10">
                <div className="md:w-1/3 flex items-center flex-col">
                  <div className="w-16 h-16 text-xl font-black rounded-full grid place-items-center text-green-500 bg-green-100">
                    1
                  </div>
                  <p className="text-center">
                    Conduct another round of usability study, moderated this
                    time and make sure user needs are met and to check if the
                    new updates I implemented makes the user experience a good
                    one
                  </p>
                </div>
                <div className="md:w-1/3 flex items-center flex-col">
                  <div className="w-16 h-16 text-xl font-black rounded-full grid place-items-center text-green-500 bg-green-100">
                    2
                  </div>
                  <p className="text-center">
                    Work on creating more screens to help grow the functionality
                    of the app
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center flex-col space-y-5 mt-40 mb-40">
                <figure className="w-32 md:w-44">
                    <Image src={avatar} alt="avatar" />
                </figure>
                <p className="text-brown text-center">Thank you for taking your time to read through my case study and review my work. If you would like to get in touch with me or ask any question about this project or collaborate on a project, you can reach out to me;<br /><br />Email: <a href="mailto:adeyosola7@gmail.com" className="underline">adeyosola7@gmail.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OmegaBakery;
