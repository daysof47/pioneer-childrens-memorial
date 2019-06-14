import React from "react";
// import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import SlideShow from "../components/home/SlideShow";
import Img from "gatsby-image";
import Illustration from "../img/home-illustration.png";

export const IndexPageTemplate = ({
  frontmatter,
  introBg,
  donorsBg,
  submitStory
}) => (
  <div>
    <Hero
      image={frontmatter.heroImage}
      content={{
        heading: frontmatter.heading,
        subheading: frontmatter.subheading
      }}
    />
    <BackgroundImage fluid={introBg.childImageSharp.fluid}>
      <section className="lg:min-h-1000 flex items-center">
        <div className="text-center mx-auto max-w-2xl">
          <h4 className="uppercase tracking-widest text-green mb-4">
            {frontmatter.intro.subheading}
          </h4>
          <h2 className="text-xl lg:text-4xl mb-6">
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
      </section>
      <section>
        <div className="container mx-auto">
          <SlideShow images={frontmatter.gallery} />
        </div>
      </section>
    </BackgroundImage>
    <section className="p-4 lg:py-24">
      <div className="container mx-auto">
        <div className="flex justify-end">
          <div className="w-full lg:w-1/2">
            <h4 className="uppercase tracking-widest text-green mb-4">
              {frontmatter.mainpitch.subheading}
            </h4>
            <h2 className="text-xl lg:text-4xl mb-6">
              {frontmatter.mainpitch.heading}
            </h2>
            <div className="mb-8">{frontmatter.mainpitch.description}</div>
            <Link
              to={frontmatter.mainpitch.link}
              className="inline-block py-4 px-8 bg-green text-white uppercase tracking-widest text-sm"
            >
              {frontmatter.mainpitch.linkText}
            </Link>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container mx-auto">
        <div
          className="p-4 lg:p-20 bg-tan min-h-lg flex items-center bg-no-repeat bg-right min-h-lg"
          style={{
            backgroundImage: `url(${Illustration})`,
            minHeight: "550px"
          }}
        >
          <div className="w-full lg:w-1/2">
            <h4 className="uppercase tracking-widest text-green mb-4">
              Featured Stories
            </h4>
            <h2 className="text-xl lg:text-4xl mb-6">Story Name</h2>
            <div className="mb-8">
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat,
              accumsan id imperdiet et, porttitor at sem. Proin eget tortor
              risus. Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet
              aliquam vel, ullamcorper sit amet ligula.
            </div>
            <Link
              to="/"
              className="inline-block py-4 px-8 bg-white text-green uppercase tracking-widest text-sm mr-3"
            >
              Read more
            </Link>
            <Link
              to="/"
              className="inline-block py-4 px-8 bg-green text-white uppercase tracking-widest text-sm"
            >
              See all stories
            </Link>
          </div>
        </div>
      </div>
    </section>
    <section className="py-4 lg:py-24">
      <div className="flex">
        <div className="w-full lg:w-7/12">
          <Img fluid={submitStory.childImageSharp.fluid} />
        </div>
        <div className="w-full lg:w-5/12 flex items-center relative">
          <div className="p-4 lg:p-12 max-w-md">
            <h2 className="text-lg lg:text-4xl mb-4 lg:-ml-24">
              Have a Fascinating Story to tell?
            </h2>
            <p className="mb-8">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
              vel, ullamcorper sit amet ligula. Nulla quis lorem ut libero
              malesuada feugiat. Nulla porttitor accumsan tincidunt.
            </p>
            <p>
              <a
                href="#subscribe"
                className="inline-block py-4 px-12 text-white bg-green uppercase tracking-widest text-sm"
              >
                Submit a Story
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
    <BackgroundImage fluid={donorsBg.childImageSharp.fluid}>
      <section className="py-4 lg:py-24">
        <div className="container mx-auto text-center">
          <div className="mb-8 lg:mb-24">
            <h4 className="uppercase tracking-widest text-green mb-4">
              Subheadline
            </h4>
            <h2 className="text-xl lg:text-4xl mb-6">Our Donors</h2>
          </div>
          <ul className="font-lora text-green text-lg lg:text-3xl flex justify-around flex-wrap italic leading-tight">
            <li className="w-full lg:w-1/3">
              <div className="max-w-sm p-4">
                Jacob <br />
                Larsen
              </div>
            </li>
            <li className="w-full lg:w-1/3">
              <div className="max-w-sm p-4">
                Kyle <br />
                Herriman
              </div>
            </li>
            <li className="w-full lg:w-1/3">
              <div className="max-w-sm p-4">
                Jane <br />
                Smith
              </div>
            </li>
            <li className="w-full lg:w-1/3">
              <div className="max-w-sm p-4">
                Andrew <br />
                Farseid
              </div>
            </li>
            <li className="w-full lg:w-1/3">
              <div className="max-w-sm p-4">
                Brigham Young <br />
                University
              </div>
            </li>
            <li className="w-full lg:w-1/3">
              <div className="max-w-sm p-4">
                Abby <br />
                Hafen
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="p-4 lg:py-24">
        <div className="container mx-auto">
          <div className="flex">
            <div className="w-full lg:w-2/5">
              <h4 className="uppercase tracking-widest text-green mb-4">
                {frontmatter.visit.subheading}
              </h4>
              <h2 className="text-xl lg:text-4xl mb-6">
                {frontmatter.visit.heading}
              </h2>
              <div className="mb-8">{frontmatter.visit.description}</div>
              <Link
                to={frontmatter.visit.link}
                className="inline-block py-4 px-8 bg-green text-white uppercase tracking-widest text-sm"
              >
                {frontmatter.visit.linkText}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container bg-tan p-4 lg:py-24 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-xl lg:text-4xl mb-6">Newsletter Headline</h2>
            <p>
              To receive more information about the Pioneer Children's Memorial
              and how you can help in grow, please provide your name and email
              address. It will be used only for that purpose.
            </p>
            <form className="flex w-full mt-12">
              <input
                placeholder="Enter your email address"
                class="flex-grow bg-transparent border-solid border-gray-400 border-b-2 mr-4 lg:mr-8"
              />
              <button className="inline-block py-4 px-8 lg:px-16 bg-green text-white uppercase tracking-widest text-sm flex-shrink">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="container bg-tan p-4 lg:py-24 mb-12 lg:mb-24 float-right">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-xl lg:text-4xl mb-6">Find Your Family</h2>
            <p>By</p>
            <p>
              Quisque velit nisi, pretium ut lacinia in, elementum id enim.
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
              Praesent sapien massa, convallis a pellentesque nec, egestas non.
            </p>
          </div>
        </div>
        <div class="clearfix"></div>
      </section>
    </BackgroundImage>
    <hr className="container mx-auto border-gray-700 border-b" />
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
              ...GatsbyImageSharpFluid
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
              fixed(width: 600) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
    introBg: file(relativePath: { eq: "home-bg-purpose.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    donorsBg: file(relativePath: { eq: "home-bg-donors-visit.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    submitStory: file(relativePath: { eq: "home-submit-a-story.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
