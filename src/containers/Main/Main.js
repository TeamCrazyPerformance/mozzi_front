import React, { useState } from 'react';

import Logo from './../../components/Logo/Logo';
import TextSection from './../../components/TextSection/TextSection';

const Main = () => {
  return (
    <div className="main">
      <Logo />
      <TextSection>
        This is tcp web site
        https://github.com/orgs/TeamCrazyPerformance/dashboard
      </TextSection>
    </div>
  );
};

export default Main;