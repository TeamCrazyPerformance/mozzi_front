import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./SignUpForm.css";

const SignUpForm = () => {
  return (
    <div className="signup-form-component">
      <form className="signup-form-component__form">
        <div className="signup-form-component__form__input-box-wrapper">
          <TextField
            className="signup-form-component__form__input-box-wrapper__id-input-box"
            label="ID"
            error={false}
            helperText=" "
            fullWidth
          />
        </div>
        <div className="signup-form-component__form__input-box-wrapper">
          <TextField
            className="signup-form-component__form__input-box-wrapper__password-input-box"
            label="Password"
            type="password"
            error={false}
            helperText=" "
            fullWidth
          />
        </div>
        <div className="signup-form-component__form__input-box-wrapper">
          <TextField
            className="signup-form-component__form__input-box-wrapper__password-confirm-input-box"
            label="Password confirm"
            type="password"
            error={false}
            helperText=" "
            fullWidth
          />
        </div>
        <div className="signup-form-component__form__input-box-wrapper">
          <TextField
            className="signup-form-component__form__input-box-wrapper__name-input-box"
            label="Name"
            error={false}
            helperText=" "
            fullWidth
          />
        </div>
        <div className="signup-form-component__form__input-box-wrapper">
          <TextField
            className="signup-form-component__form__input-box-wrapper__birthday-input-box"
            label="Birthday"
            error={false}
            helperText=" "
            fullWidth
          />
        </div>
        <div className="signup-form-component__form__input-box-wrapper">
          <TextField
            className="signup-form-component__form__input-box-wrapper__nickname-input-box"
            label="Nickname"
            error={false}
            helperText=" "
            fullWidth
          />
        </div>
        <div className="signup-form-component__form__input-box-wrapper">
          <TextField
            className="signup-form-component__form__input-box-wrapper__gender-input-box"
            label="Gender"
            error={false}
            helperText=" "
            fullWidth
          />
        </div>
        <div className="signup-form-component__form__input-box-wrapper">
          <TextField
            className="signup-form-component__form__input-box-wrapper__school-input-box"
            label="School"
            error={false}
            helperText=" "
            fullWidth
          />
        </div>
        <div className="signup-form-component__form__input-box-wrapper">
          <TextField
            className="signup-form-component__form__input-box-wrapper__email-input-box"
            label="Email"
            error={false}
            helperText=" "
            fullWidth
          />
        </div>
        <div className="signup-form-component__form__input-box-wrapper">
          <TextField
            className="signup-form-component__form__input-box-wrapper__phoneNumber-input-box"
            label="Phone number"
            error={false}
            helperText=" "
            fullWidth
          />
        </div>

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

SignUpForm.propTypes = {};

export default SignUpForm;
