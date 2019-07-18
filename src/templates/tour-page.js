import React from "react";
// import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import { ParallaxProvider } from "react-scroll-parallax";
// import { Parallax } from "react-scroll-parallax";
import Line from "../components/Line";
import TourStop from "../components/TourStop";
import MapImage from "../img/tour-the-memorial-map.jpg";

export const TourPageTemplate = ({ frontmatter }) => (
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
        <div className="container mx-auto">
          <div className="map relative p-4 border border-solid border-gray bg-white">
            <img src={MapImage} alt="Map" />
            {frontmatter.sections.map((section, index) => (
              <a
                href={`#section-${index}`}
                key={index}
                className="block absolute w-5 h-5 rounded-full bg-green border-2 border-solid border-white"
                style={{
                  top: section.top,
                  left: section.left
                }}
              >
                <span className="hidden px-2 bg-white ml-6 whitespace-no-wrap">
                  {section.heading}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <div>
        {frontmatter.sections.map((section, index) => (
          <TourStop key={index} section={section} index={index} />
        ))}
      </div>
    </ParallaxProvider>
  </div>
);

// TourPageTemplate.propTypes = {
//   heroImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//   title: PropTypes.string,
//   heading: PropTypes.string,
// };

const TourPage = ({ data }) => {
  // console.log(data);
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <TourPageTemplate frontmatter={frontmatter} />
    </Layout>
  );
};

// TourPage.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.shape({
//       frontmatter: PropTypes.object
//     }),
//     introBg: PropTypes.object,
//     donorsBg: PropTypes.object
//   })
// };

export default TourPage;

export const pageQuery = graphql`
  query TourPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "tour-page" } }) {
      frontmatter {
        title
        heading
        heroImage {
          childImageSharp {
            fluid(maxWidth: 1800, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        sections {
          heading
          description
          top
          left
          audio
          image {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
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

// export const tourPageQuery = graphql`
//   query TourPage($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       html
//       frontmatter {
//         title
//       }
//     }
//   }
// `
