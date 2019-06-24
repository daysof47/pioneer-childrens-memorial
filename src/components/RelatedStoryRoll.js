import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

class RelatedStoryRollComp extends React.Component {
  render() {
    const { data, curr } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const filtered = posts.filter(({ node }) => node.id !== curr);
    return (
      <div className="flex flex-wrap">
        {filtered &&
          filtered.map(({ node: post }) => (
            <div className="w-full md:w-1/2 p-4" key={post.id}>
              <BackgroundImage
                fluid={post.frontmatter.featuredimage.childImageSharp.fluid}
              >
                <article>
                  <Link
                    className="flex items-center justify-center flex-col text-white border-solid border-white border m-4"
                    to={post.fields.slug}
                    style={{ height: "360px" }}
                  >
                    <em className="font-lora">
                      {post.frontmatter.theme
                        ? post.frontmatter.theme.join(", ")
                        : null}
                    </em>
                    <h2 className="text-white text-2xl font-normal tracking-wide my-2">
                      {post.frontmatter.title}
                    </h2>
                    <em className="font-lora">{post.frontmatter.company}</em>
                  </Link>
                </article>
              </BackgroundImage>
            </div>
          ))}
      </div>
    );
  }
}

RelatedStoryRollComp.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default ({ curr }) => (
  <StaticQuery
    query={graphql`
      query RelatedRelatedStoryRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "story" } } }
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
                featuredpost
                theme
                company
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
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
    render={data => <RelatedStoryRollComp data={data} curr={curr} />}
  />
);
