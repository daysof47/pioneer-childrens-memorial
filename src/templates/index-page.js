import React from "react";
// import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import SlideShow from "../components/home/SlideShow";
import Fade from "react-reveal/Fade";
import Leaf1 from "../img/leaf-1.png";
import Leaf2 from "../img/leaf-2.png";
import Leaf3 from "../img/leaf-3.png";
import FamilySearchLogo from "../img/familysearch-logo.png";
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";
import Line from "../components/Line";
import HugeText from "../components/HugeText";
import IntroBackgroundSection from "../components/IntroBackgroundSection";
import BodyBackgroundSection from "../components/BodyBackgroundSection";
import FeaturedStoryHome from "../components/home/FeaturedStoryHome";
import TellStory from "../components/home/TellStory";
import SubscribeForm from "../components/SubscribeForm";
import AboutStatue from "../components/home/AboutStatue";
import VisitStatue from "../components/home/VisitStatue";

export const IndexPageTemplate = ({ frontmatter }) => (
  <div>
    <ParallaxProvider>
      <Hero
        image={frontmatter.heroImage}
        content={{
          heading: frontmatter.heading,
          subheading: frontmatter.subheading
        }}
        home={true}
      />
      <LeafEl1 />
      <LeafEl2 />
      <div className="home-scroll-line"></div>
      <Line mobile={20} desk={48} />
      <IntroBackgroundSection>
        <section>
          <Fade>
            <div className="text-center mx-auto max-w-3xl px-8">
              <h4 className="uppercase tracking-widest text-green mb-4 max-w-lg mx-auto">
                {frontmatter.intro.subheading}
              </h4>
              <h2 className="text-3xl lg:text-4xl mb-6">
                {frontmatter.intro.heading}
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: frontmatter.intro.description
                }}
              ></div>
              {/*
              <Link
                to={frontmatter.intro.link}
                className="inline-block py-4 px-8 bg-green text-white uppercase tracking-widest text-sm"
              >
                {frontmatter.intro.linkText}
              </Link>
               */}
            </div>
          </Fade>
          <Line mobile={2} desk={64} />
        </section>
        <LeafEl3 />
        <section>
          <div className="container mx-auto lg:mt-24">
            <SlideShow images={frontmatter.gallery} />
          </div>
        </section>
        <Line mobile={20} desk={48} />
      </IntroBackgroundSection>
      <WomenParallax />
      <HugeText text="The Statues" start="20" finish="-40" />
      <section className="p-4 lg:py-24 mb-12">
        <div className="container mx-auto">
          <div className="flex justify-end">
            <div className="w-full lg:w-1/2 p-4">
              <Fade right distance="50px">
                <div>
                  <h4 className="uppercase tracking-widest text-green mb-4 text-center lg:text-left">
                    {frontmatter.mainpitch.subheading}
                  </h4>
                  <h2 className="text-3xl lg:text-4xl mb-6 text-center lg:text-left">
                    {frontmatter.mainpitch.heading}
                  </h2>
                  <div
                    className="mb-8"
                    dangerouslySetInnerHTML={{
                      __html: frontmatter.mainpitch.description
                    }}
                  ></div>
                  {/*
                  <div className="text-center lg:text-left">
                    <Link
                      to={frontmatter.mainpitch.link}
                      className="inline-block py-4 px-8 bg-green text-white uppercase tracking-widest text-sm"
                    >
                      {frontmatter.mainpitch.linkText}
                    </Link>
                  </div>
                   */}
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto">
          <FeaturedStoryHome />
        </div>
      </section>
      <section className="py-4 mt-48">
        <TellStory content={frontmatter.submitStoryCta} />
      </section>
      <BodyBackgroundSection>
        <Line mobile={20} desk={20} />
        <section className="py-4 lg:py-12">
          <div className="container mx-auto text-center">
            <div className="mb-16 lg:mb-36">
              <h4 className="uppercase tracking-widest text-green mb-4 max-w-xl mx-auto">
                This website has been made possible by the hard work and
                generous gifts from our donors.
              </h4>
              <h2 className="text-3xl lg:text-4xl">Our Donors</h2>
            </div>
            <ul className="font-lora text-green text-4xl flex justify-around flex-wrap italic leading-tight tracking-wide">
              <Fade bottom>
                {DonorList.map(donor => {
                  return (
                    <li key={donor} className="w-full md:w-1/3 my-3 lg:my-8">
                      <div
                        className="max-w-sm p-4 mx-auto"
                        dangerouslySetInnerHTML={{ __html: donor }}
                      ></div>
                    </li>
                  );
                })}
              </Fade>
            </ul>
          </div>
        </section>
        <Line mobile={20} desk={48} />
        <section id="visit">
          <div className="container mx-auto relative">
            <div className="w-full lg:w-2/5 mb-32 lg:mb-4">
              <Fade left distance="50px">
                <div className="p-8">
                  {/* <h4 className="uppercase tracking-widest text-green mb-4 text-center lg:text-left">
                    {frontmatter.visit.subheading}
                  </h4> */}
                  <h2 className="text-3xl lg:text-4xl mb-6 text-center lg:text-left">
                    {frontmatter.visit.heading}
                  </h2>
                  <div className="mb-8">{frontmatter.visit.description}</div>
                  <a
                    href="https://www.google.com/maps/place/This+Is+The+Place+Heritage+Park/@40.7526393,-111.8180033,17z/data=!3m1!4b1!4m5!3m4!1s0x87525e2bd2441443:0xdf4e3ffc5c0526e4!8m2!3d40.7526353!4d-111.8158093"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block lg:inline-block w-48 mx-auto py-4 px-8 bg-green text-white uppercase tracking-widest text-sm"
                  >
                    {frontmatter.visit.linkText}
                  </a>
                </div>
              </Fade>
            </div>
          </div>
          <div className="lg:float-right w-full" style={{ maxWidth: "1000px" }}>
            <Parallax y={[-45, 0]} tagOuter="figure">
              <VisitStatue />
            </Parallax>
          </div>
        </section>
        <section id="subscribe" style={{ clear: "both" }}>
          <div className="container bg-tan p-8 py-24 lg:py-24 mb-12 relative">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl mb-6">
                “Children of the Trail” Newsletter
              </h2>
              <p>
                To receive more information about the pioneer children’s
                memorial and how you can help it grow, please provide your name
                and email address in the form below.
              </p>
              <SubscribeForm />
            </div>
          </div>
          <div className="container bg-tan p-8 py-24 lg:py-24 float-right relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl mb-6">Find Your Family</h2>
              <p className="mb-4">
                <img
                  src={FamilySearchLogo}
                  alt="Family Search Logo"
                  className="mx-auto"
                />
              </p>
              <p className="mb-4">{frontmatter.familysearch}</p>
              <p>
                <a
                  href="https://www.familysearch.org/en/"
                  target="_blank"
                  className="font-bold text-green uppercase tracking-wider"
                  rel="noopener noreferrer"
                >
                  Explore Family Search →
                </a>
              </p>
            </div>
          </div>
          <div className="clearfix"></div>
        </section>
      </BodyBackgroundSection>
    </ParallaxProvider>
  </div>
);

