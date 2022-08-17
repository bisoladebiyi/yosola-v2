import Image from "next/image";
import React from "react";
import bannerBg from "../../../public/images/chelseaBackground.png";
import bannerImg from "../../../public/images/chelsea.png";
import figma from "../../../public/images/chelsea/Figma svg.png";
import process from "../../../public/images/chelsea/chelseaProcess.png";
import reviews from "../../../public/images/chelsea/reviews.jpg";
import persona1 from "../../../public/images/chelsea/rola persona 1.jpg";
import persona2 from "../../../public/images/chelsea/joey persona 1.jpg";
import empathyMap from "../../../public/images/chelsea/empathy map 1.jpg";
import problem1 from "../../../public/images/chelsea/problem.jpg";
import problem2 from "../../../public/images/chelsea/problem2.jpg";
import userJourney from "../../../public/images/chelsea/chelsUJournery.jpg";
import competitive from "../../../public/images/chelsea/Competitive Analysis 1.jpg";
import wireframe from "../../../public/images/chelsea/wireframeChels.jpg";
import lightMode from "../../../public/images/chelsea/lightMode.jpg";
import darkMode from "../../../public/images/chelsea/darkMode.jpg";
import font from "../../../public/images/chelsea/styleGuideFont.jpg";
import colorLight from "../../../public/images/chelsea/colorsLight.png";
import colorDark from "../../../public/images/chelsea/colorsDark.png";
import onboarding from "../../../public/images/chelsea/onboarding.jpg";
import home from "../../../public/images/chelsea/homechels.png";
import menuNav from "../../../public/images/chelsea/menuNavChels.png";
import fanChat1 from "../../../public/images/chelsea/fanChat.png";
import fanChat2 from "../../../public/images/chelsea/fanChat2.jpg";
import fixtures from "../../../public/images/chelsea/fixtures.jpg";
import shop from "../../../public/images/chelsea/shopChels.png";
import videos from "../../../public/images/chelsea/videosChels.png";
import Layout from "../../components/Layout";
import Heading from "../../components/elements/Heading";

