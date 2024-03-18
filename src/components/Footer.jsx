import React from "react";
import { SocialIcon } from "react-social-icons";
import 'react-social-icons/github'
import 'react-social-icons/linkedin'
import 'react-social-icons/twitter'

function FooterComponent() {
  return (
    <div>
      <footer>
        <SocialIcon network="github" url="www.github.com/Olivia-the-G" />
        <SocialIcon network="linkedin" url="www.linkedin.com/in/olivia-gowan-a13a62294" />
        <SocialIcon network="twitter" url="www.twitter.com/OliviaGowan" />
      </footer>
    </div>
  );
};

export default FooterComponent;