// IndexPageTemplate.propTypes = {
//   heroImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//   title: PropTypes.string,
//   heading: PropTypes.string,
//   subheading: PropTypes.string,
//   mainpitch: PropTypes.object,
//   intro: PropTypes.object,
//   gallery: PropTypes.array
// };

const LeafEl1 = () => (
  <div className="hidden lg:block relative">
    <div
      style={{
        position: "absolute",
        left: "5%",
        top: "-80px",
        zIndex: "100",
        pointerEvents: "none"
      }}
    >
      <Parallax y={[-10, 80]} tagOuter="figure">
        <img src={Leaf1} alt="leaf" />
      </Parallax>
    </div>
  </div>
);
const LeafEl2 = () => (
  <div className="hidden lg:block relative">
    <div
      style={{
        position: "absolute",
        left: "30%",
        top: "0px",
        zIndex: "99",
        pointerEvents: "none"
      }}
    >
      <Parallax y={[-20, 0]} tagOuter="figure">
        <img src={Leaf2} alt="leaf" />
      </Parallax>
    </div>
  </div>
);
const LeafEl3 = () => (
  <div className="hidden lg:block relative">
    <div
      style={{
        position: "absolute",
        bottom: "0px",
        left: "50%",
        marginLeft: "-260px",
        zIndex: "5",
        pointerEvents: "none"
      }}
    >
      <Parallax y={[0, 20]} tagOuter="figure">
        <img src={Leaf3} alt="leaf" />
      </Parallax>
    </div>
  </div>
);

const DonorList = [
  "Jacob <br />Larsen",
  "Kyle <br />Herriman",
  "Jane <br />Smith",
  "Andrew <br />Farseid",
  "Brigham Young <br />University",
  "Abby <br />Hafen"
];

const WomenParallax = () => (
  <div className="relative">
    <div className="lg:absolute md:w-1/2 lg:w-2/5">
      <Parallax y={[-20, 0]} tagOuter="figure">
        <AboutStatue />
      </Parallax>
    </div>
  </div>
);

const IndexPage = ({ data }) => {
  // console.log(data);
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <IndexPageTemplate frontmatter={frontmatter} />
    </Layout>
  );
};

// IndexPage.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.shape({
//       frontmatter: PropTypes.object
//     }),
//     introBg: PropTypes.object,
//     donorsBg: PropTypes.object
//   })
// };

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        heading
        subheading
        heroImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        intro {
          subheading
          heading
          description
          linkText
          link
        }
        mainpitch {
          subheading
          heading
          description
          linkText
          link
        }
        submitStoryCta {
          heading
          description
          linkText
          link
        }
        visit {
          subheading
          heading
          description
          linkText
          link
        }
        familysearch
        gallery {
          image {
            childImageSharp {
              fluid(maxWidth: 600, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`;
