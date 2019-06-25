import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

class FeaturedStory extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <article>
        {posts &&
          posts.map(({ node: post }) => (
            <div className="flex items-center" key={post.id}>
              <div className="w-full md:w-1/2 p-4">
                <div className="green-offset">
                  <BackgroundImage
                    fluid={post.frontmatter.featuredimage.childImageSharp.fluid}
                  >
                    <Link
                      className="flex items-center justify-center flex-col text-white border-solid border-white border m-4"
                      to={post.fields.slug}
                      style={{ height: "600px" }}
                    >
                      <em className="font-lora text-xl">
                        {Array.isArray(post.frontmatter.theme)
                          ? post.frontmatter.theme.join(", ")
                          : null}
                      </em>
                      <h3 className="text-white text-2xl lg:text-5xl font-normal tracking-wide my-3">
                        {post.frontmatter.title}
                      </h3>
                      <em className="font-lora text-xl">
                        {post.frontmatter.company}
                      </em>
                    </Link>
                  </BackgroundImage>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-4">
                <h3 className="text-xl lg:text-2xl mb-3">Overview</h3>
                <div className="mb-8">{post.excerpt}</div>
                <Link
                  to={post.fields.slug}
                  className="inline-block py-4 px-8 w-48 text-center bg-green text-white uppercase tracking-widest text-sm"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
      </article>
    );
  }
}

FeaturedStory.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query FeaturedStoryQuery {
        allMarkdownRemark(
          limit: 1
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: {
            frontmatter: {
              templateKey: { eq: "story" }
              featuredpost: { eq: true }
            }
          }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 600, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <FeaturedStory data={data} />}
  />
);
