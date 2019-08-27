import React from "react";
// import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

const DefaultPage = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout pagetype={frontmatter.templateKey}>
      <div className="container mx-auto px-8 pt-32">
        <h1
          className="text-xl lg:text-3xl mb-8"
          dangerouslySetInnerHTML={{ __html: frontmatter.title }}
        />
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
};

export default DefaultPage;

export const pageQuery = graphql`
  query PageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        templateKey
        title
      }
    }
  }
`;
