import React from "react";
import { SocialIcon } from "react-social-icons";
import 'react-social-icons/github'
import 'react-social-icons/linkedin'
import 'react-social-icons/stackoverflow'

function FooterComponent() {
  return (
    <div>
      <footer>
        <SocialIcon network="github" url="https://github.com/Olivia-the-G" />
        <SocialIcon network="linkedin" url="https://www.linkedin.com/in/olivia-gowan-a13a62294/" />
        <SocialIcon network="stackoverflow" url="https://stackoverflow.com/users/23689960/olivia-gowan" />
      </footer>
    </div>
  );
};

export default FooterComponent;