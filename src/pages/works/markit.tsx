import Image from "next/image";
import React from "react";
import Layout from "../../components/Layout";
import bannerBg from "../../../public/images/markitbg.png";
import bannerImg from "../../../public/images/markit.png";
import product from "../../../public/images/markit/product.jpg";
import process from "../../../public/images/markit/process.jpg";
import timeline from "../../../public/images/markit/timeline.jpg";
import persona from "../../../public/images/markit/persona.jpg";
import persona2 from "../../../public/images/markit/persona 2 1.jpg";
import competitiveaudit from "../../../public/images/markit/competitiveaudit.jpg";
import userflow from "../../../public/images/markit/user flow markit 1.jpg";
import sitemap from "../../../public/images/markit/sitemap.jpg";
import wireframes from "../../../public/images/markit/wireframes.jpg";
import dwireframes from "../../../public/images/markit/dwireframes.jpg";
import responsivedesign from "../../../public/images/markit/responsivedesign.jpg";
import onboarding from "../../../public/images/markit/onboarding.jpg";
import login1 from "../../../public/images/markit/login1.jpg";
import login2 from "../../../public/images/markit/login2.jpg";
import homepage from "../../../public/images/markit/homepage.jpg";
import search from "../../../public/images/markit/search.jpg";
import services from "../../../public/images/markit/services.jpg";
import services2 from "../../../public/images/markit/services2.jpg";
import cart from "../../../public/images/markit/cart.jpg";
import checkout from "../../../public/images/markit/checkout.jpg";
import ordercomplete from "../../../public/images/markit/ordercomplete.jpg";
import other from "../../../public/images/markit/other.jpg";
import responsiveweb from "../../../public/images/markit/responsiveweb.jpg";
import fullscreen1 from "../../../public/images/markit/fullscreen1.jpg";
import fullscreen2 from "../../../public/images/markit/fullscreen2.jpg";
import styleguides from "../../../public/images/markit/styleguides.jpg";
import notes from "../../../public/images/markit/notes.jpg";
import character from "../../../public/images/markit/character 12.png";
import template1 from "../../../public/images/markit/template1.jpg";
import template2 from "../../../public/images/markit/template2.jpg";
import Heading from "../../components/elements/Heading";
import { markitCaseStudies } from "../../utils/constants";
import LinkComponent from "../../components/elements/Link";

