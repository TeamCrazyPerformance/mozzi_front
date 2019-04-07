import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const LoadingSpinnerStyles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

const LoadingSpinner = (props) => {
  const { classes, loadingState, children } = props;
  return (
    <div>
      <CircularProgress className={classes.progress} />
    </div>
  );
}

LoadingSpinner.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(LoadingSpinnerStyles)(LoadingSpinner);