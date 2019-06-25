import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import Illustration from "../../img/home-illustration.png";

class FeaturedStoryHome extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div
        className="p-8 lg:p-20 bg-tan min-h-lg flex items-center bg-no-repeat bg-right min-h-lg relative"
        style={{
          backgroundImage: `url(${Illustration})`,
          minHeight: "550px"
        }}
      >
        {posts &&
          posts.map(({ node: post }) => (
            <div className="w-full lg:w-1/2">
              <h4 className="uppercase tracking-widest text-green mb-4 text-center lg:text-left">
                Featured Story
              </h4>
              <h2 className="text-3xl lg:text-4xl mb-6 text-center lg:text-left">
                {post.frontmatter.title}
              </h2>
              <div className="mb-8">{post.excerpt}</div>
              <Link
                to={post.fields.slug}
                className="block lg:inline-block w-56 mx-auto text-center border-solid border-gray-300 border py-4 px-8 bg-white text-green uppercase tracking-widest text-sm lg:mr-3 mb-4 lg:mb-0"
              >
                Read more
              </Link>
              <Link
                to="/stories"
                className="block lg:inline-block w-56 mx-auto text-center border-solid border-transparent border py-4 px-8 bg-green text-white uppercase tracking-widest text-sm mb-12 lg:mb-0"
              >
                See all stories
              </Link>
            </div>
          ))}
      </div>
    );
  }
}

FeaturedStoryHome.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query FeaturedStoryHomeHomeQuery {
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
                templateKey
                title
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <FeaturedStoryHome data={data} count={count} />}
  />
);
