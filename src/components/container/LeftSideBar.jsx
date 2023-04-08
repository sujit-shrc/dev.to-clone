import React from 'react'
import { icons } from '../../constants';
import { BsMastodon } from 'react-icons/bs'
import { IoLogoTwitter, IoLogoFacebook, IoLogoGithub, IoMdClose } from "react-icons/io";
import { RiInstagramFill, RiTwitchLine } from "react-icons/ri";

const LeftSideBar = ({ burgerMenu, closeMenu }) => {
  const tags = [
    "react",
    "graphql",
    "nodejs",
    "sass",
    "javascript",
    "html",
    "css",
    "webdev",
    "opensource",
    "beginners",
    "python",
    "git",
    "vscode",
    "npm",
    "sql",
    "ubuntu",
    "aws",
  ];

  return (
    <>
      <aside className="leftBar">
        <nav className="menu">
          <ul>
            <li>
              <a href="/home">
                <i>
                  <img src={icons.home} alt="home" />
                </i>
                Home
              </a>
            </li>
            <li>
              <a href="/list">
                <i>
                  <img src={icons.listing} alt="list" />
                </i>
                Listings
              </a>
            </li>
            <li>
              <a href="/podcast">
                <i>
                  <img src={icons.podcast} alt="podcast" />
                </i>
                Podcasts
              </a>
            </li>
            <li>
              <a href="/videos">
                <i>
                  <img src={icons.videos} alt="videos" />
                </i>
                Videos
              </a>
            </li>
            <li>
              <a href="/tags">
                <i>
                  <img src={icons.tags} alt="tags" />
                </i>
                Tags
              </a>
            </li>

            <li>
              <a href="/faqs">
                <i>
                  <img src={icons.faqs} alt="faqs" />
                </i>
                FAQ
              </a>
            </li>

            <li>
              <a href="/DEV">
                <i>
                  <img src={icons.shop} alt="shop" />
                </i>
                Forem Shop
              </a>
            </li>

            <li>
              <a href="/sponsors">
                <i>
                  <img src={icons.sponsors} alt="sponsors" />
                </i>
                Sponsers
              </a>
            </li>
            <li>
              <a href="/about">
                <i>
                  <img src={icons.aboutdev} alt="" />
                </i>
                About
              </a>
            </li>

            <li>
              <a href="/contact">
                <i>
                  <img src={icons.contact} alt="contact" />
                </i>
                Contact
              </a>
            </li>
            <li>
              <a href="/guides">
                <i>
                  <img src={icons.guides} alt="guides" />
                </i>
                Guides
              </a>
            </li>
            <li>
              <a href="/compare">
                <i>
                  <img src={icons.comparison} alt="comparison" />
                </i>
                Software Comparisons
              </a>
            </li>
            <h3>Other</h3>
            <li>
              <a href="/code">
                <i>
                  <img src={icons.thumb} alt="code" />
                </i>
                Code of Conduct
              </a>
            </li>

            <li>
              <a href="/privacy">
                <i>
                  <img src={icons.privacy} alt="privacy" />
                </i>
                Privacy Policy
              </a>
            </li>

            <li>
              <a href="/terms">
                <i>
                  <img src={icons.eye} alt="eye" />
                </i>
                Terms of use
              </a>
            </li>
          </ul>
        </nav>

        <div className="socialLinks">
          <a href="/twitter">
            <i>
              <IoLogoTwitter />
            </i>
          </a>
          <a href="/facebook">
            <i>
              <IoLogoFacebook />
            </i>
          </a>
          <a href="/github">
            <i>
              <IoLogoGithub />
            </i>
          </a>
          <a href="/instagram">
            <i>
              <RiInstagramFill />
            </i>
          </a>
          <a href="/twitch">
            <i>
              <RiTwitchLine />
            </i>
          </a>
          <a href="/twitch">
            <i>
              <BsMastodon />
            </i>
          </a>
        </div>

        <div className="tagList">
          <div className="titleContainer">
            <h3>My Tags</h3>
            <i>
              <img src={icons.settings} alt="setting" />
            </i>
          </div>
          <ul>
            {tags.map((tag, key) => {
              return (
                <li key={key}>
                  <a href="/#">#{tag}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>

      {/* HamburgerMenu */}
      {burgerMenu && (
        <div className="hamburger">
          <div className="headerContent">
            <header>
              <h3>DEV Community</h3>
              <button
                onClick={() => {
                  closeMenu();
                }}
              >
                <IoMdClose />
              </button>
            </header>

            <div className="headerItems">
              <nav className="menu">
                <ul>
                  <li>
                    <a href="/home">
                      <i>
                        <img src={icons.home} alt="home" />
                      </i>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/list">
                      <i>
                        <img src={icons.listing} alt="list" />
                      </i>
                      Listings
                    </a>
                  </li>
                  <li>
                    <a href="/podcast">
                      <i>
                        <img src={icons.podcast} alt="podcast" />
                      </i>
                      Podcasts
                    </a>
                  </li>
                  <li>
                    <a href="/videos">
                      <i>
                        <img src={icons.videos} alt="videos" />
                      </i>
                      Videos
                    </a>
                  </li>
                  <li>
                    <a href="/tags">
                      <i>
                        <img src={icons.tags} alt="tags" />
                      </i>
                      Tags
                    </a>
                  </li>

                  <li>
                    <a href="/faqs">
                      <i>
                        <img src={icons.faqs} alt="faqs" />
                      </i>
                      FAQ
                    </a>
                  </li>

                  <li>
                    <a href="/DEV">
                      <i>
                        <img src={icons.shop} alt="shop" />
                      </i>
                      Forem Shop
                    </a>
                  </li>

                  <li>
                    <a href="/sponsors">
                      <i>
                        <img src={icons.sponsors} alt="sponsors" />
                      </i>
                      Sponsers
                    </a>
                  </li>
                  <li>
                    <a href="/about">
                      <i>
                        <img src={icons.aboutdev} alt="" />
                      </i>
                      About
                    </a>
                  </li>

                  <li>
                    <a href="/contact">
                      <i>
                        <img src={icons.contact} alt="contact" />
                      </i>
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="/guides">
                      <i>
                        <img src={icons.guides} alt="guides" />
                      </i>
                      Guides
                    </a>
                  </li>
                  <li>
                    <a href="/compare">
                      <i>
                        <img src={icons.comparison} alt="comparison" />
                      </i>
                      Software Comparisons
                    </a>
                  </li>
                  <h3>Other</h3>
                  <li>
                    <a href="/code">
                      <i>
                        <img src={icons.thumb} alt="code" />
                      </i>
                      Code of Conduct
                    </a>
                  </li>

                  <li>
                    <a href="/privacy">
                      <i>
                        <img src={icons.privacy} alt="privacy" />
                      </i>
                      Privacy Policy
                    </a>
                  </li>

                  <li>
                    <a href="/terms">
                      <i>
                        <img src={icons.eye} alt="eye" />
                      </i>
                      Terms of use
                    </a>
                  </li>
                </ul>
              </nav>

              <div className="socialLinks">
                <a href="/twitter">
                  <i>
                    <IoLogoTwitter />
                  </i>
                </a>
                <a href="/facebook">
                  <i>
                    <IoLogoFacebook />
                  </i>
                </a>
                <a href="/github">
                  <i>
                    <IoLogoGithub />
                  </i>
                </a>
                <a href="/instagram">
                  <i>
                    <RiInstagramFill />
                  </i>
                </a>
                <a href="/twitch">
                  <i>
                    <RiTwitchLine />
                  </i>
                </a>
                <a href="/twitch">
                  <i>
                    <BsMastodon />
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LeftSideBar