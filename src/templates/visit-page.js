import React from "react";
// import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Fade from "react-reveal/Fade";
import { ParallaxProvider } from "react-scroll-parallax";
// import { Parallax } from "react-scroll-parallax";
import Line from "../components/Line";
import HugeText from "../components/HugeText";
import ImageTextSection from "../components/ImageTextSection";
import ContactForm from "../components/ContactForm";

export const VisitPageTemplate = ({ frontmatter }) => (
  <div>
    <ParallaxProvider>
      <Hero
        image={frontmatter.heroImage}
        content={{
          heading: frontmatter.heading,
          subheading: frontmatter.subheading
        }}
      />
      <section className="relative mb-12 lg:mb-20">
        <div className="home-scroll-line"></div>
        <Line mobile={4} desk={4} />
        <HugeText text="Information" start="-10" finish="-60" />
        <Fade>
          <div className="text-center mx-auto max-w-3xl px-8 mb-12 lg:mb-16">
            <h4 className="uppercase tracking-widest text-green mb-4 max-w-lg mx-auto">
              Subheadline Goes Here
            </h4>
            <h2 className="text-3xl lg:text-4xl mb-6">
              Location and Contact Information
            </h2>
          </div>
        </Fade>
        <div className="mx-auto max-w-3xl flex items-center">
          <div className="w-full lg:w-1/2">
            <div className="">
              <div className="mb-8">
                2601 Sunnyside Ave
                <br />
                Salt Lake City, UT 84081
                <br />
                <span className="text-green">Phone:</span> 801-123-4567
              </div>
              <div>
                <span className="text-green">Monday - Friday:</span> 10am -
                5pm
                <br />
                <span className="text-green">Saturday - Sunday:</span> 10am -
                3pm
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="max-w-md mx-auto">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <section className="mb-12 lg:mb-20">
        <div className="container mx-auto">
        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.4268631217524!2d-111.81799798459387!3d40.7526352793275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87525e2bd2441443%3A0xdf4e3ffc5c0526e4!2sThis+Is+The+Place+Heritage+Park!5e0!3m2!1sen!2sus!4v1562954879631!5m2!1sen!2sus" width="600" height="450" frameborder="0" style={{border: "0", margin: "auto"}} allowfullscreen></iframe>
        </div>
      </section>
      {frontmatter.sections.map((section, index) => (
        <ImageTextSection key={index} section={section} index={index} />
      ))}
    </ParallaxProvider>
  </div>
);

// VisitPageTemplate.propTypes = {
//   heroImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//   title: PropTypes.string,
//   heading: PropTypes.string,
// };

const VisitPage = ({ data }) => {
  // console.log(data);
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <VisitPageTemplate frontmatter={frontmatter} />
    </Layout>
  );
};

// VisitPage.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.shape({
//       frontmatter: PropTypes.object
//     }),
//     introBg: PropTypes.object,
//     donorsBg: PropTypes.object
//   })
// };

export default VisitPage;

export const pageQuery = graphql`
  query VisitPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "visit-page" } }) {
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
//   query VisitPage($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       html
//       frontmatter {
//         title
//       }
//     }
//   }
// `
