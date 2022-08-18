import type { NextPage } from "next";
import AboutFooter from "../components/AboutFooter";
import DesignProcess from "../components/DesignProcess";
import LinkComponent from "../components/elements/Link";
import HeroSection from "../components/HeroSection";
import Layout from "../components/Layout";
import Summary from "../components/Summary";
import Works from "../components/Works";

const Home: NextPage = () => {
  return (
    <Layout activePage="home">
      <>
        <HeroSection />
        <LinkComponent href="#main">
        <div className="flex flex-col justify-center items-center relative -top-5 arrow cursor-pointer">
          <svg
           className="w-4 sm:w-3"
            viewBox="0 0 54 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.54419 1.172C2.2943 0.422117 3.31154 0.000854492 4.37219 0.000854492C5.43285 0.000854492 6.45008 0.422117 7.20019 1.172L27.0002 20.972L46.8002 1.172C47.5546 0.443369 48.565 0.0401894 49.6138 0.0493031C50.6626 0.0584167 51.6658 0.479094 52.4075 1.22073C53.1491 1.96236 53.5698 2.96561 53.5789 4.0144C53.588 5.06318 53.1848 6.07359 52.4562 6.828L29.8282 29.456C29.0781 30.2059 28.0609 30.6272 27.0002 30.6272C25.9395 30.6272 24.9223 30.2059 24.1722 29.456L1.54419 6.828C0.794309 6.07789 0.373047 5.06066 0.373047 4C0.373047 2.93934 0.794309 1.92211 1.54419 1.172Z"
              fill="#7A81F3"
            />
          </svg>
          <svg
           className="w-5 sm:w-4"
            viewBox="0 0 54 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.54419 1.172C2.2943 0.422117 3.31154 0.000854492 4.37219 0.000854492C5.43285 0.000854492 6.45008 0.422117 7.20019 1.172L27.0002 20.972L46.8002 1.172C47.5546 0.443369 48.565 0.0401894 49.6138 0.0493031C50.6626 0.0584167 51.6658 0.479094 52.4075 1.22073C53.1491 1.96236 53.5698 2.96561 53.5789 4.0144C53.588 5.06318 53.1848 6.07359 52.4562 6.828L29.8282 29.456C29.0781 30.2059 28.0609 30.6272 27.0002 30.6272C25.9395 30.6272 24.9223 30.2059 24.1722 29.456L1.54419 6.828C0.794309 6.07789 0.373047 5.06066 0.373047 4C0.373047 2.93934 0.794309 1.92211 1.54419 1.172Z"
              fill="#7A81F3"
            />
          </svg>
          <svg
           className="w-6 sm:w-5"
            viewBox="0 0 54 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.54419 1.172C2.2943 0.422117 3.31154 0.000854492 4.37219 0.000854492C5.43285 0.000854492 6.45008 0.422117 7.20019 1.172L27.0002 20.972L46.8002 1.172C47.5546 0.443369 48.565 0.0401894 49.6138 0.0493031C50.6626 0.0584167 51.6658 0.479094 52.4075 1.22073C53.1491 1.96236 53.5698 2.96561 53.5789 4.0144C53.588 5.06318 53.1848 6.07359 52.4562 6.828L29.8282 29.456C29.0781 30.2059 28.0609 30.6272 27.0002 30.6272C25.9395 30.6272 24.9223 30.2059 24.1722 29.456L1.54419 6.828C0.794309 6.07789 0.373047 5.06066 0.373047 4C0.373047 2.93934 0.794309 1.92211 1.54419 1.172Z"
              fill="#7A81F3"
            />
          </svg>
        </div>
        </LinkComponent>
        <div className="pt-28 px-7 sm:px-24 lg:px-28" id="main">
          <Summary />
          <Works />
        </div>
        <DesignProcess />
        <AboutFooter />
      </>
    </Layout>
  );
};

export default Home;
