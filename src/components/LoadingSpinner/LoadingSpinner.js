import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import FlexBox from '../FlexBox/FlexBox';

const LoadingSpinnerStyles = theme => ({
  loadingStateWrapper: {
    height: '80vh',
  }
});

const LoadingSpinner = props => {
  const { classes, loadingState, children } = props;
  return (
    <>
      {loadingState === true
      ? <div className={`${classes.loadingStateWrapper}`}>
          <FlexBox
            wrap= "wrap"
            column= "column"
            align= "center"
            justify= "center"
          >
            <CircularProgress />
          </FlexBox>
        </div>
      : <>
          {children ? children : <></>}
        </>
      }
    </>
  );
}

LoadingSpinner.propTypes = {
  classes: PropTypes.object.isRequired,
  loadingState: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array
  ]).isRequired
};

export default withStyles(LoadingSpinnerStyles)(LoadingSpinner);