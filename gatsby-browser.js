require("./src/css/base.css");

exports.shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition
}) => {
  if (location.hash) {
    return false;
  }

  return true;
};
