import { getDefs } from "../utils/get-defs";
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
          viewBox="1.5 -1 324 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {getDefs()}
        </svg>
      ),
      Template: (
        <svg
          className="saber-emitter"
          width={324 * multiplier}
          height={248 * multiplier}
          viewBox="1.5 -1 324 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="324" height="248" fill="transparent" />
          <rect
            x="1"
            y="66.6614"
            width="219"
            height="119.5"
            fill="transparent"
            stroke="goldenrod"
            strokeWidth="2"
          />

          <path
            d="M227.097 58.116C234.232 53.1923 243.967 58.6635 244.04 67.6377L244.968 181.61C245.037 190.045 236.408 195.314 229.179 191.251L137.639 139.808C130.41 135.745 129.779 125.273 136.485 120.645L227.097 58.116Z"
            fill="transparent"
            stroke="goldenrod"
            strokeWidth="2"
          />
        </svg>
      ),
      Classic: (
        <svg
          className="saber-emitter"
          width={324 * multiplier}
          height={248 * multiplier}
          viewBox="1.5 -1 324 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {getDefs()}

          <rect width="324" height="248" fill="transparent" />
          <rect
            x="1"
            y="66.6614"
            width="219"
            height="119.5"
            fill={bodyColor}
            stroke="black"
            strokeWidth="2"
            filter="url(#shadow)"
          />

          <path
            d="M227.097 58.116C234.232 53.1923 243.967 58.6635 244.04 67.6377L244.968 181.61C245.037 190.045 236.408 195.314 229.179 191.251L137.639 139.808C130.41 135.745 129.779 125.273 136.485 120.645L227.097 58.116Z"
            fill="url(#silver-vertical)"
            stroke="black"
            strokeWidth="2"
            filter="url(#shadow)"
          />
        </svg>
      ),
      Guidance: (
        <svg
          className="saber-emitter"
          width={324 * multiplier}
          height={248 * multiplier}
          viewBox="1.5 -1 324 250.5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {getDefs()}
          <rect
            x="1"
            y="67"
            width="277"
            height="119"
            stroke="transparent"
            strokeWidth="2"
          />
          <path
            d="M106.843 66.5L278.909 186.5H0.5V66.5H106.843Z"
            fill={bodyColor}
            stroke="black"
            strokeWidth="2.15"
            filter="url(#shadow)"
          />
          <g filter="url(#filter0_d)">
            <ellipse
              cx="94"
              cy="89.5"
              rx="13"
              ry="11.5"
              fill="url(#paint0_radial)"
            />
            <path
              d="M106.5 89.5C106.5 95.5193 100.963 100.5 94 100.5C87.0371 100.5 81.5 95.5193 81.5 89.5C81.5 83.4807 87.0371 78.5 94 78.5C100.963 78.5 106.5 83.4807 106.5 89.5Z"
              stroke="black"
            />
          </g>
          <g filter="url(#filter1_d)">
            <ellipse
              cx="140"
              cy="126.5"
              rx="13"
              ry="11.5"
              fill="url(#paint1_radial)"
            />
            <path
              d="M152.5 126.5C152.5 132.519 146.963 137.5 140 137.5C133.037 137.5 127.5 132.519 127.5 126.5C127.5 120.481 133.037 115.5 140 115.5C146.963 115.5 152.5 120.481 152.5 126.5Z"
              stroke="black"
            />
          </g>
          <g filter="url(#filter2_d)">
            <ellipse
              cx="187"
              cy="159.5"
              rx="13"
              ry="11.5"
              fill="url(#paint2_radial)"
            />
            <path
              d="M199.5 159.5C199.5 165.519 193.963 170.5 187 170.5C180.037 170.5 174.5 165.519 174.5 159.5C174.5 153.481 180.037 148.5 187 148.5C193.963 148.5 199.5 153.481 199.5 159.5Z"
              stroke="black"
            />
          </g>
          <defs>
            <filter
              id="filter0_d"
              x="71"
              y="72"
              width="42"
              height="39"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="3"
                operator="dilate"
                in="SourceAlpha"
                result="effect1_dropShadow"
              />
              <feOffset dx="-2" dy="2" />
              <feGaussianBlur stdDeviation="2.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d"
              x="117"
              y="109"
              width="42"
              height="39"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="3"
                operator="dilate"
                in="SourceAlpha"
                result="effect1_dropShadow"
              />
              <feOffset dx="-2" dy="2" />
              <feGaussianBlur stdDeviation="2.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
            <filter
              id="filter2_d"
              x="164"
              y="142"
              width="42"
              height="39"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="3"
                operator="dilate"
                in="SourceAlpha"
                result="effect1_dropShadow"
              />
              <feOffset dx="-2" dy="2" />
              <feGaussianBlur stdDeviation="2.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
            <radialGradient
              id="paint0_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(94 89.5) rotate(90) scale(11.5 13)"
            >
              <stop stop-color="#927201" />
              <stop offset="0.473958" stop-color="#FC9F14" />
              <stop offset="0.65625" stop-color="#BBA681" />
              <stop offset="0.838542" stop-color="#402800" />
              <stop offset="0.9999" stop-color="#000700" />
            </radialGradient>
            <radialGradient
              id="paint1_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(140 126.5) rotate(90) scale(11.5 13)"
            >
              <stop stop-color="#927201" />
              <stop offset="0.473958" stop-color="#FC9F14" />
              <stop offset="0.65625" stop-color="#BBA681" />
              <stop offset="0.838542" stop-color="#402800" />
              <stop offset="0.9999" stop-color="#000700" />
            </radialGradient>
            <radialGradient
              id="paint2_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(187 159.5) rotate(90) scale(11.5 13)"
            >
              <stop stop-color="#927201" />
              <stop offset="0.473958" stop-color="#FC9F14" />
              <stop offset="0.65625" stop-color="#BBA681" />
              <stop offset="0.838542" stop-color="#402800" />
              <stop offset="0.9999" stop-color="#000700" />
            </radialGradient>
          </defs>
        </svg>
      ),
      Hero: (
        <svg
          className="saber-emitter"
          width={324 * multiplier}
          height={248 * multiplier}
          viewBox="1.5 -1 324 250.5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {getDefs()}
          <rect
            x="1"
            y="67"
            width="277"
            height="119"
            stroke="transparent"
            strokeWidth="2"
          />
          <path
            d="M1 99H124V154H1V99Z"
            fill={bodyColor}
            stroke="black"
            stroke-width="2"
          />
          <g filter="url(#filter0_d8)">
            <rect
              x="22"
              y="77"
              width="22"
              height="95"
              rx="5"
              fill={bodyColor}
            />
            <rect
              x="23"
              y="78"
              width="20"
              height="93"
              rx="4"
              stroke="black"
              stroke-width="2"
            />
          </g>
          <g filter="url(#filter1_d9)">
            <rect
              x="49"
              y="77"
              width="22"
              height="95"
              rx="5"
              fill={bodyColor}
            />
            <rect
              x="50"
              y="78"
              width="20"
              height="93"
              rx="4"
              stroke="black"
              stroke-width="2"
            />
          </g>
          <g filter="url(#filter2_d9)">
            <rect
              x="76"
              y="77"
              width="22"
              height="95"
              rx="5"
              fill={bodyColor}
            />
            <rect
              x="77"
              y="78"
              width="20"
              height="93"
              rx="4"
              stroke="black"
              stroke-width="2"
            />
          </g>
          <path
            d="M225.883 185.621L127.417 156.119C123.608 154.977 121 151.473 121 147.497V105.503C121 101.527 123.608 98.0226 127.417 96.8815L225.883 67.3787C226.721 67.1276 227.591 67 228.466 67H270C274.971 67 279 71.0294 279 76V177C279 181.971 274.971 186 270 186H228.466C227.591 186 226.721 185.872 225.883 185.621Z"
            fill={bodyColor}
            stroke="black"
            stroke-width="2"
          />
          <g filter="url(#filter3_d9)">
            <rect
              x="103"
              y="77"
              width="22"
              height="95"
              rx="5"
              fill={bodyColor}
            />
            <rect
              x="104"
              y="78"
              width="20"
              height="93"
              rx="4"
              stroke="black"
              stroke-width="2"
            />
          </g>
          <defs>
            <filter
              id="filter0_d8"
              x="12"
              y="77"
              width="32"
              height="103"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="-6" dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d9"
              x="39"
              y="77"
              width="32"
              height="103"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="-6" dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
            <filter
              id="filter2_d9"
              x="66"
              y="77"
              width="32"
              height="103"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="-6" dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
            <filter
              id="filter3_d9"
              x="93"
              y="77"
              width="32"
              height="103"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="-6" dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      ),
      Lost: (
        <svg
          className="saber-emitter"
          width={324 * multiplier}
          height={248 * multiplier}
          viewBox="1.5 -1 324 250.5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {getDefs()}
          <rect
            x="1"
            y="67"
            width="277"
            height="119"
            stroke="transparent"
            strokeWidth="2"
          />
          <path
            d="M1 116H82V136H1V116Z"
            fill="url(#royal-chromium-vertical)"
            stroke="black"
            stroke-width="2"
          />
          <path
            d="M92 99.5H106.5V153.5H92C86.7533 153.5 82.5 149.247 82.5 144V109C82.5 103.753 86.7533 99.5 92 99.5Z"
            fill="#413838"
            stroke="black"
          />
          <rect
            x="57.5"
            y="83.5"
            width="12"
            height="88"
            fill="#413838"
            stroke="black"
          />
          <g filter="url(#filter0_d)12">
            <path
              d="M311.143 196C325.177 191.205 328.579 171.247 317.062 161.274L310.665 155.734H173.896C166.66 155.734 159.467 154.612 152.574 152.408L117.647 141.239H40.5094L30.0531 161.103H9L20.6408 178.431C28.0593 189.475 39.8608 196 52.4143 196H311.143Z"
              fill={bodyColor}
            />
            <path
              d="M311.143 57C325.177 61.7945 328.579 81.7531 317.062 91.7262L310.665 97.2657H174.663C166.922 97.2657 159.23 98.4634 151.882 100.813L117.647 111.761H40.5094L30.0531 91.8969H9L20.6408 74.5686C28.0593 63.5255 39.8608 57 52.4143 57H311.143Z"
              fill={bodyColor}
            />
            <path
              d="M30.0531 162.103H30.6568L30.938 161.569L41.1131 142.239H117.491L152.27 153.36C159.261 155.596 166.556 156.734 173.896 156.734H310.293L316.408 162.03C321.866 166.756 323.813 173.871 322.699 180.411C321.593 186.9 317.496 192.703 310.975 195H52.4143C40.217 195 28.7168 188.66 21.4708 177.874L10.8765 162.103H30.0531ZM30.938 91.4311L30.6568 90.8969H30.0531H10.8765L21.4708 75.1262C28.7168 64.3399 40.217 58 52.4143 58H310.975C317.496 60.2966 321.593 66.1003 322.699 72.5892C323.813 79.1293 321.866 86.2436 316.408 90.9703L310.293 96.2657H174.663C166.818 96.2657 159.025 97.4793 151.578 99.8609L117.491 110.761H41.1131L30.938 91.4311Z"
              stroke="black"
              stroke-width="2"
            />
          </g>
          <path
            d="M38.75 69.5C38.75 71.3325 37.484 72.75 36 72.75C34.516 72.75 33.25 71.3325 33.25 69.5C33.25 67.6675 34.516 66.25 36 66.25C37.484 66.25 38.75 67.6675 38.75 69.5Z"
            fill="url(#royal-chromium-vertical)"
            stroke="black"
            stroke-width="0.5"
          />
          <path
            d="M51.75 65C51.75 66.0557 51.4288 67.0018 50.9213 67.6784C50.4139 68.3549 49.7321 68.75 49 68.75C48.2679 68.75 47.5861 68.3549 47.0787 67.6784C46.5712 67.0018 46.25 66.0557 46.25 65C46.25 63.9443 46.5712 62.9982 47.0787 62.3216C47.5861 61.6451 48.2679 61.25 49 61.25C49.7321 61.25 50.4139 61.6451 50.9213 62.3216C51.4288 62.9982 51.75 63.9443 51.75 65Z"
            fill="url(#royal-chromium-vertical)"
            stroke="black"
            stroke-width="0.5"
          />
          <path
            d="M27.75 83C27.75 84.0557 27.4288 85.0018 26.9213 85.6784C26.4139 86.3549 25.7321 86.75 25 86.75C24.2679 86.75 23.5861 86.3549 23.0787 85.6784C22.5712 85.0018 22.25 84.0557 22.25 83C22.25 81.9443 22.5712 80.9982 23.0787 80.3216C23.5861 79.6451 24.2679 79.25 25 79.25C25.7321 79.25 26.4139 79.6451 26.9213 80.3216C27.4288 80.9982 27.75 81.9443 27.75 83Z"
            fill="url(#royal-chromium-vertical)"
            stroke="black"
            stroke-width="0.5"
          />
          <path
            d="M38.75 183.5C38.75 181.668 37.484 180.25 36 180.25C34.516 180.25 33.25 181.668 33.25 183.5C33.25 185.332 34.516 186.75 36 186.75C37.484 186.75 38.75 185.332 38.75 183.5Z"
            fill="url(#royal-chromium-vertical)"
            stroke="black"
            stroke-width="0.5"
          />
          <path
            d="M51.75 188C51.75 186.944 51.4288 185.998 50.9213 185.322C50.4139 184.645 49.7321 184.25 49 184.25C48.2679 184.25 47.5861 184.645 47.0787 185.322C46.5712 185.998 46.25 186.944 46.25 188C46.25 189.056 46.5712 190.002 47.0787 190.678C47.5861 191.355 48.2679 191.75 49 191.75C49.7321 191.75 50.4139 191.355 50.9213 190.678C51.4288 190.002 51.75 189.056 51.75 188Z"
            fill="url(#royal-chromium-vertical)"
            stroke="black"
            stroke-width="0.5"
          />
          <path
            d="M27.75 170C27.75 168.944 27.4288 167.998 26.9213 167.322C26.4139 166.645 25.7321 166.25 25 166.25C24.2679 166.25 23.5861 166.645 23.0787 167.322C22.5712 167.998 22.25 168.944 22.25 170C22.25 171.056 22.5712 172.002 23.0787 172.678C23.5861 173.355 24.2679 173.75 25 173.75C25.7321 173.75 26.4139 173.355 26.9213 172.678C27.4288 172.002 27.75 171.056 27.75 170Z"
            fill="url(#royal-chromium-vertical)"
            stroke="black"
            stroke-width="0.5"
          />
          <circle
            cx="98"
            cy="116"
            r="3.75"
            fill="url(#royal-chromium-vertical)"
            stroke="black"
            stroke-width="0.5"
          />
          <path
            d="M93.75 127C93.75 129.071 92.0711 130.75 90 130.75C87.9289 130.75 86.25 129.071 86.25 127C86.25 124.929 87.9289 123.25 90 123.25C92.0711 123.25 93.75 124.929 93.75 127Z"
            fill="url(#royal-chromium-vertical)"
            stroke="black"
            stroke-width="0.5"
          />
          <circle
            cx="98"
            cy="138"
            r="3.75"
            fill="url(#royal-chromium-vertical)"
            stroke="black"
            stroke-width="0.5"
          />
          <defs>
            <filter
              id="filter0_d12"
              x="5"
              y="57"
              width="323"
              height="147"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      ),
      Vengeance: (
        <svg
          className="saber-emitter"
          width={324 * multiplier}
          height={248 * multiplier}
          viewBox="1.5 -1 324 250.5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {getDefs()}
          <rect
            x="1"
            y="67"
            width="277"
            height="119"
            stroke="transparent"
            strokeWidth="2"
          />

          <path
            d="M15.5 110C15.5 104.753 19.7533 100.5 25 100.5H39.5V154.5H25C19.7533 154.5 15.5 150.247 15.5 145V110Z"
            fill="#413838"
            stroke="black"
            filter="url(#shadow)"
          />
          <g filter="url(#filter0_i15)">
            <path
              d="M66.77 178.875C78.3056 199.996 102.938 210.303 126.078 203.692V203.692C127.689 203.232 129.341 202.93 131.01 202.791L149.049 201.288C151.347 201.096 153.627 200.735 155.871 200.207V200.207C164.855 198.093 174.185 197.904 183.248 199.653L190.024 200.961C195.307 201.98 200.719 202.14 206.053 201.435L258.5 194.5L317.5 182L271.707 203.999C268.247 205.661 264.608 206.919 260.86 207.748L205.5 220L177.97 225.576C170.134 227.163 162.015 226.619 154.461 224L148.71 222.006C136.314 217.709 122.556 220.75 113.127 229.872V229.872C102.8 239.862 86.5656 240.349 75.6588 230.995L12 176.402V155H30.3643C44.7695 155 58.0256 162.864 64.9305 175.507L66.77 178.875Z"
              fill={bodyColor}
              filter="url(#shadow)"
            />
          </g>
          <path
            d="M13 156H30.3643C44.4038 156 57.3233 163.665 64.0528 175.986L65.8924 179.354C77.6521 200.886 102.763 211.393 126.353 204.654C127.901 204.211 129.489 203.921 131.093 203.787L149.132 202.284C151.479 202.089 153.808 201.72 156.1 201.18C164.947 199.099 174.134 198.913 183.058 200.635L189.835 201.943C195.223 202.983 200.744 203.146 206.184 202.427L258.631 195.491L258.669 195.486L258.707 195.478L309.562 184.704L271.274 203.097C267.883 204.726 264.317 205.959 260.644 206.772L205.301 219.02L205.284 219.024L177.771 224.596C170.11 226.147 162.174 225.615 154.789 223.055L149.037 221.061C136.286 216.641 122.131 219.769 112.431 229.153C102.476 238.784 86.8247 239.254 76.3098 230.236L13 175.942V156Z"
            stroke="black"
            stroke-width="2"
          />
          <g>
            <g filter="url(#filter1_i15)">
              <path
                d="M80.1048 193.327C90.702 201.542 104.143 205.181 117.437 203.435L131.852 201.542L152.544 199.31C154.615 199.087 156.667 198.709 158.681 198.18V198.18C168.237 195.67 178.274 195.62 187.854 198.035L190.221 198.632C196.103 200.115 202.211 200.483 208.229 199.716L250.352 194.353L275.19 190.83L309 185L253.974 200.876L217.075 208.473C209.641 210.004 202.007 210.315 194.473 209.395L176.883 207.247C173.777 206.868 170.643 206.781 167.521 206.987L139.26 208.857C135.37 209.114 131.522 209.826 127.796 210.977L116.26 214.543C106.965 217.415 96.9428 216.802 88.0677 212.819L80.1048 209.244L78.5524 197.948L77 191.786L80.1048 193.327V193.327Z"
                fill={bodyColor}
              />
              <path
                d="M80.1048 193.327C90.702 201.542 104.143 205.181 117.437 203.435L131.852 201.542L152.544 199.31C154.615 199.087 156.667 198.709 158.681 198.18V198.18C168.237 195.67 178.274 195.62 187.854 198.035L190.221 198.632C196.103 200.115 202.211 200.483 208.229 199.716L250.352 194.353L275.19 190.83L309 185L253.974 200.876L217.075 208.473C209.641 210.004 202.007 210.315 194.473 209.395L176.883 207.247C173.777 206.868 170.643 206.781 167.521 206.987L139.26 208.857C135.37 209.114 131.522 209.826 127.796 210.977L116.26 214.543C106.965 217.415 96.9428 216.802 88.0677 212.819L80.1048 209.244L78.5524 197.948L77 191.786L80.1048 193.327V193.327Z"
                fill="url(#paint0_linear15)"
              />
            </g>
            <path
              d="M80.1048 193.327C90.702 201.542 104.143 205.181 117.437 203.435L131.852 201.542L152.544 199.31C154.615 199.087 156.667 198.709 158.681 198.18V198.18C168.237 195.67 178.274 195.62 187.854 198.035L190.221 198.632C196.103 200.115 202.211 200.483 208.229 199.716L250.352 194.353L275.19 190.83L309 185L253.974 200.876L217.075 208.473C209.641 210.004 202.007 210.315 194.473 209.395L176.883 207.247C173.777 206.868 170.643 206.781 167.521 206.987L139.26 208.857C135.37 209.114 131.522 209.826 127.796 210.977L116.26 214.543C106.965 217.415 96.9428 216.802 88.0677 212.819L80.1048 209.244L78.5524 197.948L77 191.786L80.1048 193.327V193.327Z"
              stroke="black"
            />
          </g>
          <path
            d="M18.5 156.5C20.0833 162.833 18.758 169.543 14.8855 174.798L14 176L17.5 179L19.335 176.064C22.9769 170.237 24.2858 163.25 23 156.5V156.5H18.5V156.5Z"
            fill="#670025"
            fill-opacity="0.96"
          />
          <path
            d="M25.9871 160.69C25.9871 167.739 23.9042 174.631 20 180.5V180.5L23 183V183C26.6171 177.081 28.8084 170.402 29.4008 163.491L30 156.5H25.9871V160.69Z"
            fill="#670025"
            fill-opacity="0.96"
          />
          <path
            d="M46 203C50.2021 203.56 59.2281 195.418 60 191.25L60.6236 189.005C61.8714 184.513 62.6678 179.9 63 175.25V175.25L60 171.75L57 186.75C56.7927 189.963 46.6234 201.781 43.5 201L46 203Z"
            fill="#670025"
            fill-opacity="0.96"
          />
          <path
            d="M32.5 161.5C32.5 168.549 28.9042 179.131 25 185L27.5 187.5C31.1171 181.581 35.3084 171.212 35.9008 164.3L36.5 157.309L32.5 156.5V161.5Z"
            fill="#670025"
            fill-opacity="0.96"
          />
          <path
            d="M39.5 163.5C39.5 170.549 33.9042 183.631 30 189.5L32.5 192C36.1171 186.081 42.3084 173.212 42.9008 166.3L43.5 158.5L39.5 157.309V163.5Z"
            fill="#670025"
            fill-opacity="0.96"
          />
          <path
            d="M46.5 167.499C46.5 174.548 38.4042 187.631 34.5 193.5L37.5 195.833C41.1171 189.914 49.3084 177.21 49.9008 170.299L49.5 162.333L46.5 160.333V167.499Z"
            fill="#670025"
            fill-opacity="0.96"
          />
          <path
            d="M52.2914 176.131C51.7662 178.035 51.6249 180.042 51.0423 181.929C49.2777 187.646 42.8478 192.467 39.5 197.5L41.5 199.5C45.1171 193.581 53.9076 188.411 54.5 181.5L54.8817 179.337C55.6243 175.129 55.832 170.844 55.5 166.585V166.585L52.5 164.585L52.8718 167.249C53.2862 170.218 53.0887 173.241 52.2914 176.131V176.131Z"
            fill="#670025"
            fill-opacity="0.96"
          />
          <path
            d="M18.5 156.5C20.0833 162.833 18.758 169.543 14.8855 174.798L14 176L17.5 179L19.335 176.064C22.9769 170.237 24.2858 163.25 23 156.5V156.5H18.5V156.5Z"
            stroke="black"
          />
          <path
            d="M25.9871 160.69C25.9871 167.739 23.9042 174.631 20 180.5V180.5L23 183V183C26.6171 177.081 28.8084 170.402 29.4008 163.491L30 156.5H25.9871V160.69Z"
            stroke="black"
          />
          <path
            d="M46 203C50.2021 203.56 59.2281 195.418 60 191.25L60.6236 189.005C61.8714 184.513 62.6678 179.9 63 175.25V175.25L60 171.75L57 186.75C56.7927 189.963 46.6234 201.781 43.5 201L46 203Z"
            stroke="black"
          />
          <path
            d="M32.5 161.5C32.5 168.549 28.9042 179.131 25 185L27.5 187.5C31.1171 181.581 35.3084 171.212 35.9008 164.3L36.5 157.309L32.5 156.5V161.5Z"
            stroke="black"
          />
          <path
            d="M39.5 163.5C39.5 170.549 33.9042 183.631 30 189.5L32.5 192C36.1171 186.081 42.3084 173.212 42.9008 166.3L43.5 158.5L39.5 157.309V163.5Z"
            stroke="black"
          />
          <path
            d="M46.5 167.499C46.5 174.548 38.4042 187.631 34.5 193.5L37.5 195.833C41.1171 189.914 49.3084 177.21 49.9008 170.299L49.5 162.333L46.5 160.333V167.499Z"
            stroke="black"
          />
          <path
            d="M52.2914 176.131C51.7662 178.035 51.6249 180.042 51.0423 181.929C49.2777 187.646 42.8478 192.467 39.5 197.5L41.5 199.5C45.1171 193.581 53.9076 188.411 54.5 181.5L54.8817 179.337C55.6243 175.129 55.832 170.844 55.5 166.585V166.585L52.5 164.585L52.8718 167.249C53.2862 170.218 53.0887 173.241 52.2914 176.131V176.131Z"
            stroke="black"
          />
          <rect
            x="1"
            y="67"
            width="13"
            height="119"
            rx="4"
            fill="#413838"
            stroke="black"
            stroke-width="2"
          />
          <defs>
            <filter
              id="filter0_i15"
              x="12"
              y="155"
              width="309.5"
              height="86.7"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="4" dy="4" />
              <feGaussianBlur stdDeviation="7.5" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
              />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
            </filter>
            <filter
              id="filter1_i15"
              x="76.25"
              y="184.507"
              width="236.889"
              height="36.3192"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="4" dy="4" />
              <feGaussianBlur stdDeviation="7.5" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
              />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
            </filter>
            <linearGradient
              id="paint0_linear15"
              x1="90.9716"
              y1="169.707"
              x2="288.62"
              y2="187.436"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F0EEEE" stop-opacity="0" />
              <stop
                offset="0.0241327"
                stop-color="#8A8787"
                stop-opacity="0.48"
              />
              <stop
                offset="0.0502977"
                stop-color="#E9DEDE"
                stop-opacity="0.507"
              />
              <stop
                offset="0.078125"
                stop-color="#E6D5D5"
                stop-opacity="0.307"
              />
              <stop offset="0.109375" stop-opacity="0.32" />
              <stop
                offset="0.135417"
                stop-color="#BCA9A9"
                stop-opacity="0.27"
              />
              <stop
                offset="0.164557"
                stop-color="#BBACAC"
                stop-opacity="0.207"
              />
              <stop
                offset="0.177991"
                stop-color="#060606"
                stop-opacity="0.385294"
              />
              <stop
                offset="0.185406"
                stop-color="#EAEAEA"
                stop-opacity="0.311606"
              />
              <stop
                offset="0.193159"
                stop-color="#1A1919"
                stop-opacity="0.33"
              />
              <stop
                offset="0.205698"
                stop-color="#BAAFAF"
                stop-opacity="0.307"
              />
              <stop offset="0.218088" stop-color="#423636" />
              <stop
                offset="0.234602"
                stop-color="#B9B1B1"
                stop-opacity="0.307"
              />
              <stop
                offset="0.244783"
                stop-color="#575353"
                stop-opacity="0.307"
              />
              <stop
                offset="0.252585"
                stop-color="#B8B3B3"
                stop-opacity="0.307"
              />
              <stop
                offset="0.260417"
                stop-color="#6D6868"
                stop-opacity="0.307"
              />
              <stop
                offset="0.268589"
                stop-color="#C3BEBE"
                stop-opacity="0.307"
              />
              <stop
                offset="0.276391"
                stop-color="#706D6D"
                stop-opacity="0.307"
              />
              <stop
                offset="0.28473"
                stop-color="#D9D4D4"
                stop-opacity="0.307"
              />
              <stop
                offset="0.292399"
                stop-color="#A9A2A2"
                stop-opacity="0.307"
              />
              <stop
                offset="0.30216"
                stop-color="#F0EBEB"
                stop-opacity="0.307"
              />
              <stop
                offset="0.313364"
                stop-color="#FFFAFA"
                stop-opacity="0.307"
              />
              <stop
                offset="0.323248"
                stop-color="#ACA8A8"
                stop-opacity="0.307"
              />
              <stop
                offset="0.332228"
                stop-color="#F0F0F0"
                stop-opacity="0.307"
              />
              <stop offset="0.34375" stop-opacity="0.307" />
              <stop
                offset="0.351363"
                stop-color="#E0E0E0"
                stop-opacity="0.307"
              />
              <stop
                offset="0.359562"
                stop-color="#767373"
                stop-opacity="0.307"
              />
              <stop
                offset="0.366137"
                stop-color="#B9AEAE"
                stop-opacity="0.307"
              />
              <stop
                offset="0.372802"
                stop-color="#3B3838"
                stop-opacity="0.307"
              />
              <stop
                offset="0.383802"
                stop-color="#5F5B5B"
                stop-opacity="0.307"
              />
              <stop
                offset="0.392362"
                stop-color="#6C6767"
                stop-opacity="0.307"
              />
              <stop
                offset="0.399945"
                stop-color="#777272"
                stop-opacity="0.307"
              />
              <stop
                offset="0.41202"
                stop-color="#8A8383"
                stop-opacity="0.307"
              />
              <stop
                offset="0.428605"
                stop-color="#898888"
                stop-opacity="0.307"
              />
              <stop
                offset="0.435223"
                stop-color="#C8BFBF"
                stop-opacity="0.307"
              />
              <stop
                offset="0.443304"
                stop-color="#FFF2F2"
                stop-opacity="0.307"
              />
              <stop
                offset="0.451693"
                stop-color="#E1D7D7"
                stop-opacity="0.307"
              />
              <stop
                offset="0.460598"
                stop-color="#504949"
                stop-opacity="0.307"
              />
              <stop
                offset="0.468847"
                stop-color="#F6EBEB"
                stop-opacity="0.307"
              />
              <stop
                offset="0.475197"
                stop-color="#A49C9C"
                stop-opacity="0.307"
              />
              <stop
                offset="0.481557"
                stop-color="#FCF1F1"
                stop-opacity="0.307"
              />
              <stop
                offset="0.486349"
                stop-color="#9B9797"
                stop-opacity="0.307"
              />
              <stop
                offset="0.492737"
                stop-color="#FFF7F7"
                stop-opacity="0.307"
              />
              <stop
                offset="0.498925"
                stop-color="#988787"
                stop-opacity="0.307"
              />
              <stop
                offset="0.50573"
                stop-color="#FCF2F2"
                stop-opacity="0.307"
              />
              <stop
                offset="0.512143"
                stop-color="#C5C0C0"
                stop-opacity="0.307"
              />
              <stop
                offset="0.526337"
                stop-color="#FDF2F2"
                stop-opacity="0.307"
              />
              <stop
                offset="0.534031"
                stop-color="#8C8A8A"
                stop-opacity="0.307"
              />
              <stop
                offset="0.541956"
                stop-color="#FDF3F3"
                stop-opacity="0.307"
              />
              <stop
                offset="0.550154"
                stop-color="#FDF3F3"
                stop-opacity="0.307"
              />
              <stop
                offset="0.557292"
                stop-color="#9C9A9A"
                stop-opacity="0.307"
              />
              <stop
                offset="0.564478"
                stop-color="#EFE6E6"
                stop-opacity="0.307"
              />
              <stop
                offset="0.571798"
                stop-color="#151414"
                stop-opacity="0.307"
              />
              <stop
                offset="0.57847"
                stop-color="#D4CCCC"
                stop-opacity="0.307"
              />
              <stop
                offset="0.591789"
                stop-color="#BAB3B3"
                stop-opacity="0.307"
              />
              <stop
                offset="0.604913"
                stop-color="#353232"
                stop-opacity="0.307"
              />
              <stop
                offset="0.620357"
                stop-color="#827E7E"
                stop-opacity="0.307"
              />
              <stop
                offset="0.632492"
                stop-color="#6B6767"
                stop-opacity="0.307"
              />
              <stop
                offset="0.640461"
                stop-color="#E6E6E6"
                stop-opacity="0.307"
              />
              <stop
                offset="0.653661"
                stop-color="#423F3F"
                stop-opacity="0.307"
              />
              <stop
                offset="0.662666"
                stop-color="#C8C6C6"
                stop-opacity="0.307"
              />
              <stop
                offset="0.67281"
                stop-color="#1D1B1B"
                stop-opacity="0.307"
              />
              <stop offset="0.6875" stop-color="#888888" stop-opacity="0.307" />
              <stop
                offset="0.695332"
                stop-color="#141313"
                stop-opacity="0.307"
              />
              <stop
                offset="0.703315"
                stop-color="#CECACA"
                stop-opacity="0.307"
              />
              <stop
                offset="0.71875"
                stop-color="#504D4D"
                stop-opacity="0.307"
              />
              <stop
                offset="0.725837"
                stop-color="#424040"
                stop-opacity="0.307"
              />
              <stop
                offset="0.732206"
                stop-color="#363434"
                stop-opacity="0.307"
              />
              <stop
                offset="0.739224"
                stop-color="#7A7878"
                stop-opacity="0.307"
              />
              <stop
                offset="0.746847"
                stop-color="#1A1919"
                stop-opacity="0.307"
              />
              <stop
                offset="0.760417"
                stop-color="#939090"
                stop-opacity="0.307"
              />
              <stop
                offset="0.771617"
                stop-color="#131212"
                stop-opacity="0.307"
              />
              <stop
                offset="0.779557"
                stop-color="#A09696"
                stop-opacity="0.307"
              />
              <stop
                offset="0.789384"
                stop-color="#313030"
                stop-opacity="0.307"
              />
              <stop
                offset="0.797368"
                stop-color="#807E7E"
                stop-opacity="0.307"
              />
              <stop
                offset="0.804659"
                stop-color="#4B4949"
                stop-opacity="0.307"
              />
              <stop
                offset="0.812613"
                stop-color="#595656"
                stop-opacity="0.307"
              />
              <stop
                offset="0.822917"
                stop-color="#BFBFBF"
                stop-opacity="0.307"
              />
              <stop
                offset="0.832599"
                stop-color="#716D6D"
                stop-opacity="0.307"
              />
              <stop
                offset="0.853898"
                stop-color="#807C7C"
                stop-opacity="0.307"
              />
              <stop offset="0.8654" stop-color="#403E3E" stop-opacity="0.307" />
              <stop offset="0.8781" stop-color="#918C8C" stop-opacity="0.307" />
              <stop
                offset="0.888695"
                stop-color="#888484"
                stop-opacity="0.307"
              />
              <stop
                offset="0.899588"
                stop-color="#2F2D2D"
                stop-opacity="0.307"
              />
              <stop
                offset="0.909261"
                stop-color="#A7A2A2"
                stop-opacity="0.307"
              />
              <stop
                offset="0.918619"
                stop-color="#898686"
                stop-opacity="0.307"
              />
              <stop
                offset="0.927074"
                stop-color="#151515"
                stop-opacity="0.307"
              />
              <stop
                offset="0.93341"
                stop-color="#B8B2B2"
                stop-opacity="0.307"
              />
              <stop
                offset="0.940354"
                stop-color="#8F8989"
                stop-opacity="0.307"
              />
              <stop
                offset="0.94822"
                stop-color="#C3BCBC"
                stop-opacity="0.307"
              />
              <stop
                offset="0.958333"
                stop-color="#9C9898"
                stop-opacity="0.307"
              />
              <stop
                offset="0.969035"
                stop-color="#CAC3C3"
                stop-opacity="0.307"
              />
              <stop
                offset="0.97694"
                stop-color="#383838"
                stop-opacity="0.307"
              />
              <stop
                offset="0.985113"
                stop-color="#CAC3C3"
                stop-opacity="0.307"
              />
            </linearGradient>
          </defs>
        </svg>
      ),
      Ancient: (
        <svg
          className="saber-emitter"
          width={324 * multiplier}
          height={248 * multiplier}
          viewBox="1.5 -1 324 250.5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {getDefs()}
          <rect
            x="1"
            y="67"
            width="277"
            height="119"
            stroke="transparent"
            strokeWidth="2"
          />
          <path
            d="M1 117H82V137H1V117Z"
            fill="url(#gunmetal-vertical)"
            stroke="black"
            stroke-width="2"
          />
          <path
            d="M82.5 110C82.5 104.753 86.7533 100.5 92 100.5H106.5V154.5H92C86.7533 154.5 82.5 150.247 82.5 145V110Z"
            fill="url(#gunmetal-vertical)"
            stroke="black"
          />
          <path
            d="M52.5 158.5V158.346L52.4536 158.199L51.5705 155.402C48.7777 146.558 38.4082 142.705 30.5174 147.579C28.7167 148.691 27.1867 150.191 26.0388 151.969L3.97235 186.15L3.02662 71.7164L19.4369 95.2129C21.9908 98.8696 25.5889 101.67 29.7605 103.249L35.2895 105.341C39.8417 107.063 44.9779 106.035 48.5164 102.693C51.0591 100.292 52.5 96.949 52.5 93.4516V44.6217C52.5 35.1414 56.0379 26.0024 62.4212 18.9932L68.4415 12.3827C73.9459 6.33868 82.274 3.71942 90.247 5.52464L98.255 7.33776C101.033 7.96667 103.28 10.0014 104.18 12.7032C105.759 17.4381 102.744 22.4654 97.8233 23.3029L92.2315 24.2547C87.2796 25.0976 83.0779 28.3625 81.0378 32.9527L78.3554 38.9882C76.8024 42.4823 76 46.2635 76 50.0872V123.5V194.241C76 198.51 76.9426 202.726 78.7604 206.589L80.9618 211.267C83.0767 215.762 87.0069 219.141 91.7671 220.559L98.1442 222.459C103.09 223.932 105.812 229.229 104.129 234.108C103.233 236.708 101.205 238.761 98.6156 239.689L92.7694 241.785C83.6232 245.063 73.409 241.959 67.6338 234.146L60.1349 224C55.1761 217.291 52.5 209.168 52.5 200.826V158.5Z"
            fill={bodyColor}
            stroke="black"
            stroke-width="2"
            filter="url(#shadow)"
          />
          <circle
            cx="98"
            cy="117"
            r="3.75"
            fill="url(#royal-chromium-vertical)"
            stroke="black"
            stroke-width="0.5"
          />
          <path
            d="M93.75 128C93.75 130.071 92.0711 131.75 90 131.75C87.9289 131.75 86.25 130.071 86.25 128C86.25 125.929 87.9289 124.25 90 124.25C92.0711 124.25 93.75 125.929 93.75 128Z"
            fill="url(#royal-chromium-vertical)"
            stroke="black"
            stroke-width="0.5"
          />
          <circle
            cx="98"
            cy="139"
            r="3.75"
            fill="url(#royal-chromium-vertical)"
            stroke="black"
            stroke-width="0.5"
          />
          <circle
            cx="93.5"
            cy="14.5"
            r="5"
            fill="url(#royal-chromium-vertical)"
            stroke="black"
          />
          <circle
            cx="72"
            cy="27"
            r="6.5"
            fill="url(#royal-chromium-vertical)"
            stroke="black"
          />
          <circle
            cx="72"
            cy="219"
            r="6.5"
            fill="url(#royal-chromium-vertical)"
            stroke="black"
          />
          <circle
            cx="64.5"
            cy="189.5"
            r="8"
            fill="url(#royal-chromium-vertical)"
            stroke="black"
          />
          <circle
            cx="64.5"
            cy="59.5"
            r="8"
            fill="url(#royal-chromium-vertical)"
            stroke="black"
          />
          <circle
            cx="55.5"
            cy="125.5"
            r="12"
            fill="url(#royal-chromium-vertical)"
            stroke="black"
          />
          <circle
            cx="93.5"
            cy="231.5"
            r="5"
            fill="url(#royal-chromium-vertical)"
            stroke="black"
          />
          <path
            d="M70.0791 163.794V163.82L70.0819 163.846L71.7607 179.758C71.826 180.377 71.1888 180.83 70.625 180.565L70.5293 180.52C66.4383 178.595 61.6494 178.88 57.8153 181.276C57.2806 181.61 56.5909 181.205 56.6225 180.575L57.2436 168.22C57.3923 165.262 57.2764 162.297 56.8972 159.359L56.3599 155.197C56.0599 152.872 55.4021 150.607 54.41 148.484L53.113 145.707C52.4946 144.383 53.4609 142.865 54.9221 142.865C58.9539 142.865 62.757 140.992 65.2147 137.796L67.4204 134.928C68.2837 133.805 70.0791 134.416 70.0791 135.832L70.0791 163.794ZM70.5 68.3192V85.7635V85.7668L70.1375 113.106C70.1201 114.422 68.5758 115.119 67.578 114.262L66.1212 113.011C63.2533 110.549 59.5984 109.195 55.8185 109.195C54.0341 109.195 52.7957 107.417 53.4142 105.743L55.0602 101.289C55.9045 99.0044 56.4881 96.6317 56.7999 94.216L57.3795 89.726C57.7175 87.1073 57.8496 84.4661 57.7746 81.8267L57.3817 68.0038C57.3685 67.5408 57.8768 67.2501 58.2692 67.4962L58.4367 67.6012C61.8554 69.7452 66.1752 69.8384 69.6832 67.844C70.0476 67.6368 70.5 67.9 70.5 68.3192Z"
            fill="url(#gold-vertical)"
            stroke="black"
          />
          <path
            d="M24.6797 105.135C25.2804 105.206 25.8165 105.546 26.1381 106.058L27.2138 107.772C28.1285 109.23 29.7283 110.114 31.4489 110.114H33.3806C33.471 110.114 33.561 110.102 33.6482 110.078L39.083 108.568C39.2656 108.518 39.4526 108.484 39.6415 108.469L45.2309 108.012C45.3854 108 45.5348 107.951 45.6674 107.871L48.328 106.26C49.0256 105.838 49.9083 106.383 49.8427 107.196L49.6786 109.228C49.5627 110.663 48.8331 111.979 47.6769 112.839L45.7314 114.284C45.5589 114.412 45.3498 114.482 45.135 114.482H40.3652L17.4072 113.789C16.3616 113.757 15.5169 112.925 15.4696 111.88L15.333 108.866L15.2191 106.354C15.1632 105.121 16.2268 104.132 17.4527 104.278L24.6797 105.135Z"
            fill="url(#gold-vertical)"
          />
          <path
            d="M25.0033 145.824C25.6107 145.752 26.1521 145.41 26.4751 144.896L27.5398 143.199C28.4592 141.734 30.077 140.844 31.8183 140.844H33.7128C33.8048 140.844 33.8963 140.856 33.9848 140.881L39.4132 142.388C39.5987 142.44 39.7887 142.474 39.9807 142.489L45.5619 142.945C45.7187 142.958 45.8703 143.007 46.0045 143.088L48.6471 144.688C49.3496 145.114 50.2425 144.57 50.1769 143.757L50.012 141.715C49.8968 140.288 49.1687 138.979 48.0128 138.12L46.0691 136.676C45.8946 136.546 45.6825 136.476 45.4645 136.476H40.6997L17.7561 137.169C16.7024 137.2 15.8515 138.031 15.8043 139.075L15.5535 144.606C15.4977 145.838 16.5708 146.824 17.8063 146.678L25.0033 145.824Z"
            fill="url(#gold-vertical)"
          />
          <path
            d="M24.6797 105.135C25.2804 105.206 25.8165 105.546 26.1381 106.058L27.2138 107.772C28.1285 109.23 29.7283 110.114 31.4489 110.114H33.3806C33.471 110.114 33.561 110.102 33.6482 110.078L39.083 108.568C39.2656 108.518 39.4526 108.484 39.6415 108.469L45.2309 108.012C45.3854 108 45.5348 107.951 45.6674 107.871L48.328 106.26C49.0256 105.838 49.9083 106.383 49.8427 107.196L49.6786 109.228C49.5627 110.663 48.8331 111.979 47.6769 112.839L45.7314 114.284C45.5589 114.412 45.3498 114.482 45.135 114.482H40.3652L17.4072 113.789C16.3616 113.757 15.5169 112.925 15.4696 111.88L15.333 108.866L15.2191 106.354C15.1632 105.121 16.2268 104.132 17.4527 104.278L24.6797 105.135Z"
            stroke="black"
          />
          <path
            d="M25.0033 145.824C25.6107 145.752 26.1521 145.41 26.4751 144.896L27.5398 143.199C28.4592 141.734 30.077 140.844 31.8183 140.844H33.7128C33.8048 140.844 33.8963 140.856 33.9848 140.881L39.4132 142.388C39.5987 142.44 39.7887 142.474 39.9807 142.489L45.5619 142.945C45.7187 142.958 45.8703 143.007 46.0045 143.088L48.6471 144.688C49.3496 145.114 50.2425 144.57 50.1769 143.757L50.012 141.715C49.8968 140.288 49.1687 138.979 48.0128 138.12L46.0691 136.676C45.8946 136.546 45.6825 136.476 45.4645 136.476H40.6997L17.7561 137.169C16.7024 137.2 15.8515 138.031 15.8043 139.075L15.5535 144.606C15.4977 145.838 16.5708 146.824 17.8063 146.678L25.0033 145.824Z"
            stroke="black"
          />
          <path
            d="M30.5 116H42.0858C42.9767 116 43.4229 117.077 42.7929 117.707L41.7357 118.764C41.5827 118.917 41.4835 119.116 41.4529 119.33L41.1227 121.641C41.0523 122.134 40.6304 122.5 40.1327 122.5H19.4052C19.0031 122.5 18.6401 122.259 18.4838 121.889L16.5857 117.389C16.3077 116.729 16.7917 116 17.5071 116H30.5Z"
            fill="url(#gold-vertical)"
          />
          <path
            d="M30.9143 134.5H42.5001C43.391 134.5 43.8371 133.423 43.2072 132.793L42.15 131.736C41.997 131.583 41.8977 131.384 41.8671 131.17L41.5369 128.859C41.4666 128.366 41.0446 128 40.547 128H19.8195C19.4174 128 19.0544 128.241 18.8981 128.611L17 133.111C16.7219 133.771 17.2059 134.5 17.9214 134.5H30.9143Z"
            fill="url(#gold-vertical)"
          />
          <path
            d="M30.5 116H42.0858C42.9767 116 43.4229 117.077 42.7929 117.707L41.7357 118.764C41.5827 118.917 41.4835 119.116 41.4529 119.33L41.1227 121.641C41.0523 122.134 40.6304 122.5 40.1327 122.5H19.4052C19.0031 122.5 18.6401 122.259 18.4838 121.889L16.5857 117.389C16.3077 116.729 16.7917 116 17.5071 116H30.5Z"
            stroke="black"
          />
          <path
            d="M30.9143 134.5H42.5001C43.391 134.5 43.8371 133.423 43.2072 132.793L42.15 131.736C41.997 131.583 41.8977 131.384 41.8671 131.17L41.5369 128.859C41.4666 128.366 41.0446 128 40.547 128H19.8195C19.4174 128 19.0544 128.241 18.8981 128.611L17 133.111C16.7219 133.771 17.2059 134.5 17.9214 134.5H30.9143Z"
            stroke="black"
          />
          <path
            d="M20 124.488C20 124.217 20.2165 123.995 20.4878 123.988L39.9878 123.512C40.2686 123.506 40.5 123.731 40.5 124.012V126.488C40.5 126.769 40.2686 126.994 39.9878 126.988L20.4878 126.512C20.2165 126.505 20 126.283 20 126.012V124.488Z"
            fill="url(#gold-vertical)"
            stroke="black"
            stroke-width="0.5"
          />
          <circle
            cx="16.5"
            cy="125.5"
            r="1.5"
            fill="#0000FF"
            stroke="black"
            stroke-width="0.5"
          />
          <path
            d="M12 80V174C12 180.291 7.15953 185.451 1 185.959V68.0411C7.15953 68.5492 12 73.7093 12 80Z"
            fill="#413838"
            stroke="black"
            stroke-width="2"
          />
        </svg>
      ),
    },
    Grip: {
      Template: (
        <svg
          className="saber-grip"
          width="281"
          height="248"
          viewBox="0 0 281 248"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="281" height="248" fill="transparent" />
          <rect
            x="0.5"
            y="66.5"
            width="280"
            height="119"
            fill="transparent"
            stroke="goldenrod"
            strokeWidth="2"
          />
          <rect
            x="19"
            y="57"
            width="19"
            height="143"
            fill="transparent"
            stroke="goldenrod"
            strokeWidth="2"
          />
          <rect
            x="57"
            y="57"
            width="19"
            height="143"
            fill="transparent"
            stroke="goldenrod"
            strokeWidth="2"
          />
          <rect
            x="95"
            y="57"
            width="19"
            height="143"
            fill="transparent"
            stroke="goldenrod"
            strokeWidth="2"
          />
          <rect
            x="135"
            y="55"
            width="19"
            height="143"
            fill="transparent"
            stroke="goldenrod"
            strokeWidth="2"
          />
          <rect
            x="174"
            y="57"
            width="19"
            height="143"
            fill="transparent"
            stroke="goldenrod"
            strokeWidth="2"
          />
          <rect
            x="212"
            y="55"
            width="19"
            height="143"
            fill="transparent"
            stroke="goldenrod"
            strokeWidth="2"
          />
        </svg>
      ),
      Classic: (
        <svg
          className="saber-grip"
          width={281 * multiplier}
          height={248 * multiplier}
          viewBox="0 0 281 248"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {getDefs()}
          <rect width="281" height="248" fill="transparent" />
          <rect
            x="0.5"
            y="66.5"
            width="280"
            height="119"
            fill={bodyColor}
            stroke="black"
            strokeWidth="2"
            filter="url(#shadow)"
          />
          <rect
            x="19"
            y="57"
            width="19"
            height="143"
            fill="url(#silver-vertical)"
            stroke="black"
            strokeWidth="2"
            filter="url(#shadow)"
          />
          <rect
            x="57"
            y="57"
            width="19"
            height="143"
            fill="url(#silver-vertical)"
            stroke="black"
            strokeWidth="2"
            filter="url(#shadow)"
          />
          <rect
            x="95"
            y="57"
            width="19"
            height="143"
            fill="url(#silver-vertical)"
            stroke="black"
            strokeWidth="2"
            filter="url(#shadow)"
          />
          <rect
            x="135"
            y="55"
            width="19"
            height="143"
            fill="url(#silver-vertical)"
            stroke="black"
            strokeWidth="2"
            filter="url(#shadow)"
          />
          <rect
            x="174"
            y="57"
            width="19"
            height="143"
            fill="url(#silver-vertical)"
            stroke="black"
            strokeWidth="2"
            filter="url(#shadow)"
          />
          <rect
            x="212"
            y="55"
            width="19"
            height="143"
            fill="url(#silver-vertical)"
            stroke="black"
            strokeWidth="2"
            filter="url(#shadow)"
          />
        </svg>
      ),
      Guidance: (
        <svg
          className="saber-grip"
          width={281 * multiplier}
          height={248 * multiplier}
          viewBox="0 0 281 248"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {getDefs()}
          <rect x="1" width="281" height="248" fill="transparent" />
          <rect
            x="2"
            y="67"
            width="279"
            height="119"
            stroke="transparent"
            strokeWidth="2"
            filter="url(#shadow)"
          />
          <rect
            x="98"
            y="66"
            width="184"
            height="121"
            fill={bodyColor}
            strokeWidth="2"
            filter="url(#shadow)"
          />
          <path
            d="M99.8384 66.4979C39.7458 91.3158 26.4447 97.2138 19.0114 101.855C15.3856 104.145 9.55815 108.756 7.35644 111.077C5.18502 113.387 2.27634 118.049 1.52897 120.39C0.822001 122.731 0.822001 127.433 1.53907 129.804C2.28644 132.166 5.21532 136.928 7.38674 139.31C9.59855 141.702 15.4462 146.505 19.072 148.927C26.5154 153.822 39.3822 159.953 57.3595 167.979C73.2866 175.083 94.5967 184.598 100 187"
            fill={bodyColor}
            strokeWidth="2"
          />
          <path
            d="M100 66H282M100 186.502H282M281.5 187V66.4979M99.8384 66.4979C39.7458 91.3158 26.4447 97.2138 19.0114 101.855C15.3856 104.145 9.55815 108.756 7.35644 111.077C5.18502 113.387 2.27634 118.049 1.52897 120.39C0.822001 122.731 0.822001 127.433 1.53907 129.804C2.28644 132.166 5.21532 136.928 7.38674 139.31C9.59855 141.702 15.4462 146.505 19.072 148.927C26.5154 153.822 39.3822 159.953 57.3595 167.979C73.2866 175.083 94.5967 184.598 100 187"
            stroke="black"
            strokeWidth="2"
            stroke-linecap="round"
          />
          <g filter="url(#filter0_i)">
            <path d="M98 66H117V187H98V66Z" fill="url(#crodium-vertical)" />
          </g>
          <path d="M98.5 66.5H116.5V186.5H98.5V66.5Z" stroke="black" />
          <g filter="url(#filter1_i)">
            <path d="M132 66H151V187H132V66Z" fill="url(#crodium-vertical)" />
          </g>
          <path d="M132.5 66.5H150.5V186.5H132.5V66.5Z" stroke="black" />
          <g filter="url(#filter2_i)">
            <path d="M166 66H185V187H166V66Z" fill="url(#crodium-vertical)" />
          </g>
          <path d="M166.5 66.5H184.5V186.5H166.5V66.5Z" stroke="black" />
          <defs>
            <filter
              id="filter0_i"
              x="98"
              y="62"
              width="24"
              height="125"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="5" dy="-4" />
              <feGaussianBlur stdDeviation="3" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"
              />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
            </filter>
            <filter
              id="filter1_i"
              x="132"
              y="62"
              width="24"
              height="125"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="5" dy="-4" />
              <feGaussianBlur stdDeviation="3" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"
              />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
            </filter>
            <filter
              id="filter2_i"
              x="166"
              y="62"
              width="24"
              height="125"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="5" dy="-4" />
              <feGaussianBlur stdDeviation="3" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"
              />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
            </filter>
          </defs>
        </svg>
      ),
      Hero: (
        <svg
          className="saber-grip"
          width={281 * multiplier}
          height={248 * multiplier}
          viewBox="0 0 281 248"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {getDefs()}
          <rect x="1" width="281" height="248" fill="transparent" />
          <rect
            x="2"
            y="67"
            width="279"
            height="119"
            stroke="transparent"
            strokeWidth="2"
            filter="url(#shadow)"
          />
          <path
            d="M129.5 67H284V186H129.5C96.6391 186 70 159.361 70 126.5C70 93.6391 96.6391 67 129.5 67Z"
            fill="url(#gunmetal-vertical)"
            stroke="black"
            stroke-width="2"
          />
          <g filter="url(#filter0_d10)">
            <path
              d="M4 66H59C70.0457 66 79 74.9543 79 86V167C79 178.046 70.0457 187 59 187H4V66Z"
              fill="url(#gunmetal-vertical)"
            />
            <path
              d="M5 67H59C69.4934 67 78 75.5066 78 86V167C78 177.493 69.4934 186 59 186H5V67Z"
              stroke="black"
              stroke-width="2"
            />
          </g>
          <g filter="url(#filter1_d10)">
            <path
              d="M4 86H58C60.7614 86 63 88.2386 63 91V103C63 105.761 60.7614 108 58 108H4V86Z"
              fill="url(#royal-chromium-vertical)"
            />
            <path
              d="M5 87H58C60.2091 87 62 88.7909 62 91V103C62 105.209 60.2091 107 58 107H5V87Z"
              stroke="black"
              stroke-width="2"
            />
          </g>
          <g filter="url(#filter2_d10)">
            <path
              d="M4 57H58C60.7614 57 63 59.2386 63 62V74C63 76.7614 60.7614 79 58 79H4V57Z"
              fill="url(#royal-chromium-vertical)"
            />
            <path
              d="M5 58H58C60.2091 58 62 59.7909 62 62V74C62 76.2091 60.2091 78 58 78H5V58Z"
              stroke="black"
              stroke-width="2"
            />
          </g>
          <g filter="url(#filter3_d10)">
            <path
              d="M4 146H58C60.7614 146 63 148.239 63 151V163C63 165.761 60.7614 168 58 168H4V146Z"
              fill="url(#royal-chromium-vertical)"
            />
            <path
              d="M5 147H58C60.2091 147 62 148.791 62 151V163C62 165.209 60.2091 167 58 167H5V147Z"
              stroke="black"
              stroke-width="2"
            />
          </g>
          <g filter="url(#filter4_d10)">
            <path
              d="M4 117H58C60.7614 117 63 119.239 63 122V134C63 136.761 60.7614 139 58 139H4V117Z"
              fill="url(#royal-chromium-vertical)"
            />
            <path
              d="M5 118H58C60.2091 118 62 119.791 62 122V134C62 136.209 60.2091 138 58 138H5V118Z"
              stroke="black"
              stroke-width="2"
            />
          </g>
          <g filter="url(#filter5_d10)">
            <path
              d="M4 176H58C60.7614 176 63 178.239 63 181V193C63 195.761 60.7614 198 58 198H4V176Z"
              fill="url(#royal-chromium-vertical)"
            />
            <path
              d="M5 177H58C60.2091 177 62 178.791 62 181V193C62 195.209 60.2091 197 58 197H5V177Z"
              stroke="black"
              stroke-width="2"
            />
          </g>
          <rect
            x="133"
            y="66"
            width="152"
            height="121"
            fill={bodyColor}
            stroke="black"
            strokeWidth="2"
          />
          <rect
            x="133"
            y="66"
            width="10"
            height="121"
            fill="url(#copper-vertical)"
            stroke="black"
            strokeWidth="2"
          />
          <rect
            x="179.33"
            y="66"
            width="10"
            height="121"
            fill="url(#copper-vertical)"
            stroke="black"
            strokeWidth="2"
          />
          <rect
            x="225.666"
            y="66"
            width="10"
            height="121"
            fill="url(#copper-vertical)"
            stroke="black"
            strokeWidth="2"
          />
          <rect
            x="272"
            y="66"
            width="10"
            height="121"
            fill="url(#copper-vertical)"
            stroke="black"
            strokeWidth="2"
          />
          <defs>
            <filter
              id="filter0_d10"
              x="3"
              y="66"
              width="83"
              height="129"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="3" dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d10"
              x="0"
              y="86"
              width="67"
              height="30"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
            <filter
              id="filter2_d10"
              x="0"
              y="57"
              width="67"
              height="30"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
            <filter
              id="filter3_d10"
              x="0"
              y="146"
              width="67"
              height="30"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
            <filter
              id="filter4_d10"
              x="0"
              y="117"
              width="67"
              height="30"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
            <filter
              id="filter5_d10"
              x="0"
              y="176"
              width="67"
              height="30"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      ),
      Lost: (
        <svg
          className="saber-grip"
          width={281 * multiplier}
          height={248 * multiplier}
          viewBox="0 -1 281 248"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {getDefs()}
          <rect x="1" width="281" height="248" fill="transparent" />
          <rect
            x="2"
            y="67"
            width="279"
            height="119"
            stroke="transparent"
            strokeWidth="2"
            filter="url(#shadow)"
          />
          <path
            d="M34 116H115V136H34V116Z"
            fill="url(#gunmetal-vertical"
            stroke="black"
            stroke-width="2"
          />
          <g filter="url(#filter0_d13)">
            <path
              d="M39 66H47C58.0457 66 67 74.9543 67 86V167C67 178.046 58.0457 187 47 187H39L6.65916 133.099C2.60698 126.345 2.8958 117.842 7.3969 111.379L39 66Z"
              fill={bodyColor}
            />
            <path
              d="M8.2175 111.95L39.5222 67H47C57.4934 67 66 75.5066 66 86V167C66 177.493 57.4934 186 47 186H39.5662L7.51665 132.584C3.66708 126.168 3.94146 118.09 8.2175 111.95Z"
              stroke="black"
              stroke-width="2"
            />
          </g>
          <rect
            x="129"
            y="66"
            width="152"
            height="121"
            fill="url(#copper-vertical)"
          />
          <path
            d="M135 67H274V186H135C115.118 186 99 169.882 99 150V103C99 83.1177 115.118 67 135 67Z"
            fill={bodyColor}
            stroke="black"
            stroke-width="2"
          />

          <path d="M211 66V187" stroke="#523B3B" />
          <path d="M191 66V187" stroke="#523B3B" />
          <line x1="206.5" y1="66" x2="206.5" y2="187" stroke="#523B3B" />
          <line x1="186.5" y1="66" x2="186.5" y2="187" stroke="#523B3B" />
          <path d="M201 66V187" stroke="#523B3B" />
          <path d="M181 66V187" stroke="#523B3B" />
          <path d="M211 66V187" stroke="#523B3B" />
          <path d="M236 66V187" stroke="#523B3B" />
          <path d="M241 66V187" stroke="#523B3B" />
          <path d="M246 66V187" stroke="#523B3B" />
          <path d="M251 66V187" stroke="#523B3B" />
          <path d="M256 66V187" stroke="#523B3B" />
          <path d="M271 66V187" stroke="#523B3B" />
          <path d="M266 66V187" stroke="#523B3B" />
          <path d="M261 66V187" stroke="#523B3B" />
          <path d="M236 66V187" stroke="#523B3B" />
          <line x1="231.5" y1="66" x2="231.5" y2="187" stroke="#523B3B" />
          <line x1="226.5" y1="66" x2="226.5" y2="187" stroke="#523B3B" />
          <path d="M221 66V187" stroke="#523B3B" />
          <path d="M216 66V187" stroke="#523B3B" />
          <line x1="196.5" y1="66" x2="196.5" y2="187" stroke="#523B3B" />
          <path d="M171 66V187" stroke="#523B3B" />
          <path d="M136 66V187" stroke="#523B3B" />
          <path d="M136 66V187" stroke="#523B3B" />
          <path d="M126 66L126 187" stroke="#523B3B" />
          <path d="M121 69V183" stroke="#523B3B" />
          <path d="M116 72V181" stroke="#523B3B" />
          <path d="M111 76L112.03 178" stroke="#523B3B" />
          <g filter="url(#filter1_d13)">
            <path d="M106 81L107 173" stroke="#523B3B" />
          </g>
          <path d="M101 89L102 166" stroke="#523B3B" />
          <path d="M131 66V187" stroke="#523B3B" />
          <line x1="166.5" y1="66" x2="166.5" y2="187" stroke="#523B3B" />
          <line x1="141.5" y1="66" x2="141.5" y2="187" stroke="#523B3B" />
          <path d="M161 66V187" stroke="#523B3B" />
          <path d="M146 66V187" stroke="#523B3B" />
          <line x1="156.5" y1="66" x2="156.5" y2="187" stroke="#523B3B" />
          <line x1="151.5" y1="66" x2="151.5" y2="187" stroke="#523B3B" />
          <line x1="176.5" y1="66" x2="176.5" y2="187" stroke="#523B3B" />
          <path
            d="M35.2711 72.5798V72.5798C48.6089 71.0659 61.2509 78.8747 65.8679 91.4791L66.2711 92.5798"
            stroke="black"
          />
          <path
            d="M34 75.1973V75.1973C47.0845 77.2237 58.7147 84.6564 66.0494 95.6797L66.699 96.656"
            stroke="black"
          />
          <path
            d="M31 79.2908V79.2908C43.6165 81.8555 54.9349 88.7614 62.9867 98.8074L65.9001 102.442"
            stroke="black"
          />
          <path
            d="M35.2711 179.862V179.862C48.6089 181.376 61.2508 173.568 65.8679 160.963L66.2711 159.862"
            stroke="black"
          />
          <path
            d="M34 177.245V177.245C47.0844 175.219 58.7147 167.786 66.0494 156.763L66.699 155.786"
            stroke="black"
          />
          <path
            d="M31 173.152V173.152C43.6165 170.587 54.9349 163.681 62.9867 153.635L65.9 150"
            stroke="black"
          />
          <path
            d="M15.7755 101.084L23.818 100.307C36.5666 99.0746 49.3018 102.782 59.3972 110.664L65.5917 115.5M16.7476 148.234L27.1213 149.046C37.8763 149.888 48.6152 147.229 57.7346 141.465L65.5917 136.5"
            stroke="black"
          />
          <path
            d="M4.99992 122V122C24.7931 119.031 44.9833 120.119 64.343 125.197L65.4999 125.5V125.5C45.6003 129.741 24.7389 129.435 4.99993 124.5V124.5"
            stroke="black"
          />

          <path
            d="M37.75 124.5C37.75 126.265 36.1035 127.75 34 127.75C31.8965 127.75 30.25 126.265 30.25 124.5C30.25 122.735 31.8965 121.25 34 121.25C36.1035 121.25 37.75 122.735 37.75 124.5Z"
            fill="url(#copper-vertical)"
            stroke="black"
            stroke-width="0.5"
          />
          <path
            d="M42.75 117.5C42.75 119.265 41.1035 120.75 39 120.75C36.8965 120.75 35.25 119.265 35.25 117.5C35.25 115.735 36.8965 114.25 39 114.25C41.1035 114.25 42.75 115.735 42.75 117.5Z"
            fill="url(#gunmetal-vertical)"
            stroke="black"
            stroke-width="0.5"
          />
          <path
            d="M50.75 118.5C50.75 120.265 49.1035 121.75 47 121.75C44.8965 121.75 43.25 120.265 43.25 118.5C43.25 116.735 44.8965 115.25 47 115.25C49.1035 115.25 50.75 116.735 50.75 118.5Z"
            fill="url(#gunmetal-vertical)"
            stroke="black"
            stroke-width="0.5"
          />
          <path
            d="M45.75 124.5C45.75 126.265 44.1035 127.75 42 127.75C39.8965 127.75 38.25 126.265 38.25 124.5C38.25 122.735 39.8965 121.25 42 121.25C44.1035 121.25 45.75 122.735 45.75 124.5Z"
            fill="url(#copper-vertical)"
            stroke="black"
            stroke-width="0.5"
          />

          <path
            d="M42.75 131.5C42.75 133.265 41.1035 134.75 39 134.75C36.8965 134.75 35.25 133.265 35.25 131.5C35.25 129.735 36.8965 128.25 39 128.25C41.1035 128.25 42.75 129.735 42.75 131.5Z"
            fill="url(#gunmetal-vertical)"
            stroke="black"
            stroke-width="0.5"
          />
          <path
            d="M50.75 131.5C50.75 133.265 49.1035 134.75 47 134.75C44.8965 134.75 43.25 133.265 43.25 131.5C43.25 129.735 44.8965 128.25 47 128.25C49.1035 128.25 50.75 129.735 50.75 131.5Z"
            fill="url(#gunmetal-vertical)"
            stroke="black"
            stroke-width="0.5"
          />
          <path
            d="M74.75 125.5C74.75 127.265 73.1035 128.75 71 128.75C68.8965 128.75 67.25 127.265 67.25 125.5C67.25 123.735 68.8965 122.25 71 122.25C73.1035 122.25 74.75 123.735 74.75 125.5Z"
            fill="url(#royal-chromium-vertical)"
            stroke="black"
            stroke-width="0.5"
          />
          <path
            d="M86.75 125.5C86.75 127.265 85.1035 128.75 83 128.75C80.8965 128.75 79.25 127.265 79.25 125.5C79.25 123.735 80.8965 122.25 83 122.25C85.1035 122.25 86.75 123.735 86.75 125.5Z"
            fill="url(#royal-chromium-vertical)"
            stroke="black"
            stroke-width="0.5"
          />
          <path
            d="M97.75 125.5C97.75 127.265 96.1035 128.75 94 128.75C91.8965 128.75 90.25 127.265 90.25 125.5C90.25 123.735 91.8965 122.25 94 122.25C96.1035 122.25 97.75 123.735 97.75 125.5Z"
            fill="url(#royal-chromium-vertical)"
            stroke="black"
            stroke-width="0.5"
          />
          <path
            d="M29.75 124.5C29.75 126.265 28.1035 127.75 26 127.75C23.8965 127.75 22.25 126.265 22.25 124.5C22.25 122.735 23.8965 121.25 26 121.25C28.1035 121.25 29.75 122.735 29.75 124.5Z"
            fill="url(#copper-vertical)"
            stroke="black"
            stroke-width="0.5"
          />
          <path
            d="M56.75 72.5C56.75 74.2646 55.1035 75.75 53 75.75C50.8965 75.75 49.25 74.2646 49.25 72.5C49.25 70.7354 50.8965 69.25 53 69.25C55.1035 69.25 56.75 70.7354 56.75 72.5Z"
            fill="url(#pink-vertical)"
            stroke="black"
            stroke-width="0.5"
          />
          <path
            d="M56.75 180.5C56.75 182.265 55.1035 183.75 53 183.75C50.8965 183.75 49.25 182.265 49.25 180.5C49.25 178.735 50.8965 177.25 53 177.25C55.1035 177.25 56.75 178.735 56.75 180.5Z"
            fill="url(#pink-vertical)"
            stroke="black"
            stroke-width="0.5"
          />
          <path
            d="M135 67H274V186H135C115.118 186 99 169.882 99 150V103C99 83.1177 115.118 67 135 67Z"
            stroke="black"
            stroke-width="2"
          />

          <defs>
            <filter
              id="filter0_d13"
              x="2.80899"
              y="66"
              width="71.191"
              height="129"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="3" dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d13"
              x="97.5"
              y="80.9946"
              width="9.99994"
              height="100.011"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="-4" dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      ),
      Vengeance: (
        <svg
          className="saber-grip"
          width={281 * multiplier}
          height={248 * multiplier}
          viewBox="0 0 281 248"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {getDefs()}
          <rect x="1" width="281" height="248" fill="transparent" />
          <rect
            x="2"
            y="67"
            width="279"
            height="119"
            stroke="transparent"
            strokeWidth="2"
            filter="url(#shadow)"
          />
          <g filter="url(#filter0_i16)">
            <path
              d="M160.165 117.423C163.05 115.477 165.774 113.302 168.309 110.918L190.952 89.627C195.608 85.2496 201.059 81.8051 207.011 79.4801L222.788 73.3172C227.567 71.4502 232.606 70.33 237.726 69.9961L276 67.5L270 184.118H230L224.564 183.416C209.911 181.522 195.038 184.394 182.143 191.606L181.204 192.132C175.438 195.357 169.195 197.641 162.71 198.9V198.9C147.249 201.899 131.246 200.262 116.713 194.193L112.193 192.305C105.423 189.479 98.333 187.49 91.0806 186.384L76.5345 184.165C61.3608 181.851 45.9651 186.635 34.7745 197.14L28 203.5L0 248L14.3658 186.756C17.3376 174.087 25.1314 163.076 36.0918 156.061L44 151L50.4827 138.685C60.2826 120.068 84.7377 115.201 100.919 128.646V128.646C112.228 138.042 128.379 138.851 140.57 130.633L160.165 117.423Z"
              fill={bodyColor}
              filter="url(#shadow)"
            />
          </g>
          <path
            d="M44.8849 151.466L44.7617 151.7L44.5391 151.842L36.6309 156.903C25.8897 163.778 18.2517 174.569 15.3394 186.985L2.3399 242.404L27.1536 202.967L27.222 202.859L27.3156 202.771L34.09 196.411C45.5045 185.696 61.2081 180.816 76.6852 183.177L91.2314 185.395C98.5644 186.514 105.733 188.524 112.578 191.383L117.099 193.27C131.45 199.263 147.252 200.88 162.519 197.918C168.9 196.68 175.043 194.432 180.716 191.259L181.655 190.734C194.737 183.417 209.827 180.503 224.693 182.424L230.064 183.118H269.05L274.944 68.571L237.792 70.994C232.773 71.3212 227.836 72.419 223.152 74.2487L207.375 80.4115C201.542 82.6901 196.199 86.0657 191.637 90.3555L168.994 111.647C166.42 114.068 163.654 116.276 160.724 118.252L141.129 131.462C128.57 139.929 111.93 139.095 100.28 129.415C84.5875 116.376 60.8714 121.097 51.3676 139.151L44.8849 151.466Z"
            stroke="black"
            stroke-width="2"
          />
          <path
            d="M270 67H276C278.209 67 280 68.7909 280 71V182C280 184.209 278.209 186 276 186H270C267.791 186 266 184.209 266 182V71C266 68.7909 267.791 67 270 67Z"
            fill="#413838"
            stroke="black"
            stroke-width="2"
          />
          <g filter="url(#filter1_i16)">
            <path
              d="M52 140.5L52.2396 140.544C57.706 141.544 63.3316 140.022 67.5481 136.402L70.5452 133.829C75.2164 129.819 82.0216 129.515 87.0313 133.094V133.094C90.4721 135.552 94.8725 136.237 98.8981 134.943L104.5 133.143L113.5 137L103.294 142.103C98.7022 144.399 93.2978 144.399 88.7064 142.103V142.103C82.5777 139.039 75.1872 140.132 70.2082 144.84L68.3246 146.621C64.1983 150.522 58.6091 152.487 52.9494 152.025L46.5 151.5L52 140.5Z"
              fill="#670025"
              fill-opacity="0.96"
            />
          </g>
          <path
            d="M52.09 140.008L51.7207 139.941L51.5528 140.276L46.0528 151.276L45.7219 151.938L46.4594 151.998L52.9087 152.524C58.7099 152.996 64.4388 150.983 68.6681 146.984L70.5517 145.203C75.3781 140.64 82.542 139.58 88.4828 142.55C93.215 144.917 98.785 144.917 103.517 142.55L113.724 137.447L114.688 136.965L113.697 136.54L104.697 132.683L104.525 132.61L104.347 132.667L98.7451 134.467C94.87 135.713 90.6341 135.053 87.3219 132.687C82.1249 128.975 75.0653 129.29 70.2195 133.45L67.2224 136.023C63.1204 139.544 57.6475 141.025 52.3296 140.052L52.09 140.008Z"
            stroke="black"
          />
          <g filter="url(#filter2_i16)">
            <path
              d="M231.5 73L228.504 91.3309C225.03 112.582 231.53 134.25 246.129 150.079L264.5 170V181.5H259.5L236.862 154.997C225.083 141.207 219.116 123.383 220.218 105.28L222 76L231.5 73Z"
              fill="#670025"
              fill-opacity="0.96"
            />
          </g>
          <path
            d="M231.993 73.0807L232.125 72.2784L231.349 72.5232L221.849 75.5232L221.522 75.6267L221.501 75.9696L219.719 105.25C218.609 123.482 224.619 141.433 236.482 155.322L259.12 181.825L259.27 182H259.5H264.5H265V181.5V170V169.805L264.868 169.661L246.496 149.74C232.002 134.024 225.548 112.511 228.997 91.4116L231.993 73.0807Z"
            stroke="black"
          />
          <path
            d="M186.993 97.0843L187.215 95.788L186.188 96.6096L178.688 102.61L179 103L178.513 102.885C173.454 124.389 179.05 147.013 193.55 163.679L208.472 180.828L208.621 181H208.849H212H218H219.069L218.384 180.179L201.105 159.49C188.052 143.861 182.51 123.293 185.943 103.222L186.993 97.0843ZM209.348 81.0342L209.407 80.1616L208.625 80.5528L200.625 84.5528L200.376 84.6772L200.351 84.9543L198.502 105.086C196.792 123.702 202.547 142.236 214.5 156.61L235.464 181.82L235.614 182H235.849H240.849H245.849H246.904L246.236 181.183L223.293 153.142C212.095 139.456 206.535 122.016 207.746 104.374L209.348 81.0342Z"
            fill="#670025"
            fill-opacity="0.96"
            stroke="black"
          />
          <path
            d="M20.4999 176C26.8814 175.42 32.7739 179.459 34.5343 185.62L36.4999 192.5L31.4999 197.5L29.7107 191.139C28.1249 185.5 22.8501 181.707 16.9999 182V182L20.4999 176V176Z"
            fill="#670025"
            fill-opacity="0.96"
          />
          <path
            d="M15.4999 190.5C19.702 189.94 23.6057 192.771 24.3777 196.94L25.4999 203L20.9999 210L20.3981 200.672C20.1908 197.459 17.1233 195.219 13.9999 196V196L15.4999 190.5V190.5Z"
            fill="#670025"
            fill-opacity="0.96"
          />
          <path
            d="M12 203C13.1723 202.844 14.0585 202.884 14.7438 203.113C18.7983 204.47 17.5 210.72 17.5 214.996V216.569L13.9999 223.5L14.4644 218.656C14.8209 214.937 15.3534 209.23 11.6563 209.765C11.3046 209.816 10.92 209.895 10.5 210L12 203Z"
            fill="#670025"
            fill-opacity="0.96"
          />
          <path
            d="M20.4999 176C26.8814 175.42 32.7739 179.459 34.5343 185.62L36.4999 192.5L31.4999 197.5L29.7107 191.139C28.1249 185.5 22.8501 181.707 16.9999 182V182L20.4999 176V176Z"
            stroke="black"
          />
          <path
            d="M15.4999 190.5C19.702 189.94 23.6057 192.771 24.3777 196.94L25.4999 203L20.9999 210L20.3981 200.672C20.1908 197.459 17.1233 195.219 13.9999 196V196L15.4999 190.5V190.5Z"
            stroke="black"
          />
          <path
            d="M12 203C13.1723 202.844 14.0585 202.884 14.7438 203.113C18.7983 204.47 17.5 210.72 17.5 214.996V216.569L13.9999 223.5L14.4644 218.656C14.8209 214.937 15.3534 209.23 11.6563 209.765C11.3046 209.816 10.92 209.895 10.5 210L12 203Z"
            stroke="black"
          />
          <defs>
            <filter
              id="filter0_i16"
              x="0"
              y="63.5"
              width="276"
              height="184.5"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="-4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
            </filter>
            <filter
              id="filter1_i16"
              x="44.9437"
              y="129.602"
              width="70.932"
              height="27.4892"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
            </filter>
            <filter
              id="filter2_i16"
              x="219.088"
              y="71.5568"
              width="46.4117"
              height="114.943"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
            </filter>
          </defs>
        </svg>
      ),
      Ancient: (
        <svg
          className="saber-grip"
          width={281 * multiplier}
          height={248 * multiplier}
          viewBox="0 0 281 248"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {getDefs()}
          <rect x="1" width="281" height="248" fill="transparent" />
          <rect
            x="2"
            y="67"
            width="279"
            height="119"
            stroke="transparent"
            strokeWidth="2"
            filter="url(#shadow)"
          />
          <path
            d="M279.91 73.2739L278.586 180.049C278.557 182.394 276.017 183.842 273.985 182.672L262.522 176.074C251.531 169.749 237.94 169.846 227.013 176.273C216.952 182.192 204.466 182.391 194.249 176.754L191.306 175.13C181.027 169.459 168.378 170.342 158.986 177.386C148.295 185.404 133.415 184.695 123.535 175.697L119.374 171.908C115.182 168.09 110.16 165.296 104.705 163.748L103.988 163.545C87.7236 158.929 76.5 144.078 76.5 127.171V113.431C76.5 98.1414 88.1804 85.385 103.411 84.0412C107.621 83.6697 111.713 82.4549 115.444 80.4692L123.336 76.2686C134.284 70.4416 147.218 69.6391 158.802 74.0683C168.92 77.9369 180.095 78.0161 190.267 74.2912L192.849 73.3456C203.93 69.2879 216.085 69.2606 227.184 73.2685L227.596 73.4173C239.482 77.7097 252.506 77.6504 264.352 73.2501L274.517 69.4746C277.15 68.4967 279.945 70.4655 279.91 73.2739Z"
            fill={bodyColor}
            stroke="black"
            stroke-width="2"
            filter="url(#shadow)"
          />
          <g filter="url(#filter0_i20)">
            <path
              d="M27.9138 117.657H76V125.19H27.9138V117.657Z"
              fill="url(#royal-chromium-vertical)"
              stroke="black"
              stroke-width="2"
            />
            <g filter="url(#filter1_d20)">
              <path
                d="M30.5345 95.4247V95.4247C39.8662 95.4247 47.431 102.99 47.431 112.321V130.959C47.431 140.29 39.8662 147.855 30.5345 147.855V147.855L18.5481 133.51C11.984 125.655 12.4115 114.11 19.5388 106.762L30.5345 95.4247Z"
                fill="url(#gold-vertical)"
              />
              <path
                d="M46.431 112.321V130.959C46.431 139.583 39.5623 146.604 30.9965 146.848L19.3155 132.869C13.0795 125.406 13.4857 114.439 20.2566 107.458L30.9525 96.4301C39.5387 96.6517 46.431 103.682 46.431 112.321Z"
                stroke="black"
                stroke-width="2"
              />
            </g>
          </g>
          <path
            d="M28 99.4601V99.4601C35.8731 98.5374 42.9616 101.663 45.3306 107.102L45.5414 107.586"
            stroke="black"
          />
          <path
            d="M27 100.734V100.734C34.7019 101.579 41.3595 104.631 45.6542 109.285L46.0452 109.709"
            stroke="black"
          />
          <path
            d="M25 102.703V102.703C32.6642 103.822 39.3966 106.765 44.2611 111.123L46.0604 112.735"
            stroke="black"
          />
          <path
            d="M28.4267 144.141V144.141C36.1434 144.683 42.973 141.665 45.7372 136.492L46 136"
            stroke="black"
          />
          <path
            d="M27 142.298V142.298C34.9729 141.412 41.8657 138.252 46.3257 133.439L46.7322 133"
            stroke="black"
          />
          <path
            d="M25 140.032V140.032C32.6642 138.913 39.3966 135.97 44.2611 131.612L46.0604 130"
            stroke="black"
          />
          <path
            d="M17.7158 110.829L18.0893 110.8C28.4487 109.996 38.4136 112.119 46.6828 116.891V116.891M18.0542 131.218L20.2676 131.333C29.0827 131.793 38.1878 129.938 46.5812 125.973V125.973"
            stroke="black"
          />
          <path
            d="M15.5 119.5V119.5C23.8579 118.335 32.3051 118.528 40.5095 120.073L46.5258 121.207L41.06 122.043C32.5086 123.352 23.8407 123.068 15.5 121.207V121.207"
            stroke="black"
          />
          <g filter="url(#filter2_i20)">
            <path
              d="M163 75L166.86 75.5467C173.757 76.5236 180.762 76.4653 187.642 75.374L190 75L185.342 117.346C184.782 122.433 184.782 127.567 185.342 132.654L190 175V175C181.843 171.442 172.609 171.257 164.317 174.487L163 175L167.999 133.34C168.664 127.8 168.664 122.2 167.999 116.66L163 75Z"
              fill="url(#gold-vertical)"
            />
            <path
              d="M232 75L235.86 75.5467C242.757 76.5236 249.762 76.4653 256.642 75.374L259 75L254.342 117.346C253.782 122.433 253.782 127.567 254.342 132.654L259 175C250.843 171.442 241.609 171.257 233.317 174.487L232 175L236.999 133.34C237.664 127.8 237.664 122.2 236.999 116.66L232 75Z"
              fill="url(#gold-vertical)"
            />
          </g>
          <path
            d="M163 75L166.86 75.5467C173.757 76.5236 180.762 76.4653 187.642 75.374L190 75L185.342 117.346C184.782 122.433 184.782 127.567 185.342 132.654L190 175V175C181.843 171.442 172.609 171.257 164.317 174.487L163 175L167.999 133.34C168.664 127.8 168.664 122.2 167.999 116.66L163 75Z"
            stroke="black"
          />
          <path
            d="M232 75L235.86 75.5467C242.757 76.5236 249.762 76.4653 256.642 75.374L259 75L254.342 117.346C253.782 122.433 253.782 127.567 254.342 132.654L259 175C250.843 171.442 241.609 171.257 233.317 174.487L232 175L236.999 133.34C237.664 127.8 237.664 122.2 236.999 116.66L232 75Z"
            stroke="black"
          />
          <path
            d="M272.242 68.5387C275.511 67.3106 279 69.7271 279 73.2193V180.296C279 183.515 275.539 185.547 272.728 183.979L260.162 176.967C249.549 171.045 236.442 171.309 225.996 177.523V177.523C215.726 183.633 202.838 183.893 192.402 178.07L189.504 176.453C179.646 170.953 167.467 171.806 158.473 178.629V178.629C147.507 186.946 132.157 186.214 122.034 176.889L117.86 173.045C113.829 169.333 108.987 166.612 103.719 165.1L102.949 164.879C86.4015 160.13 75 144.996 75 127.78V113.254C75 97.5859 86.9613 84.5097 102.567 83.1171V83.1171C106.648 82.753 110.612 81.564 114.219 79.6222L122.04 75.4126C133.137 69.4388 146.292 68.6166 158.047 73.1622V73.1622C167.861 76.957 178.723 77.0346 188.59 73.3804L191.151 72.4319C202.362 68.2799 214.685 68.252 225.915 72.3532L226.323 72.5024C237.894 76.7281 250.596 76.6698 262.127 72.3381L272.242 68.5387Z"
            stroke="black"
            stroke-width="2"
          />
          <path
            d="M269 79V173C269 179.291 273.84 184.451 280 184.959V67.0411C273.84 67.5492 269 72.7093 269 79Z"
            fill="#413838"
            stroke="black"
            stroke-width="2"
          />
          <defs>
            <filter
              id="filter0_i20"
              x="9.89542"
              y="95.4247"
              width="67.1046"
              height="56.4303"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="-6" dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
            </filter>
            <filter
              id="filter1_d20"
              x="12.8954"
              y="95.4247"
              width="41.5356"
              height="60.4303"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="3" dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
            <filter
              id="filter2_i20"
              x="162.404"
              y="70.4035"
              width="102.187"
              height="105.4"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="5" dy="-4" />
              <feGaussianBlur stdDeviation="9" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
              />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
            </filter>
          </defs>
        </svg>
      ),
    },
    Switch: {
      Template: (
        <svg
          className="saber-switch"
          width="281"
          height="248"
          viewBox="0 0 281 248"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1"
            y="67"
            width="279"
            height="119"
            fill="transparent"
            stroke="goldenrod"
            strokeWidth="2"
          />
          <rect
            x="49"
            y="47"
            width="144"
            height="56"
            fill="transparent"
            stroke="goldenrod"
            strokeWidth="2"
          />
          <rect
            x="59"
            y="47"
            width="123"
            height="27"
            fill="transparent"
            stroke="goldenrod"
            strokeWidth="2"
          />
          <line x1="70.5" y1="46" x2="70.5" y2="75" stroke="goldenrod" />
          <line x1="81.5" y1="46" x2="81.5" y2="75" stroke="goldenrod" />
          <path d="M105.5 46V75" stroke="goldenrod" />
          <line
            y1="-0.5"
            x2="29"
            y2="-0.5"
            transform="matrix(0 1 1 0 94 46)"
            stroke="goldenrod"
          />
          <line x1="105.5" y1="46" x2="105.5" y2="75" stroke="goldenrod" />
          <line x1="116.5" y1="46" x2="116.5" y2="75" stroke="goldenrod" />
          <line
            y1="-0.5"
            x2="29"
            y2="-0.5"
            transform="matrix(0 1 1 0 129 46)"
            stroke="goldenrod"
          />
          <line x1="141.5" y1="46" x2="141.5" y2="75" stroke="goldenrod" />
          <line x1="152.5" y1="46" x2="152.5" y2="75" stroke="goldenrod" />
          <line
            y1="-0.5"
            x2="29"
            y2="-0.5"
            transform="matrix(0 1 1 0 165 46)"
            stroke="goldenrod"
          />
          <rect
            x="227"
            y="67"
            width="18"
            height="119"
            fill="transparent"
            stroke="goldenrod"
            strokeWidth="2"
          />
          <rect
            x="15"
            y="67"
            width="23"
            height="119"
            fill="transparent"
            stroke="goldenrod"
            strokeWidth="2"
          />
        </svg>
      ),
      Classic: (
        <svg
          className="saber-switch"
          width="281"
          height="248"
          viewBox="0 0 281 248"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {getDefs()}
          <rect width="281" height="248" fill="transparent" />
          <rect
            x="1"
            y="67"
            width="279"
            height="119"
            fill={bodyColor}
            stroke="black"
            strokeWidth="2"
            filter="url(#shadow)"
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
      Guidance: (
        <svg
          className="saber-switch"
          width={281 * multiplier}
          height={248 * multiplier}
          viewBox="0 0 281 248"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {getDefs()}
          <rect width="281" height="248" fill="transparent" />
          <rect
            x="1"
            y="66.25"
            width="279"
            height="120"
            fill={bodyColor}
            stroke="black"
            stroke-width="2"
            filter="url(#shadow)"
          />
          <g fill="url(#crodium-vertical)">
            <path d="M168 66H216L145 187H92L168 66Z" />
            <path
              d="M215.127 66.5L144.714 186.5H92.9045L168.276 66.5H215.127Z"
              stroke="black"
            />
          </g>
          <g filter="url(#filter1_d)">
            <path d="M35 54H148V89H35V54Z" fill="black" />
          </g>
          <g filter="url(#filter2_d)">
            <ellipse
              cx="83"
              cy="68.5"
              rx="13"
              ry="11.5"
              fill="url(#paint0_radial)"
            />
            <path
              d="M95.5 68.5C95.5 74.5193 89.9629 79.5 83 79.5C76.0371 79.5 70.5 74.5193 70.5 68.5C70.5 62.4807 76.0371 57.5 83 57.5C89.9629 57.5 95.5 62.4807 95.5 68.5Z"
              stroke="black"
            />
          </g>
          <circle cx="114" cy="68" r="8" fill="#C4C4C4" />
          <g filter="url(#filter3_d)">
            <ellipse
              cx="232"
              cy="89.5"
              rx="13"
              ry="11.5"
              fill="url(#paint1_radial)"
            />
            <path
              d="M244.5 89.5C244.5 95.5193 238.963 100.5 232 100.5C225.037 100.5 219.5 95.5193 219.5 89.5C219.5 83.4807 225.037 78.5 232 78.5C238.963 78.5 244.5 83.4807 244.5 89.5Z"
              stroke="black"
            />
          </g>
          <g filter="url(#filter4_d)">
            <ellipse
              cx="114"
              cy="68.5"
              rx="13"
              ry="11.5"
              fill="url(#paint2_radial)"
            />
            <path
              d="M126.5 68.5C126.5 74.5193 120.963 79.5 114 79.5C107.037 79.5 101.5 74.5193 101.5 68.5C101.5 62.4807 107.037 57.5 114 57.5C120.963 57.5 126.5 62.4807 126.5 68.5Z"
              stroke="black"
            />
          </g>
          <g filter="url(#filter5_d)">
            <ellipse
              cx="232"
              cy="159.5"
              rx="13"
              ry="11.5"
              fill="url(#paint3_radial)"
            />
            <path
              d="M244.5 159.5C244.5 165.519 238.963 170.5 232 170.5C225.037 170.5 219.5 165.519 219.5 159.5C219.5 153.481 225.037 148.5 232 148.5C238.963 148.5 244.5 153.481 244.5 159.5Z"
              stroke="black"
            />
          </g>
          <g filter="url(#filter6_d)">
            <ellipse
              cx="232"
              cy="124.5"
              rx="13"
              ry="11.5"
              fill="url(#paint4_radial)"
            />
            <path
              d="M244.5 124.5C244.5 130.519 238.963 135.5 232 135.5C225.037 135.5 219.5 130.519 219.5 124.5C219.5 118.481 225.037 113.5 232 113.5C238.963 113.5 244.5 118.481 244.5 124.5Z"
              stroke="black"
            />
          </g>
          <g filter="url(#filter7_d)">
            <ellipse
              cx="52"
              cy="68.5"
              rx="13"
              ry="11.5"
              fill="url(#paint5_radial)"
            />
            <path
              d="M64.5 68.5C64.5 74.5193 58.9629 79.5 52 79.5C45.0371 79.5 39.5 74.5193 39.5 68.5C39.5 62.4807 45.0371 57.5 52 57.5C58.9629 57.5 64.5 62.4807 64.5 68.5Z"
              stroke="black"
            />
          </g>
          <defs>
            <filter
              id="filter0_d"
              x="79"
              y="62"
              width="140"
              height="137"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="-5" dy="4" />
              <feGaussianBlur stdDeviation="4" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>

            <filter
              id="filter1_d"
              x="31"
              y="54"
              width="121"
              height="43"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
            <filter
              id="filter2_d"
              x="60"
              y="51"
              width="42"
              height="39"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="3"
                operator="dilate"
                in="SourceAlpha"
                result="effect1_dropShadow"
              />
              <feOffset dx="-2" dy="2" />
              <feGaussianBlur stdDeviation="2.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
            <filter
              id="filter3_d"
              x="209"
              y="72"
              width="42"
              height="39"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="3"
                operator="dilate"
                in="SourceAlpha"
                result="effect1_dropShadow"
              />
              <feOffset dx="-2" dy="2" />
              <feGaussianBlur stdDeviation="2.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
            <filter
              id="filter4_d"
              x="91"
              y="51"
              width="42"
              height="39"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="3"
                operator="dilate"
                in="SourceAlpha"
                result="effect1_dropShadow"
              />
              <feOffset dx="-2" dy="2" />
              <feGaussianBlur stdDeviation="2.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
            <filter
              id="filter5_d"
              x="209"
              y="142"
              width="42"
              height="39"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="3"
                operator="dilate"
                in="SourceAlpha"
                result="effect1_dropShadow"
              />
              <feOffset dx="-2" dy="2" />
              <feGaussianBlur stdDeviation="2.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
            <filter
              id="filter6_d"
              x="209"
              y="107"
              width="42"
              height="39"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="3"
                operator="dilate"
                in="SourceAlpha"
                result="effect1_dropShadow"
              />
              <feOffset dx="-2" dy="2" />
              <feGaussianBlur stdDeviation="2.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
            <filter
              id="filter7_d"
              x="29"
              y="51"
              width="42"
              height="39"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="3"
                operator="dilate"
                in="SourceAlpha"
                result="effect1_dropShadow"
              />
              <feOffset dx="-2" dy="2" />
              <feGaussianBlur stdDeviation="2.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
            <radialGradient
              id="paint0_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(83 68.5) rotate(90) scale(11.5 13)"
            >
              <stop offset="0.239583" stop-color="#9E6A3A" />
              <stop offset="0.333333" stop-color="#D3D1D1" />
              <stop offset="0.546875" stop-color="#6F512E" />
              <stop offset="0.71875" stop-color="#E0DBDB" />
              <stop offset="0.791667" stop-color="#A87550" />
            </radialGradient>
            <radialGradient
              id="paint1_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(232 89.5) rotate(90) scale(11.5 13)"
            >
              <stop offset="0.239583" stop-color="#C2BCBC" />
              <stop offset="0.333333" stop-color="#D3D1D1" />
              <stop offset="0.546875" stop-color="#434141" />
              <stop offset="0.71875" stop-color="#E0DBDB" />
              <stop offset="0.791667" stop-color="#B0A8A8" />
            </radialGradient>
            <radialGradient
              id="paint2_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(114 68.5) rotate(90) scale(11.5 13)"
            >
              <stop offset="0.239583" stop-color="#9E6A3A" />
              <stop offset="0.333333" stop-color="#D3D1D1" />
              <stop offset="0.546875" stop-color="#6F512E" />
              <stop offset="0.71875" stop-color="#E0DBDB" />
              <stop offset="0.791667" stop-color="#A87550" />
            </radialGradient>
            <radialGradient
              id="paint3_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(232 159.5) rotate(90) scale(11.5 13)"
            >
              <stop offset="0.239583" stop-color="#C2BCBC" />
              <stop offset="0.333333" stop-color="#D3D1D1" />
              <stop offset="0.546875" stop-color="#434141" />
              <stop offset="0.71875" stop-color="#E0DBDB" />
              <stop offset="0.791667" stop-color="#B0A8A8" />
            </radialGradient>
            <radialGradient
              id="paint4_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(232 124.5) rotate(90) scale(11.5 13)"
            >
              <stop offset="0.239583" stop-color="#C2BCBC" />
              <stop offset="0.333333" stop-color="#D3D1D1" />
              <stop offset="0.546875" stop-color="#434141" />
              <stop offset="0.71875" stop-color="#E0DBDB" />
              <stop offset="0.791667" stop-color="#B0A8A8" />
            </radialGradient>
            <radialGradient
              id="paint5_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(52 68.5) rotate(90) scale(11.5 13)"
            >
              <stop offset="0.239583" stop-color="#9E6A3A" />
              <stop offset="0.333333" stop-color="#D3D1D1" />
              <stop offset="0.546875" stop-color="#6F512E" />
              <stop offset="0.71875" stop-color="#E0DBDB" />
              <stop offset="0.791667" stop-color="#A87550" />
            </radialGradient>
          </defs>
        </svg>
      ),
      Hero: (
        <svg
          className="saber-switch"
          width={281 * multiplier}
          height={248 * multiplier}
          viewBox="0 0 281 248"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {getDefs()}
          <rect width="281" height="248" fill="transparent" />
          <rect
            x="1"
            y="66.25"
            width="279"
            height="120"
            fill="transparent"
            stroke="transparent"
            filter="url(#shadow)"
          />
          <rect
            x="2.00008"
            y="67"
            width="279"
            height="119"
            fill="transparent"
            stroke="transparent"
            stroke-width="2"
          />
          <path
            d="M57.6872 186.249L1.00432 186.003L1.51945 67.0043L49.2025 67.2107C54.173 67.2323 58.1849 71.2791 58.1634 76.2496L57.6872 186.249Z"
            fill={bodyColor}
            stroke="black"
            stroke-width="2"
          />
          <path
            d="M226 67H258C271.255 67 282 77.7452 282 91V162C282 175.255 271.255 186 258 186H217V76C217 71.0294 221.029 67 226 67Z"
            fill={bodyColor}
            stroke="black"
            stroke-width="2"
          />
          <rect
            x="60"
            y="75"
            width="155"
            height="111"
            fill="url(#gunmetal-vertical)"
            stroke="black"
            stroke-width="2"
          />
          <path
            d="M83 43H178C182.971 43 187 47.0294 187 52V73.3462H74V52C74 47.0294 78.0294 43 83 43Z"
            fill="url(#silver-vertical)"
            stroke="black"
            stroke-width="2"
          />
          <path
            d="M92 42.5H169C174.247 42.5 178.5 46.7533 178.5 52V66.0385H82.5V52C82.5 46.7533 86.7533 42.5 92 42.5Z"
            fill="url(#copper-vertical)"
            stroke="black"
          />
          <line
            x1="91.5"
            y1="42"
            x2="91.5"
            y2="66.5385"
            stroke="url(#gunmetal-vertical)"
          />
          <line
            x1="110.5"
            y1="42"
            x2="110.5"
            y2="66.5385"
            stroke="url(#gunmetal-vertical)"
          />
          <line
            x1="101.5"
            y1="42"
            x2="101.5"
            y2="66.5385"
            stroke="url(#gunmetal-vertical)"
          />
          <line
            x1="120.5"
            y1="42"
            x2="120.5"
            y2="66.5385"
            stroke="url(#gunmetal-vertical)"
          />
          <line
            x1="139.5"
            y1="42"
            x2="139.5"
            y2="66.5385"
            stroke="url(#gunmetal-vertical)"
          />
          <line
            x1="130.5"
            y1="42"
            x2="130.5"
            y2="66.5385"
            stroke="url(#gunmetal-vertical)"
          />
          <line
            y1="-0.5"
            x2="24.5385"
            y2="-0.5"
            transform="matrix(0 1 1 0 170 42)"
            stroke="black"
            fill="url(#gunmetal-vertical)"
          />
          <line
            y1="-0.5"
            x2="24.5385"
            y2="-0.5"
            transform="matrix(0 1 1 0 149 42)"
            stroke="black"
          />
          <line
            y1="-0.5"
            x2="24.5385"
            y2="-0.5"
            transform="matrix(0 1 1 0 159 42)"
            stroke="black"
          />
        </svg>
      ),
      Lost: (
        <svg
          className="saber-switch"
          width={281 * multiplier}
          height={248 * multiplier}
          viewBox="0 0 281 248"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {getDefs()}
          <rect width="281" height="248" fill="transparent" />
          <rect
            x="1"
            y="66.25"
            width="279"
            height="120"
            fill="transparent"
            stroke="transparent"
            filter="url(#shadow)"
          />
          <rect
            x="2.00008"
            y="67"
            width="279"
            height="119"
            fill="transparent"
            stroke="transparent"
            stroke-width="2"
          />
          <path
            d="M29.7137 186.128L1.00432 186.003L1.51945 67.0043L30.2289 67.1286L29.7137 186.128Z"
            fill={bodyColor}
            stroke="black"
            stroke-width="2"
          />
          <path
            d="M222 67H243C264.539 67 282 84.4609 282 106V147C282 168.539 264.539 186 243 186H222V67Z"
            fill={bodyColor}
            stroke="black"
            stroke-width="2"
          />
          <path
            d="M2 67H222V186H2V67Z"
            fill="url(#gunmetal-vertical)"
            stroke="black"
            stroke-width="2"
          />
          <path d="M69 67H77V186H69V67Z" fill={bodyColor} />
          <path d="M52 67H60V186H52V67Z" fill={bodyColor} />
          <path d="M35 67H43V186H35V67Z" fill={bodyColor} />
          <path d="M18 67H26V186H18V67Z" fill={bodyColor} />
          <path d="M2 67H10V186H2V67Z" fill={bodyColor} />
          <rect x="86" y="67" width="8" height="119" fill={bodyColor} />
          <rect x="103" y="67" width="8" height="119" fill={bodyColor} />
          <rect x="120" y="67" width="8" height="119" fill={bodyColor} />
          <rect
            width="8"
            height="119"
            transform="matrix(-1 0 0 1 196 67)"
            fill={bodyColor}
          />
          <rect
            width="8"
            height="119"
            transform="matrix(-1 0 0 1 214 67)"
            fill={bodyColor}
          />
          <rect
            width="8"
            height="119"
            transform="matrix(-1 0 0 1 179 67)"
            fill={bodyColor}
          />
          <rect
            width="8"
            height="119"
            transform="matrix(-1 0 0 1 162 67)"
            fill={bodyColor}
          />
          <rect
            width="8"
            height="119"
            transform="matrix(-1 0 0 1 145 67)"
            fill={bodyColor}
          />
          <g filter="url(#filter0_d14)">
            <rect
              x="175.5"
              y="78.5"
              width="80"
              height="36"
              rx="9.5"
              fill="url(#royal-chromium-vertical)"
              stroke="black"
            />
            <rect
              x="175.5"
              y="73.5"
              width="80"
              height="36"
              rx="9.5"
              fill="url(#gunmetal-vertical)"
              stroke="black"
            />
            <path
              d="M217.5 87C217.5 92.799 212.799 97.5 207 97.5C201.201 97.5 196.5 92.799 196.5 87C196.5 81.201 201.201 76.5 207 76.5C212.799 76.5 217.5 81.201 217.5 87Z"
              fill="url(#copper-vertical)"
              stroke="black"
            />
            <path
              d="M217.5 85C217.5 90.799 212.799 95.5 207 95.5C201.201 95.5 196.5 90.799 196.5 85C196.5 79.201 201.201 74.5 207 74.5C212.799 74.5 217.5 79.201 217.5 85Z"
              fill="url(#copper-vertical)"
              stroke="black"
            />
          </g>
          <defs>
            <filter
              id="filter0_d14"
              x="167"
              y="73"
              width="89"
              height="50"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="-4" dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      ),
      Vengeance: (
        <svg
          className="saber-switch"
          width={281 * multiplier * 2}
          height={248 * multiplier * 2}
          viewBox="0 0 281 248"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {getDefs()}
          <rect width="281" height="248" fill="transparent" />
          <rect
            x="1"
            y="66.25"
            width="279"
            height="120"
            fill="transparent"
            stroke="transparent"
            filter="url(#shadow)"
          />
          <g filter="url(#filter0_i17)">
            <path
              d="M0 185.608H6.5H20.275C27.3446 185.608 34.3338 184.109 40.7815 181.209L41.0359 181.095C46.3248 178.717 51.2977 175.69 55.8402 172.085L59.6344 169.074C71.7143 159.488 85.8477 152.826 100.93 149.608L115.5 146.499L133.814 143.476C139.582 142.525 145.446 142.299 151.27 142.805L171 144.519L183.874 147.164C192.913 149.021 201.643 152.147 209.806 156.449L218.362 160.958C225.044 164.479 230.897 169.386 235.531 175.351V175.351C240.559 181.822 248.294 185.608 256.489 185.608L265 185.608L274.963 187.72C278.073 188.379 281 186.008 281 182.829V75.7939C281 73.1871 278.997 71.0177 276.399 70.8098L245.548 68.3415C236.229 67.5959 227.06 65.5471 218.31 62.2549L185.541 49.9261C166.65 42.8187 146.015 41.7683 126.5 46.9208V46.9208L97.5 56.8218L71.7198 65.0681C67.2512 66.4974 62.6503 67.4739 57.9865 67.9828L39.5 70H15L1.5 67.2175L0 185.608Z"
              fill={bodyColor}
              filter="url(#shadow)"
            />
          </g>
          <path
            d="M14.7981 70.9794L2.48457 68.4415L1.01275 184.608H6.5H20.275C27.2032 184.608 34.0526 183.139 40.3713 180.297L40.6258 180.183C45.8391 177.838 50.7409 174.855 55.2186 171.302L59.0128 168.291C71.2135 158.609 85.4883 151.88 100.721 148.63L115.291 145.521L115.314 145.516L115.337 145.512L133.652 142.49C139.502 141.524 145.45 141.296 151.357 141.809L171.087 143.522L171.144 143.527L171.201 143.539L184.076 146.185C193.206 148.061 202.026 151.219 210.272 155.565L218.828 160.073C225.636 163.661 231.599 168.66 236.321 174.737C241.159 180.965 248.603 184.608 256.489 184.608L265 184.608H265.105L265.207 184.63L275.17 186.742C277.658 187.269 280 185.372 280 182.829V75.7939C280 73.7084 278.398 71.9729 276.319 71.8066L245.468 69.3383C236.056 68.5852 226.795 66.5159 217.958 63.1909L185.189 50.862C166.503 43.8319 146.093 42.7895 126.789 47.8787L97.8231 57.7682L97.8139 57.7713L97.8047 57.7743L72.0244 66.0206C67.4921 67.4703 62.8254 68.4608 58.0949 68.9769L39.6085 70.9941L39.5544 71H39.5H15H14.898L14.7981 70.9794Z"
            stroke="black"
            stroke-width="2"
          />
          <g filter="url(#filter1_i17)">
            <path
              d="M148.775 115.843C151.206 102.565 149.747 88.8667 144.571 76.3991L141.5 69L140.907 66.7959C139.034 59.8415 139.779 52.4417 143 46V46L170 44L192 54.5L187.5 66L185.927 71.7666C184.359 77.5187 178.173 80.6659 172.6 78.5481V78.5481C165.751 75.9452 158.497 81.2764 158.935 88.5907L159.404 96.3987C159.468 97.4633 159.419 98.5316 159.259 99.5859L158.207 106.498C156.751 116.062 157.294 125.824 159.801 135.168L161.5 141.5H160.795C158.935 141.5 157.08 141.333 155.25 141V141C153.42 140.667 151.565 140.5 149.705 140.5H146V137.356C146 133.127 146.383 128.908 147.145 124.748L148.775 115.843Z"
              fill="#670025"
            />
          </g>
          <path
            d="M148.775 115.843C151.206 102.565 149.747 88.8667 144.571 76.3991L141.5 69L140.907 66.7959C139.034 59.8415 139.779 52.4417 143 46V46L170 44L192 54.5L187.5 66L185.927 71.7666C184.359 77.5187 178.173 80.6659 172.6 78.5481V78.5481C165.751 75.9452 158.497 81.2764 158.935 88.5907L159.404 96.3987C159.468 97.4633 159.419 98.5316 159.259 99.5859L158.207 106.498C156.751 116.062 157.294 125.824 159.801 135.168L161.5 141.5H160.795C158.935 141.5 157.08 141.333 155.25 141V141C153.42 140.667 151.565 140.5 149.705 140.5H146V137.356C146 133.127 146.383 128.908 147.145 124.748L148.775 115.843Z"
            stroke="black"
          />
          <g filter="url(#filter2_i17)">
            <path
              d="M49 70.5C62.8715 79.452 73.0725 93.082 77.7504 108.915L90 150.375L81 153.375L60.617 104.541C58.2164 98.7893 55.0585 93.3843 51.2271 88.469L38 71.5H40L45 71L49 70.5V70.5Z"
              fill="#670025"
            />
            <path
              d="M74.5 66.5C87.2072 74.6982 99.2659 89.5041 102.628 103.482C104.041 109.353 104.091 115.499 105.258 121.423L110 145.5L102.5 147L92.8284 105.236C91.9444 101.419 90.8142 97.6179 88.5618 94.4114C86.3376 91.245 83.4732 87.9829 80.9327 85.0592C78.6109 82.3871 76.1938 79.7943 73.5927 77.3932L64.5 69L69.5 68L74.5 66.5Z"
              fill="#670025"
            />
            <path
              d="M101.5 58C106.415 66.9229 115.02 71.9633 121.819 81.1891C124.973 85.4683 126.513 90.7001 125.687 95.9514C124.573 103.036 122.2 111.937 123 116L124.036 122.736C124.677 126.903 125.694 131.005 127.073 134.989L129.5 142L124 143L121.982 137.497C119.673 131.198 118.281 124.601 117.849 117.906L117.5 112.5L118.5 100.5V100.5C119.816 94.9085 119.414 89.1535 115.322 85.1224C114.462 84.2757 113.645 83.4178 113 82.5C110.776 79.3336 110.473 79.4829 107.933 76.5592C105.611 73.8871 103.194 71.2943 100.593 68.8932L91.5 60.5L96.5 59.5L101.5 58Z"
              fill="#670025"
            />
          </g>
          <path
            d="M49 70.5C62.8715 79.452 73.0725 93.082 77.7504 108.915L90 150.375L81 153.375L60.617 104.541C58.2164 98.7893 55.0585 93.3843 51.2271 88.469L38 71.5H40L45 71L49 70.5V70.5Z"
            stroke="black"
          />
          <path
            d="M74.5 66.5C87.2072 74.6982 99.2659 89.5041 102.628 103.482C104.041 109.353 104.091 115.499 105.258 121.423L110 145.5L102.5 147L92.8284 105.236C91.9444 101.419 90.8142 97.6179 88.5618 94.4114C86.3376 91.245 83.4732 87.9829 80.9327 85.0592C78.6109 82.3871 76.1938 79.7943 73.5927 77.3932L64.5 69L69.5 68L74.5 66.5Z"
            stroke="black"
          />
          <path
            d="M101.5 58C106.415 66.9229 115.02 71.9633 121.819 81.1891C124.973 85.4683 126.513 90.7001 125.687 95.9514C124.573 103.036 122.2 111.937 123 116L124.036 122.736C124.677 126.903 125.694 131.005 127.073 134.989L129.5 142L124 143L121.982 137.497C119.673 131.198 118.281 124.601 117.849 117.906L117.5 112.5L118.5 100.5V100.5C119.816 94.9085 119.414 89.1535 115.322 85.1224C114.462 84.2757 113.645 83.4178 113 82.5C110.776 79.3336 110.473 79.4829 107.933 76.5592C105.611 73.8871 103.194 71.2943 100.593 68.8932L91.5 60.5L96.5 59.5L101.5 58Z"
            stroke="black"
          />
          <g filter="url(#filter3_i17)">
            <path
              d="M241.275 89.3738C236.514 93.0553 232.844 97.9613 230.657 103.567L229.237 107.206C227.098 112.687 226 118.519 226 124.403V129.574C226 138.119 224.435 146.592 221.384 154.574L219.5 159.5V159.5C222.483 160.826 225.249 162.593 227.706 164.743L228 165L232.402 155.965C235.723 149.148 236.902 141.486 235.785 133.986L235.57 132.54C234.549 125.687 235.75 118.609 238.928 112.452V112.452C240.938 108.557 243.745 105.063 247.128 102.277V102.277C249.366 100.434 251.346 98.2984 253.014 95.9276L256.523 90.9409C258.837 87.6531 261.429 84.5707 264.272 81.7279L265.5 80.5L266.618 74.6307C267.02 72.5214 265.042 70.7375 262.985 71.3545V71.3545C262.664 71.4508 262.329 71.4899 261.995 71.4703L254 71L250.902 77.4626C248.665 82.129 245.368 86.208 241.275 89.3738V89.3738Z"
              fill="#670025"
            />
            <path
              d="M232.5 68.5C217 78.5 202.465 98.3312 203.5 114.5L202.5 133L203.5 151V151C205.484 151.661 207.336 152.669 208.969 153.975L209 154L208.109 145.094C207.704 141.039 207.653 136.957 207.958 132.893L208.575 124.666C208.858 120.895 209.446 117.153 210.333 113.477L211.318 109.396C212.105 106.136 213.065 102.898 214.758 100.003C216.967 96.2222 219.986 92.1595 222.791 88.5927C226.529 83.8408 230.958 79.6761 235.814 76.0738L244 70H242.72C239.259 70 235.816 69.4947 232.5 68.5V68.5Z"
              fill="#670025"
            />
            <path
              d="M206.5 60.5C201.585 69.4229 192.98 74.4633 186.181 83.6891C183.027 87.9683 181.487 93.2001 182.313 98.4514C183.427 105.536 185.8 114.437 185 118.5L184.03 124.806C183.345 129.258 182.232 133.634 180.706 137.872L178.5 144L184 145L185.772 140.329C188.243 133.813 189.728 126.964 190.177 120.01L190.5 115L189.5 103V103C188.184 97.4085 188.586 91.6535 192.678 87.6224C193.538 86.7757 194.355 85.9178 195 85C197.224 81.8336 197.527 81.9829 200.067 79.0592C202.389 76.3871 204.806 73.7943 207.407 71.3932L216.5 63.5L211.5 62L206.5 60.5Z"
              fill="#670025"
            />
          </g>
          <path
            d="M241.275 89.3738C236.514 93.0553 232.844 97.9613 230.657 103.567L229.237 107.206C227.098 112.687 226 118.519 226 124.403V129.574C226 138.119 224.435 146.592 221.384 154.574L219.5 159.5V159.5C222.483 160.826 225.249 162.593 227.706 164.743L228 165L232.402 155.965C235.723 149.148 236.902 141.486 235.785 133.986L235.57 132.54C234.549 125.687 235.75 118.609 238.928 112.452V112.452C240.938 108.557 243.745 105.063 247.128 102.277V102.277C249.366 100.434 251.346 98.2984 253.014 95.9276L256.523 90.9409C258.837 87.6531 261.429 84.5707 264.272 81.7279L265.5 80.5L266.618 74.6307C267.02 72.5214 265.042 70.7375 262.985 71.3545V71.3545C262.664 71.4508 262.329 71.4899 261.995 71.4703L254 71L250.902 77.4626C248.665 82.129 245.368 86.208 241.275 89.3738V89.3738Z"
            stroke="black"
          />
          <path
            d="M232.5 68.5C217 78.5 202.465 98.3312 203.5 114.5L202.5 133L203.5 151V151C205.484 151.661 207.336 152.669 208.969 153.975L209 154L208.109 145.094C207.704 141.039 207.653 136.957 207.958 132.893L208.575 124.666C208.858 120.895 209.446 117.153 210.333 113.477L211.318 109.396C212.105 106.136 213.065 102.898 214.758 100.003C216.967 96.2222 219.986 92.1595 222.791 88.5927C226.529 83.8408 230.958 79.6761 235.814 76.0738L244 70H242.72C239.259 70 235.816 69.4947 232.5 68.5V68.5Z"
            stroke="black"
          />
          <path
            d="M206.5 60.5C201.585 69.4229 192.98 74.4633 186.181 83.6891C183.027 87.9683 181.487 93.2001 182.313 98.4514C183.427 105.536 185.8 114.437 185 118.5L184.03 124.806C183.345 129.258 182.232 133.634 180.706 137.872L178.5 144L184 145L185.772 140.329C188.243 133.813 189.728 126.964 190.177 120.01L190.5 115L189.5 103V103C188.184 97.4085 188.586 91.6535 192.678 87.6224C193.538 86.7757 194.355 85.9178 195 85C197.224 81.8336 197.527 81.9829 200.067 79.0592C202.389 76.3871 204.806 73.7943 207.407 71.3932L216.5 63.5L211.5 62L206.5 60.5Z"
            stroke="black"
          />
          <path
            d="M14.7981 70.9794L2.48457 68.4415L1.01275 184.608H6.5H20.275C27.2032 184.608 34.0526 183.139 40.3713 180.297L40.6258 180.183C45.8391 177.838 50.7409 174.855 55.2186 171.302L59.0128 168.291C71.2135 158.609 85.4883 151.88 100.721 148.63L115.291 145.521L115.314 145.516L115.337 145.512L133.652 142.49C139.502 141.524 145.45 141.296 151.357 141.809L171.087 143.522L171.144 143.527L171.201 143.539L184.076 146.185C193.206 148.061 202.026 151.219 210.272 155.565L218.828 160.073C225.636 163.661 231.599 168.66 236.321 174.737C241.159 180.965 248.603 184.608 256.489 184.608L265 184.608H265.105L265.207 184.63L275.17 186.742C277.658 187.269 280 185.372 280 182.829V75.7939C280 73.7084 278.398 71.9729 276.319 71.8066L245.468 69.3383C236.056 68.5852 226.795 66.5159 217.958 63.1909L185.189 50.862C166.503 43.8319 146.093 42.7895 126.789 47.8787L97.8231 57.7682L97.8139 57.7713L97.8047 57.7743L72.0244 66.0206C67.4921 67.4703 62.8254 68.4608 58.0949 68.9769L39.6085 70.9941L39.5544 71H39.5H15H14.898L14.7981 70.9794Z"
            stroke="black"
            stroke-width="2"
          />
          <path
            d="M271 68H276C278.209 68 280 69.7909 280 72V183C280 185.209 278.209 187 276 187H271C268.791 187 267 185.209 267 183V72C267 69.7909 268.791 68 271 68Z"
            fill="#413838"
            stroke="black"
            stroke-width="2"
          />
          <path
            d="M5 67.5H10C12.4853 67.5 14.5 69.5147 14.5 72V183C14.5 185.485 12.4853 187.5 10 187.5H5C2.51472 187.5 0.5 185.485 0.5 183V72C0.5 69.5147 2.51472 67.5 5 67.5Z"
            fill="#413838"
            stroke="black"
          />
          <g filter="url(#filter4_d17)">
            <rect
              x="0.311745"
              y="0.638365"
              width="38.5221"
              height="26.7564"
              rx="9.5"
              transform="matrix(0.944144 0.329534 -0.320653 0.947197 150.721 37.6903)"
              fill="url(#royal-chromium-vertical)"
              stroke="black"
            />
            <path
              d="M161.041 39.3863L179.473 45.8195C184.426 47.5484 187.078 52.9788 185.396 57.9484L182.909 65.2953C181.226 70.2649 175.847 72.892 170.893 71.1631L152.462 64.7299C147.508 63.0009 144.856 57.5706 146.538 52.6009L149.026 45.2541C150.708 40.2844 156.087 37.6573 161.041 39.3863Z"
              fill="url(#gunmetal-vertical)"
              stroke="black"
            />
            <path
              d="M175.377 50.3537C177.091 54.2998 175.313 58.8717 171.417 60.5707C167.521 62.2696 162.969 60.4586 161.254 56.5125C159.54 52.5664 161.319 47.9945 165.214 46.2955C169.11 44.5966 173.662 46.4076 175.377 50.3537Z"
              fill="url(#royal-chromium-vertical)"
              stroke="black"
            />
            <path
              d="M175.948 48.3448C177.662 52.2909 175.883 56.8628 171.988 58.5618C168.092 60.2607 163.54 58.4497 161.825 54.5036C160.111 50.5575 161.889 45.9856 165.785 44.2866C169.681 42.5877 174.233 44.3987 175.948 48.3448Z"
              fill="url(#copper-vertical"
              stroke="black"
            />
          </g>
          <defs>
            <filter
              id="filter0_i17"
              x="-4"
              y="39.7003"
              width="285"
              height="148.13"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="-5" dy="-4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
            </filter>
            <filter
              id="filter1_i17"
              x="139.395"
              y="43.4916"
              width="53.2397"
              height="102.508"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
            </filter>
            <filter
              id="filter2_i17"
              x="36.9763"
              y="57.405"
              width="93.187"
              height="100.591"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
            </filter>
            <filter
              id="filter3_i17"
              x="177.83"
              y="59.905"
              width="89.3411"
              height="109.902"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
            </filter>
            <filter
              id="filter4_d17"
              x="136.273"
              y="38.3531"
              width="50.1273"
              height="43.9851"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="-4" dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      ),
      Ancient: (
        <svg
          className="saber-switch"
          width={281 * multiplier * 2}
          height={248 * multiplier * 2}
          viewBox="0 0 281 248"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {getDefs()}
          <rect width="281" height="248" fill="transparent" />
          <rect
            x="1"
            y="66.25"
            width="279"
            height="120"
            fill="transparent"
            stroke="transparent"
            filter="url(#shadow)"
          />
          <path
            d="M280 73.1452V179.902C280 182.228 277.452 183.656 275.468 182.441L263.96 175.397C252.86 168.603 238.89 168.603 227.79 175.397C217.332 181.799 204.168 181.799 193.71 175.397C182.61 168.603 168.64 168.603 157.54 175.397C147.082 181.799 133.918 181.799 123.46 175.397C112.36 168.603 98.3897 168.603 87.2904 175.397C76.832 181.799 63.668 181.799 53.2096 175.397C42.1103 168.603 28.1397 168.603 17.0404 175.397L5.53192 182.441C3.54792 183.656 1 182.228 1 179.902V78.1549C1 73.5393 6.00739 70.6639 9.99375 72.9905L17.0584 77.1137C28.2217 83.6289 42.0283 83.6289 53.1916 77.1137C63.7319 70.962 76.7681 70.962 87.3084 77.1137C98.4717 83.6289 112.278 83.6289 123.442 77.1137C133.982 70.962 147.018 70.962 157.558 77.1137C168.722 83.6289 182.528 83.6289 193.692 77.1137C204.232 70.962 217.268 70.962 227.808 77.1137C238.972 83.6289 252.778 83.6289 263.942 77.1137L275.333 70.4653C277.402 69.258 280 70.7501 280 73.1452Z"
            fill={bodyColor}
            stroke="black"
            stroke-width="2"
            filter="url(#shadow)"
          />
          <g filter="url(#filter0_i19)">
            <path
              d="M21 80.0003L26.0669 80.654C32.3672 81.4669 38.7488 81.4184 45.0361 80.5099L48.5625 80.0003L43.9611 118.109C43.2881 123.683 43.2881 129.318 43.9611 134.891L48.5625 173V173C40.1814 169.67 30.876 169.496 22.3765 172.512L21 173L25.9209 135.642C26.7202 129.574 26.7202 123.427 25.9209 117.359L21 80.0003Z"
              fill="url(#gold-vertical)"
            />
            <path
              d="M91.4375 80.0003L95.3779 80.5087C102.419 81.4172 109.57 81.363 116.593 80.348L119 80.0003L114.245 119.382C113.674 124.113 113.674 128.887 114.245 133.618L119 173C110.673 169.691 101.247 169.52 92.7816 172.523L91.4375 173L96.5409 134.257C97.2195 129.104 97.2195 123.896 96.5409 118.744L91.4375 80.0003Z"
              fill="url(#gold-vertical)"
            />
          </g>
          <path
            d="M21 80.0003L26.0669 80.654C32.3672 81.4669 38.7488 81.4184 45.0361 80.5099L48.5625 80.0003L43.9611 118.109C43.2881 123.683 43.2881 129.318 43.9611 134.891L48.5625 173V173C40.1814 169.67 30.876 169.496 22.3765 172.512L21 173L25.9209 135.642C26.7202 129.574 26.7202 123.427 25.9209 117.359L21 80.0003Z"
            stroke="black"
          />
          <path
            d="M91.4375 80.0003L95.3779 80.5087C102.419 81.4172 109.57 81.363 116.593 80.348L119 80.0003L114.245 119.382C113.674 124.113 113.674 128.887 114.245 133.618L119 173C110.673 169.691 101.247 169.52 92.7816 172.523L91.4375 173L96.5409 134.257C97.2195 129.104 97.2195 123.896 96.5409 118.744L91.4375 80.0003Z"
            stroke="black"
          />
          <g filter="url(#filter1_i19)">
            <path
              d="M162 79.5003L163.063 79.7469C171.934 81.8054 181.168 81.7208 190 79.5003V79.5003L185.029 118.929C184.311 124.622 184.296 130.381 184.984 136.077L189.563 174V174C181.181 170.67 171.876 170.496 163.377 173.512L162 174L166.94 136.499C167.727 130.525 167.739 124.474 166.976 118.497L162 79.5003Z"
              fill="url(#gold-vertical)"
            />
            <path
              d="M232 79.5003V79.5003C234.909 80.8349 237.954 81.9183 241.144 82.1771C245.02 82.4914 249.081 82.3242 253.071 81.9127C256.063 81.604 258.921 80.5499 261.5 79.0003V79.0003L255.245 120.382C254.674 125.113 254.674 129.887 255.245 134.618L260 174C252.336 170.954 243.501 169.276 235.543 171.371C234.182 171.729 232.987 172.521 232 173.523V173.523L237.541 135.257C238.22 130.104 238.22 124.896 237.541 119.744L232 79.5003Z"
              fill="url(#gold-vertical)"
            />
          </g>
          <path
            d="M162 79.5003L163.063 79.7469C171.934 81.8054 181.168 81.7208 190 79.5003V79.5003L185.029 118.929C184.311 124.622 184.296 130.381 184.984 136.077L189.563 174V174C181.181 170.67 171.876 170.496 163.377 173.512L162 174L166.94 136.499C167.727 130.525 167.739 124.474 166.976 118.497L162 79.5003Z"
            stroke="black"
          />
          <path
            d="M232 79.5003V79.5003C234.909 80.8349 237.954 81.9183 241.144 82.1771C245.02 82.4914 249.081 82.3242 253.071 81.9127C256.063 81.604 258.921 80.5499 261.5 79.0003V79.0003L255.245 120.382C254.674 125.113 254.674 129.887 255.245 134.618L260 174C252.336 170.954 243.501 169.276 235.543 171.371C234.182 171.729 232.987 172.521 232 173.523V173.523L237.541 135.257C238.22 130.104 238.22 124.896 237.541 119.744L232 79.5003Z"
            stroke="black"
          />
          <rect
            x="256.24"
            y="102.6"
            width="41.5298"
            height="20.5682"
            rx="9.5"
            transform="rotate(89.9747 256.24 102.6)"
            fill="url(#royal-chromium-vertical)"
            stroke="black"
          />
          <rect
            x="259.155"
            y="102.599"
            width="41.5298"
            height="20.5682"
            rx="9.5"
            transform="rotate(89.9747 259.155 102.599)"
            fill="url(#royal-chromium-vertical)"
            stroke="black"
          />
          <path
            d="M248.793 131.63C244.3 131.632 240.583 127.646 240.581 122.633C240.579 117.621 244.292 113.632 248.785 113.63C253.278 113.628 256.995 117.614 256.997 122.626C257 127.638 253.286 131.628 248.793 131.63Z"
            fill="url(#royal-chromium-vertical)"
            stroke="black"
          />
          <path
            d="M250.376 131.629C245.883 131.631 242.166 127.645 242.164 122.633C242.162 117.62 245.875 113.631 250.368 113.629C254.862 113.627 258.579 117.613 258.581 122.625C258.583 127.638 254.87 131.627 250.376 131.629Z"
            fill="url(#gold-vertical)"
            stroke="black"
          />
          <path
            d="M280 177.986V75.0656C280 71.1507 275.769 68.6976 272.371 70.6427L261.191 77.0436C250.773 83.0073 237.977 83.0073 227.559 77.0436C216.526 70.7274 202.974 70.7274 191.941 77.0436C181.523 83.0073 168.727 83.0073 158.309 77.0436C147.276 70.7274 133.724 70.7274 122.691 77.0436C112.273 83.0073 99.4766 83.0073 89.0593 77.0436C78.0265 70.7274 64.4735 70.7274 53.4407 77.0436C43.0234 83.0073 30.2266 83.0073 19.8093 77.0436L8.62851 70.6427C5.23092 68.6976 1 71.1507 1 75.0657V177.986C1 181.85 5.21585 184.236 8.52856 182.247L19.8273 175.463C30.1656 169.256 43.0844 169.256 53.4227 175.463C64.3947 182.051 78.1053 182.051 89.0773 175.463C99.4156 169.256 112.334 169.256 122.673 175.463C133.645 182.051 147.355 182.051 158.327 175.463C168.666 169.256 181.584 169.256 191.923 175.463C202.895 182.051 216.605 182.051 227.577 175.463C237.916 169.256 250.834 169.256 261.173 175.463L272.471 182.247C275.784 184.236 280 181.85 280 177.986Z"
            stroke="black"
            stroke-width="2"
          />
          <path
            d="M280 67.5411V185.459C273.84 184.951 269 179.791 269 173.5V79.5C269 73.2093 273.84 68.0492 280 67.5411Z"
            fill="#413838"
            stroke="black"
            stroke-width="2"
          />
          <path
            d="M12 80V174C12 180.291 7.15953 185.451 1 185.959V68.0411C7.15953 68.5492 12 73.7093 12 80Z"
            fill="#413838"
            stroke="black"
            stroke-width="2"
          />
          <defs>
            <filter
              id="filter0_i19"
              x="20.3977"
              y="79.412"
              width="104.2"
              height="98.3636"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="5" dy="4" />
              <feGaussianBlur stdDeviation="9" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
              />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
            </filter>
            <filter
              id="filter1_i19"
              x="161.398"
              y="78.5717"
              width="105.597"
              height="96.2039"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="5" />
              <feGaussianBlur stdDeviation="9" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
              />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
            </filter>
          </defs>
        </svg>
      ),
    },
  };

  return selectSVG();
}

export default DisplaySVG;
