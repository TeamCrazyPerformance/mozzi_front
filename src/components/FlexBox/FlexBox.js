import React from "react";
import PropTypes from "prop-types";
import "./FlexBox.css";

const changePropsToClassName = ({
  wrap,
  column,
  align,
  justify,
  maxHeight
}) => {
  let classNames = "flex-box";

  // flex-wrap
  classNames = classNames.concat(` flex-box--flex-wrap--${wrap}`);
  // flex-direction
  classNames = classNames.concat(` flex-box--flex-direction--${column}`);
  // align-items
  classNames = classNames.concat(` flex-box--align-items--${align}`);
  // jusitify-content
  classNames = classNames.concat(` flex-box--jusitify-content--${justify}`);
  // height 100vh
  classNames = classNames.concat(` flex-box--max-height-${maxHeight}`);

  return classNames;
};

const FlexBox = props => {
  const { wrap, column, align, justify, maxHeight, children } = props;
  const flexBoxClassNames = changePropsToClassName({
    wrap,
    column,
    align,
    justify,
    maxHeight
  });

  return <div className={flexBoxClassNames}>{children || ""}</div>;
};

FlexBox.propTypes = {
  wrap: PropTypes.oneOf(["wrap", "no-wrap", "wrap-reverse"]),
  column: PropTypes.oneOf(["row", "column", "row-reverse", "column-reverse"]),
  align: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "stretch",
    "baseline"
  ]),
  justify: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around"
  ]),
  maxHeight: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired
};

FlexBox.defaultProps = {
  wrap: "wrap",
  column: "row",
  align: "flex-start",
  justify: "flex-start",
  maxHeight: false
};

export default FlexBox;