const OmegaBakery = () => {
  return (
    <Layout activePage="work">
      <div>
        {/* banner  */}
        <div
          className="pt-24 flex flex-col items-center banner"
          style={{ background: `url(${bannerBg.src})` }}
        >
          <p className="text-3xl text-primary-dark sm:text-4xl md:text-6xl font-bold sm:pt-10 -mb-4 sm:-mb-5 capitalize">
            chelsea FC redesign
          </p>
          <figure className="w-11/12 sm:w-3/5 -ml-20">
            <Image src={bannerImg} alt="Omega bakery" />
          </figure>
        </div>
        {/* project overview  */}
        <div className="text-lg md:text-xl px-7 sm:px-16 lg:px-28 font-medium">
          {/* project brief  */}
          <div className="bg-gray-100 border p-7 mt-20">
            <Heading chelsea text={"Project Brief"} />
            <p className="mt-5 mb-10">
              Chelsea Fc mobile app also known as the fifth stand is a mobile
              platform that allows Chelsea fans to shop for jerseys, check out
              fixtures, play games like predictor and win amazing prizes. In
              this project, I decided to completely redesign Chelsea Fc mobile
              app. I implemented a lot of changes by empathizing with user
              problems to solve some of the issues users face when interacting
              with the app.{" "}
            </p>
            <Heading chelsea text={"Why Redesign"} />
            <p className="mt-5">
              The entire project was redesigned with the users in mind to make
              them feel comfortable with the UI and enjoy easy accessible
              features. Chelsea Fc app is an amzing app that allows the users to
              feel like they are part of the club but there ARE CERTAIN FEATURES
              THAT I FEEL COULD BE IMPROVED FOR BETTER USER EXPERIENCE.
            </p>
            <div className="space-y-5 sm:space-y-0 sm:flex justify-between mt-14">
              <div>
                <p className="text-primary-dark text-xl sm:text-2xl font-semibold">
                  ROLE: UI/UX Designer
                  <br />
                  DURATION: 1 week
                  <br />
                  Light and Dark mode
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <figure className="w-10 sm:w-14">
                  <Image src={figma} alt="figma" />
                </figure>

                <p className="font-semibold">Designed using figma</p>
              </div>
            </div>
          </div>
          {/* design process  */}
          <div
            className="mt-24 flex flex-col items-center -mx-7 sm:-mx-16 lg:-mx-28 py-10"
            style={{ background: "#AAC7FF" }}
          >
            <Heading chelsea text="My Design Process" />
            <figure className="w-11/12 sm:w-9/12 mt-14">
              <Image src={process} alt="My design process" />
            </figure>
          </div>
          {/* ux research */}
          <div className="mt-24">
            <Heading chelsea text="UX Research" />
            <ul className="space-y-4 list-inside list-disc mt-7">
              <li>
                At first, I’ve seen some complaints on social media about the
                app not appeling and satisfying user needs
              </li>
              <li>
                Going to check reviews from app store, I found tons of user
                problems there where users weren’t satisfied with the UI.
              </li>
              <li>
                This data helped me undertand how the problem is and what I must
                do to solve it.
              </li>
            </ul>
            <figure className="mt-10">
              <Image src={reviews} alt="My design process" />
            </figure>
          </div>
          {/* user define  */}
          <div className="mt-24">
            <Heading chelsea text="User Define" />
            <p className="mt-3">
              After user research, I went ahead to create user personas, problem
              statement and empathy map based on my research isights
            </p>
            <div className="mt-12">
              <p className="uppercase font-black text-primary-dark mb-5">
                PERSONAS
              </p>
              <div className="flex space-x-3 sm:space-x-10">
                <figure>
                  <Image src={persona1} alt="PERSONAS" />
                </figure>
                <figure>
                  <Image src={persona2} alt="PERSONAS" />
                </figure>
              </div>
            </div>
            <div className="mt-12">
              <p className="uppercase font-black text-primary-dark mb-5">
                EMPATHY MAP
              </p>
              <figure>
                <Image src={empathyMap} alt="EMPATHY MAP" />
              </figure>
            </div>
            <div className="mt-12">
              <p className="uppercase font-black text-primary-dark mb-5">
                PROBLEM STATEMENTS
              </p>
              <div className="flex space-x-3 sm:space-x-10">
                <figure>
                  <Image src={problem1} alt="PROBLEM STATEMENTS" />
                </figure>
                <figure>
                  <Image src={problem2} alt="PROBLEM STATEMENTS" />
                </figure>
              </div>
            </div>
            <div className="mt-12">
              <p className="uppercase font-black text-primary-dark mb-5">
                USER JOURNEY MAP
              </p>
              <figure>
                <Image src={userJourney} alt="USER JOURNEY MAP" />
              </figure>
            </div>
          </div>
          {/* idetion process  */}
          <div className="mt-24">
            <Heading chelsea text="Ideation Process" />
            <p className="mt-3">
              Through rigorous brainstorming , I came up with series of ideas on
              how to improve the app for better user experience. Competitive
              audit was also a means of helping me through my ideation process{" "}
            </p>
            <div className="mt-12">
              <p className="uppercase font-black text-primary-dark mb-5">
                COMPETITIVE AUDIT
              </p>
              <figure>
                <Image src={competitive} alt="COMPETITIVE AUDIT" />
              </figure>
            </div>
          </div>
          <div className="mt-24 -mx-7 sm:-mx-16 lg:-mx-28">
            <Heading chelsea text="Wireframes" />

            <figure className="mt-6">
              <Image src={wireframe} alt="Wireframes" />
            </figure>
          </div>
          <div className="mt-24">
            <Heading chelsea text="UI Design (Style  guide)" />
            <div className="mt-12">
              <p className="uppercase font-black text-primary-dark mb-5">
                TYPOGRAPHY
              </p>
              <figure>
                <Image src={font} alt="font style guide" />
              </figure>
            </div>
            <div className="mt-12">
              <p className="uppercase font-black text-primary-dark mb-5">
                COLOURS
              </p>
              <div className="sm:flex sm:space-x-20 -mr-5 sm:-mr-0">
                <figure>
                  <Image src={colorLight} alt="color style guide" />
                </figure>
                <figure>
                  <Image src={colorDark} alt="color style guide" />
                </figure>
              </div>
            </div>
          </div>
          <div className="mt-24">
            <Heading chelsea text="Mobile Screens" />
            <div className="mt-12">
              <p className="uppercase font-black text-primary-dark mb-5">
                Splash and onboarding screens
              </p>
              <figure>
                <Image src={onboarding} alt="" />
              </figure>
            </div>
            <div className="mt-16">
              <p className="uppercase font-black text-primary-dark mb-5">
                Home screen
              </p>
              <div className="xl:flex items-center justify-center">
                <figure className="xl:w-4/5">
                  <Image src={home} alt="" />
                </figure>
                <p className="xl:w-1/3 text-base xl:-ml-32">
                  In the current chelsea app page, there was too many
                  information on the lastest page making it hard for the user to
                  find information. In my redesign, I arranged the information
                  on the home page in such a way that a user can find it easily.
                  <br />
                  <br />
                  The bottom navigation was also redesigned and I implemented
                  the core features like home instead of latest, fixtures, chat
                  and shop
                </p>
              </div>
            </div>
            <div className="mt-16">
              <p className="uppercase font-black text-primary-dark mb-5">
                Menu Nav
              </p>
              <div className="xl:flex items-center justify-center">
                <figure className="xl:w-4/5">
                  <Image src={menuNav} alt="" />
                </figure>
                <p className="xl:w-1/3 text-base xl:-ml-32">
                  For the menu navigation, I tried to make it a simple as
                  possible, I removed all the unneceasry information that
                  shouldnt be there and introduced a new feature where you can
                  switch from light mode to dark mode
                  <br />
                  <br />
                  For Good user experience, I included the help option incase
                  users have a problem with a feature
                </p>
              </div>
            </div>
            <div className="mt-16">
              <p className="uppercase font-black text-primary-dark mb-5">
                Fan Chat
              </p>
              <div className="xl:flex items-center justify-center">
                <figure className="xl:w-4/5">
                  <Image src={fanChat1} alt="" />
                </figure>
                <div className="xl:w-1/3 text-base xl:-ml-10 flex items-center flex-col">
                  <figure className="w-3/5 md:w-4/5 mb-5">
                    <Image src={fanChat2} alt="" />
                  </figure>
                  <p>
                    For the original design, fan chat wasn’t made available to
                    fans. So I redesigned it by making it available when logged
                    in.
                    <br />
                    <br />
                    Users can click on the small arrow button to reply, react,
                    copy or share the message
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-16">
              <p className="uppercase font-black text-primary-dark mb-5">
                Fixtures
              </p>
              <figure>
                <Image src={fixtures} alt="" />
              </figure>
              <p className="text-base mt-5">
                Redesigned the fixtures page to give it a simple and satisfying
                look. I added the calender feature where users can be able to
                view matches on their calender and sync it to their google or
                apple calender so as not to miss any future matches <br />
                <br />I also added ‘Buy ticket feature’ when viewing future
                matches to make it easier for the user to buy match ticket
                easily
              </p>
            </div>
            <div className="mt-16">
              <p className="uppercase font-black text-primary-dark mb-5">
              Shop
              </p>
              <div className="xl:flex items-center justify-center xl:flex-row-reverse">
                <figure className="xl:w-4/5">
                  <Image src={shop} alt="" />
                </figure>
                <p className="xl:w-2/5 text-base">
                For the videos section, I edited the feature and designed another feature called the ‘chelsea’ feature. I added a section for news articles, videos and Chelsea tv plus where subscribed user can watch exclusive content and livestream matches
                </p>
              </div>
            </div>
            <div className="mt-16">
              <p className="uppercase font-black text-primary-dark mb-5">
              Videos
              </p>
              <div className="xl:flex items-center justify-center">
                <figure className="xl:w-4/5">
                  <Image src={videos} alt="" />
                </figure>
                <p className="xl:w-1/3 text-base xl:-ml-32">
                For the videos section, I edited the feature and designed another feature called the ‘chelsea’ feature. I added a section for news articles, videos and Chelsea tv plus where subscribed user can watch exclusive content and livestream matches
                </p>
              </div>
            </div>
          </div>

          <div className="mt-24 -mx-7 sm:-mx-16 lg:-mx-28">
            <figure>
              <Image src={lightMode} alt="light mode" />
            </figure>
            <p className="text-center mt-3 text-primary-dark font-semibold text-2xl sm:text-3xl md:text-4xl">
              LIGHT MODE
            </p>
          </div>
          <div className="mt-16 sm:mt-28 -mx-7 sm:-mx-16 lg:-mx-28">
            <figure>
              <Image src={darkMode} alt="dark mode" />
            </figure>
            <p className="text-center mt-3 text-primary-dark font-semibold text-2xl sm:text-3xl md:text-4xl">
              DARK MODE
            </p>
          </div>
          <div className="mt-28">
            <div className="text-lg sm:text-xl md:text-2xl">
              <p>Check out the prototype:</p>
              <a
                className="text-blue-400 underline protolink"
                href="https://www.figma.com/proto/9ACOhNCymtCUmHFvwmo4oX/CHELSEA-APP?page-id=0%3A1&node-id=14%3A3&viewport=459%2C993%2C0.19&scaling=scale-down&starting-point-node-id=14%3A2"
                target={"_blank"}
                rel="noreferrer"
              >
                https://www.figma.com/proto/9ACOhNCymtCUmHFvwmo4oX/CHELSEA-APP?page-id=0%3A1&node-id=14%3A3&viewport=459%2C993%2C0.19&scaling=scale-down&starting-point-node-id=14%3A2
              </a>
            </div>
            <p className="text-xl sm:text-2xl md:text-4xl text-center my-20">
              Th😍nk you for watching
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OmegaBakery;
