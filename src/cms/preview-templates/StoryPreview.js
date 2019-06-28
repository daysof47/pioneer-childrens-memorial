import React from "react";
import PropTypes from "prop-types";
// import { IndexPageTemplate } from "../../templates/index-page";

const StoryPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      // <IndexPageTemplate
      //   frontmatter={frontmatter}
      //   introBg={introBg}
      //   donorsBg={donorsBg}
      //   submitStory={submitStory}
      // />
      // <div>{console.log(data)}</div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

StoryPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default StoryPreview;
