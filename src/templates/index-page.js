import React from "react";
// import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import SlideShow from "../components/home/SlideShow";
import Fade from "react-reveal/Fade";
import Img from "gatsby-image";
import Illustration from "../img/home-illustration.png";
import Leaf1 from "../img/leaf-1.png";
import Leaf2 from "../img/leaf-2.png";
import Leaf3 from "../img/leaf-3.png";
import WomenImage from "../img/home-about-statue.png";
import ManImage from "../img/home-visit-statue.png";
import FamilySearchLogo from "../img/familysearch-logo.png";
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";
import Line from "../components/Line";
import HugeText from "../components/HugeText";

export const IndexPageTemplate = ({
  frontmatter,
  introBg,
  donorsBg,
  submitStory
}) => (
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
      <Line mobile={20} desk={36} />
      <BackgroundImage
        fluid={introBg.childImageSharp.fluid}
        style={{
          backgroundSize: "contain",
          backgroundPosition: "top center",
          marginTop: "40px"
        }}
      >
        <section>
          <Fade>
            <div className="text-center mx-auto max-w-2xl p-8">
              <h4 className="uppercase tracking-widest text-green mb-4">
                {frontmatter.intro.subheading}
              </h4>
              <h2 className="text-3xl lg:text-4xl mb-6">
                {frontmatter.intro.heading}
              </h2>
              <div className="mb-8">{frontmatter.intro.description}</div>
              <Link
                to={frontmatter.intro.link}
                className="inline-block py-4 px-8 bg-green text-white uppercase tracking-widest text-sm"
              >
                {frontmatter.intro.linkText}
              </Link>
            </div>
          </Fade>
          <Line mobile={20} desk={64} />
        </section>
        <LeafEl3 />
        <section>
          <div className="container mx-auto lg:mt-24">
            <SlideShow images={frontmatter.gallery} />
          </div>
        </section>
      </BackgroundImage>
      <Line mobile={20} desk={48} />
      <WomenParallax />
      <HugeText text="Large Headline" start="20" finish="-40" />
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
                  <div className="mb-8">
                    {frontmatter.mainpitch.description}
                  </div>
                  <div className="text-center lg:text-left">
                    <Link
                      to={frontmatter.mainpitch.link}
                      className="inline-block py-4 px-8 bg-green text-white uppercase tracking-widest text-sm"
                    >
                      {frontmatter.mainpitch.linkText}
                    </Link>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto">
          <div
            className="p-8 lg:p-20 bg-tan min-h-lg flex items-center bg-no-repeat bg-right min-h-lg relative"
            style={{
              backgroundImage: `url(${Illustration})`,
              minHeight: "550px"
            }}
          >
            <div className="w-full lg:w-1/2">
              <h4 className="uppercase tracking-widest text-green mb-4 text-center lg:text-left">
                Featured Story
              </h4>
              <h2 className="text-3xl lg:text-4xl mb-6 text-center lg:text-left">
                Story Name
              </h2>
              <div className="mb-8">
                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                Pellentesque in ipsum id orci porta dapibus. Curabitur arcu
                erat, accumsan id imperdiet et, porttitor at sem. Proin eget
                tortor risus. Vestibulum ante ipsum primis in faucibus orci
                luctus et ultrices posuere cubilia Curae; Donec velit neque,
                auctor sit amet aliquam vel, ullamcorper sit amet ligula.
              </div>
              <Link
                to="/"
                className="block lg:inline-block w-56 mx-auto text-center border-solid border-gray-300 border py-4 px-8 bg-white text-green uppercase tracking-widest text-sm lg:mr-3 mb-4 lg:mb-0"
              >
                Read more
              </Link>
              <Link
                to="/"
                className="block lg:inline-block w-56 mx-auto text-center border-solid border-transparent border py-4 px-8 bg-green text-white uppercase tracking-widest text-sm mb-12 lg:mb-0"
              >
                See all stories
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-4 mt-48">
        <HugeText text="Tell a Story" start="-20" finish="-100" />
        <div className="flex flex-wrap lg:flex-no-wrap">
          <div className="w-full lg:w-7/12">
            <Img fluid={submitStory.childImageSharp.fluid} />
          </div>
          <div className="w-full lg:w-5/12 flex items-center relative">
            <div className="p-8 lg:p-12 max-w-md">
              <Fade right distance="50px">
                <h2 className="text-3xl lg:text-4xl mb-4 lg:-ml-24">
                  Have a Fascinating Story to tell?
                </h2>
              </Fade>
              <Fade right distance="50px">
                <div>
                  <p className="mb-8">
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae; Donec velit neque, auctor
                    sit amet aliquam vel, ullamcorper sit amet ligula. Nulla
                    quis lorem ut libero malesuada feugiat. Nulla porttitor
                    accumsan tincidunt.
                  </p>
                  <p className="text-center lg:text-left">
                    <a
                      href="#subscribe"
                      className="inline-block py-4 px-12 text-white bg-green uppercase tracking-widest text-sm"
                    >
                      Submit a Story
                    </a>
                  </p>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
      <BackgroundImage
        fluid={donorsBg.childImageSharp.fluid}
        style={{ backgroundSize: "contain", backgroundPosition: "top center" }}
      >
        <Line mobile={20} desk={20} />
        <section className="py-4 lg:py-12">
          <div className="container mx-auto text-center">
            <div className="mb-16 lg:mb-36">
              <h4 className="uppercase tracking-widest text-green mb-4">
                Subheadline
              </h4>
              <h2 className="text-3xl lg:text-4xl">Our Donors</h2>
            </div>
            <ul className="font-lora text-green text-4xl flex justify-around flex-wrap italic leading-tight tracking-wide">
              <Fade bottom>
                {DonorList.map(donor => {
                  return (
                    <li keys={donor} className="w-full lg:w-1/3 my-3 lg:my-8">
                      <div
                        className="max-w-sm p-4"
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
        <section>
          <div className="container mx-auto">
            <div className="flex">
              <div className="w-full lg:w-2/5">
                <Fade left distance="50px">
                  <div className="p-8">
                    <h4 className="uppercase tracking-widest text-green mb-4 text-center lg:text-left">
                      {frontmatter.visit.subheading}
                    </h4>
                    <h2 className="text-3xl lg:text-4xl mb-6 text-center lg:text-left">
                      {frontmatter.visit.heading}
                    </h2>
                    <div className="mb-8">{frontmatter.visit.description}</div>
                    <Link
                      to={frontmatter.visit.link}
                      className="block lg:inline-block w-48 mx-auto py-4 px-8 bg-green text-white uppercase tracking-widest text-sm"
                    >
                      {frontmatter.visit.linkText}
                    </Link>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
          <ManParallax />
        </section>
        <section id="subscribe">
          <div className="container bg-tan p-8 py-24 lg:py-24 mb-12 relative">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl mb-6">Newsletter Headline</h2>
              <p>
                To receive more information about the Pioneer Children's
                Memorial and how you can help in grow, please provide your name
                and email address. It will be used only for that purpose.
              </p>
              <form className="flex flex-wrap w-full mt-12">
                <input
                  placeholder="Enter your email address"
                  className="w-full lg:w-auto lg:flex-grow bg-transparent border-solid border-gray-400 border-b-2 py-2 mr-4 lg:mr-8 mb-4 lg:mb-0"
                />
                <button className="block w-48 lg:w-auto mx-auto py-4 px-8 lg:px-16 bg-green text-white uppercase tracking-widest text-sm flex-shrink">
                  Submit
                </button>
              </form>
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
              <p className="mb-4">
                Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                Praesent sapien massa, convallis a pellentesque nec, egestas
                non.
              </p>
              <p>
                <a
                  href="https://www.familysearch.org/en/"
                  target="_blank"
                  className="font-bold text-green uppercase tracking-wider"
                  rel="noopener noreferrer"
                >
                  Explore Family Search
                </a>
              </p>
            </div>
          </div>
          <div className="clearfix"></div>
        </section>
      </BackgroundImage>
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
      <Parallax y={[0, 100]} tagOuter="figure">
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
      <Parallax y={[-20, 20]} tagOuter="figure">
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
        bottom: "100px",
        left: "50%",
        marginLeft: "-260px",
        zIndex: "5",
        pointerEvents: "none"
      }}
    >
      <Parallax y={[-5, 20]} tagOuter="figure">
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
    <div className="lg:absolute lg:w-1/2">
      <Parallax y={[-30, 0]} tagOuter="figure">
        <img src={WomenImage} alt="Statue of Women" />
      </Parallax>
    </div>
  </div>
);

const ManParallax = () => (
  <div className="relative">
    <div className="lg:absolute lg:right-0">
      <Parallax y={[-45, 0]} tagOuter="figure">
        <img src={ManImage} alt="Statue of Man" />
      </Parallax>
    </div>
    <div className="hidden lg:block" style={{ height: "400px" }}></div>
  </div>
);

const IndexPage = ({ data }) => {
  console.log(data);
  const { frontmatter } = data.markdownRemark;
  const { introBg, donorsBg, submitStory } = data;
  return (
    <Layout>
      <IndexPageTemplate
        frontmatter={frontmatter}
        introBg={introBg}
        donorsBg={donorsBg}
        submitStory={submitStory}
      />
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
    introBg: file(relativePath: { eq: "home-bg-purpose.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    donorsBg: file(relativePath: { eq: "home-bg-donors-visit.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    submitStory: file(relativePath: { eq: "home-submit-a-story.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
