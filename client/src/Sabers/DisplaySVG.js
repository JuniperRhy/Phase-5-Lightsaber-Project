function DisplaySVG({ segment, multiplier = 1, bodyColor = "#706F6F" }) {
  function selectSVG() {
    return svgs[segment.segment_type][segment.name];
  }

  if (!segment) return null;
  const svgs = {
    Emitter: {
      test: (
        <svg
          width="324"
          height="248"
          viewBox="0 0 324 248"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="gold-vertical"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#FDF5A6"></stop>
              <stop offset="10%" stop-color="#B88746"></stop>
              <stop offset="25%" stop-color="#595959"></stop>
              <stop offset="50%" stop-color="#B88746"></stop>
              <stop offset="100%" stop-color="#FDF5A6"></stop>
            </linearGradient>

            <linearGradient
              id="silver-vertical"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#f0f0f0"></stop>
              <stop offset="10%" stop-color="#595959"></stop>
              <stop offset="25%" stop-color="#5e5e5e"></stop>
              <stop offset="90%" stop-color="#ebebeb"></stop>
              <stop offset="100%" stop-color="#e6e6e6"></stop>
            </linearGradient>

            <linearGradient
              id="royal-chromium-vertical"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#f0f0f0"></stop>
              <stop offset="10%" stop-color="#595959"></stop>
              <stop offset="25%" stop-color="#ffffff"></stop>
              <stop offset="50%" stop-color="#d9d9d9"></stop>
              <stop offset="75%" stop-color="#ebebeb"></stop>
              <stop offset="100%" stop-color="#b8b8b8"></stop>
            </linearGradient>

            <linearGradient
              id="duraplast-vertical"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#b8b8b8"></stop>
              <stop offset="10%" stop-color="#ffffff"></stop>
              <stop offset="25%" stop-color="#fcfcfc"></stop>
              <stop offset="90%" stop-color="#d9d9d9"></stop>
              <stop offset="100%" stop-color="#b8b8b8"></stop>
            </linearGradient>

            <linearGradient
              id="bronze-vertical"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#9e6941"></stop>
              <stop offset="10%" stop-color="#ffffff"></stop>
              <stop offset="25%" stop-color="#9e6941"></stop>
              <stop offset="100%" stop-color="#dda680"></stop>
            </linearGradient>

            <linearGradient
              id="pink-vertical"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#bd7d75"></stop>
              <stop offset="10%" stop-color="#ffffff"></stop>
              <stop offset="25%" stop-color="#bd7d75"></stop>
              <stop offset="100%" stop-color="#ffc5b9"></stop>
            </linearGradient>

            <linearGradient
              id="gunmetal-vertical"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#262423"></stop>
              <stop offset="100%" stop-color="#4d4846"></stop>
            </linearGradient>

            <linearGradient
              id="copper-vertical"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#8f470b"></stop>
              <stop offset="10%" stop-color="#ffca9e"></stop>
              <stop offset="25%" stop-color="#8f470b"></stop>
              <stop offset="100%" stop-color="#d9945b"></stop>
            </linearGradient>

            <linearGradient
              id="crodium-vertical"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#170900"></stop>
              <stop offset="10%" stop-color="#d9945b"></stop>
              <stop offset="25%" stop-color="#2e1200"></stop>
              <stop offset="100%" stop-color="#170900"></stop>
            </linearGradient>
          </defs>
        </svg>
      ),
      Classic: (
        <svg
          width={324 * multiplier}
          height={248 * multiplier}
          viewBox="1.5 -1 324 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="gold-vertical"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#FDF5A6"></stop>
              <stop offset="10%" stop-color="#B88746"></stop>
              <stop offset="25%" stop-color="#595959"></stop>
              <stop offset="50%" stop-color="#B88746"></stop>
              <stop offset="100%" stop-color="#FDF5A6"></stop>
            </linearGradient>

            <linearGradient
              id="silver-vertical"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#f0f0f0"></stop>
              <stop offset="10%" stop-color="#595959"></stop>
              <stop offset="25%" stop-color="#5e5e5e"></stop>
              <stop offset="90%" stop-color="#ebebeb"></stop>
              <stop offset="100%" stop-color="#e6e6e6"></stop>
            </linearGradient>

            <linearGradient
              id="royal-chromium-vertical"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#f0f0f0"></stop>
              <stop offset="10%" stop-color="#595959"></stop>
              <stop offset="25%" stop-color="#ffffff"></stop>
              <stop offset="50%" stop-color="#d9d9d9"></stop>
              <stop offset="75%" stop-color="#ebebeb"></stop>
              <stop offset="100%" stop-color="#b8b8b8"></stop>
            </linearGradient>

            <linearGradient
              id="duraplast-vertical"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#b8b8b8"></stop>
              <stop offset="10%" stop-color="#ffffff"></stop>
              <stop offset="25%" stop-color="#fcfcfc"></stop>
              <stop offset="90%" stop-color="#d9d9d9"></stop>
              <stop offset="100%" stop-color="#b8b8b8"></stop>
            </linearGradient>

            <linearGradient
              id="bronze-vertical"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#9e6941"></stop>
              <stop offset="10%" stop-color="#ffffff"></stop>
              <stop offset="25%" stop-color="#9e6941"></stop>
              <stop offset="100%" stop-color="#dda680"></stop>
            </linearGradient>

            <linearGradient
              id="pink-vertical"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#bd7d75"></stop>
              <stop offset="10%" stop-color="#ffffff"></stop>
              <stop offset="25%" stop-color="#bd7d75"></stop>
              <stop offset="100%" stop-color="#ffc5b9"></stop>
            </linearGradient>

            <linearGradient
              id="gunmetal-vertical"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#262423"></stop>
              <stop offset="100%" stop-color="#4d4846"></stop>
            </linearGradient>

            <linearGradient
              id="copper-vertical"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#8f470b"></stop>
              <stop offset="10%" stop-color="#ffca9e"></stop>
              <stop offset="25%" stop-color="#8f470b"></stop>
              <stop offset="100%" stop-color="#d9945b"></stop>
            </linearGradient>

            <linearGradient
              id="crodium-vertical"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#170900"></stop>
              <stop offset="10%" stop-color="#d9945b"></stop>
              <stop offset="25%" stop-color="#2e1200"></stop>
              <stop offset="100%" stop-color="#170900"></stop>
            </linearGradient>
          </defs>
          <rect width="324" height="248" fill="transparent" />
          <rect
            x="1"
            y="66.6614"
            width="219"
            height="119.5"
            fill={bodyColor}
            stroke="black"
            stroke-width="2"
          />
          <path
            d="M227.097 58.116C234.232 53.1923 243.967 58.6635 244.04 67.6377L244.968 181.61C245.037 190.045 236.408 195.314 229.179 191.251L137.639 139.808C130.41 135.745 129.779 125.273 136.485 120.645L227.097 58.116Z"
            fill="url(#silver-vertical)"
            stroke="black"
            stroke-width="2"
          />
        </svg>
      ),
    },
    Grip: {
      Classic: (
        <svg
          width={281 * multiplier}
          height={248 * multiplier}
          viewBox="0 0 281 248"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="gold-vertical"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#FDF5A6"></stop>
              <stop offset="10%" stop-color="#B88746"></stop>
              <stop offset="25%" stop-color="#595959"></stop>
              <stop offset="50%" stop-color="#B88746"></stop>
              <stop offset="100%" stop-color="#FDF5A6"></stop>
            </linearGradient>

            <linearGradient
              id="silver-vertical"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#f0f0f0"></stop>
              <stop offset="10%" stop-color="#595959"></stop>
              <stop offset="25%" stop-color="#5e5e5e"></stop>
              <stop offset="90%" stop-color="#ebebeb"></stop>
              <stop offset="100%" stop-color="#e6e6e6"></stop>
            </linearGradient>

            <linearGradient
              id="royal-chromium-vertical"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#f0f0f0"></stop>
              <stop offset="10%" stop-color="#595959"></stop>
              <stop offset="25%" stop-color="#ffffff"></stop>
              <stop offset="50%" stop-color="#d9d9d9"></stop>
              <stop offset="75%" stop-color="#ebebeb"></stop>
              <stop offset="100%" stop-color="#b8b8b8"></stop>
            </linearGradient>

            <linearGradient
              id="duraplast-vertical"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#b8b8b8"></stop>
              <stop offset="10%" stop-color="#ffffff"></stop>
              <stop offset="25%" stop-color="#fcfcfc"></stop>
              <stop offset="90%" stop-color="#d9d9d9"></stop>
              <stop offset="100%" stop-color="#b8b8b8"></stop>
            </linearGradient>

            <linearGradient
              id="bronze-vertical"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#9e6941"></stop>
              <stop offset="10%" stop-color="#ffffff"></stop>
              <stop offset="25%" stop-color="#9e6941"></stop>
              <stop offset="100%" stop-color="#dda680"></stop>
            </linearGradient>

            <linearGradient
              id="pink-vertical"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#bd7d75"></stop>
              <stop offset="10%" stop-color="#ffffff"></stop>
              <stop offset="25%" stop-color="#bd7d75"></stop>
              <stop offset="100%" stop-color="#ffc5b9"></stop>
            </linearGradient>

            <linearGradient
              id="gunmetal-vertical"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#262423"></stop>
              <stop offset="100%" stop-color="#4d4846"></stop>
            </linearGradient>

            <linearGradient
              id="copper-vertical"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#8f470b"></stop>
              <stop offset="10%" stop-color="#ffca9e"></stop>
              <stop offset="25%" stop-color="#8f470b"></stop>
              <stop offset="100%" stop-color="#d9945b"></stop>
            </linearGradient>

            <linearGradient
              id="crodium-vertical"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#170900"></stop>
              <stop offset="10%" stop-color="#d9945b"></stop>
              <stop offset="25%" stop-color="#2e1200"></stop>
              <stop offset="100%" stop-color="#170900"></stop>
            </linearGradient>
          </defs>
          <rect width="281" height="248" fill="transparent" />
          <rect
            x="0.5"
            y="66.5"
            width="280"
            height="119"
            fill={bodyColor}
            stroke="black"
            strokeWidth="2"
          />
          <rect
            x="19"
            y="57"
            width="19"
            height="143"
            fill="url(#silver-vertical)"
            stroke="black"
            strokeWidth="2"
          />
          <rect
            x="57"
            y="57"
            width="19"
            height="143"
            fill="url(#silver-vertical)"
            stroke="black"
            strokeWidth="2"
          />
          <rect
            x="95"
            y="57"
            width="19"
            height="143"
            fill="url(#silver-vertical)"
            stroke="black"
            strokeWidth="2"
          />
          <rect
            x="135"
            y="55"
            width="19"
            height="143"
            fill="url(#silver-vertical)"
            stroke="black"
            strokeWidth="2"
          />
          <rect
            x="174"
            y="57"
            width="19"
            height="143"
            fill="url(#silver-vertical)"
            stroke="black"
            strokeWidth="2"
          />
          <rect
            x="212"
            y="55"
            width="19"
            height="143"
            fill="url(#silver-vertical)"
            stroke="black"
            strokeWidth="2"
          />
        </svg>
      ),
    },
    Switch: {
      Classic: (
        <svg
          width="281"
          height="248"
          viewBox="0 0 281 248"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="gold-vertical"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#FDF5A6"></stop>
              <stop offset="10%" stop-color="#B88746"></stop>
              <stop offset="25%" stop-color="#595959"></stop>
              <stop offset="50%" stop-color="#B88746"></stop>
              <stop offset="100%" stop-color="#FDF5A6"></stop>
            </linearGradient>

            <linearGradient
              id="silver-vertical"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#f0f0f0"></stop>
              <stop offset="10%" stop-color="#595959"></stop>
              <stop offset="25%" stop-color="#5e5e5e"></stop>
              <stop offset="90%" stop-color="#ebebeb"></stop>
              <stop offset="100%" stop-color="#e6e6e6"></stop>
            </linearGradient>

            <linearGradient
              id="royal-chromium-vertical"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#f0f0f0"></stop>
              <stop offset="10%" stop-color="#595959"></stop>
              <stop offset="25%" stop-color="#ffffff"></stop>
              <stop offset="50%" stop-color="#d9d9d9"></stop>
              <stop offset="75%" stop-color="#ebebeb"></stop>
              <stop offset="100%" stop-color="#b8b8b8"></stop>
            </linearGradient>

            <linearGradient
              id="duraplast-vertical"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#b8b8b8"></stop>
              <stop offset="10%" stop-color="#ffffff"></stop>
              <stop offset="25%" stop-color="#fcfcfc"></stop>
              <stop offset="90%" stop-color="#d9d9d9"></stop>
              <stop offset="100%" stop-color="#b8b8b8"></stop>
            </linearGradient>

            <linearGradient
              id="bronze-vertical"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#9e6941"></stop>
              <stop offset="10%" stop-color="#ffffff"></stop>
              <stop offset="25%" stop-color="#9e6941"></stop>
              <stop offset="100%" stop-color="#dda680"></stop>
            </linearGradient>

            <linearGradient
              id="pink-vertical"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#bd7d75"></stop>
              <stop offset="10%" stop-color="#ffffff"></stop>
              <stop offset="25%" stop-color="#bd7d75"></stop>
              <stop offset="100%" stop-color="#ffc5b9"></stop>
            </linearGradient>

            <linearGradient
              id="gunmetal-vertical"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#262423"></stop>
              <stop offset="100%" stop-color="#4d4846"></stop>
            </linearGradient>

            <linearGradient
              id="copper-vertical"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#8f470b"></stop>
              <stop offset="10%" stop-color="#ffca9e"></stop>
              <stop offset="25%" stop-color="#8f470b"></stop>
              <stop offset="100%" stop-color="#d9945b"></stop>
            </linearGradient>

            <linearGradient
              id="crodium-vertical"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#170900"></stop>
              <stop offset="10%" stop-color="#d9945b"></stop>
              <stop offset="25%" stop-color="#2e1200"></stop>
              <stop offset="100%" stop-color="#170900"></stop>
            </linearGradient>
          </defs>
          <rect width="281" height="248" fill="transparent" />
          <rect
            x="1"
            y="67"
            width="279"
            height="119"
            fill={bodyColor}
            stroke="black"
            strokeWidth="2"
          />
          <rect
            x="49"
            y="47"
            width="144"
            height="56"
            fill="url(#silver-horizontal)"
            stroke="black"
            strokeWidth="2"
          />
          <rect
            x="59"
            y="47"
            width="123"
            height="27"
            fill="url(#gold-vertical)"
            stroke="black"
            strokeWidth="2"
          />
          <line x1="70.5" y1="46" x2="70.5" y2="75" stroke="black" />
          <line x1="81.5" y1="46" x2="81.5" y2="75" stroke="black" />
          <path d="M105.5 46V75" stroke="black" />
          <line
            y1="-0.5"
            x2="29"
            y2="-0.5"
            transform="matrix(0 1 1 0 94 46)"
            stroke="black"
          />
          <line x1="105.5" y1="46" x2="105.5" y2="75" stroke="black" />
          <line x1="116.5" y1="46" x2="116.5" y2="75" stroke="black" />
          <line
            y1="-0.5"
            x2="29"
            y2="-0.5"
            transform="matrix(0 1 1 0 129 46)"
            stroke="black"
          />
          <line x1="141.5" y1="46" x2="141.5" y2="75" stroke="black" />
          <line x1="152.5" y1="46" x2="152.5" y2="75" stroke="black" />
          <line
            y1="-0.5"
            x2="29"
            y2="-0.5"
            transform="matrix(0 1 1 0 165 46)"
            stroke="black"
          />
          <rect
            x="227"
            y="67"
            width="18"
            height="119"
            fill="url(#gunmetal-vertical)"
            stroke="black"
            strokeWidth="2"
          />
          <rect
            x="15"
            y="67"
            width="23"
            height="119"
            fill="url(#gunmetal-vertical)"
            stroke="black"
            strokeWidth="2"
          />
        </svg>
      ),
    },
  };

  return selectSVG();
}

export default DisplaySVG;