const Markit = () => {
  return (
    <Layout activePage="work">
      <div>
        {/* banner  */}
        <div
          className="pt-24 flex flex-col items-center banner"
          style={{ background: `url(${bannerBg.src})` }}
        >
          <p className="text-3xl sm:text-4xl text-primary-dark md:text-6xl font-bold sm:pt-10 capitalize">
            Markit
          </p>
          <figure className="w-10/12 sm:w-3/5 -mt-10">
            <Image src={bannerImg} alt="Omega bakery" />
          </figure>
        </div>
        {/* main */}
        <div className="text-lg md:text-xl px-7 sm:px-16 lg:px-28 text-gray-600 font-medium">
          {/* case study  */}
          <div className="mt-24">
            <Heading
              variant="small"
              align="center"
              text="UX Case study Include"
            />
            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-y-10 mt-16 text-base sm:text-lg md:text-2xl">
              {markitCaseStudies.map((text, i) => (
                <LinkComponent href={`#${text}`} key={i}>
                  <p className="text-center cursor-pointer">
                    <span className="italic font-bold">{`${
                      i + 1 >= 10 ? "" : "0"
                    }${i + 1}`}</span>
                    <br />
                    {text}
                  </p>
                </LinkComponent>
              ))}
            </div>
          </div>
          <div className="mt-24" id="Project overview">
            <Heading markit text="Project overview" fill="#137BF1" num="01" />
            <div className="flex flex-col items-center">
              <p className="text-2xl mt-10 text-purple-500 font-semibold text-center">
                The product
              </p>
              <figure className="sm:w-2/3 md:w-1/2 mt-7">
                <Image src={product} alt="" />
              </figure>
              <p className="mt-5">
                Markit is an online application focused on saving lives and
                helping people grow their business. It’s an online application
                that helps prevent overcrowding in the nigerian market during
                these covid-19 period.Its target users include all nigeria
                citizens who want to build up their business locally and for
                customers who want to employ local services whether its
                shopping, plumbing, hair dressing and the likes
              </p>
              <div className="mt-10 sm:flex justify-between w-full">
                <div className="space-y-5">
                  <div>
                    <p className="text-purple-400 mb-3 text-xl sm:text-2xl font-semibold">Project</p>
                    <p>
                      iOS mobile app <br />
                      Responsive webite
                    </p>
                  </div>
                  <div>
                    <p className="text-purple-400 mb-3 text-xl sm:text-2xl font-semibold">
                      Project duration
                    </p>
                    <p>3 Weeks</p>
                  </div>
                  <div>
                    <p className="text-purple-400 mb-3 text-xl sm:text-2xl font-semibold">My role</p>
                    <p>UI/UX Designer</p>
                  </div>
                  <div>
                    <p className="text-purple-400 mb-3 text-xl sm:text-2xl font-semibold">Tools</p>
                    <p>Figma</p>
                  </div>
                </div>
                <div className="mt-10 sm:mt-0">
                  <p className="text-purple-400 mb-3 text-xl sm:text-2xl font-semibold">
                    My responsibilities
                  </p>
                  <ul className="list-disc space-y-2 list-inside">
                    <li>Conducting Interviews</li>
                    <li>User research</li>
                    <li>Affinity mapping</li>
                    <li>Personas</li>
                    <li>Competitive analysis</li>
                    <li>User flow</li>
                    <li>Information architecture</li>
                    <li>Wireframing</li>
                    <li>Prototyping</li>
                    <li>Usabilty study</li>
                    <li>Responsive design</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <p className="text-purple-400 mb-3 text-xl sm:text-2xl font-semibold">The Problem:</p>
              <p>
                In the recent years, overcrowding has been a major issue
                affecting nigeria. 90% of overcrowding happens in the
                market.This has been a great fear since the breakout of covid-19
                cases{" "}
              </p>
            </div>
            <div className="mt-10">
              <p className="text-purple-400 mb-3 text-xl sm:text-2xl font-semibold">The Goal:</p>
              <p>
                Design an app that serves as an online market platform that help
                people shop from their favourite stalls or supermarket locally.
                Also designed to help people employ local services{" "}
              </p>
            </div>
          </div>
          <div className="mt-24" id="Design process">
            <Heading markit text="Design process" fill="#FF7262" num="02" />
            <p className="mt-10">
              I followed the design thinking process with a human-centred
              approach. Design thinking is a non-linear, iterative process that
              included five phase; brainstorm, define, ideate, prototype and
              test
            </p>
            <figure className="mt-5">
              <Image src={process} alt="" />
            </figure>
          </div>
          <div className="mt-24" id="Timeline">
            <Heading markit text="Timeline" fill="#B6E13D" num="03" />
            <figure className="mt-5">
              <Image src={timeline} alt="" />
            </figure>
          </div>
          <div className="mt-24" id="User research">
            <Heading markit text="User research" fill="#FF9A50" num="04" />
            <p className="text-center mt-6">
              Initially, I conducted face-to-face interview to determine and
              define users painpoints, this helped me build problem statements
              for each user. For the buyer interview, the feedback i received
              made it very clear that most users would prefer online shopping to
              avoid going to the market for fear of crowds. For the seller
              interview, most interview reported feeling sad for losing their
              local customers to big and fancy supermarket where they don’t have
              to rush to buy goods
            </p>
            <div
              style={{ background: "#7CE4F8" }}
              className="mt-10 py-10 pl-10 pr-5 sm:px-14 md:px-24 rounded md:w-9/12"
            >
              <p className="text-center text-purple-500 font-semibold text-xl sm:text-2xl mb-5">
                Research Questions for Buyer
              </p>
              <ol className="list-decimal space-y-1">
                <li>How often do you buy a product online?</li>
                <li>Did you use a mobile app to sell your product?</li>
                <li>How do you decide from which seller to buy from?</li>
                <li>Tell me about issues you’ve faced when buying a product</li>
              </ol>
            </div>
            <div className="w-full justify-end flex">
              <div
                style={{ background: "#7CE4F8" }}
                className="mt-10 py-10 pl-10 pr-5 sm:px-14 md:px-24 rounded md:w-9/12"
              >
                <p className="text-center text-purple-500 font-semibold text-xl sm:text-2xl  mb-5">
                  Research Questions for Seller
                </p>
                <ol className="list-decimal space-y-1">
                  <li>Ever sold a product online?</li>
                  <li>
                    What’s stopping you from selling your products online?
                  </li>
                  <li>Tell me about issues you’ve faced when selling</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="mt-24" id={"Personas"}>
            <div id="Problem statements">
              <Heading
                markit
                text="User personas & Problem statements"
                fill="#E7BD28"
                num="05 & 06"
              />
              <div className="mt-5">
                <p className="text-purple-500 font-semibold text-xl sm:text-2xl mb-5">
                  Problem statement:
                </p>
                <p className="mt-4">
                  Timilehin is a graduate/nysc server who needs an app for
                  shopping for foodstuff because he doesn’t want to go all the
                  way to the market for fear of overcrowding
                </p>
                <figure className="mt-8">
                  <Image src={persona} alt="" />
                </figure>
              </div>
              <div className="mt-10">
                <p className="text-purple-500 font-semibold text-xl sm:text-2xl mb-5">
                  Problem statement:
                </p>
                <p className="mt-4">
                  Mrs Adegoke is a trader who needs to provide the best online
                  experience for her customers because most of her customers are
                  being lost to competitors for her not being tech savvy
                </p>
                <figure className="mt-8">
                  <Image src={persona2} alt="" />
                </figure>
              </div>
            </div>
          </div>
          <div className="mt-24" id={"Competitive analysis"}>
            <Heading markit text="Competitive audit" fill="#FF9A50" num="07" />
            <p className="mt-6">
              An audit of a few competitor’s products provided direction on gaps
              and opportunities to address with the markit app
            </p>
            <figure className="mt-8">
              <Image src={competitiveaudit} alt="" />
            </figure>
          </div>
          <div className="mt-24" id={"User flow"}>
            <Heading markit text="User flow" fill="#92FF50" num="08" />
            <p className="mt-6">
              During the ideation phase, I came up with user flow flow the app
              for the buyer and the seller that displays the possible path which
              the user will take when navigating my app
            </p>
            <figure className="mt-8">
              <Image src={userflow} alt="" />
            </figure>
          </div>
          <div className="mt-24" id={"Sitemap"}>
            <Heading markit text="Sitemap" fill="#E1397F" num="09" />
            <p className="mt-6">
              I used the markit sitemap to guide the organizational structure of
              each screen’s design to ensure a cohesive and consistent
              experience across devices.
            </p>
            <figure className="mt-8">
              <Image src={sitemap} alt="" />
            </figure>
          </div>
          <div className="mt-24" id={"Wireframes"}>
            <Heading markit text="Wireframes" fill="#C62EDF" num="10" />
            <p className="mt-6">
              While Ideating, I came up with sketches that represented the
              skeleton of the interface. The basic structure was quick and easy
              to reshape so that usability is ensured before further design
              takes place
            </p>
            <figure className="mt-8">
              <Image src={wireframes} alt="" />
            </figure>

            <p className="text-center text-purple-500 font-semibold text-xl sm:text-2xl mb-5 mt-20">
              Digital wireframes
            </p>
            <p>
              After ideating and drafting some paper wireframes, I created the
              initial designs for the markit app. These designs focused on
              delivering personalized guidance to users to help serach and buy
              from the app.{" "}
            </p>
            <p className="mt-5 text-xl sm:text-xl md:text-3xl text-center font-semibold text-amber-600">
              Mobile application digtal wireframes
            </p>
            <figure className="mt-8 -mx-7 sm:-mx-16 lg:-mx-28">
              <Image src={dwireframes} alt="" />
            </figure>
            <p className="mt-20 text-xl sm:text-xl md:text-3xl text-center font-semibold text-amber-600 md:-mb-10 relative z-30">
              Responsive webdesign
            </p>
            <figure className="-mx-7 sm:-mx-16 lg:-mx-28">
              <Image src={responsivedesign} alt="" />
            </figure>
          </div>
          <div className="mt-24" id="Mockups">
            <Heading markit text="Mockups" fill="#E03333" num="11" />
            <div className="mt-5">
              <Heading sphere text="Mobile Application" />
              <div className="mt-10">
                <p className="text-purple-500 font-semibold text-xl sm:text-2xl mb-5">
                  Onboarding
                </p>
                <figure>
                  <Image src={onboarding} alt="" />
                </figure>
              </div>
              <div className="mt-16">
                <p className="text-purple-500 font-semibold text-xl sm:text-2xl mb-5">
                  Login/signup
                </p>
                <div className="sm:flex sm:space-x-10">
                  <figure>
                    <Image src={login1} alt="" />
                  </figure>
                  <figure>
                    <Image src={login2} alt="" />
                  </figure>
                </div>
              </div>
              <div className="mt-16">
                <p className="text-purple-500 font-semibold text-xl sm:text-2xl mb-5">
                  Homepage
                </p>
                <figure>
                  <Image src={homepage} alt="" />
                </figure>
              </div>
              <div className="mt-10">
                <p className="text-purple-500 font-semibold text-xl sm:text-2xl mb-5">
                  Search
                </p>
                <figure>
                  <Image src={search} alt="" />
                </figure>
              </div>
              <div className="mt-10">
                <p className="text-purple-500 font-semibold text-xl sm:text-2xl mb-5">
                  Services
                </p>
                <figure>
                  <Image src={services} alt="" />
                </figure>
                <figure className="mt-10">
                  <Image src={services2} alt="" />
                </figure>
              </div>
              <div className="mt-10">
                <p className="text-purple-500 font-semibold text-xl sm:text-2xl mb-5">
                  Cart
                </p>
                <figure>
                  <Image src={cart} alt="" />
                </figure>
              </div>
              <div className="mt-10">
                <p className="text-purple-500 font-semibold text-xl sm:text-2xl mb-5">
                  Checkout process
                </p>
                <figure>
                  <Image src={checkout} alt="" />
                </figure>
              </div>
              <div className="mt-10">
                <p className="text-purple-500 font-semibold text-xl sm:text-2xl mb-5">
                  Order complete
                </p>
                <div className="flex items-center justify-center">
                  <figure className="w-6/12">
                    <Image src={ordercomplete} alt="" />
                  </figure>
                </div>
              </div>
              <div className="mt-10">
                <p className="text-purple-500 font-semibold text-xl sm:text-2xl mb-5">
                  Other screens
                </p>
                <figure>
                  <Image src={other} alt="" />
                </figure>
              </div>
            </div>
            <div className="mt-24">
              <Heading text="Responsive website" sphere />
              <p className="mt-6 text-center">
                The designs for screen size variation included mobile, tablet,
                and desktop. I optimized the designs to fit specific user needs
                of each device and screen size.
              </p>
              <div className="flex items-center justify-center">
                <figure className="mt-4 sm:w-3/5">
                  <Image src={responsiveweb} alt="" />
                </figure>
              </div>
            </div>
            <div className="mt-16">
              <p className="text-purple-500 font-semibold text-2xl mb-5">
                Full screens
              </p>

              <figure className="">
                <Image src={fullscreen1} alt="" />
              </figure>
              <figure className="mt-16">
                <Image src={fullscreen2} alt="" />
              </figure>
            </div>
            <div className="mt-24">
              <Heading text="Style guides" sphere />
              <figure className="mt-5 sm:mt-10">
                <Image src={styleguides} alt="" />
              </figure>
            </div>
          </div>
          <div className="mt-28" id="Usability test">
            <Heading markit text="&nbsp;&nbsp;&nbsp;&nbsp;Test" fill="#0037FC" num="&nbsp;&nbsp;&nbsp;&nbsp;12" />
            <div className="mt-6">
              <p className="text-center text-purple-500 font-semibold text-xl sm:text-2xl mb-5">
                Usability study parameters
              </p>
              <div className="sm:flex justify-center items-center sm:space-x-20 space-y-10 sm:space-y-0">
                <div className="space-y-4">
                  <div className="text-center">
                    <p className="font-semibold">Study type:</p>
                    <p>Unmoderated usability study</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold">Participants:</p>
                    <p>4 participants</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="text-center">
                    <p className="font-semibold">Location</p>
                    <p>Nigeria, Remote</p>
                  </div>

                  <div className="text-center">
                    <p className="font-semibold">Length:</p>
                    <p>10-20 minutes</p>
                  </div>
                </div>
              </div>
              <p className="text-center mt-7">
                After usability study was done, I gathered some themes and
                insights from my finfings and prioritized them
              </p>
            </div>
            <div className="mt-16 sm:flex sm:space-x-10 items-center">
                <figure className="sm:w-10/12">
                    <Image src={notes} alt="" />
                </figure>
                <p className="text-amber-500 sm:w-1/3 text-center">My notes on usability study</p>
            </div>
            <div className="mt-16 sm:flex sm:space-x-10 items-center sm:flex-row-reverse">
                <figure className="sm🧑 w-10/12">
                    <Image src={template1} alt="" />
                </figure>
                <p className="text-amber-500 sm:w-1/3 text-center">Used the theme I identified to form my insights</p>
            </div>
            <figure className="mt-16">
                    <Image src={template2} alt="" />
                </figure>
          </div>
        </div>
        <footer className="mt-44 relative bg-red-500 flex flex-col text-lg sm:text-xl items-center px-7 sm:px-20 py-14 font-semibold text-center">
          <figure className="w-32 sm:w-44 mb-5 absolute -top-28 sm:-top-1/3 left-1/2 -translate-x-1/3">
            <Image src={character} alt="" />
          </figure>
          <p className="text-primary-dark text-3xl font-semibold mt-28 sm:mt-44">
          Thank you!!!
          </p>
          <p className="mt-6">If you like my work, appreciate it and feel free to share your feed back</p>
          <p className="mt-6">
              <span className="text-primary-dark">Adetimilehin Adeyosola</span><br />
              <span className="text-green-800">Product Designer</span>
          </p>
          <p className="mt-7">Email: <a className="underline" href="mailto:adeyosola7@gmail.com">adeyosola7@gmail.com</a></p>
          <p>Phone: <a className="underline" href="tel:+2348145311247">+2348145311247</a></p>
        </footer>
      </div>
    </Layout>
  );
};

export default Markit;
