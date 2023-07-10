import React from 'react'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import './dj-ev-music.css'

const DJEvMusic = (props) => {
  return (
    <div className="d-ev-music-container">
      <Helmet>
        <title>DJ Ev Music</title>
        <meta property="og:title" content="DJ Ev Music" />
      </Helmet>
      <div className="d-ev-music-code-embed">
        <div>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n@media only screen and (max-width: 767px) {\nh2::after {\ncontent:'Music';\nwhite-space:nowrap;\noverflow:hidden;\noverflow-wrap:normal;\n}\n}\n",
            }}
          />
          <svg>
            <defs>
              <filter width="0" height="0" id="f1" x="0" y="0">
                <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <header data-role="Header" className="d-ev-music-header">
        <h2 className="d-ev-music-text">
          <span>DJ Ev </span>
          <br></br>
        </h2>
        <div className="d-ev-music-nav">
          <NavigationLinks rootClassName="rootClassName10"></NavigationLinks>
        </div>
        <div data-role="BurgerMenu" className="d-ev-music-burger-menu">
          <svg viewBox="0 0 1024 1024" className="d-ev-music-icon toggle">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="d-ev-music-mobile-menu drawer">
          <div className="d-ev-music-nav1">
            <div className="d-ev-music-container01">
              <h2 className="d-ev-music-text03">
                <span>DJ Ev </span>
                <br></br>
              </h2>
              <div
                data-role="CloseMobileMenu"
                className="d-ev-music-menu-close"
              >
                <svg viewBox="0 0 1024 1024" className="d-ev-music-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="d-ev-music-nav2">
              <div className="d-ev-music-container02">
                <span className="d-ev-music-text06">Home</span>
              </div>
              <div className="d-ev-music-container03">
                <span className="d-ev-music-text07">Listen</span>
              </div>
              <div className="d-ev-music-container04">
                <span className="d-ev-music-text08">Bookings</span>
              </div>
              <div className="d-ev-music-container05">
                <span className="d-ev-music-text09">Events</span>
              </div>
            </nav>
          </div>
          <div className="d-ev-music-icon-group">
            <div className="d-ev-music-row">
              <a
                href="https://soundcloud.com/yearthree"
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg viewBox="0 0 1024 1024" className="d-ev-music-icon04">
                  <path d="M891.96 514.204c-18.086 0-35.348 3.52-51.064 9.856-10.506-114.358-110.29-204.060-232-204.060-29.786 0-58.682 5.63-84.318 15.164-9.96 3.702-12.578 7.52-12.578 14.916v402.714c0 7.766 6.24 14.234 14.124 14.996 0.336 0.034 363.536 0.21 365.89 0.21 72.904 0 131.986-56.816 131.986-126.894s-59.134-126.902-132.040-126.902zM400 768h32l16-224.22-16-223.78h-32l-16 223.78zM304 768h-32l-16-162.75 16-157.25h32l16 160zM144 768h32l16-128-16-128h-32l-16 128zM16 704h32l16-64-16-64h-32l-16 64z"></path>
                </svg>
              </a>
            </div>
            <div className="d-ev-music-row1">
              <a
                href="https://www.instagram.com/_evmusic_/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="d-ev-music-icon06"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
            </div>
            <div className="d-ev-music-row2">
              <a
                href="https://www.youtube.com/@_evmusic"
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg viewBox="0 0 1024 1024" className="d-ev-music-icon08">
                  <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="d-ev-music-icon-group1">
          <div className="d-ev-music-row3">
            <a
              href="https://soundcloud.com/yearthree"
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg viewBox="0 0 1024 1024" className="d-ev-music-icon10">
                <path d="M891.96 514.204c-18.086 0-35.348 3.52-51.064 9.856-10.506-114.358-110.29-204.060-232-204.060-29.786 0-58.682 5.63-84.318 15.164-9.96 3.702-12.578 7.52-12.578 14.916v402.714c0 7.766 6.24 14.234 14.124 14.996 0.336 0.034 363.536 0.21 365.89 0.21 72.904 0 131.986-56.816 131.986-126.894s-59.134-126.902-132.040-126.902zM400 768h32l16-224.22-16-223.78h-32l-16 223.78zM304 768h-32l-16-162.75 16-157.25h32l16 160zM144 768h32l16-128-16-128h-32l-16 128zM16 704h32l16-64-16-64h-32l-16 64z"></path>
              </svg>
            </a>
          </div>
          <div className="d-ev-music-row4">
            <a
              href="https://www.instagram.com/_evmusic_/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="d-ev-music-icon12"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </a>
          </div>
          <div className="d-ev-music-row5">
            <a
              href="https://www.youtube.com/@_evmusic"
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg viewBox="0 0 1024 1024" className="d-ev-music-icon14">
                <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
              </svg>
            </a>
          </div>
        </div>
      </header>
      <div className="d-ev-music-hero vignette">
        <div className="d-ev-music-container06"></div>
        <a
          href="https://soundcloud.com/yearthree/sets/dj-set-1"
          target="_blank"
          rel="noreferrer noopener"
          className="d-ev-music-link6 button"
        >
          <span className="d-ev-music-text10">
            <span className="d-ev-music-text11">Listen Now</span>
            <br></br>
          </span>
        </a>
      </div>
      <img
        alt="image"
        src="https://raw.githubusercontent.com/Alendrone/DJev/a6e8a39bdc2abf028284023939bb733bae19fb36/cdn/beach.png"
        className="d-ev-music-image filtered"
      />
      <div className="d-ev-music-container07">
        <h1 className="d-ev-music-text13">
          <br></br>
          <span>About</span>
        </h1>
      </div>
      <div className="d-ev-music-separator"></div>
      <div className="d-ev-music-blog-post-card">
        <iframe
          src="https://player.vimeo.com/video/824307803?h=34688072b2&amp;background=1&amp;dnt=1&amp;loop=1"
          allowFullScreen
          className="d-ev-music-iframe"
        ></iframe>
        <div className="d-ev-music-container08">
          <span className="d-ev-music-text16">
            <span>What He Does</span>
            <br></br>
          </span>
          <span className="d-ev-music-text19">
            DJ Ev spins chill LoFi - Chillhop-Chillwave electronic music.
          </span>
          <div className="d-ev-music-separator1"></div>
          <span className="d-ev-music-text20">DJ Sets &amp; Live Gigs</span>
        </div>
      </div>
      <div className="d-ev-music-container09">
        <h1 className="d-ev-music-text21">
          <span>DJ Sets</span>
          <br></br>
        </h1>
      </div>
      <div className="d-ev-music-separator2"></div>
      <div className="d-ev-music-gallery">
        <div className="d-ev-music-container10 vignette">
          <div className="d-ev-music-container11">
            <span className="d-ev-music-text24">5-15-23 @ 7-10P CDT</span>
            <h1 className="d-ev-music-text25">Lofi Mondaze</h1>
          </div>
        </div>
        <div className="d-ev-music-container12">
          <div className="d-ev-music-container13 vignette">
            <span className="d-ev-music-text26">5-6-23 @ 11A-2P CDT</span>
            <h1 className="d-ev-music-text27">
              <span>HOUSTON</span>
              <br></br>
              <span>skateboards</span>
            </h1>
          </div>
        </div>
        <div className="d-ev-music-container14">
          <div className="d-ev-music-container15 vignette">
            <span className="d-ev-music-text31">4-21-23 @ 11A-2P CDT</span>
            <h1 className="d-ev-music-text32">
              <span>HOUSTON</span>
              <br></br>
              <span>skateboards</span>
            </h1>
          </div>
        </div>
        <div className="d-ev-music-container16">
          <div className="d-ev-music-container17 vignette">
            <span className="d-ev-music-text36">5-15-23 @ 7-10P CDT</span>
            <h1 className="d-ev-music-text37">Lofi Mondaze</h1>
          </div>
        </div>
        <div className="d-ev-music-container18">
          <div className="d-ev-music-container19 vignette">
            <span className="d-ev-music-text38">4-3-23 @ 7-10P CDT</span>
            <h1 className="d-ev-music-text39">Lofi Mondaze</h1>
          </div>
        </div>
        <div className="d-ev-music-container20">
          <div className="d-ev-music-container21 vignette">
            <span className="d-ev-music-text40">7-10P CDT</span>
            <h1 className="d-ev-music-text41">Lofi Mondaze</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DJEvMusic
