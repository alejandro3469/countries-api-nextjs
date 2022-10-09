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
          <Link href="/">
            <a className="navbar-logo black-color">
              Made with love by{" "}
              <Link href={"#"}>
                <a className="logo">Alejandro Pérez</a>
              </Link>
            </a>
          </Link>
          <p>
            Don{"'"}t hesitate to get in touch with me. I don{"'"}t bite :{")"}
          </p>
        </div>
        {/*<div>
          <Button />
        </div>*/}
      </div>
      <div>
        <div>
          <div className="dropdown-section footer-links">
            <div className="menu-section">
              <h4>Navigation</h4>
              <ul>
                <li>
                  <Link href="#">
                    <a className="">Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="">About</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="">Projects</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="">Blog</a>
                  </Link>
                </li>
              </ul>
            </div>
            {/*<div className="menu-section">
              <h4>Social media</h4>
              <ul>
                <li>
                  <Link href="https://www.linkedin.com/in/alejandro-p%C3%A9rez-22060b180/">
                    <a className="link-small-socialm">
                      <div className="socialmedia-logo">
                        <Image
                          layout="responsive"
                          src={LinkedInLogo}
                          alt="LinkedIn logo"
                        />
                      </div>
                      LinkedIn
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/alejandro3469">
                    <a className="link-small-socialm">
                      <div className="socialmedia-logo">
                        <Image
                          layout="responsive"
                          src={GitHubLogo}
                          alt="LinkedIn logo"
                        />
                      </div>
                      GitHub
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="link-small-socialm">
                      <div className="socialmedia-logo">
                        <Image
                          layout="responsive"
                          src={DribbbleLogo}
                          alt="LinkedIn logo"
                        />
                      </div>
                      Dribbble
                    </a>
                  </Link>
                </li>
              </ul>
            </div>*/}
            {
              <div className="menu-section">
                <h4>Others</h4>
                <ul>
                  <li>
                    <Link href="#">
                      <a className="link-small-socialm">Acknowledgements</a>
                    </Link>
                  </li>
                </ul>
              </div>
            }
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>© 2022 Alejandro Pérez. All rights reserved</p>
      </div>
    </footer>
  );
}
