import React from "react";
import PropTypes from "prop-types";

import "./Logo.css";
import LogoImage from "../../assets/image/logo.png";

const Logo = ({ size = "medium", spin = false }) => {
  const logoClassNames = _changePropsToClassName({ size, spin });

  return (
    <div className={logoClassNames}>
      <img className="logo-component__logo-image" src={LogoImage} alt="Logo" />
    </div>
  );
};

const _changePropsToClassName = ({ size, spin }) => {
  let classNames = "logo-component";

  // size
  classNames = classNames.concat(` logo-component--size-${size}`);
  // spin
  classNames = classNames.concat(` logo-component--spin-${spin}`);

  return classNames;
};

Logo.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  spin: PropTypes.bool
};

export default Logo;
