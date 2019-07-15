import React from "react";
// import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import SlideShow2 from "../components/SlideShow2";
import Fade from "react-reveal/Fade";
import { ParallaxProvider } from "react-scroll-parallax";
// import { Parallax } from "react-scroll-parallax";
import Line from "../components/Line";
import HugeText from "../components/HugeText";
import ImageTextSection from "../components/ImageTextSection";

export const AboutPageTemplate = ({ frontmatter }) => (
  <div>
    <ParallaxProvider>
      <Hero
        image={frontmatter.heroImage}
        content={{
          heading: frontmatter.heading,
          subheading: frontmatter.subheading
        }}
      />
      <section className="relative">
        <div className="home-scroll-line"></div>
        <Line mobile={4} desk={4} />
        <HugeText text={frontmatter.intro.hugetext} start="-10" finish="-60" />
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
          </div>
        </Fade>
      </section>
      {frontmatter.sections.map((section, index) => {
        if (index === 1) {
          return (
            <div>
              <div
                className="my-8 lg:my-16"
                style={{
                  maxWidth: "980px",
                  marginLeft: "auto",
                  marginRight: "auto"
                }}
              >
                <SlideShow2 images={frontmatter.gallery} />
              </div>
              <ImageTextSection key={index} section={section} index={index} />
            </div>
          );
        } else {
          return (
            <ImageTextSection key={index} section={section} index={index} />
          );
        }
      })}
      <section className="relative px-4">
        <HugeText
          text={frontmatter.references.hugetext}
          start="-10"
          finish="-60"
        />
        <div className="container mx-auto">
          <div className="text-center mx-auto max-w-3xl mb-12">
            <Fade>
              <h4 className="uppercase tracking-widest text-green mb-4 max-w-lg mx-auto">
                {frontmatter.references.subheading}
              </h4>
              <h2 className="text-3xl lg:text-4xl mb-6">
                {frontmatter.references.heading}
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: frontmatter.references.description
                }}
              ></div>
            </Fade>
          </div>
          <ol className="flex flex-wrap list-decimal w-full m-4">
            {frontmatter.references.links.map((link, index) => (
              <li key={index} className="w-full md:w-1/2 lg:w-1/4 my-1">
                <a
                  href={link.link}
                  className="text-green"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.linktext}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>
      {/* <section>
        <div className="container mx-auto lg:mt-24">
          <SlideShow images={frontmatter.gallery} />
        </div>
      </section> */}
    </ParallaxProvider>
  </div>
);

// AboutPageTemplate.propTypes = {
//   heroImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//   title: PropTypes.string,
//   heading: PropTypes.string,
// };

const AboutPage = ({ data }) => {
  // console.log(data);
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <AboutPageTemplate frontmatter={frontmatter} />
    </Layout>
  );
};

// AboutPage.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.shape({
//       frontmatter: PropTypes.object
//     }),
//     introBg: PropTypes.object,
//     donorsBg: PropTypes.object
//   })
// };

export default AboutPage;

export const pageQuery = graphql`
  query AboutPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      frontmatter {
        title
        heading
        heroImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        intro {
          heading
          hugetext
          subheading
          description
        }
        sections {
          heading
          description
          hugetext
          image {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        references {
          heading
          subheading
          hugetext
          description
          links {
            linktext
            link
          }
        }
        gallery {
          alt
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

// gallery {
//   image {
//     childImageSharp {
//       fluid(maxWidth: 600, quality: 90) {
//         ...GatsbyImageSharpFluid_withWebp
//       }
//     }
//   }
// }

// export const aboutPageQuery = graphql`
//   query AboutPage($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       html
//       frontmatter {
//         title
//       }
//     }
//   }
// `
