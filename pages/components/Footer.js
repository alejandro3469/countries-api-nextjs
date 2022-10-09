import React from "react";
import Image from "next/image";
/*import LinkedInLogo from "../../public/linkedin_logo.svg";
import GitHubLogo from "../../public/github_logo.svg";
import DribbbleLogo from "../../public/dribbble-logo.svg";*/
import Link from "next/link";
//import Button from "./Button";

export default function Footer() {
  return (
    <footer>
      <div className="logo-button-footer">
        <div className="">
          <div>
            <div className="navbar-logo black-color">
              Made with love by{" "}
              <Link href={"https://portfolio-flax-beta-53.vercel.app/"}>
                <a className="logo">Alejandro Pérez</a>
              </Link>
            </div>
          </div>
          <p>Visit my personal portfolio to see more of my projects</p>
        </div>
      </div>

      <div className="copyright">
        <p>© 2022 Alejandro Pérez. All rights reserved</p>
      </div>
    </footer>
  );
}
