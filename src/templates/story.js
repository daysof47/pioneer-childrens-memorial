import React from "react";
import { graphql, Link } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import RelatedStoryRoll from "../components/RelatedStoryRoll";
import { ParallaxProvider } from "react-scroll-parallax";
import HugeText from "../components/HugeText";
// import Helmet from "react-helmet";

const Story = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ParallaxProvider>
        <Hero
          image={post.frontmatter.image}
          content={{
            heading: post.frontmatter.title,
            subheading: post.frontmatter.company,
            theme: post.frontmatter.theme
          }}
        />
        <div className="relative z-10">
          <div className="container mx-auto font-lora text-gray-200 italic mb-12 lg:mb-24 lg:-mt-4">
            <Link to="/stories" className="text-gray-200">
              Stories
            </Link>
            <span> > </span>
            <span className="text-green">{post.frontmatter.title}</span>
          </div>
          <HugeText text="The Story" start="0" finish="-80" />
          <article className="max-w-3xl mx-auto mb-8 lg:mb-24">
            <header className="mb-12 text-center">
              <h4 className="uppercase tracking-widest text-green mb-4">
                Subheadline Goes Here
              </h4>
              <h2 className="text-3xl lg:text-4xl mb-3">
                {post.frontmatter.title}
              </h2>
              <div className="font-lora italic text-lg text-gray-300">
                {post.frontmatter.author}
              </div>
            </header>
            <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
            <hr className="border-gray-200 border-b my-12" />
          </article>
          <HugeText text="More" start="-20" finish="-50" />
          <div className="container mx-auto">
            <h4 className="uppercase tracking-widest text-green mb-4 text-center">
              Subheadline Goes Here
            </h4>
            <h2 className="text-3xl lg:text-4xl text-center mb-8">
              More Stories
            </h2>
            <RelatedStoryRoll cols={2} />
          </div>
        </div>
      </ParallaxProvider>
    </Layout>
  );
};

Story.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default Story;

export const pageQuery = graphql`
  query StoryByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        image: featuredimage {
          childImageSharp {
            fluid(maxWidth: 1800, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
        author
        company
        theme
      }
    }
  }
`;
