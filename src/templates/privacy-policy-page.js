import React from "react";
// import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

const PrivacyPolicyPage = ({ data }) => {
  const { markdownRemark } = data;
  const { html } = markdownRemark;
  return (
    <Layout>
      <div className="container mx-auto px-8 pt-32">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
};

export default PrivacyPolicyPage;

export const pageQuery = graphql`
  query PrivacyPolicyQuery {
    markdownRemark(
      frontmatter: { templateKey: { eq: "privacy-policy-page" } }
    ) {
      html
    }
  }
`;
