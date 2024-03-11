import React from "react";
import { SocialIcon } from "react-social-icons";
import 'react-social-icons/github'
import 'react-social-icons/linkedin'

function FooterComponent() {
  return (
    <div>
      <footer>
        <SocialIcon network="github" url="www.github.com/Olivia-the-G" />
        <SocialIcon network="linkedin" url="www.linkedin.com/in/olivia-gowan-a13a62294" />
      </footer>
    </div>
  );
};

export default FooterComponent;