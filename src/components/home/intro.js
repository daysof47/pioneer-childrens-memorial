import React from "react";
import { Link } from "gatsby";
// import PropTypes from "prop-types";

export default function HomeInro({ content }) {
  console.log(content);
  const { subheading, heading, description, linkText, link } = content;
  return (
    <section className="lg:min-h-1000 flex items-center">
      <div className="text-center mx-auto max-w-2xl">
        <h4 className="uppercase tracking-widest text-green mb-4">
          {subheading}
        </h4>
        <h2 className="text-xl lg:text-4xl mb-6">{heading}</h2>
        <div className="mb-8">{description}</div>
        <Link
          to={link}
          className="inline-block py-4 px-8 bg-green text-white uppercase tracking-widest text-sm"
        >
          {linkText}
        </Link>
      </div>
    </section>
  );
}

// export const bgImage = () => (
//   <StaticQuery
//     query={graphql`
//       query {
//         file(relativePath: { eq: "home-bg-purpose.jpg" }) {
//           childImageSharp {
//             fluid(maxWidth: 2048, quality: 60) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     `}
//     render={data => <div>{console.log(data)}</div>}
//   />
// );
