import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./SignUpForm.css";

const signUpFormStyles = makeStyles(() => ({
  signUpFormWrapperClassName: {
    width: "30vw",
    marginBottom: "20px"
  }
}));

const SignUpForm = props => {
  const { signupFormData, handleSubmit } = props;
  const { signUpFormWrapperClassName } = signUpFormStyles();

  const validationCheckAndHandleSubmit = event => {
    // Prevent browers refresh.
    event.preventDefault();
    handleSubmit();
  };

  return (
    <div className={`signup-form-component ${signUpFormWrapperClassName}`}>
      <form
        className="signup-form-component__form"
        onSubmit={validationCheckAndHandleSubmit}
      >
        {signupFormData.map(data => (
          <div
            className="signup-form-component__form__input-box-wrapper"
            key={data.label}
          >
            <TextField
              className="signup-form-component__form__input-box-wrapper__input-box"
              label={data.label}
              type={data.type ? data.type : "string"}
              value={data.value}
              onChange={data.handleValue}
              error={!!data.valueErrMessage}
              helperText={data.valueErrMessage ? data.valueErrMessage : " "}
              fullWidth
            />
          </div>
        ))}

        <div className="signup-form-component__formr__button-wrapper">
          <Button
            className="signin-form-component__form__button-wrapper__signup-button"
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
          >
            Sign-up
          </Button>
        </div>
      </form>
    </div>
  );
};

SignUpForm.propTypes = {
  signupFormData: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      type: PropTypes.string,
      value: PropTypes.string.isRequired,
      valueErrMessage: PropTypes.string,
      handleValue: PropTypes.func.isRequired
    })
  ).isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default SignUpForm;
