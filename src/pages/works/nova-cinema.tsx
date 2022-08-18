import Image from "next/image";
import React from "react";
import bannerBg from "../../../public/images/novabg.png";
import bannerImg from "../../../public/images/nova.png";
import Layout from "../../components/Layout";
import Heading from "../../components/elements/Heading";
import designProcess from "../../../public/images/nova/novaDesignProcess.png";
import persona1 from "../../../public/images/nova/Persona 1.jpg";
import persona2 from "../../../public/images/nova/Persona 2 1.jpg";
import userJourney from "../../../public/images/nova/userJourney.jpg";
import problemStatement from "../../../public/images/nova/Problem Statement 1.jpg";
import siteMap from "../../../public/images/nova/sitemap for nova 1.jpg";
import wireframe from "../../../public/images/nova/wireframes.jpg"
import wireframe1 from "../../../public/images/nova/wire1.jpg";
import wireframe2 from "../../../public/images/nova/wire2.jpg";
import wireframe3 from "../../../public/images/nova/wire3.jpg";
import conclusion1 from "../../../public/images/nova/conclusuion1.jpg";
import conclusion2 from "../../../public/images/nova/conclusion2.jpg";
import styleGuide from "../../../public/images/nova/novaStyleGuide.jpg";
import bigScreens from "../../../public/images/nova/desktopScreen.jpg"
import smallScreens from "../../../public/images/nova/mobileScreen.jpg"
import yossee from "../../../public/images/yosseeAbout.png"
import home from "../../../public/images/nova/homepage.jpg"
import about from "../../../public/images/nova/about.jpg"
import bookTicket1 from "../../../public/images/nova/bookTickets.jpg"
import bookTicket2 from "../../../public/images/nova/book ticket – 8 1.jpg"
import payment from "../../../public/images/nova/pay – 8 1.jpg"
import success from "../../../public/images/nova/success.jpg"
import { usabilityStudy } from "../../utils/constants";

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
            style={{ color: "#FF4B2B" }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold sm:pt-10 capitalize"
          >
            Nova cinema
          </p>
          <figure className="w-10/12 sm:w-3/5">
            <Image src={bannerImg} alt="Omega bakery" />
          </figure>
        </div>
        {/* main */}
        <div className="text-lg md:text-xl px-7 sm:px-16 lg:px-28 font-medium">
          {/* project overview  */}
          <div className="mt-20">
            <Heading nova text={"PROJECT OVERVIEW"} />
            <div className="sm:flex justify-between mt-10">
              <div className="sm:w-1/2 relative mb-10 sm:mb-0">
                <p className="text-center border-2 inline-block relative left-1/2 -translate-x-1/2 border-novaBlue p-2 rounded-3xl mb-5">
                  About project
                </p>
                <p className="mb-10">
                  Nova cinema offers a way in which movies lovers can book
                  ticket and set reminder to book for upcoming movies
                </p>
                <p className="text-center border-2 inline-block relative left-1/2 -translate-x-1/2 border-novaBlue p-2 rounded-3xl mb-5">
                  Project goals
                </p>
                <p>
                  Providing smooth and great user experience to our customers to
                  prevent long queue and overcrowding in the cinema
                </p>
              </div>
              <div className="space-y-10">
                <p className="font-semibold">
                  ROLE: <span className="font-normal">UI/UX Designer</span>
                </p>
                <p className="font-semibold">
                  DURATION: <span className="font-normal">UI/UX Designer</span>
                </p>
                <p className="font-semibold">
                  TOOLS: <span className="font-normal">UI/UX Designer</span>
                </p>
              </div>
            </div>
          </div>
          {/* design process  */}
          <div
            style={{ background: "#FFCA92" }}
            className="-mx-28 mt-24 flex flex-col items-center py-5 px-16"
          >
            <Heading nova text={"DESIGN PROCESS"} />
            <figure className="-mt-10 md:-mt-20">
              <Image src={designProcess} alt="DESIGN PROCESS" />
            </figure>
          </div>
          {/* peronas  */}
          <div className="mt-24">
            <Heading nova text={"USER PERSONAS"} />
            <div className="sm:flex sm:space-x-10">
              <figure>
                <Image src={persona1} alt="USER PERSONAS" />
              </figure>
              <figure>
                <Image src={persona2} alt="USER PERSONAS" />
              </figure>
            </div>
          </div>
          {/* u-journey & problem statement  */}
          <div className="mt-24 md:flex md:space-x-10 space-y-10 md:space-y-0">
            <div>
              <Heading nova text={"USER JOURNEY MAP"} />
              <figure>
                <Image src={userJourney} alt="USER JOURNEY MAP" />
              </figure>
            </div>
            <div>
              <Heading nova text={"PROBLEM STATEMENTS"} />
              <figure>
                <Image src={problemStatement} alt="PROBLEM STATEMENTS" />
              </figure>
            </div>
          </div>
          {/* sitemap */}
          <div className="mt-24">
            <Heading nova text={"SITEMAP"} />
            <figure className="mt-7">
              <Image src={siteMap} alt="SITEMAP" />
            </figure>
          </div>
          <div className="mt-24">
            <Heading nova text={"WIREFRAMES"} />
            <p className="mt-6">
              After ideating, I drew 3 different wireframes for the homepage
            </p>
            <div className="mt-3 flex space-x-4">
              <figure>
                <Image src={wireframe1} alt="WIREFRAMES" />
              </figure>
              <figure>
                <Image src={wireframe2} alt="WIREFRAMES" />
              </figure>
              <figure>
                <Image src={wireframe3} alt="WIREFRAMES" />
              </figure>
            </div>
            <div className="mt-8">
              <p className="uppercase font-black mb-5">CONCLUSION:</p>
              <div className="flex space-x-10 px-7 sm:px-14">
                <figure>
                  <Image src={conclusion1} alt="WIREFRAMES" />
                  <p className="text-center mb-2 font-semibold text-xl sm:text-2xl">
                    Desktop
                  </p>
                </figure>
                <figure>
                  <Image src={conclusion2} alt="WIREFRAMES" />
                  <p className="text-center mb-2 font-semibold text-xl sm:text-2xl">
                    Mobile
                  </p>
                </figure>
              </div>
            </div>
          </div>
          <div className="mt-24 -mx-7 sm:-mx-16 lg:-mx-28">
            <Heading nova text="DIGITAL WIREFRAMES" />
            <figure className="mt-10">
            <Image src={wireframe} alt="WIREFRAMES" />
            </figure>
          </div>
          <div className="mt-24">
            <Heading nova text="REDEFINGING DESIGN (UI)" />
            <figure className="mt-10">
            <Image src={styleGuide} alt="REDEFINGING DESIGN (UI)" />
            </figure>
          </div>
          <div className="mt-24">
            <Heading nova text="MOCKUPS" />
            <div className="mt-10">
              <p className="font-bold text-2xl sm:text-3xl mb-10 text-center">Homepage</p>
              <figure>
                <Image src={home} alt="" />
              </figure>
            </div>
            <div className="mt-16 sm:flex justify-between items-center">
              <p className="font-bold text-2xl sm:text-3xl mb-10 text-center">About</p>
              <figure className="sm:w-10/12">
                <Image src={about} alt="" />
              </figure>
            </div>
            <div className="mt-16">
            <p className="font-bold text-2xl sm:text-3xl mb-10 text-center">Book tickets</p>
            <div className="relative">
            <figure className="md:w-10/12">
                <Image src={bookTicket1} alt="" />
              </figure>
              <p className="font-bold text-lg sm:text-2xl md:absolute md:w-1/3 top-10 right-20">Users can book ticket in 3 easy steps on one page</p>
            </div>
            <div className="sm:flex sm:flex-row-reverse items-center justify-between mt-10">
            <figure className="sm:w-8/12 md:w-10/12">
                <Image src={bookTicket2} alt="" />
              </figure>
              <p className="font-bold text-lg sm:text-2xl sm:w-2/5 sm:mr-5 md:mr-20">After successful selection, users can then view checkout details. add ticket to cart or add food and then proceed to checkout</p>
            </div>
            </div>
            <div className="mt-16">
            <p className="font-bold text-2xl sm:text-3xl mb-10 text-center">Payment</p>
            <div className="sm:flex items-center justify-between">
            <figure className="sm:w-7/12">
                <Image src={payment} alt="" />
              </figure>
              <p className="font-bold text-lg sm:text-2xl sm:w-2/5">After checking out, users proceed to pay for their e-tickets with either creditcard, paypal or coupons gifted</p>
            </div>
            <div className="mt-16">
              <p className="font-bold text-2xl sm:text-3xl mb-10 text-center">Success</p>
              <figure>
                <Image src={success} alt="" />
              </figure>
            </div>
          </div>
          <div className="mt-24 -mx-7 sm:-mx-16 lg:-mx-28">
            <Heading nova text="ALL SCREENS" />
            <figure className="mt-10">
            <Image src={bigScreens} alt="ALL DESKTOP SCREENS" />
            </figure>
            <figure className="mt-10">
            <Image src={smallScreens} alt="ALL MOBILE SCREENS" />
            </figure>
          </div>
          <div className="mt-24">
            <Heading nova text="PROTOTYPE TESTING" />
            <p className="text-center mt-5">I conducted just one round of usability study to help me redefine my wireframes into creating smooth and accessible mockups for the users</p>
            <div className="mt-10">
              <p className="capitalize text-2xl font-semibold">Usability study findings</p>
              <div className="space-y-6 mt-5">
                {usabilityStudy.map((text, i) => (
                  <div key={i} className="flex space-x-3 items-center">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full grid place-items-center text-lg sm:text-2xl text-primary-dark bg-blue-500 font-bold">{i+1}</div>
                    <p className="w-9/12">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-28 bg-red-500 flex flex-col text-lg sm:text-xl items-center px-7 sm:px-20 py-14 font-semibold text-center">
          <figure className="w-32 sm:w-44 mb-5">
            <Image src={yossee} alt="" />
          </figure>
          <p>Thank you for taking your time to read and review my case study. If you would like to get in touch with me to ask any questions or collaborate on a project, you can reach out to me by:</p>
          <p className="mt-7">Email: <a className="underline" href="mailto:adeyosola7@gmail.com">adeyosola7@gmail.com</a></p>
          <p>Phone: <a className="underline" href="tel:+2348145311247">+2348145311247</a></p>
        </div>
      </div>
    </Layout>
  );
};

export default OmegaBakery;
