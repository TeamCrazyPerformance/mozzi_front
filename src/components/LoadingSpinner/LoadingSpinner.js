import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import FlexBox from "../FlexBox/FlexBox";

const LoadingSpinnerStyles = makeStyles(() => ({
  loadingStateWrapperClassName: {
    height: "80vh"
  }
}));

const LoadingSpinner = props => {
  const { loadingState, children } = props;
  const { loadingStateWrapperClassName } = LoadingSpinnerStyles();

  return (
    <>
      {loadingState === true ? (
        <div className={`${loadingStateWrapperClassName}`}>
          <FlexBox wrap="wrap" column="column" align="center" justify="center">
            <CircularProgress />
          </FlexBox>
        </div>
      ) : (
        <>{children || <></>}</>
      )}
    </>
  );
};

LoadingSpinner.propTypes = {
  loadingState: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired
};

export default LoadingSpinner;
