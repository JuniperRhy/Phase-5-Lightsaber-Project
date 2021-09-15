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
          <rect
            x="1"
            y="67"
            width="173.371"
            height="119"
            fill="transparent"
            stroke="transparent"
            stroke-width="2"
          />
          <path
            d="M1 99H77.5714V154H1V99Z"
            fill={bodyColor}
            stroke="black"
            stroke-width="2"
          />
          <g filter="url(#filter0_d9)">
            <rect
              x="13.8286"
              y="77"
              width="13.8286"
              height="95"
              rx="5"
              fill={bodyColor}
            />
            <rect
              x="14.8286"
              y="78"
              width="11.8286"
              height="93"
              rx="4"
              stroke="black"
              stroke-width="2"
            />
          </g>
          <g filter="url(#filter1_d9)">
            <rect
              x="30.8"
              y="77"
              width="13.8286"
              height="95"
              rx="5"
              fill={bodyColor}
            />
            <rect
              x="31.8"
              y="78"
              width="11.8286"
              height="93"
              rx="4"
              stroke="black"
              stroke-width="2"
            />
          </g>
          <g filter="url(#filter2_d9)">
            <rect
              x="47.7714"
              y="77"
              width="13.8286"
              height="95"
              rx="5"
              fill={bodyColor}
            />
            <rect
              x="48.7714"
              y="78"
              width="11.8286"
              height="93"
              rx="4"
              stroke="black"
              stroke-width="2"
            />
          </g>
          <path
            d="M141.075 185.124L81.556 156.753C78.4236 155.26 76.4286 152.099 76.4286 148.629V104.371C76.4286 100.901 78.4235 97.74 81.556 96.2469L141.075 67.8758C142.284 67.2992 143.607 67 144.947 67H166C170.971 67 175 71.0294 175 76V126.5V177C175 181.971 170.971 186 166 186H144.947C143.607 186 142.284 185.701 141.075 185.124Z"
            fill={bodyColor}
            stroke="black"
            stroke-width="2"
          />
          <g filter="url(#filter3_d9)">
            <rect
              x="64.7429"
              y="77"
              width="13.8286"
              height="95"
              rx="5"
              fill={bodyColor}
            />
            <rect
              x="65.7429"
              y="78"
              width="11.8286"
              height="93"
              rx="4"
              stroke="black"
              stroke-width="2"
            />
          </g>
          <defs>
            <filter
              id="filter0_d9"
              x="3.82857"
              y="77"
              width="23.8286"
              height="103"
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
              x="20.8"
              y="77"
              width="23.8286"
              height="103"
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
              x="37.7714"
              y="77"
              width="23.8286"
              height="103"
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
              x="54.7429"
              y="77"
              width="23.8286"
              height="103"
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
          />
          <g filter="url(#filter0_i15)">
            <path
              d="M66.77 178.875C78.3056 199.996 102.938 210.303 126.078 203.692V203.692C127.689 203.232 129.341 202.93 131.01 202.791L149.049 201.288C151.347 201.096 153.627 200.735 155.871 200.207V200.207C164.855 198.093 174.185 197.904 183.248 199.653L190.024 200.961C195.307 201.98 200.719 202.14 206.053 201.435L258.5 194.5L317.5 182L271.707 203.999C268.247 205.661 264.608 206.919 260.86 207.748L205.5 220L177.97 225.576C170.134 227.163 162.015 226.619 154.461 224L148.71 222.006C136.314 217.709 122.556 220.75 113.127 229.872V229.872C102.8 239.862 86.5656 240.349 75.6588 230.995L12 176.402V155H30.3643C44.7695 155 58.0256 162.864 64.9305 175.507L66.77 178.875Z"
              fill={bodyColor}
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
            fill="url(#crodium-vertical)"
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
      Wisdom: (
        <svg
          className="saber-emitter"
          width={324 * multiplier}
          height={248 * multiplier}
          viewBox="1.5 1.25 324 244"
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
            d="M114.221 67.259C135.537 63.9403 157.193 70.6358 172.917 85.4064L249.764 157.597C259.994 167.206 252.601 184.347 238.591 183.502L81.4563 174.023C70.3176 173.351 59.1817 175.384 48.9991 179.949C40.1003 183.938 30.4586 186 20.7066 186H1V67H24.9724C30.966 67 36.9348 67.7698 42.7323 69.2904L50.3877 71.2984C59.6959 73.7399 69.4075 74.236 78.916 72.7556L114.221 67.259Z"
            fill={bodyColor}
            filter="url(#shadow)"
          />
          <path
            d="M1 66H24.8172C31.8981 66 38.938 67.0744 45.6965 69.1864L50.0024 70.532C61.474 74.1169 73.6755 74.6877 85.4317 72.1895L111.094 66.7364C133.856 61.8994 157.534 68.6902 174.272 84.856L249.799 157.799C259.821 167.477 252.384 184.398 238.478 183.561L81.1275 174.091C70.5468 173.454 59.9762 175.495 50.3932 180.025V180.025C41.9049 184.038 32.6277 186.104 23.2388 186.073L1 186"
            stroke="black"
            stroke-width="2"
          />
          <path
            d="M181.287 179.251L181.281 179.251L120.532 175.501L120.531 175.501L81.6421 173.04L110.389 66.4773L125.426 65.566C126.137 65.5229 126.85 65.5323 127.559 65.594L136.695 66.3884C137.507 66.459 138.311 66.5978 139.099 66.8035L147.974 69.1186C148.874 69.3534 149.749 69.6743 150.588 70.0769L160.651 74.907C161.38 75.2568 162.078 75.6669 162.738 76.1331L170.183 81.3882L178.651 89.358L178.657 89.3641L249.691 158.631C259.378 168.077 251.995 184.469 238.501 183.473L181.287 179.251Z"
            fill="url(#gold-vertical)"
            stroke="black"
            filter="url(#shadow)"
          />
        </svg>
      ),
      Reclaimed: (
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
            fill="url(#silver-vertical)"
            strokeWidth="2"
          />
          <path
            d="M0.500015 66.5H148.508L150.299 186.5H0.500015V66.5Z"
            fill={bodyColor}
            stroke="black"
            filter="url(#shadow)"
          />
          <path
            d="M140.525 141.512C137.055 145.103 131.355 145.047 127.629 141.385L86.0049 100.482C82.2003 96.7434 81.8592 90.6361 85.2413 86.8074L102.666 67.082L131.308 67.053L161.94 67.0219L167.54 73.232L168.179 93.9386L168.746 112.306L140.525 141.512Z"
            fill="url(#black-duraplast-vertical)"
            stroke="black"
          />
          <path
            d="M157.122 93.0712C157.065 90.3116 159.219 88.1099 161.96 88.1816C163.336 88.2176 164.362 88.7468 165.056 89.575C165.757 90.4125 166.164 91.6089 166.193 93.0453C166.223 94.4841 165.866 95.8065 165.182 96.7481C164.508 97.677 163.504 98.2544 162.165 98.2194C159.425 98.1477 157.178 95.8309 157.122 93.0712Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M94.0744 95.9098C92.0225 94.0151 91.8015 90.8004 93.5501 88.7313C95.2987 86.6622 98.3778 86.4949 100.43 88.3896C102.482 90.2842 102.703 93.4989 100.954 95.568C99.2054 97.6371 96.1263 97.8044 94.0744 95.9098Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M126.01 131.743C123.958 129.848 123.737 126.633 125.486 124.564C127.234 122.495 130.313 122.328 132.365 124.222C134.417 126.117 134.638 129.332 132.889 131.401C131.141 133.47 128.062 133.637 126.01 131.743Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M47.2368 135.079C50.8102 131.291 56.7352 131.361 60.4294 135.233L84.9807 160.969C88.5199 164.679 88.7327 170.557 85.4646 174.339L74.6385 186.869L54.723 186.87L33.4235 186.871L29.6785 182.43L29.5109 167.373L29.3623 154.025L47.2368 135.079Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M34.6575 168.185C34.6755 170.119 33.1512 171.678 31.2288 171.642C30.7452 171.633 30.4344 171.527 30.2273 171.387C30.0255 171.251 29.8778 171.051 29.7684 170.764C29.6555 170.468 29.589 170.092 29.5524 169.631C29.5158 169.172 29.511 168.662 29.5058 168.1C29.4951 166.949 29.4937 166.051 29.7193 165.432C29.824 165.144 29.9688 164.948 30.1683 164.817C30.3727 164.683 30.6809 164.588 31.1633 164.598C33.0857 164.634 34.6395 166.25 34.6575 168.185Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M80.6122 165.875C82.0294 167.19 82.1652 169.445 80.9192 170.913C79.6732 172.381 77.5144 172.508 76.0973 171.193C74.6801 169.879 74.5442 167.623 75.7903 166.156C77.0363 164.688 79.1951 164.561 80.6122 165.875Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M57.661 139.911C59.0781 141.225 59.214 143.481 57.968 144.949C56.722 146.416 54.5632 146.544 53.146 145.229C51.7289 143.914 51.593 141.659 52.839 140.191C54.0851 138.723 56.2438 138.596 57.661 139.911Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <rect
            x="-0.00556529"
            y="0.72257"
            width="91.1101"
            height="12.7234"
            rx="6.36171"
            transform="matrix(0.685685 0.728409 -0.696816 0.716731 51.4244 90.1975)"
            fill="url(#gunmetal-vertical)"
            stroke="black"
          />
          <rect
            x="-0.00556529"
            y="0.72257"
            width="91.1101"
            height="12.7234"
            rx="6.36171"
            transform="matrix(0.685685 0.728409 -0.696816 0.716731 51.4244 90.1975)"
            fill="url(#copper-vertical)"
            stroke="black"
          />
          <path
            d="M108.626 155.974C108.406 156.201 108.153 156.322 107.938 156.352C107.724 156.382 107.58 156.321 107.499 156.235C107.417 156.148 107.361 155.997 107.393 155.773C107.426 155.55 107.545 155.287 107.766 155.06C107.987 154.833 108.24 154.712 108.454 154.682C108.668 154.652 108.812 154.713 108.894 154.8C108.975 154.886 109.031 155.037 108.999 155.261C108.967 155.485 108.847 155.747 108.626 155.974Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M103.247 161.507C103.027 161.734 102.774 161.855 102.559 161.885C102.345 161.915 102.201 161.854 102.12 161.767C102.038 161.681 101.982 161.53 102.014 161.306C102.047 161.082 102.166 160.82 102.387 160.593C102.608 160.366 102.861 160.245 103.075 160.215C103.289 160.185 103.433 160.246 103.515 160.332C103.596 160.419 103.652 160.57 103.62 160.794C103.588 161.018 103.468 161.28 103.247 161.507Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M52.5344 96.3872C52.3138 96.6141 52.061 96.7351 51.8464 96.7652C51.6321 96.7952 51.4884 96.7344 51.4069 96.6478C51.3253 96.5612 51.2694 96.41 51.3016 96.1865C51.3338 95.9627 51.4537 95.7004 51.6743 95.4734C51.8949 95.2465 52.1478 95.1255 52.3623 95.0954C52.5767 95.0654 52.7204 95.1263 52.8019 95.2129C52.8834 95.2995 52.9393 95.4506 52.9071 95.6742C52.8749 95.8979 52.7551 96.1603 52.5344 96.3872Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M47.1554 101.92C46.9348 102.147 46.6819 102.268 46.4674 102.298C46.253 102.328 46.1093 102.267 46.0278 102.181C45.9463 102.094 45.8904 101.943 45.9226 101.719C45.9548 101.495 46.0746 101.233 46.2952 101.006C46.5159 100.779 46.7687 100.658 46.9833 100.628C47.1976 100.598 47.3413 100.659 47.4228 100.746C47.5044 100.832 47.5602 100.983 47.5281 101.207C47.4959 101.431 47.376 101.693 47.1554 101.92Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <rect
            x="0.691274"
            y="-0.000150174"
            width="138.943"
            height="14.6563"
            rx="7.32813"
            transform="matrix(0.691109 -0.722743 0.691438 0.722443 35.8311 167.628)"
            fill="url(#duraplast-vertical)"
            stroke="black"
          />
          <path
            d="M130.129 73.5953C130.592 74.079 130.592 74.8635 130.129 75.3476C129.666 75.8316 128.916 75.8318 128.453 75.3481C127.99 74.8644 127.989 74.0799 128.452 73.5958C128.915 73.1118 129.666 73.1116 130.129 73.5953Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M136.218 79.9576C136.681 80.4413 136.681 81.2258 136.218 81.7099C135.755 82.1939 135.005 82.1941 134.542 81.7104C134.079 81.2267 134.079 80.4421 134.542 79.9581C135.004 79.474 135.755 79.4739 136.218 79.9576Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M44.2342 163.421C44.6972 163.905 44.6974 164.69 44.2345 165.174C43.7717 165.658 43.0211 165.658 42.5582 165.174C42.0952 164.69 42.095 163.906 42.5579 163.422C43.0208 162.938 43.7713 162.938 44.2342 163.421Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M50.3235 169.784C50.7864 170.267 50.7866 171.052 50.3238 171.536C49.8609 172.02 49.1104 172.02 48.6474 171.536C48.1845 171.053 48.1843 170.268 48.6472 169.784C49.11 169.3 49.8605 169.3 50.3235 169.784Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <rect
            x="0.691274"
            y="-0.000150204"
            width="138.943"
            height="14.6563"
            rx="7.32813"
            transform="matrix(0.691109 -0.722743 0.691438 0.722443 46.3539 177.627)"
            fill="url(#gunmetal-vertical)"
            stroke="black"
          />
          <rect
            x="0.691274"
            y="-0.000150204"
            width="138.943"
            height="14.6563"
            rx="7.32813"
            transform="matrix(0.691109 -0.722743 0.691438 0.722443 46.3539 177.627)"
            fill="url(#gunmetal-vertical)"
            stroke="black"
          />
          <path
            d="M140.651 83.5949C141.114 84.0786 141.115 84.8631 140.652 85.3472C140.189 85.8312 139.438 85.8314 138.975 85.3477C138.512 84.864 138.512 84.0794 138.975 83.5954C139.438 83.1113 140.189 83.1112 140.651 83.5949Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M146.741 89.9572C147.204 90.4409 147.204 91.2254 146.741 91.7095C146.278 92.1935 145.528 92.1937 145.065 91.71C144.602 91.2263 144.602 90.4417 145.064 89.9577C145.527 89.4736 146.278 89.4735 146.741 89.9572Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M54.7571 173.421C55.22 173.905 55.2202 174.689 54.7574 175.173C54.2945 175.657 53.544 175.657 53.081 175.174C52.6181 174.69 52.6179 173.905 53.0808 173.421C53.5436 172.937 54.2941 172.937 54.7571 173.421Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M60.8464 179.783C61.3093 180.267 61.3095 181.051 60.8466 181.536C60.3838 182.02 59.6332 182.02 59.1703 181.536C58.7073 181.052 58.7072 180.268 59.17 179.784C59.6329 179.3 60.3834 179.3 60.8464 179.783Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M162.819 174.567C160.704 174.566 158.957 172.775 158.958 170.525C158.96 168.275 160.708 166.486 162.823 166.487C164.938 166.488 166.685 168.279 166.684 170.529C166.683 172.779 164.934 174.568 162.819 174.567Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M47.9262 77.5444C45.8959 77.5435 44.1926 75.7673 44.1937 73.5027C44.1949 71.2381 45.9 69.4635 47.9303 69.4644C49.9606 69.4654 51.6639 71.2416 51.6628 73.5062C51.6616 75.7708 49.9565 77.5454 47.9262 77.5444Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <g filter="url(#filter0_d23)">
            <path
              d="M125.505 56.2177C131.056 56.8121 135.265 61.4965 135.265 67.0792C135.265 69.0007 134.556 70.8545 133.274 72.2856L124.192 82.4223C106.326 102.363 110.605 133.566 133.179 147.961L164.579 167.984L164.716 168.293C166.081 171.369 162.336 174.166 159.773 171.984L132.16 155.141C103.732 137.8 99.8786 98.0396 124.447 75.5636L130.459 70.0633C131.383 66.1476 128.737 62.2862 124.752 61.7347L119.341 60.9858C116.018 60.526 112.657 61.5022 110.098 63.6703L108.019 65.4318C100.868 71.4906 89.888 69.1331 85.7523 60.722C82.714 54.5428 75.663 51.3759 69.0431 53.2702C67.3896 53.7434 65.8356 54.5124 64.4564 55.5399L63.1649 56.5021C60.3285 58.4722 57.9908 61.0768 56.3379 64.109L50.6723 74.5023L50.3485 74.7781C48.394 76.4422 45.3871 75.0531 45.3872 72.4862L49.7044 64.4517C52.2424 59.7283 55.8719 55.6795 60.2908 52.6422L62.0062 51.4632C63.4207 50.491 64.9625 49.7186 66.5882 49.1679L71.586 47.4749C78.1868 45.2389 85.3827 48.5635 87.9587 55.0393C91.0369 62.7777 100.461 65.716 107.391 61.0983L108.735 60.2032C109.44 59.7334 110.185 59.3268 110.962 58.988L116.305 56.6566C118.022 55.9072 119.905 55.6181 121.769 55.8176L125.505 56.2177Z"
              fill="url(#paint0_diamond23)"
            />
            <path
              d="M160.098 171.604L160.068 171.578L160.034 171.558L132.42 154.714C104.277 137.547 100.462 98.1837 124.785 75.9325L130.797 70.4322L130.911 70.3281L130.946 70.1781C131.938 65.9755 129.098 61.8313 124.821 61.2394L119.409 60.4905C115.946 60.0112 112.443 61.0288 109.775 63.2889L107.696 65.0503C100.796 70.8959 90.195 68.6243 86.201 60.5013C83.057 54.1072 75.7603 50.8279 68.9055 52.7895C67.1939 53.2793 65.5853 54.0753 64.1577 55.139L62.8728 56.0963C59.9756 58.1101 57.5877 60.7717 55.8989 63.8697L50.2777 74.1817L50.0243 74.3974C48.4255 75.7587 45.982 74.6698 45.8898 72.607L50.1448 64.6883C52.6452 60.0352 56.2208 56.0465 60.574 53.0543L62.2894 51.8753C63.666 50.9291 65.1665 50.1774 66.7486 49.6415L71.7464 47.9485C78.0953 45.7979 85.0165 48.9955 87.4941 55.2241C90.6898 63.258 100.473 66.3084 107.669 61.5144L109.012 60.6193C109.693 60.1658 110.412 59.7733 111.161 59.4463L116.505 57.1148C118.143 56.4002 119.939 56.1245 121.715 56.3147L125.452 56.7149C130.749 57.2821 134.765 61.752 134.765 67.0792C134.765 68.8775 134.102 70.6126 132.902 71.952L123.819 82.0887C105.748 102.259 110.076 133.822 132.911 148.383L164.183 168.325L164.259 168.495C165.408 171.085 162.255 173.44 160.098 171.604Z"
              stroke="black"
            />
          </g>
          <path
            d="M147.207 174.565C144.857 174.564 142.988 172.736 142.989 170.523C142.99 168.31 144.861 166.484 147.211 166.485C149.56 166.486 151.43 168.314 151.428 170.527C151.427 172.74 149.556 174.566 147.207 174.565Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M68.101 76.566C65.9884 76.5649 64.2424 74.7746 64.2435 72.5241C64.2446 70.2735 65.9923 68.485 68.1049 68.486C70.2175 68.4871 71.9635 70.2774 71.9624 72.5279C71.9613 74.7784 70.2136 76.567 68.101 76.566Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <g filter="url(#filter1_d23)">
            <path
              d="M109.47 55.1582C116.705 55.9109 122.201 62.0089 122.201 69.283L121.068 105.634C120.772 115.152 123.199 124.557 128.066 132.742L149.908 169.483C149.908 171.677 147.509 173.028 145.632 171.89L144.96 171.483L122.374 133.041C117.454 124.666 115.079 115.041 115.54 105.339L117.254 69.283C118.201 65.3808 115.561 61.5168 111.581 60.9817L100.432 59.4827L88.5575 59.4827L80.1465 61.9827L70.7692 73.7159C70.1442 74.4978 69.1446 74.8796 68.1575 74.7133C65.6385 74.2891 65.001 70.9633 67.1846 69.6377L67.769 69.283L74.7042 59.4827C81.7438 54.9555 90.1313 52.9991 98.4475 53.9446L105.379 54.7327L109.47 55.1582Z"
              fill="url(#paint1_diamond23)"
            />
            <path
              d="M100.498 58.9872L100.465 58.9827L100.432 58.9827L88.5575 58.9827L88.4847 58.9827L88.415 59.0034L80.0041 61.5034L79.8538 61.5481L79.756 61.6705L70.3786 73.4037C69.867 74.0438 69.0486 74.3564 68.2405 74.2203C66.1784 73.873 65.6565 71.1503 67.4441 70.0651L68.0284 69.7104L68.1171 69.6565L68.1771 69.5718L75.0561 59.851C81.982 55.4233 90.2213 53.5126 98.391 54.4414L105.323 55.2295L105.328 55.23L109.418 55.6555C116.396 56.3814 121.697 62.2607 121.701 69.2752L120.568 105.618C120.269 115.231 122.721 124.731 127.636 132.998L149.404 169.614C149.311 171.341 147.397 172.376 145.892 171.463L145.327 171.121L122.805 132.787C117.934 124.497 115.583 114.967 116.04 105.363L117.751 69.3537C118.736 65.1792 115.906 61.0586 111.648 60.4861L100.498 58.9872Z"
              stroke="black"
            />
          </g>
          <path
            d="M133.352 174.077C131.003 174.076 129.133 172.248 129.134 170.035C129.135 167.822 131.007 165.996 133.356 165.997C135.705 165.998 137.575 167.826 137.574 170.039C137.573 172.252 135.701 174.078 133.352 174.077Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M54.2464 78.078C52.1338 78.0769 50.3878 76.2866 50.3889 74.0361C50.39 71.7855 52.1377 69.997 54.2503 69.998C56.3629 69.9991 58.1089 71.7894 58.1078 74.0399C58.1067 76.2904 56.359 78.079 54.2464 78.078Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <g filter="url(#filter2_d23)">
            <path
              d="M115.797 59.1702C123.032 59.9229 128.529 66.0209 128.529 73.295L126.654 77.9827L117.761 97.5338C110.882 112.657 111.964 130.209 120.649 144.372L136.053 169.495C136.053 171.689 133.654 173.04 131.778 171.902L131.106 171.495L114.804 144.561C106.165 130.287 105.215 112.644 112.272 97.5245L123.581 73.295C124.529 69.3928 121.889 65.5287 117.909 64.9937L106.759 63.4947L99.8721 62.709C95.6408 62.2263 91.3687 62.2182 87.1355 62.6849L73.1335 64.2286C68.7174 64.7155 64.6177 66.7546 61.565 69.9825L56.9195 74.8947C56.2789 75.572 55.3104 75.8291 54.4182 75.5586C52.7488 75.0525 52.1218 73.0178 53.2169 71.6598L53.9144 70.795C59.9967 64.1375 68.2115 59.8111 77.1421 58.5617L84.4736 57.536C89.4158 56.8446 94.4256 56.7799 99.3839 57.3437L111.707 58.7447L115.797 59.1702Z"
              fill="url(#paint2_diamond23)"
            />
            <path
              d="M124.034 73.5065L124.055 73.4614L124.067 73.413C125.085 69.2224 122.25 65.0728 117.976 64.4981L106.826 62.9992L106.826 62.9991L106.816 62.9979L99.9288 62.2122C95.6604 61.7253 91.3509 61.7172 87.0807 62.1879L73.0787 63.7316C68.5449 64.2314 64.3358 66.3249 61.2017 69.639L56.5562 74.5511C56.0458 75.0908 55.2742 75.2956 54.5633 75.0801C53.2331 74.6768 52.7336 73.0557 53.6061 71.9737L54.2939 71.1209C60.2967 64.5558 68.4011 60.2894 77.2114 59.0568L84.5429 58.0311C89.4434 57.3456 94.4109 57.2815 99.3275 57.8405L111.651 59.2415L111.651 59.2415L111.655 59.242L115.746 59.6675C122.694 60.3904 127.981 66.2237 128.029 73.1995L126.194 77.7863L117.306 97.3268C110.358 112.601 111.451 130.329 120.223 144.634L135.55 169.63C135.454 171.354 133.541 172.387 132.037 171.475L131.47 171.131L115.232 144.303C106.679 130.171 105.739 112.704 112.725 97.736L124.034 73.5065Z"
              stroke="black"
            />
          </g>
          <rect
            x="245.896"
            y="67.4825"
            width="33.6332"
            height="120"
            fill="url(#paint3_diamond23)"
            stroke="black"
            strokeWidth="2"
            filter="url(#shadow)"
          />
          <rect
            x="259.22"
            y="65.9827"
            width="20.7799"
            height="122"
            stroke="black"
          />
          <g filter="url(#filter3_ddiif23)"></g>
          <path
            d="M177.13 89.9825C177.13 68.4434 194.591 50.9825 216.13 50.9825H252.312V202.982H216.13C194.591 202.982 177.13 185.522 177.13 163.982V89.9825Z"
            fill={bodyColor}
            stroke="black"
            strokeWidth="2"
            filter="url(#shadow)"
          />
          <g filter="url(#filter4_ii23)">
            <rect
              y="66.1774"
              width="19.7904"
              height="121"
              rx="5"
              fill="url(#crodium-vertical)"
            />
          </g>
          <rect
            x="0.5"
            y="66.6774"
            width="18.7904"
            height="120"
            rx="4.5"
            stroke="black"
          />
          <path
            d="M12.3638 89.6774C12.3638 91.3392 11.0321 92.6774 9.40044 92.6774C7.76879 92.6774 6.43712 91.3392 6.43712 89.6774C6.43712 88.0156 7.76879 86.6774 9.40044 86.6774C11.0321 86.6774 12.3638 88.0156 12.3638 89.6774Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M12.2959 67.5414C12.2959 69.2033 10.9642 70.5414 9.33258 70.5414C7.70094 70.5414 6.36926 69.2033 6.36926 67.5414C6.36926 67.1181 6.45507 66.9055 6.53991 66.7936C6.61907 66.6892 6.74689 66.6069 6.98772 66.5556C7.23862 66.5022 7.56025 66.4935 7.97197 66.5038C8.10473 66.5072 8.24913 66.5126 8.40098 66.5183C8.69373 66.5294 9.01421 66.5415 9.33258 66.5415C9.65095 66.5415 9.97143 66.5294 10.2642 66.5183C10.416 66.5126 10.5604 66.5072 10.6932 66.5038C11.1049 66.4935 11.4265 66.5022 11.6774 66.5556C11.9183 66.6069 12.0461 66.6892 12.1253 66.7936C12.2101 66.9055 12.2959 67.1181 12.2959 67.5414ZM9.8952 182.677C11.5268 182.677 12.8585 184.016 12.8585 185.677C12.8585 186.101 12.7727 186.313 12.6879 186.425C12.6087 186.53 12.4809 186.612 12.2401 186.663C11.9892 186.717 11.6675 186.725 11.2558 186.715C11.1231 186.712 10.9787 186.706 10.8268 186.701C10.5341 186.689 10.2136 186.677 9.8952 186.677C9.57681 186.677 9.25631 186.689 8.96355 186.701C8.81171 186.706 8.66733 186.712 8.53458 186.715C8.12287 186.725 7.80124 186.717 7.55033 186.663C7.3095 186.612 7.18168 186.53 7.10252 186.425C7.01768 186.313 6.93188 186.101 6.93188 185.677C6.93188 184.016 8.26355 182.677 9.8952 182.677Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M12.3638 137.677C12.3638 139.339 11.0321 140.677 9.40044 140.677C7.76879 140.677 6.43712 139.339 6.43712 137.677C6.43712 136.016 7.76879 134.677 9.40044 134.677C11.0321 134.677 12.3638 136.016 12.3638 137.677Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M12.3638 112.677C12.3638 114.339 11.0321 115.677 9.40044 115.677C7.76879 115.677 6.43712 114.339 6.43712 112.677C6.43712 111.016 7.76879 109.677 9.40044 109.677C11.0321 109.677 12.3638 111.016 12.3638 112.677Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M12.3638 160.677C12.3638 162.339 11.0321 163.677 9.40044 163.677C7.76879 163.677 6.43712 162.339 6.43712 160.677C6.43712 159.016 7.76879 157.677 9.40044 157.677C11.0321 157.677 12.3638 159.016 12.3638 160.677Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <g filter="url(#filter5_ii23)">
            <rect
              y="66.1774"
              width="19.7904"
              height="121"
              rx="5"
              fill="url(#crodium-vertical)"
            />
          </g>
          <g filter="url(#filter6_ii23)">
            <rect
              x="164.256"
              y="66.1599"
              width="19.7904"
              height="121"
              rx="5"
              fill="url(#crodium-vertical)"
            />
          </g>
          <rect
            x="0.5"
            y="66.6774"
            width="18.7904"
            height="120"
            rx="4.5"
            stroke="black"
          />
          <path
            d="M12.3638 89.6774C12.3638 91.3392 11.0321 92.6774 9.40044 92.6774C7.76879 92.6774 6.43712 91.3392 6.43712 89.6774C6.43712 88.0156 7.76879 86.6774 9.40044 86.6774C11.0321 86.6774 12.3638 88.0156 12.3638 89.6774Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M12.2959 67.5414C12.2959 69.2033 10.9642 70.5414 9.33258 70.5414C7.70094 70.5414 6.36926 69.2033 6.36926 67.5414C6.36926 67.1181 6.45507 66.9055 6.53991 66.7936C6.61907 66.6892 6.74689 66.6069 6.98772 66.5556C7.23862 66.5022 7.56025 66.4935 7.97197 66.5038C8.10473 66.5072 8.24913 66.5126 8.40098 66.5183C8.69373 66.5294 9.01421 66.5415 9.33258 66.5415C9.65095 66.5415 9.97143 66.5294 10.2642 66.5183C10.416 66.5126 10.5604 66.5072 10.6932 66.5038C11.1049 66.4935 11.4265 66.5022 11.6774 66.5556C11.9183 66.6069 12.0461 66.6892 12.1253 66.7936C12.2101 66.9055 12.2959 67.1181 12.2959 67.5414ZM9.8952 182.677C11.5268 182.677 12.8585 184.016 12.8585 185.677C12.8585 186.101 12.7727 186.313 12.6879 186.425C12.6087 186.53 12.4809 186.612 12.2401 186.663C11.9892 186.717 11.6675 186.725 11.2558 186.715C11.1231 186.712 10.9787 186.706 10.8268 186.701C10.5341 186.689 10.2136 186.677 9.8952 186.677C9.57681 186.677 9.25631 186.689 8.96355 186.701C8.81171 186.706 8.66733 186.712 8.53458 186.715C8.12287 186.725 7.80124 186.717 7.55033 186.663C7.3095 186.612 7.18168 186.53 7.10252 186.425C7.01768 186.313 6.93188 186.101 6.93188 185.677C6.93188 184.016 8.26355 182.677 9.8952 182.677Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M12.3638 137.677C12.3638 139.339 11.0321 140.677 9.40044 140.677C7.76879 140.677 6.43712 139.339 6.43712 137.677C6.43712 136.016 7.76879 134.677 9.40044 134.677C11.0321 134.677 12.3638 136.016 12.3638 137.677Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M12.3638 112.677C12.3638 114.339 11.0321 115.677 9.40044 115.677C7.76879 115.677 6.43712 114.339 6.43712 112.677C6.43712 111.016 7.76879 109.677 9.40044 109.677C11.0321 109.677 12.3638 111.016 12.3638 112.677Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M12.3638 160.677C12.3638 162.339 11.0321 163.677 9.40044 163.677C7.76879 163.677 6.43712 162.339 6.43712 160.677C6.43712 159.016 7.76879 157.677 9.40044 157.677C11.0321 157.677 12.3638 159.016 12.3638 160.677Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <rect
            x="164.756"
            y="66.6599"
            width="18.7904"
            height="120"
            rx="4.5"
            stroke="black"
          />
          <path
            d="M176.619 89.6599C176.619 91.3217 175.288 92.6599 173.656 92.6599C172.024 92.6599 170.693 91.3217 170.693 89.6599C170.693 87.9981 172.024 86.6599 173.656 86.6599C175.288 86.6599 176.619 87.9981 176.619 89.6599Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M176.552 67.5239C176.552 69.1858 175.22 70.5239 173.588 70.5239C171.957 70.5239 170.625 69.1858 170.625 67.5239C170.625 67.1006 170.711 66.888 170.796 66.7761C170.875 66.6717 171.003 66.5894 171.243 66.5381C171.494 66.4847 171.816 66.476 172.228 66.4863C172.36 66.4897 172.505 66.4951 172.657 66.5008C172.949 66.5119 173.27 66.5239 173.588 66.5239C173.907 66.5239 174.227 66.5119 174.52 66.5008C174.672 66.4951 174.816 66.4897 174.949 66.4863C175.361 66.476 175.682 66.4847 175.933 66.5381C176.174 66.5894 176.302 66.6717 176.381 66.7761C176.466 66.888 176.552 67.1006 176.552 67.5239ZM174.151 182.66C175.783 182.66 177.114 183.998 177.114 185.66C177.114 186.083 177.028 186.296 176.944 186.408C176.864 186.512 176.737 186.594 176.496 186.646C176.245 186.699 175.923 186.708 175.512 186.698C175.379 186.694 175.234 186.689 175.083 186.683C174.79 186.672 174.469 186.66 174.151 186.66C173.833 186.66 173.512 186.672 173.219 186.683C173.067 186.689 172.923 186.694 172.79 186.698C172.379 186.708 172.057 186.699 171.806 186.646C171.565 186.594 171.437 186.512 171.358 186.408C171.273 186.296 171.188 186.083 171.188 185.66C171.188 183.998 172.519 182.66 174.151 182.66Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M176.619 137.66C176.619 139.322 175.288 140.66 173.656 140.66C172.024 140.66 170.693 139.322 170.693 137.66C170.693 135.998 172.024 134.66 173.656 134.66C175.288 134.66 176.619 135.998 176.619 137.66Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M176.619 112.66C176.619 114.322 175.288 115.66 173.656 115.66C172.024 115.66 170.693 114.322 170.693 112.66C170.693 110.998 172.024 109.66 173.656 109.66C175.288 109.66 176.619 110.998 176.619 112.66Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M176.619 160.66C176.619 162.322 175.288 163.66 173.656 163.66C172.024 163.66 170.693 162.322 170.693 160.66C170.693 158.998 172.024 157.66 173.656 157.66C175.288 157.66 176.619 158.998 176.619 160.66Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M217.205 196.078C214.724 196.077 212.834 194.337 212.835 192.331C212.836 190.325 214.728 188.587 217.209 188.588C219.691 188.59 221.58 190.33 221.579 192.335C221.578 194.341 219.687 196.079 217.205 196.078Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M198.412 87.1639C196.175 87.1628 194.413 85.4582 194.414 83.4171C194.415 81.376 196.179 79.6732 198.416 79.6743C200.653 79.6754 202.415 81.38 202.414 83.4211C202.413 85.4622 200.649 87.165 198.412 87.1639Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <g filter="url(#filter7_d23)">
            <path
              d="M222.321 57.3718C223.769 59.6484 224.253 62.4077 223.664 65.0411L220.691 78.3484C220.237 80.3826 219.082 82.1923 217.428 83.4609C213.722 86.3033 212.85 91.5296 215.431 95.4217L217.786 98.9717C218.933 100.7 219.664 102.67 219.922 104.728L222.487 125.132C222.865 128.137 222.969 131.17 222.797 134.194L219.534 191.825L219.534 192.234C219.534 194.153 217.477 195.37 215.794 194.446C214.956 193.986 214.45 193.091 214.487 192.136L216.714 135.09C216.855 131.473 216.603 127.852 215.962 124.29L213.891 112.769C213.673 111.558 213.563 110.329 213.563 109.098C213.563 104.252 211.866 99.5592 208.768 95.8331L207.732 94.5864C204.878 91.191 205.214 86.1488 208.491 83.1612L211.34 80.5647C213.338 78.7439 214.679 76.3148 215.155 73.6541L215.927 69.3422L217.366 60.8569C217.401 60.6493 217.241 60.4599 217.031 60.4599C216.96 60.4599 216.892 60.4381 216.834 60.3975L215.811 59.6736C214.043 58.423 211.619 58.6888 210.164 60.2931L208.322 62.3232C207.629 63.0877 207.104 63.9891 206.78 64.9693L205.46 68.9715C205.019 70.3103 204.682 71.6813 204.452 73.0722L203.476 78.993C203.367 79.6499 203.172 80.2895 202.896 80.8951L201.299 84.3918C200.743 85.6088 199.407 86.2668 198.104 85.9662C195.586 85.3859 195.112 82.0044 197.374 80.7563C197.702 80.5757 197.99 80.3317 198.222 80.0385L198.61 79.5475C199.414 78.5323 199.863 77.2818 199.889 75.9873L200.004 70.2867C200.081 66.4946 201.227 62.8014 203.311 59.6324L203.987 58.6052C204.807 57.3573 205.836 56.2598 207.029 55.3607L207.949 54.6669C209.82 53.2567 212.13 52.5562 214.468 52.6903C217.644 52.8723 220.539 54.5709 222.246 57.2547L222.321 57.3718Z"
              fill="url(#paint4_diamond23)"
            />
            <path
              d="M219.034 191.797L219.034 191.811L219.034 191.825L219.034 192.234C219.034 193.773 217.384 194.749 216.035 194.008C215.363 193.639 214.957 192.921 214.987 192.155L217.213 135.109C217.356 131.456 217.102 127.799 216.454 124.201L214.383 112.681C214.17 111.498 214.063 110.299 214.063 109.098C214.063 104.135 212.325 99.3293 209.153 95.5134L208.116 94.2668L208.114 94.2648C205.434 91.0748 205.749 86.3376 208.828 83.5308L211.677 80.9342C213.756 79.0393 215.152 76.5113 215.647 73.7422L216.419 69.4303L216.419 69.4303L216.42 69.4258L217.859 60.9405C217.943 60.4453 217.577 59.9921 217.084 59.9616L216.1 59.2654C214.125 57.8688 211.418 58.1657 209.793 59.9571L207.952 61.9873C207.212 62.8036 206.651 63.7661 206.305 64.8127L204.985 68.8149C204.536 70.1782 204.192 71.5744 203.959 72.9908L202.982 78.9116C202.881 79.5249 202.699 80.122 202.441 80.6874L200.844 84.1841C200.387 85.1849 199.288 85.7262 198.216 85.479C196.145 85.0016 195.756 82.2202 197.616 81.1941C198.001 80.9814 198.341 80.6941 198.614 80.3489L199.003 79.8579C199.874 78.757 200.361 77.4011 200.389 75.9973L200.504 70.2967C200.579 66.5989 201.697 62.9974 203.729 59.9072L204.404 58.88C205.194 57.68 206.183 56.6246 207.33 55.7599L208.25 55.0661C210.026 53.7273 212.219 53.0622 214.44 53.1895C217.455 53.3623 220.203 54.975 221.824 57.5231L221.899 57.6402C223.276 59.8047 223.736 62.4283 223.176 64.9321L220.203 78.2394C219.775 80.1591 218.684 81.867 217.124 83.0641C213.209 86.0665 212.288 91.587 215.015 95.698L217.369 99.248C218.473 100.912 219.177 102.809 219.426 104.79L221.991 125.194C222.365 128.169 222.468 131.172 222.298 134.166L219.034 191.797Z"
              stroke="black"
            />
          </g>
          <path
            d="M200.305 91.4865C202.822 91.4878 204.676 93.1265 204.675 94.9396C204.674 96.7527 202.819 98.3896 200.301 98.3884C197.784 98.3871 195.93 96.7484 195.931 94.9353C195.932 93.1222 197.787 91.4853 200.305 91.4865Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M244.381 178.439C246.545 178.44 248.174 179.95 248.173 181.669C248.173 183.387 246.542 184.896 244.378 184.895C242.214 184.894 240.585 183.384 240.585 181.665C240.586 179.946 242.217 178.437 244.381 178.439Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <g filter="url(#filter8_d23)">
            <path
              d="M222.113 200.244L220.051 200.244C218.789 200.244 217.536 200.033 216.344 199.619L213.241 198.541C210.555 197.608 208.755 195.077 208.755 192.234C208.755 189.046 206.501 186.303 203.374 185.685L202.52 185.516C199.223 184.864 196.724 182.158 196.336 178.82L193.849 157.415C193.595 155.235 193.535 153.037 193.668 150.847L196.987 96.2673L196.987 96.0363C196.987 94.1525 198.978 92.9341 200.655 93.7917C201.532 94.2399 202.068 95.1578 202.026 96.1417L199.841 148.299C199.679 152.179 199.969 156.066 200.706 159.879L202.807 170.75C202.909 171.279 202.96 171.817 202.96 172.355L202.961 175.856C202.961 178.329 204.875 180.381 207.342 180.552C209.81 180.724 211.723 182.776 211.723 185.249L211.723 188.663C211.723 191.493 213.29 194.09 215.794 195.409L216.859 195.971C217.256 196.18 217.697 196.289 218.145 196.289L224.092 196.289L226.566 196.289L227.919 196.289C229.6 196.289 231.226 196.89 232.503 197.983C233.962 199.1 236.086 198.47 236.7 196.738L237.79 193.66C237.884 193.396 237.956 193.125 238.004 192.85L239.235 185.904C239.354 185.229 239.568 184.575 239.87 183.96L241.459 180.722C242.002 179.614 243.23 179.019 244.436 179.277L244.674 179.329C247.064 179.841 247.491 183.069 245.316 184.186C245.013 184.342 244.744 184.555 244.523 184.815L244.042 185.38C243.281 186.275 242.784 187.363 242.605 188.524L241.707 194.352C241.51 195.635 241.111 196.879 240.527 198.039L239.924 199.234C239.588 199.901 239.123 200.495 238.557 200.982L238.028 201.436C236.04 203.145 233.063 203 231.25 201.106C230.171 199.979 228.622 199.428 227.073 199.623L222.113 200.244Z"
              fill="url(#paint5_diamond23)"
            />
            <path
              d="M197.486 96.2977L197.487 96.2825L197.487 96.2673L197.487 96.0363C197.487 94.5261 199.083 93.5494 200.428 94.2368C201.131 94.5962 201.56 95.332 201.527 96.1207L199.342 148.278C199.178 152.197 199.471 156.122 200.215 159.974L202.316 170.845C202.412 171.343 202.46 171.848 202.46 172.355L202.461 175.856C202.461 178.592 204.578 180.861 207.307 181.051C209.513 181.205 211.223 183.039 211.223 185.249L211.223 188.663C211.223 191.678 212.893 194.445 215.56 195.851L216.626 196.413C217.094 196.66 217.616 196.789 218.145 196.789L224.092 196.789L226.566 196.789L227.919 196.789C229.481 196.789 230.992 197.347 232.178 198.363L232.189 198.372L232.199 198.38C233.928 199.703 236.444 198.956 237.171 196.905L238.262 193.827L237.79 193.66L238.262 193.827C238.364 193.537 238.443 193.24 238.497 192.937L239.727 185.991C239.838 185.363 240.038 184.753 240.319 184.18L241.907 180.942C242.35 180.04 243.349 179.556 244.331 179.766L244.569 179.817C246.5 180.232 246.845 182.839 245.088 183.741C244.727 183.927 244.405 184.181 244.142 184.491L243.661 185.056C242.84 186.021 242.304 187.196 242.111 188.448L241.213 194.276C241.024 195.507 240.641 196.701 240.08 197.814L240.527 198.039L240.08 197.814L239.478 199.009C239.171 199.617 238.748 200.159 238.231 200.603L237.702 201.057L238.028 201.436L237.702 201.057C235.915 202.592 233.24 202.462 231.611 200.76C230.423 199.519 228.717 198.913 227.011 199.126L222.082 199.744L220.051 199.744C218.845 199.744 217.648 199.542 216.508 199.147L213.405 198.069C210.92 197.206 209.255 194.864 209.255 192.234C209.255 188.807 206.832 185.859 203.47 185.194L202.617 185.025C199.533 184.415 197.196 181.884 196.833 178.762L194.345 157.357C194.096 155.207 194.036 153.038 194.167 150.877L197.486 96.2977Z"
              stroke="black"
            />
          </g>
          <path
            d="M229.337 191.565C226.987 191.564 225.118 189.736 225.119 187.523C225.12 185.31 226.991 183.484 229.341 183.485C231.69 183.486 233.56 185.314 233.558 187.527C233.557 189.74 231.686 191.566 229.337 191.565Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M211.136 75.078C209.023 75.077 207.277 73.2867 207.278 71.0362C207.279 68.7856 209.027 66.997 211.14 66.9981C213.252 66.9991 214.998 68.7894 214.997 71.04C214.996 73.2905 213.248 75.0791 211.136 75.078Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <g filter="url(#filter9_d23)">
            <path
              d="M234.897 44.2169C235.924 45.9991 236.265 48.0949 235.857 50.1111L232.705 65.6837C232.273 67.8203 231.133 69.7488 229.469 71.1575C225.844 74.2278 224.978 79.4733 227.425 83.5458L229.881 87.6339C231.009 89.5111 231.72 91.6085 231.968 93.7843L234.54 116.384C234.85 119.112 234.936 121.86 234.795 124.602L231.592 186.982L231.592 187.633C231.592 189.542 229.505 190.717 227.873 189.727C227.115 189.267 226.664 188.433 226.695 187.547L228.895 125.416C229.011 122.135 228.803 118.851 228.276 115.61L226.125 102.404C225.917 101.125 225.812 99.8305 225.812 98.5343C225.812 93.3087 224.112 88.2249 220.968 84.0507L220.164 82.9825C217.327 79.2565 217.673 74.0098 220.974 70.6885L223.565 68.081C225.568 66.066 226.889 63.4746 227.344 60.6704L228.104 55.9825L229.499 46.9051C229.533 46.6829 229.361 46.4825 229.136 46.4825C229.092 46.4825 229.048 46.4744 229.006 46.4587L228.503 46.268C226.683 45.5783 224.664 46.6032 224.147 48.4796L223.393 51.2143C223.252 51.7241 223.181 52.2505 223.181 52.7793L223.181 54.3535C223.181 58.3291 221.829 62.1865 219.347 65.2921L213.804 72.228C213.179 73.0099 212.179 73.3917 211.192 73.2254C208.673 72.8012 208.036 69.4754 210.219 68.1498L210.308 68.0962C210.635 67.8976 210.918 67.6338 211.139 67.3214L215.076 61.7579C216.808 59.3096 217.739 56.3841 217.739 53.3847L217.739 49.5451C217.739 45.3622 220.506 41.6837 224.524 40.5233L225.234 40.3185C228.968 39.2402 232.956 40.8492 234.897 44.2169Z"
              fill="url(#paint6_diamond23)"
            />
            <path
              d="M231.093 186.957L231.092 186.97L231.092 186.982L231.092 187.633C231.092 189.152 229.431 190.088 228.132 189.3C227.529 188.934 227.17 188.27 227.195 187.564L229.394 125.433C229.512 122.12 229.302 118.803 228.769 115.53L226.619 102.324C226.415 101.071 226.312 99.8036 226.312 98.5343C226.312 93.2002 224.577 88.0108 221.367 83.7499L220.563 82.6817L220.561 82.6797C217.876 79.1523 218.204 74.1852 221.329 71.0409L223.92 68.4334C225.996 66.3444 227.366 63.6577 227.838 60.7505L228.598 56.0625L228.598 56.0625L228.599 56.0584L229.993 46.981C230.073 46.4643 229.681 45.9976 229.162 45.9828L228.681 45.8005C226.585 45.0064 224.261 46.1864 223.665 48.3467L222.911 51.0814C222.759 51.6345 222.681 52.2056 222.681 52.7793L222.681 54.3535C222.681 58.2157 221.368 61.963 218.957 64.9799L213.413 71.9158C212.902 72.5559 212.083 72.8685 211.275 72.7324C209.213 72.385 208.691 69.6624 210.479 68.5772L210.567 68.5236C210.953 68.2894 211.286 67.9785 211.547 67.6102L215.484 62.0468C217.276 59.514 218.239 56.4875 218.239 53.3847L218.239 49.5451C218.239 45.5849 220.858 42.1023 224.663 41.0037L225.372 40.7989C228.886 39.7844 232.638 41.2981 234.464 44.4665C235.43 46.1433 235.751 48.115 235.367 50.0119L232.215 65.5845C231.805 67.6109 230.724 69.4399 229.146 70.776C225.334 74.0046 224.423 79.5207 226.996 83.8033L229.452 87.8914C230.543 89.7073 231.232 91.7361 231.471 93.8409L234.043 116.441C234.35 119.141 234.435 121.862 234.296 124.576L231.093 186.957Z"
              stroke="black"
            />
          </g>
          <path
            d="M190.76 173.803C193.035 173.897 194.768 175.726 194.683 177.84C194.597 179.955 192.723 181.634 190.447 181.54C188.172 181.446 186.439 179.618 186.525 177.503C186.61 175.389 188.485 173.709 190.76 173.803Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M240.679 59.8033C242.954 59.8973 244.687 61.7256 244.602 63.8401C244.516 65.9546 242.642 67.6339 240.366 67.54C238.091 67.446 236.358 65.6177 236.444 63.5032C236.529 61.3887 238.404 59.7093 240.679 59.8033Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <g filter="url(#filter10_d23)">
            <path
              d="M239.928 180.412C242.651 180.412 244.857 178.206 244.857 175.483L244.857 137.483L245.847 114.483L247.331 72.4826L247.331 68.9029L247.331 63.973C247.331 63.6009 247.224 63.2366 247.022 62.924C246.565 62.2182 245.806 61.7645 244.969 61.6966L241.515 61.4164C241.25 61.3949 240.982 61.4048 240.719 61.4459L239.939 61.5678C239.027 61.7103 238.297 62.3995 238.102 63.302C237.992 63.8162 238.066 64.3532 238.312 64.8184L238.443 65.0663C239.028 66.1714 240.236 66.7992 241.475 66.6426L241.986 66.5781C242.699 66.4881 243.312 67.08 243.248 67.7951L242.384 77.4029L239.562 170.638C239.48 173.338 237.269 175.483 234.568 175.483L210.268 175.483L190.478 175.483L189.464 175.969C187.224 177.045 187.992 180.412 190.478 180.412L239.928 180.412Z"
              fill="url(#paint7_diamond)"
            />
            <path
              d="M244.357 137.482L244.357 137.471L244.358 137.461L245.347 114.463L245.347 114.461L246.831 72.4733L246.831 68.9025L246.831 63.9726C246.831 63.6968 246.752 63.4269 246.602 63.1953C246.23 62.62 245.611 62.2503 244.929 62.195L241.475 61.9148C241.249 61.8964 241.021 61.9049 240.797 61.9399L240.017 62.0618C239.309 62.1725 238.742 62.7074 238.591 63.4078C238.505 63.8069 238.563 64.2237 238.754 64.5848L238.885 64.8327C239.372 65.7538 240.379 66.2771 241.412 66.1465L241.923 66.082C242.952 65.952 243.839 66.8071 243.746 67.8403L242.883 77.4333L240.061 170.654C239.972 173.623 237.54 175.983 234.569 175.983L210.269 175.983L190.592 175.983L189.68 176.42C187.92 177.265 188.524 179.912 190.478 179.912L239.928 179.912C242.375 179.912 244.357 177.929 244.357 175.482L244.357 137.482Z"
              stroke="black"
            />
          </g>
          <path
            d="M237.308 59.7263C235.965 59.7668 234.693 58.4709 234.639 56.6335C234.584 54.7962 235.778 53.4259 237.121 53.3854C238.465 53.3449 239.736 54.6408 239.791 56.4782C239.845 58.3155 238.652 59.6858 237.308 59.7263Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M207.584 159.807C206.24 159.847 204.968 158.551 204.914 156.714C204.86 154.877 206.053 153.506 207.396 153.466C208.74 153.425 210.012 154.721 210.066 156.559C210.12 158.396 208.927 159.766 207.584 159.807Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <g filter="url(#filter11_d23)">
            <path
              d="M206.706 54.3228C203.474 54.374 200.99 57.2029 201.356 60.4146L201.831 94.9771L202.03 114.334L202.375 130.663L202.757 152.953L203.02 157.201C203.034 157.438 203.106 157.668 203.229 157.872C203.595 158.478 204.246 158.853 204.954 158.867L206.978 158.906C207.197 158.911 207.416 158.883 207.628 158.823L207.774 158.782C208.568 158.559 209.147 157.876 209.236 157.056C209.278 156.669 209.208 156.279 209.033 155.931L208.977 155.819C208.499 154.868 207.429 154.372 206.393 154.623C205.959 154.728 205.541 154.397 205.545 153.949L205.629 145.558L204.963 63.8498C204.94 61.089 207.16 58.8311 209.92 58.806L221.211 58.7036L237.499 58.5559L237.689 58.4381C239.476 57.3319 239.286 54.6749 237.36 53.837L206.706 54.3228Z"
              fill="url(#paint8_diamond)"
            />
            <path
              d="M201.853 60.3577L201.856 60.3825L201.856 60.4075L202.331 94.9699L202.331 94.9716L202.53 114.323L202.53 114.328L202.875 130.652L202.875 130.654L203.256 152.933L203.519 157.17C203.528 157.326 203.576 157.478 203.657 157.613C203.934 158.072 204.428 158.357 204.964 158.367L206.988 158.407C207.158 158.41 207.329 158.388 207.493 158.342L207.639 158.301C208.236 158.133 208.672 157.619 208.739 157.002C208.771 156.711 208.718 156.417 208.587 156.156L208.53 156.044L208.977 155.819L208.53 156.044C208.157 155.3 207.32 154.913 206.511 155.109C205.76 155.291 205.038 154.718 205.045 153.945L205.129 145.562L205.129 145.553L204.463 63.8542C204.438 60.8173 206.879 58.3336 209.916 58.306L221.206 58.2036L237.355 58.0572L237.426 58.013C238.841 57.1375 238.722 55.0596 237.254 54.3388L206.714 54.8228C203.777 54.8693 201.52 57.4395 201.853 60.3577Z"
              stroke="black"
            />
          </g>
          <path
            d="M221.206 93.6109C219.141 93.5486 217.393 95.2217 217.329 97.3777C217.266 99.5336 218.912 101.309 220.977 101.371C223.042 101.434 224.79 99.7605 224.854 97.6045C224.917 95.4486 223.271 93.6731 221.206 93.6109Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M195.752 64.6217C194.409 64.5812 193.137 65.8771 193.083 67.7145C193.028 69.5518 194.222 70.9221 195.565 70.9626C196.909 71.0031 198.18 69.7072 198.235 67.8698C198.289 66.0325 197.096 64.6622 195.752 64.6217Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <g filter="url(#filter12_d23)">
            <path
              d="M194.867 170.18C191.622 170.088 189.149 167.239 189.515 164.014L189.994 129.451L190.196 110.095L190.542 93.7655L190.925 71.4759L191.188 67.2245C191.202 66.9893 191.273 66.7611 191.394 66.5591C191.758 65.952 192.409 65.5749 193.117 65.5609L195.114 65.5213C195.334 65.5169 195.553 65.5451 195.764 65.6049L195.895 65.642C196.69 65.8668 197.269 66.5524 197.358 67.374C197.399 67.759 197.33 68.1477 197.157 68.4941L197.096 68.6156C196.625 69.5616 195.561 70.055 194.534 69.8043C194.103 69.6993 193.689 70.0276 193.694 70.4706L193.774 78.87L193.096 160.531C193.073 163.31 195.32 165.576 198.099 165.576L214.721 165.576C216.908 165.576 218.679 163.804 218.679 161.618L218.679 97.4826C219.787 94.9089 223.627 95.7022 223.627 98.5047L223.627 164.192C223.627 167.722 220.766 170.583 217.236 170.583L209.222 170.583L194.867 170.18Z"
              fill="url(#paint9_diamond)"
            />
            <path
              d="M190.012 164.07L190.014 164.046L190.015 164.021L190.494 129.459L190.494 129.457L190.696 110.106L190.696 110.1L191.042 93.7764L191.042 93.7744L191.425 71.4959L191.687 67.2556C191.696 67.1004 191.743 66.9498 191.823 66.8165L191.394 66.5592L191.823 66.8165C192.099 66.3569 192.591 66.0714 193.127 66.0608L195.124 66.0212C195.295 66.0178 195.464 66.0397 195.628 66.086L195.759 66.1231C196.358 66.2924 196.794 66.8087 196.861 67.4273C196.892 67.7172 196.84 68.0099 196.71 68.2708L196.649 68.3923C196.281 69.1294 195.453 69.5139 194.652 69.3186C193.905 69.1363 193.186 69.7061 193.194 70.4751L193.274 78.8656L193.274 78.8745L192.596 160.527C192.571 163.584 195.042 166.076 198.099 166.076L214.722 166.076C217.184 166.076 219.179 164.081 219.179 161.618L219.179 97.5909C220.121 95.6249 223.127 96.2784 223.127 98.5044L223.127 164.191C223.127 167.446 220.49 170.083 217.235 170.083L209.228 170.083L194.881 169.68C191.929 169.597 189.679 167.005 190.012 164.07Z"
              stroke="black"
            />
          </g>
          <g filter="url(#filter13_ii23)">
            <rect
              x="18"
              y="66"
              width="19.7887"
              height="121"
              rx="5"
              fill="url(#crodium-vertical)"
            />
          </g>

          <rect
            x="18.5"
            y="66.5"
            width="18.7887"
            height="120"
            rx="4.5"
            stroke="black"
          />
          <path
            d="M30.3626 77.5C30.3626 79.1619 29.031 80.5 27.3996 80.5C25.7682 80.5 24.4366 79.1619 24.4366 77.5C24.4366 75.8381 25.7682 74.5 27.3996 74.5C29.031 74.5 30.3626 75.8381 30.3626 77.5Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M30.3626 101.5C30.3626 103.162 29.031 104.5 27.3996 104.5C25.7682 104.5 24.4366 103.162 24.4366 101.5C24.4366 99.8381 25.7682 98.5 27.3996 98.5C29.031 98.5 30.3626 99.8381 30.3626 101.5Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M30.3626 125.5C30.3626 127.162 29.031 128.5 27.3996 128.5C25.7682 128.5 24.4366 127.162 24.4366 125.5C24.4366 123.838 25.7682 122.5 27.3996 122.5C29.031 122.5 30.3626 123.838 30.3626 125.5Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M30.3626 149.5C30.3626 151.162 29.031 152.5 27.3996 152.5C25.7682 152.5 24.4366 151.162 24.4366 149.5C24.4366 147.838 25.7682 146.5 27.3996 146.5C29.031 146.5 30.3626 147.838 30.3626 149.5Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M30.3626 173.5C30.3626 175.162 29.031 176.5 27.3996 176.5C25.7682 176.5 24.4366 175.162 24.4366 173.5C24.4366 171.838 25.7682 170.5 27.3996 170.5C29.031 170.5 30.3626 171.838 30.3626 173.5Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />

          <g filter="url(#filter6_d23)">
            <path
              d="M222.321 57.3718C223.769 59.6484 224.253 62.4077 223.664 65.0411L220.691 78.3484C220.237 80.3826 219.082 82.1923 217.428 83.4609C213.722 86.3033 212.85 91.5296 215.431 95.4217L217.786 98.9717C218.933 100.7 219.664 102.67 219.922 104.728L222.487 125.132C222.865 128.137 222.969 131.17 222.797 134.194L219.534 191.825L219.534 192.234C219.534 194.153 217.477 195.37 215.794 194.446C214.956 193.986 214.45 193.091 214.487 192.136L216.714 135.09C216.855 131.473 216.603 127.852 215.962 124.29L213.891 112.769C213.673 111.558 213.563 110.329 213.563 109.098C213.563 104.252 211.866 99.5592 208.768 95.8331L207.732 94.5864C204.878 91.191 205.214 86.1488 208.491 83.1612L211.34 80.5647C213.338 78.7439 214.679 76.3148 215.155 73.6541L215.927 69.3422L217.366 60.8569C217.401 60.6493 217.241 60.4599 217.031 60.4599C216.96 60.4599 216.892 60.4381 216.834 60.3975L215.811 59.6736C214.043 58.423 211.619 58.6888 210.164 60.2931L208.322 62.3232C207.629 63.0877 207.104 63.9891 206.78 64.9693L205.46 68.9715C205.019 70.3103 204.682 71.6813 204.452 73.0722L203.476 78.993C203.367 79.6499 203.172 80.2895 202.896 80.8951L201.299 84.3918C200.743 85.6088 199.407 86.2668 198.104 85.9662C195.586 85.3859 195.112 82.0044 197.374 80.7563C197.702 80.5757 197.99 80.3317 198.222 80.0385L198.61 79.5475C199.414 78.5323 199.863 77.2818 199.889 75.9873L200.004 70.2867C200.081 66.4946 201.227 62.8014 203.311 59.6324L203.987 58.6052C204.807 57.3573 205.836 56.2598 207.029 55.3607L207.949 54.6669C209.82 53.2567 212.13 52.5562 214.468 52.6903C217.644 52.8723 220.539 54.5709 222.246 57.2547L222.321 57.3718Z"
              fill="url(#paint4_diamond23)"
            />
            <path
              d="M219.034 191.797L219.034 191.811L219.034 191.825L219.034 192.234C219.034 193.773 217.384 194.749 216.035 194.008C215.363 193.639 214.957 192.921 214.987 192.155L217.213 135.109C217.356 131.456 217.102 127.799 216.454 124.201L214.383 112.681C214.17 111.498 214.063 110.299 214.063 109.098C214.063 104.135 212.325 99.3293 209.153 95.5134L208.116 94.2668L208.114 94.2648C205.434 91.0748 205.749 86.3376 208.828 83.5308L211.677 80.9342C213.756 79.0393 215.152 76.5113 215.647 73.7422L216.419 69.4303L216.419 69.4303L216.42 69.4258L217.859 60.9405C217.943 60.4453 217.577 59.9921 217.084 59.9616L216.1 59.2654C214.125 57.8688 211.418 58.1657 209.793 59.9571L207.952 61.9873C207.212 62.8036 206.651 63.7661 206.305 64.8127L204.985 68.8149C204.536 70.1782 204.192 71.5744 203.959 72.9908L202.982 78.9116C202.881 79.5249 202.699 80.122 202.441 80.6874L200.844 84.1841C200.387 85.1849 199.288 85.7262 198.216 85.479C196.145 85.0016 195.756 82.2202 197.616 81.1941C198.001 80.9814 198.341 80.6941 198.614 80.3489L199.003 79.8579C199.874 78.757 200.361 77.4011 200.389 75.9973L200.504 70.2967C200.579 66.5989 201.697 62.9974 203.729 59.9072L204.404 58.88C205.194 57.68 206.183 56.6246 207.33 55.7599L208.25 55.0661C210.026 53.7273 212.219 53.0622 214.44 53.1895C217.455 53.3623 220.203 54.975 221.824 57.5231L221.899 57.6402C223.276 59.8047 223.736 62.4283 223.176 64.9321L220.203 78.2394C219.775 80.1591 218.684 81.867 217.124 83.0641C213.209 86.0665 212.288 91.587 215.015 95.698L217.369 99.248C218.473 100.912 219.177 102.809 219.426 104.79L221.991 125.194C222.365 128.169 222.468 131.172 222.298 134.166L219.034 191.797Z"
              stroke="black"
            />
          </g>
          <path
            d="M200.305 91.4865C202.822 91.4878 204.676 93.1265 204.675 94.9396C204.674 96.7527 202.819 98.3896 200.301 98.3884C197.784 98.3871 195.93 96.7484 195.931 94.9353C195.932 93.1222 197.787 91.4853 200.305 91.4865Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M244.381 178.439C246.545 178.44 248.174 179.95 248.173 181.669C248.173 183.387 246.542 184.896 244.378 184.895C242.214 184.894 240.585 183.384 240.585 181.665C240.586 179.946 242.217 178.437 244.381 178.439Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <g filter="url(#filter7_d23)">
            <path
              d="M222.113 200.244L220.051 200.244C218.789 200.244 217.536 200.033 216.344 199.619L213.241 198.541C210.555 197.608 208.755 195.077 208.755 192.234C208.755 189.046 206.501 186.303 203.374 185.685L202.52 185.516C199.223 184.864 196.724 182.158 196.336 178.82L193.849 157.415C193.595 155.235 193.535 153.037 193.668 150.847L196.987 96.2673L196.987 96.0363C196.987 94.1525 198.978 92.9341 200.655 93.7917C201.532 94.2399 202.068 95.1578 202.026 96.1417L199.841 148.299C199.679 152.179 199.969 156.066 200.706 159.879L202.807 170.75C202.909 171.279 202.96 171.817 202.96 172.355L202.961 175.856C202.961 178.329 204.875 180.381 207.342 180.552C209.81 180.724 211.723 182.776 211.723 185.249L211.723 188.663C211.723 191.493 213.29 194.09 215.794 195.409L216.859 195.971C217.256 196.18 217.697 196.289 218.145 196.289L224.092 196.289L226.566 196.289L227.919 196.289C229.6 196.289 231.226 196.89 232.503 197.983C233.962 199.1 236.086 198.47 236.7 196.738L237.79 193.66C237.884 193.396 237.956 193.125 238.004 192.85L239.235 185.904C239.354 185.229 239.568 184.575 239.87 183.96L241.459 180.722C242.002 179.614 243.23 179.019 244.436 179.277L244.674 179.329C247.064 179.841 247.491 183.069 245.316 184.186C245.013 184.342 244.744 184.555 244.523 184.815L244.042 185.38C243.281 186.275 242.784 187.363 242.605 188.524L241.707 194.352C241.51 195.635 241.111 196.879 240.527 198.039L239.924 199.234C239.588 199.901 239.123 200.495 238.557 200.982L238.028 201.436C236.04 203.145 233.063 203 231.25 201.106C230.171 199.979 228.622 199.428 227.073 199.623L222.113 200.244Z"
              fill="url(#paint5_diamond23)"
            />
            <path
              d="M197.486 96.2977L197.487 96.2825L197.487 96.2673L197.487 96.0363C197.487 94.5261 199.083 93.5494 200.428 94.2368C201.131 94.5962 201.56 95.332 201.527 96.1207L199.342 148.278C199.178 152.197 199.471 156.122 200.215 159.974L202.316 170.845C202.412 171.343 202.46 171.848 202.46 172.355L202.461 175.856C202.461 178.592 204.578 180.861 207.307 181.051C209.513 181.205 211.223 183.039 211.223 185.249L211.223 188.663C211.223 191.678 212.893 194.445 215.56 195.851L216.626 196.413C217.094 196.66 217.616 196.789 218.145 196.789L224.092 196.789L226.566 196.789L227.919 196.789C229.481 196.789 230.992 197.347 232.178 198.363L232.189 198.372L232.199 198.38C233.928 199.703 236.444 198.956 237.171 196.905L238.262 193.827L237.79 193.66L238.262 193.827C238.364 193.537 238.443 193.24 238.497 192.937L239.727 185.991C239.838 185.363 240.038 184.753 240.319 184.18L241.907 180.942C242.35 180.04 243.349 179.556 244.331 179.766L244.569 179.817C246.5 180.232 246.845 182.839 245.088 183.741C244.727 183.927 244.405 184.181 244.142 184.491L243.661 185.056C242.84 186.021 242.304 187.196 242.111 188.448L241.213 194.276C241.024 195.507 240.641 196.701 240.08 197.814L240.527 198.039L240.08 197.814L239.478 199.009C239.171 199.617 238.748 200.159 238.231 200.603L237.702 201.057L238.028 201.436L237.702 201.057C235.915 202.592 233.24 202.462 231.611 200.76C230.423 199.519 228.717 198.913 227.011 199.126L222.082 199.744L220.051 199.744C218.845 199.744 217.648 199.542 216.508 199.147L213.405 198.069C210.92 197.206 209.255 194.864 209.255 192.234C209.255 188.807 206.832 185.859 203.47 185.194L202.617 185.025C199.533 184.415 197.196 181.884 196.833 178.762L194.345 157.357C194.096 155.207 194.036 153.038 194.167 150.877L197.486 96.2977Z"
              stroke="black"
            />
          </g>
          <path
            d="M229.337 191.565C226.987 191.564 225.118 189.736 225.119 187.523C225.12 185.31 226.991 183.484 229.34 183.485C231.69 183.486 233.56 185.314 233.558 187.527C233.557 189.74 231.686 191.566 229.337 191.565Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M211.136 75.078C209.023 75.077 207.277 73.2867 207.278 71.0362C207.279 68.7856 209.027 66.997 211.14 66.9981C213.252 66.9991 214.998 68.7894 214.997 71.04C214.996 73.2905 213.248 75.0791 211.136 75.078Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <g filter="url(#filter8_d23)">
            <path
              d="M234.897 44.2169C235.924 45.9991 236.265 48.0949 235.857 50.1111L232.705 65.6837C232.273 67.8203 231.133 69.7488 229.469 71.1575C225.844 74.2278 224.978 79.4733 227.425 83.5458L229.881 87.6339C231.009 89.5111 231.72 91.6085 231.968 93.7843L234.54 116.384C234.85 119.112 234.936 121.86 234.795 124.602L231.592 186.982L231.592 187.633C231.592 189.542 229.505 190.717 227.873 189.727C227.115 189.267 226.664 188.433 226.695 187.547L228.895 125.416C229.011 122.135 228.803 118.851 228.276 115.61L226.125 102.404C225.917 101.125 225.812 99.8305 225.812 98.5343C225.812 93.3087 224.112 88.2249 220.968 84.0507L220.164 82.9825C217.327 79.2565 217.673 74.0098 220.974 70.6885L223.565 68.081C225.568 66.066 226.889 63.4746 227.344 60.6704L228.104 55.9825L229.499 46.9051C229.533 46.6829 229.361 46.4825 229.136 46.4825C229.092 46.4825 229.048 46.4744 229.006 46.4587L228.503 46.268C226.683 45.5783 224.664 46.6032 224.147 48.4796L223.393 51.2143C223.252 51.7241 223.181 52.2505 223.181 52.7793L223.181 54.3535C223.181 58.3291 221.829 62.1865 219.347 65.2921L213.804 72.228C213.179 73.0099 212.179 73.3917 211.192 73.2254C208.673 72.8012 208.036 69.4754 210.219 68.1498L210.308 68.0962C210.635 67.8976 210.918 67.6338 211.139 67.3214L215.076 61.7579C216.808 59.3096 217.739 56.3841 217.739 53.3847L217.739 49.5451C217.739 45.3622 220.506 41.6837 224.524 40.5233L225.234 40.3185C228.968 39.2402 232.956 40.8492 234.897 44.2169Z"
              fill="url(#paint6_diamond23)"
            />
            <path
              d="M231.093 186.957L231.092 186.97L231.092 186.982L231.092 187.633C231.092 189.152 229.431 190.088 228.132 189.3C227.529 188.934 227.17 188.27 227.195 187.564L229.394 125.433C229.512 122.12 229.302 118.803 228.769 115.53L226.619 102.324C226.415 101.071 226.312 99.8036 226.312 98.5343C226.312 93.2002 224.576 88.0108 221.367 83.7499L220.563 82.6817L220.561 82.6797C217.876 79.1523 218.204 74.1852 221.329 71.0409L223.92 68.4334C225.996 66.3444 227.366 63.6577 227.838 60.7505L228.598 56.0625L228.598 56.0625L228.599 56.0584L229.993 46.981C230.073 46.4643 229.68 45.9976 229.162 45.9828L228.681 45.8005C226.585 45.0064 224.261 46.1864 223.665 48.3467L222.911 51.0814C222.758 51.6345 222.681 52.2056 222.681 52.7793L222.681 54.3535C222.681 58.2157 221.368 61.963 218.957 64.9799L213.413 71.9158C212.902 72.5559 212.083 72.8685 211.275 72.7324C209.213 72.385 208.691 69.6624 210.479 68.5772L210.567 68.5236C210.953 68.2894 211.286 67.9785 211.547 67.6102L215.484 62.0468C217.276 59.514 218.239 56.4875 218.239 53.3847L218.239 49.5451C218.239 45.5849 220.858 42.1023 224.663 41.0037L225.372 40.7989C228.886 39.7844 232.638 41.2981 234.464 44.4665C235.43 46.1433 235.751 48.115 235.367 50.0119L232.215 65.5845C231.805 67.6109 230.724 69.4399 229.146 70.776C225.334 74.0046 224.423 79.5207 226.996 83.8033L229.452 87.8914C230.543 89.7073 231.232 91.7361 231.471 93.8409L234.043 116.441C234.35 119.141 234.435 121.862 234.296 124.576L231.093 186.957Z"
              stroke="black"
            />
          </g>
          <path
            d="M190.76 173.803C193.035 173.897 194.768 175.726 194.683 177.84C194.597 179.955 192.723 181.634 190.447 181.54C188.172 181.446 186.439 179.618 186.525 177.503C186.61 175.389 188.485 173.709 190.76 173.803Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M240.679 59.8033C242.954 59.8973 244.687 61.7256 244.602 63.8401C244.516 65.9546 242.642 67.6339 240.366 67.54C238.091 67.446 236.358 65.6177 236.444 63.5032C236.529 61.3887 238.404 59.7093 240.679 59.8033Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <g filter="url(#filter9_d23)">
            <path
              d="M239.928 180.412C242.651 180.412 244.857 178.206 244.857 175.483L244.857 137.483L245.847 114.483L247.331 72.4826L247.331 68.9029L247.331 63.973C247.331 63.6009 247.224 63.2366 247.022 62.924C246.565 62.2182 245.806 61.7645 244.969 61.6966L241.515 61.4164C241.25 61.3949 240.982 61.4048 240.719 61.4459L239.939 61.5678C239.027 61.7103 238.297 62.3995 238.102 63.302C237.992 63.8162 238.066 64.3532 238.312 64.8184L238.443 65.0663C239.028 66.1714 240.236 66.7992 241.475 66.6426L241.986 66.5781C242.699 66.4881 243.312 67.08 243.248 67.7951L242.384 77.4029L239.562 170.638C239.48 173.338 237.269 175.483 234.568 175.483L210.268 175.483L190.478 175.483L189.464 175.969C187.224 177.045 187.992 180.412 190.478 180.412L239.928 180.412Z"
              fill="url(#paint7_diamond23)"
            />
            <path
              d="M244.357 137.482L244.357 137.471L244.358 137.461L245.347 114.463L245.347 114.461L246.831 72.4733L246.831 68.9025L246.831 63.9726C246.831 63.6968 246.752 63.4269 246.602 63.1953C246.23 62.62 245.611 62.2503 244.929 62.195L241.475 61.9148C241.249 61.8964 241.021 61.9049 240.797 61.9399L240.017 62.0618C239.309 62.1725 238.742 62.7074 238.591 63.4078C238.505 63.8069 238.563 64.2237 238.754 64.5848L238.885 64.8327C239.372 65.7538 240.379 66.2771 241.412 66.1465L241.923 66.082C242.952 65.952 243.839 66.8071 243.746 67.8403L242.883 77.4333L240.061 170.654C239.972 173.623 237.54 175.983 234.569 175.983L210.269 175.983L190.592 175.983L189.68 176.42C187.92 177.265 188.524 179.912 190.478 179.912L239.928 179.912C242.375 179.912 244.357 177.929 244.357 175.482L244.357 137.482Z"
              stroke="black"
            />
          </g>
          <path
            d="M237.308 59.7263C235.965 59.7668 234.693 58.4709 234.639 56.6335C234.584 54.7962 235.778 53.4259 237.121 53.3854C238.465 53.3449 239.736 54.6408 239.791 56.4782C239.845 58.3155 238.652 59.6858 237.308 59.7263Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M207.584 159.807C206.24 159.847 204.968 158.551 204.914 156.714C204.86 154.877 206.053 153.506 207.396 153.466C208.74 153.425 210.012 154.721 210.066 156.559C210.12 158.396 208.927 159.766 207.584 159.807Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <g filter="url(#filter10_d23)">
            <path
              d="M206.706 54.3228C203.474 54.374 200.99 57.2029 201.356 60.4146L201.831 94.9771L202.03 114.334L202.375 130.663L202.757 152.953L203.02 157.201C203.034 157.438 203.106 157.668 203.229 157.872C203.595 158.478 204.246 158.853 204.954 158.867L206.978 158.906C207.197 158.911 207.416 158.883 207.628 158.823L207.774 158.782C208.568 158.559 209.147 157.876 209.236 157.056C209.278 156.669 209.208 156.279 209.033 155.931L208.977 155.819C208.499 154.868 207.429 154.372 206.393 154.623C205.959 154.728 205.541 154.397 205.545 153.949L205.629 145.558L204.963 63.8498C204.94 61.089 207.16 58.8311 209.92 58.806L221.211 58.7036L237.499 58.5559L237.689 58.4381C239.476 57.3319 239.286 54.6749 237.36 53.837L206.706 54.3228Z"
              fill="url(#paint8_diamond23)"
            />
            <path
              d="M201.853 60.3577L201.856 60.3825L201.856 60.4075L202.331 94.9699L202.331 94.9716L202.53 114.323L202.53 114.328L202.875 130.652L202.875 130.654L203.256 152.933L203.519 157.17C203.528 157.326 203.576 157.478 203.657 157.613C203.934 158.072 204.428 158.357 204.964 158.367L206.988 158.407C207.158 158.41 207.329 158.388 207.493 158.342L207.639 158.301C208.236 158.133 208.672 157.619 208.739 157.002C208.771 156.711 208.718 156.417 208.587 156.156L208.53 156.044L208.977 155.819L208.53 156.044C208.157 155.3 207.32 154.913 206.511 155.109C205.76 155.291 205.038 154.718 205.045 153.945L205.129 145.562L205.129 145.553L204.463 63.8542C204.438 60.8173 206.879 58.3336 209.916 58.306L221.206 58.2036L237.355 58.0572L237.426 58.013C238.841 57.1375 238.722 55.0596 237.254 54.3388L206.714 54.8228C203.777 54.8693 201.52 57.4395 201.853 60.3577Z"
              stroke="black"
            />
          </g>
          <path
            d="M221.206 93.6109C219.141 93.5486 217.393 95.2217 217.329 97.3777C217.266 99.5336 218.912 101.309 220.977 101.371C223.042 101.434 224.79 99.7605 224.854 97.6045C224.917 95.4486 223.271 93.6731 221.206 93.6109Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M195.752 64.6217C194.409 64.5812 193.137 65.8771 193.083 67.7145C193.028 69.5518 194.222 70.9221 195.565 70.9626C196.909 71.0031 198.18 69.7072 198.235 67.8698C198.289 66.0325 197.096 64.6622 195.752 64.6217Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <g filter="url(#filter11_d23)">
            <path
              d="M194.867 170.18C191.622 170.088 189.149 167.239 189.515 164.014L189.994 129.451L190.196 110.095L190.542 93.7655L190.925 71.4759L191.188 67.2245C191.202 66.9893 191.273 66.7611 191.394 66.5591C191.758 65.952 192.409 65.5749 193.117 65.5609L195.114 65.5213C195.334 65.5169 195.553 65.5451 195.764 65.6049L195.895 65.642C196.69 65.8668 197.269 66.5524 197.358 67.374C197.399 67.759 197.33 68.1477 197.157 68.4941L197.096 68.6156C196.625 69.5616 195.561 70.055 194.534 69.8043C194.103 69.6993 193.689 70.0276 193.694 70.4706L193.774 78.87L193.096 160.531C193.073 163.31 195.32 165.576 198.099 165.576L214.721 165.576C216.908 165.576 218.679 163.804 218.679 161.618L218.679 97.4826C219.787 94.9089 223.627 95.7022 223.627 98.5047L223.627 164.192C223.627 167.722 220.766 170.583 217.236 170.583L209.222 170.583L194.867 170.18Z"
              fill="url(#paint9_diamond23)"
            />
            <path
              d="M190.012 164.07L190.014 164.046L190.015 164.021L190.494 129.459L190.494 129.457L190.696 110.106L190.696 110.1L191.042 93.7764L191.042 93.7744L191.425 71.4959L191.687 67.2556C191.696 67.1004 191.743 66.9498 191.823 66.8165L191.394 66.5592L191.823 66.8165C192.099 66.3569 192.591 66.0714 193.127 66.0608L195.124 66.0212C195.295 66.0178 195.464 66.0397 195.628 66.086L195.759 66.1231C196.358 66.2924 196.794 66.8087 196.861 67.4273C196.892 67.7172 196.84 68.0099 196.71 68.2708L196.649 68.3923C196.281 69.1294 195.453 69.5139 194.652 69.3186C193.905 69.1363 193.186 69.7061 193.194 70.4751L193.274 78.8656L193.274 78.8745L192.596 160.527C192.571 163.584 195.042 166.076 198.099 166.076L214.722 166.076C217.184 166.076 219.179 164.081 219.179 161.618L219.179 97.5909C220.121 95.6249 223.127 96.2784 223.127 98.5044L223.127 164.191C223.127 167.446 220.49 170.083 217.235 170.083L209.228 170.083L194.881 169.68C191.929 169.597 189.679 167.005 190.012 164.07Z"
              stroke="black"
            />
          </g>
          <defs>
            <filter
              id="filter0_d23"
              x="41.3872"
              y="46.7796"
              width="127.619"
              height="133.981"
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
              id="filter1_d23"
              x="61.8565"
              y="53.7121"
              width="92.0513"
              height="126.591"
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
              id="filter2_d23"
              x="48.6704"
              y="56.9642"
              width="91.3828"
              height="123.35"
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
              id="filter3_ddiif23"
              x="239.22"
              y="54.9827"
              width="50.7799"
              height="152"
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
              <feOffset dx="-5" dy="4" />
              <feGaussianBlur stdDeviation="7.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
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
                in2="effect1_dropShadow"
                result="effect2_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="10" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.221771 0 0 0 0 0.213542 0 0 0 0 0.625 0 0 0 0.63 0"
              />
              <feBlend mode="normal" in2="shape" result="effect3_innerShadow" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="-4" />
              <feGaussianBlur stdDeviation="12.5" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.92 0"
              />
              <feBlend
                mode="normal"
                in2="effect3_innerShadow"
                result="effect4_innerShadow"
              />
              <feGaussianBlur
                stdDeviation="5"
                result="effect5_foregroundBlur"
              />
            </filter>
            <filter
              id="filter4_ii23"
              x="0"
              y="62.1774"
              width="21.7904"
              height="129"
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
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="2" dy="-4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_innerShadow"
                result="effect2_innerShadow"
              />
            </filter>
            <filter
              id="filter5_ii23"
              x="164.256"
              y="62.1599"
              width="21.7904"
              height="129"
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
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="2" dy="-4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_innerShadow"
                result="effect2_innerShadow"
              />
            </filter>
            <filter
              id="filter6_d23"
              x="191.918"
              y="52.6741"
              width="35.9907"
              height="150.088"
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
              id="filter7_d23"
              x="189.6"
              y="93.512"
              width="61.1308"
              height="117.116"
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
              id="filter8_d23"
              x="204.891"
              y="39.9861"
              width="35.1342"
              height="158.1"
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
              id="filter9_d23"
              x="184.137"
              y="61.4053"
              width="67.1946"
              height="127.007"
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
              id="filter10_d23"
              x="197.32"
              y="53.837"
              width="45.6036"
              height="113.07"
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
              id="filter11_d23"
              x="185.479"
              y="65.5209"
              width="42.1479"
              height="113.062"
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
              id="filter13_ii23"
              x="18"
              y="62"
              width="21.7887"
              height="129"
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
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="2" dy="-4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_innerShadow"
                result="effect2_innerShadow"
              />
            </filter>
            <filter
              id="filter6_ii23"
              x="164.256"
              y="62.1599"
              width="21.7904"
              height="129"
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
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="2" dy="-4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_innerShadow"
                result="effect2_innerShadow"
              />
            </filter>
            <radialGradient
              id="paint0_diamond23"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(105.557 110.237) rotate(-164.381) scale(91.9362 109.068)"
            >
              <stop stop-color="#717371" />
              <stop offset="0.208333" stop-color="#545954" />
              <stop offset="0.46875" stop-color="#747874" />
              <stop offset="0.723958" stop-color="#595F5A" />
              <stop offset="1" stop-color="#323532" />
            </radialGradient>
            <radialGradient
              id="paint1_diamond23"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(105.385 113.477) rotate(-159.077) scale(70.1635 107.133)"
            >
              <stop stop-color="#BA4141" />
              <stop offset="1" stop-color="#830101" />
            </radialGradient>
            <radialGradient
              id="paint2_diamond23"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(93.4943 115.485) rotate(-158.85) scale(67.1707 103.471)"
            >
              <stop stop-color="#775D00" />
              <stop offset="1" stop-color="#CFA202" />
            </radialGradient>
            <radialGradient
              id="paint3_diamond23"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(264.663 129.983) rotate(167.248) scale(262.767 99.4826)"
            >
              <stop stop-color="#9D5603" />
              <stop offset="0.0595529" stop-color="#8C673B" />
              <stop offset="0.114583" stop-color="#7B766F" />
              <stop offset="0.208333" stop-color="#545954" />
              <stop offset="0.275597" stop-color="#5B5443" />
              <stop offset="0.338542" stop-color="#615033" />
              <stop offset="0.400564" stop-color="#81591B" />
              <stop offset="0.46875" stop-color="#696052" />
              <stop offset="0.513012" stop-color="#A16410" />
              <stop offset="0.554561" stop-color="#7D5829" />
              <stop offset="0.597769" stop-color="#9A672E" />
              <stop offset="0.636274" stop-color="#5F4B38" />
              <stop offset="0.680571" stop-color="#936A4C" />
              <stop offset="0.723958" stop-color="#8F6B5B" />
              <stop offset="0.758968" stop-color="#543E33" />
              <stop offset="0.809127" stop-color="#925E3F" />
              <stop offset="0.852879" stop-color="#432919" />
              <stop offset="0.887523" stop-color="#955225" />
              <stop offset="0.936274" stop-color="#716054" />
              <stop offset="1" stop-color="#994000" />
            </radialGradient>
            <radialGradient
              id="paint4_diamond23"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(207.731 124.488) rotate(-129.923) scale(38.5429 86.9449)"
            >
              <stop stop-color="#775D00" />
              <stop offset="1" stop-color="#CFA202" />
            </radialGradient>
            <radialGradient
              id="paint5_diamond23"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(223.724 149.831) rotate(26.1121) scale(46.0152 83.2729)"
            >
              <stop stop-color="#717371" />
              <stop offset="0.208333" stop-color="#545954" />
              <stop offset="0.46875" stop-color="#747874" />
              <stop offset="0.723958" stop-color="#595F5A" />
              <stop offset="1" stop-color="#323532" />
            </radialGradient>
            <radialGradient
              id="paint6_diamond23"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(220.161 115.227) rotate(-127.255) scale(39.5815 87.422)"
            >
              <stop stop-color="#BA4141" />
              <stop offset="1" stop-color="#830101" />
            </radialGradient>
            <radialGradient
              id="paint7_diamond23"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(220.509 98.4017) rotate(64.4167) scale(103.207 212.698)"
            >
              <stop stop-color="#9D5603" />
              <stop offset="0.114583" stop-color="#7B766F" />
              <stop offset="0.208333" stop-color="#545954" />
              <stop offset="0.275597" stop-color="#5B5443" />
              <stop offset="0.338542" stop-color="#615033" />
              <stop offset="0.400564" stop-color="#81591B" />
              <stop offset="0.46875" stop-color="#696052" />
              <stop offset="0.513012" stop-color="#A16410" />
              <stop offset="0.554561" stop-color="#7D5829" />
              <stop offset="0.597769" stop-color="#9A672E" />
              <stop offset="0.636274" stop-color="#5F4B38" />
              <stop offset="0.680571" stop-color="#936A4C" />
              <stop offset="0.723958" stop-color="#8F6B5B" />
              <stop offset="0.758968" stop-color="#543E33" />
              <stop offset="0.809127" stop-color="#925E3F" />
              <stop offset="0.852879" stop-color="#432919" />
              <stop offset="0.887523" stop-color="#955225" />
              <stop offset="0.936274" stop-color="#716054" />
              <stop offset="1" stop-color="#994000" />
            </radialGradient>
            <radialGradient
              id="paint8_diamond23"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(219.857 126.351) rotate(-114.648) scale(83.1427 148.919)"
            >
              <stop stop-color="#9D5603" />
              <stop offset="0.114583" stop-color="#7B766F" />
              <stop offset="0.208333" stop-color="#545954" />
              <stop offset="0.275597" stop-color="#5B5443" />
              <stop offset="0.338542" stop-color="#615033" />
              <stop offset="0.400564" stop-color="#81591B" />
              <stop offset="0.46875" stop-color="#696052" />
              <stop offset="0.513012" stop-color="#A16410" />
              <stop offset="0.554561" stop-color="#7D5829" />
              <stop offset="0.597769" stop-color="#9A672E" />
              <stop offset="0.636274" stop-color="#5F4B38" />
              <stop offset="0.680571" stop-color="#936A4C" />
              <stop offset="0.723958" stop-color="#8F6B5B" />
              <stop offset="0.758968" stop-color="#543E33" />
              <stop offset="0.809127" stop-color="#925E3F" />
              <stop offset="0.852879" stop-color="#432919" />
              <stop offset="0.887523" stop-color="#955225" />
              <stop offset="0.936274" stop-color="#716054" />
              <stop offset="1" stop-color="#994000" />
            </radialGradient>
            <radialGradient
              id="paint9_diamond23"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(207.893 98.0738) rotate(114.494) scale(83.0491 147.978)"
            >
              <stop stop-color="#9D5603" />
              <stop offset="0.114583" stop-color="#7B766F" />
              <stop offset="0.208333" stop-color="#545954" />
              <stop offset="0.275597" stop-color="#5B5443" />
              <stop offset="0.338542" stop-color="#615033" />
              <stop offset="0.400564" stop-color="#81591B" />
              <stop offset="0.46875" stop-color="#696052" />
              <stop offset="0.513012" stop-color="#A16410" />
              <stop offset="0.554561" stop-color="#7D5829" />
              <stop offset="0.597769" stop-color="#9A672E" />
              <stop offset="0.636274" stop-color="#5F4B38" />
              <stop offset="0.680571" stop-color="#936A4C" />
              <stop offset="0.723958" stop-color="#8F6B5B" />
              <stop offset="0.758968" stop-color="#543E33" />
              <stop offset="0.809127" stop-color="#925E3F" />
              <stop offset="0.852879" stop-color="#432919" />
              <stop offset="0.887523" stop-color="#955225" />
              <stop offset="0.936274" stop-color="#716054" />
              <stop offset="1" stop-color="#994000" />
            </radialGradient>
          </defs>
        </svg>
      ),
      Pathfinder: (
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
          <rect
            x="1"
            y="67"
            width="277"
            height="119"
            fill="transparent"
            stroke="transparent"
            stroke-width="2"
          />
          <path
            d="M79.5 174.5H0.5V78.5H79.5V174.5Z"
            fill="url(#matte-vertical)"
            stroke="black"
          />
          <path
            d="M1 72C1 69.2386 3.24042 67 6.00185 67C16.5469 67 23.7864 67 35.5 67L66.6973 71.394C69.165 71.7415 71 73.8531 71 76.3451V176.655C71 179.147 69.165 181.258 66.6973 181.606L35.5 186H6C3.23858 186 1 183.761 1 181V72Z"
            fill={bodyColor}
            stroke="black"
            stroke-width="2"
            filter="url(#shadow)"
          />
          <g filter="url(#30)">
            <path
              d="M77.6181 77.487C77.6181 74.5396 80.1546 72.2317 83.0889 72.5092L157 79.5L237.118 87.5479C239.673 87.8046 241.618 89.955 241.618 92.5229V96.625C241.618 99.3864 239.38 101.625 236.618 101.625H136.618H133.252C128.046 101.625 127.471 109.216 132.618 110V110L236.938 116.692C239.57 116.86 241.618 119.044 241.618 121.681V126.492V132.322C241.618 134.954 239.577 137.136 236.95 137.311L136.618 143.992L132.837 144.207C127.06 144.535 126.524 152.849 132.212 153.916V153.916C132.482 153.966 132.756 153.994 133.031 153.999L236.704 155.79C239.432 155.837 241.618 158.062 241.618 160.789V164.842C241.618 167.466 239.589 169.644 236.972 169.829L157 175.5L82.9632 180.622C80.0728 180.822 77.6181 178.531 77.6181 175.634V77.487Z"
              fill={bodyColor}
              filter="url(#shadow)"
            />
            <path
              d="M77.6181 77.487C77.6181 74.5396 80.1546 72.2317 83.0889 72.5092L157 79.5L237.118 87.5479C239.673 87.8046 241.618 89.955 241.618 92.5229V96.625C241.618 99.3864 239.38 101.625 236.618 101.625H136.618H133.252C128.046 101.625 127.471 109.216 132.618 110V110L236.938 116.692C239.57 116.86 241.618 119.044 241.618 121.681V126.492V132.322C241.618 134.954 239.577 137.136 236.95 137.311L136.618 143.992L132.837 144.207C127.06 144.535 126.524 152.849 132.212 153.916V153.916C132.482 153.966 132.756 153.994 133.031 153.999L236.704 155.79C239.432 155.837 241.618 158.062 241.618 160.789V164.842C241.618 167.466 239.589 169.644 236.972 169.829L157 175.5L82.9632 180.622C80.0728 180.822 77.6181 178.531 77.6181 175.634V77.487Z"
              stroke="black"
              stroke-width="2"
            />
          </g>
          <line x1="16.5" y1="67.9958" x2="17.5" y2="186.996" stroke="black" />
          <line x1="22.5" y1="65.9958" x2="23.5" y2="184.996" stroke="black" />
          <line x1="10.5" y1="66.9958" x2="11.5" y2="185.996" stroke="black" />
          <defs>
            <filter
              id="30"
              x="68.6181"
              y="67.4865"
              width="174"
              height="118.148"
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
              <feOffset dx="-4" />
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
      Grace: (
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

          <rect x="1" width="324" height="248" fill="transparent" />
          <rect
            x="2"
            y="67"
            width="277"
            height="119"
            stroke="transparent"
            stroke-width="2"
          />
          <path
            d="M303.049 62C305.486 62 305.805 65.5307 303.408 65.9676L276.688 70.8378C258.801 74.098 247.826 92.304 253.294 109.643V109.643V109.643C265.903 114.588 267.17 131.933 255.412 138.657L253.294 139.869V139.869C248.726 156.089 258.803 172.796 275.281 176.322L306.691 183.044C309.037 183.546 308.672 187 306.272 187H243C240.239 187 238 184.761 238 182V67C238 64.2386 240.239 62 243 62H303.049Z"
            fill="url(#copper-vertical)"
            stroke="black"
            filter="url(#shadow)"
          />
          <path
            d="M245.201 68.8444L243.846 79.9555L244.56 82.2967L249.113 89.9757L249.405 87.5143C250.516 78.1571 257.862 70.7623 267.212 69.5903L279.614 68.0357C279.637 68.0327 279.659 68.02 279.673 68.0007C280.846 66.3704 279.645 64.1019 277.638 64.1546L249.55 64.8909C247.321 64.9494 245.471 66.6311 245.201 68.8444Z"
            fill={bodyColor}
            stroke="black"
            filter="url(#shadow)"
          />
          <path
            d="M244.523 166.265L244.552 166.218L244.571 166.166L246.826 159.746L248.038 164.899C249.957 173.06 256.652 179.229 264.942 180.477L287.39 183.856C287.634 183.893 287.815 184.103 287.815 184.35V184.976C287.815 185.257 287.584 185.483 287.304 185.476L249.437 184.598C247.179 184.545 245.309 182.826 245.067 180.58L243.674 167.624L244.523 166.265Z"
            fill={bodyColor}
            stroke="black"
            filter="url(#shadow)"
          />
          <path
            d="M6 67H200C221.539 67 239 84.4609 239 106V147C239 168.539 221.539 186 200 186H6C3.79086 186 2 184.209 2 182V71C2 68.7909 3.79086 67 6 67Z"
            fill={bodyColor}
            stroke="black"
            stroke-width="2"
            filter="url(#shadow)"
          />
          <path
            d="M192.583 181.413L205.472 178.468C204.083 168.895 212.581 160.722 222.167 162.6L223.722 162.904L228.226 150.974L230.685 144.461C235.046 132.909 234.932 120.145 230.366 108.672L228.229 103.305L223.734 92.0111L222.659 92.2523C212.932 94.4357 204.093 86.1963 205.478 76.418L192.561 72.8518L180.094 69.4098C177.287 68.6348 177.847 64.5 180.759 64.5H210.361C211.816 64.5 213.264 64.7049 214.662 65.1087L227.301 68.7592C233.934 70.675 238.5 76.7466 238.5 83.6506L238.5 168.294C238.5 174.838 234.391 180.676 228.231 182.885L215.107 187.591C213.429 188.192 211.659 188.5 209.876 188.5H183.732C180.754 188.5 180.272 184.226 183.175 183.563L192.583 181.413Z"
            fill="url(#copper-vertical)"
            stroke="black"
          />
          <path
            d="M91.423 64H74.9851C74.4143 64 73.8706 64.2439 73.4911 64.6704L69.7309 68.8956C69.5867 69.0576 69.4991 69.2621 69.4813 69.4783L69.1813 73.1188C69.1107 73.9757 70.083 74.5163 70.7737 74.0041L76.6316 69.6598L78.0469 74.3116C78.2934 75.1218 79.3724 75.2779 79.8385 74.5709L80.5817 73.4436C81.0419 72.7455 82.1046 72.8868 82.3663 73.6809L82.6866 74.6525C82.7199 74.7535 82.7368 74.8592 82.7368 74.9655V79.4197C82.7368 79.4723 82.723 79.524 82.6968 79.5696L81.9115 80.9345C81.1787 82.2082 79.7528 82.9174 78.2949 82.7331L77.4922 82.6316C76.946 82.5626 76.4572 82.2582 76.1541 81.7985C75.8156 81.285 75.7487 80.6387 75.9749 80.0668L76.5056 78.7253C76.566 78.5724 76.4534 78.4066 76.2889 78.4066H74.7786C73.7195 78.4066 72.7389 78.9651 72.1985 79.8759L72.1294 79.9923C71.7524 80.6278 71.6231 81.3801 71.7665 82.105L72.0104 83.3381C72.9895 88.2891 76.3928 92.4159 81.0668 94.3197L82.7368 95V110.5L80.193 120.083L74.0877 126L80.7018 131.917L83.2456 141.5V157L81.5756 157.68C76.9016 159.584 73.4983 163.711 72.5191 168.662L72.2753 169.895C72.1319 170.62 72.2611 171.372 72.6382 172.008L72.7072 172.124C73.2476 173.035 74.2283 173.593 75.2873 173.593H76.7977C76.9621 173.593 77.0748 173.428 77.0143 173.275L76.4837 171.933C76.2575 171.361 76.3244 170.715 76.6629 170.201C76.9659 169.742 77.4548 169.437 78.001 169.368L78.8037 169.267C80.2616 169.083 81.6875 169.792 82.4203 171.065L83.2056 172.43C83.2318 172.476 83.2456 172.528 83.2456 172.58V177.034C83.2456 177.141 83.2286 177.246 83.1954 177.348L82.8751 178.319C82.6134 179.113 81.5506 179.255 81.0905 178.556L80.3473 177.429C79.8812 176.722 78.8022 176.878 78.5557 177.688L77.1404 182.34L71.2824 177.996C70.5918 177.484 69.6195 178.024 69.6901 178.881L69.9901 182.522C70.0079 182.738 70.0955 182.942 70.2397 183.104L73.9999 187.33C74.3794 187.756 74.9231 188 75.4939 188H91.9318C92.5419 188 93.1187 187.721 93.4981 187.244L96.8211 183.058C96.9269 182.925 96.997 182.767 97.0246 182.599L97.5543 179.385C97.706 178.465 96.6262 177.856 95.9174 178.463L91.386 182.34L90.3806 177.935C90.1848 177.076 89.0554 176.872 88.5708 177.607L87.9446 178.556C87.4844 179.255 86.4217 179.113 86.16 178.319L85.8397 177.348C85.8064 177.246 85.7895 177.141 85.7895 177.034V172.55C85.7895 172.517 85.7962 172.484 85.8093 172.454L86.4467 170.977C86.9569 169.794 88.2089 169.113 89.479 169.327L89.5587 169.341C90.0852 169.429 90.5704 169.681 90.9458 170.061C91.5393 170.661 91.7967 171.517 91.6329 172.345L91.4384 173.328C91.4112 173.466 91.5162 173.593 91.656 173.593H93.0673C93.9299 173.593 94.7416 173.185 95.2555 172.492C95.7078 171.882 95.885 171.111 95.7445 170.365L95.3663 168.357C94.4654 163.574 91.2994 159.525 86.8744 157.497L85.7895 157V141.5L88.3333 131.917L94.4386 126L88.3333 119.951L85.2807 110.5V95L86.3656 94.5029C90.7906 92.4751 93.9566 88.4262 94.8576 83.6428L95.2357 81.6351C95.3762 80.889 95.199 80.118 94.7467 79.5081C94.2328 78.8152 93.4212 78.4066 92.5585 78.4066H91.1472C91.0074 78.4066 90.9025 78.5344 90.9296 78.6715L91.1241 79.6552C91.2879 80.4833 91.0305 81.3387 90.437 81.939C90.0616 82.3186 89.5764 82.5706 89.05 82.6593L88.9702 82.6727C87.7002 82.8868 86.4482 82.2057 85.9379 81.0231L85.3005 79.546C85.2875 79.5156 85.2807 79.483 85.2807 79.4499V74.9655C85.2807 74.8592 85.2977 74.7535 85.331 74.6525L85.6512 73.6809C85.9129 72.8868 86.9757 72.7455 87.4359 73.4435L88.062 74.3934C88.5466 75.1285 89.676 74.9238 89.8719 74.0655L90.8772 69.6598L95.4087 73.5374C96.1174 74.1439 97.1972 73.5354 97.0455 72.615L96.5159 69.4012C96.4882 69.2333 96.4182 69.0753 96.3124 68.942L92.9894 64.7564C92.61 64.2785 92.0332 64 91.423 64Z"
            fill="url(#copper-vertical)"
            stroke="black"
          />
          <path
            d="M168.423 64H151.985C151.414 64 150.871 64.2439 150.491 64.6704L146.731 68.8956C146.587 69.0576 146.499 69.2621 146.481 69.4783L146.181 73.1188C146.111 73.9757 147.083 74.5163 147.774 74.0041L153.632 69.6598L155.047 74.3116C155.293 75.1218 156.372 75.2779 156.839 74.5709L157.582 73.4436C158.042 72.7455 159.105 72.8868 159.366 73.6809L159.687 74.6525C159.72 74.7535 159.737 74.8592 159.737 74.9655V79.4197C159.737 79.4723 159.723 79.524 159.697 79.5696L158.912 80.9345C158.179 82.2082 156.753 82.9174 155.295 82.7331L154.492 82.6316C153.946 82.5626 153.457 82.2582 153.154 81.7985C152.816 81.285 152.749 80.6387 152.975 80.0668L153.506 78.7253C153.566 78.5724 153.453 78.4066 153.289 78.4066H151.779C150.719 78.4066 149.739 78.9651 149.198 79.8759L149.129 79.9923C148.752 80.6278 148.623 81.3801 148.767 82.105L149.01 83.3381C149.989 88.2891 153.393 92.4159 158.067 94.3197L159.737 95V110.5L157.193 120.083L151.088 126L157.702 131.917L160.246 141.5V157L158.576 157.68C153.902 159.584 150.498 163.711 149.519 168.662L149.275 169.895C149.132 170.62 149.261 171.372 149.638 172.008L149.707 172.124C150.248 173.035 151.228 173.593 152.287 173.593H153.798C153.962 173.593 154.075 173.428 154.014 173.275L153.484 171.933C153.258 171.361 153.324 170.715 153.663 170.201C153.966 169.742 154.455 169.437 155.001 169.368L155.804 169.267C157.262 169.083 158.688 169.792 159.42 171.065L160.206 172.43C160.232 172.476 160.246 172.528 160.246 172.58V177.034C160.246 177.141 160.229 177.246 160.195 177.348L159.875 178.319C159.613 179.113 158.551 179.255 158.09 178.556L157.347 177.429C156.881 176.722 155.802 176.878 155.556 177.688L154.14 182.34L148.282 177.996C147.592 177.484 146.62 178.024 146.69 178.881L146.99 182.522C147.008 182.738 147.096 182.942 147.24 183.104L151 187.33C151.379 187.756 151.923 188 152.494 188H168.932C169.542 188 170.119 187.721 170.498 187.244L173.821 183.058C173.927 182.925 173.997 182.767 174.025 182.599L174.554 179.385C174.706 178.465 173.626 177.856 172.917 178.463L168.386 182.34L167.381 177.935C167.185 177.076 166.055 176.872 165.571 177.607L164.945 178.556C164.484 179.255 163.422 179.113 163.16 178.319L162.84 177.348C162.806 177.246 162.789 177.141 162.789 177.034V172.55C162.789 172.517 162.796 172.484 162.809 172.454L163.447 170.977C163.957 169.794 165.209 169.113 166.479 169.327L166.559 169.341C167.085 169.429 167.57 169.681 167.946 170.061C168.539 170.661 168.797 171.517 168.633 172.345L168.438 173.328C168.411 173.466 168.516 173.593 168.656 173.593H170.067C170.93 173.593 171.742 173.185 172.255 172.492C172.708 171.882 172.885 171.111 172.744 170.365L172.366 168.357C171.465 163.574 168.299 159.525 163.874 157.497L162.789 157V141.5L165.333 131.917L171.439 126L165.333 119.951L162.281 110.5V95L163.366 94.5029C167.791 92.4751 170.957 88.4262 171.858 83.6428L172.236 81.6351C172.376 80.889 172.199 80.118 171.747 79.5081C171.233 78.8152 170.421 78.4066 169.559 78.4066H168.147C168.007 78.4066 167.902 78.5344 167.93 78.6715L168.124 79.6552C168.288 80.4833 168.031 81.3387 167.437 81.939C167.062 82.3186 166.576 82.5706 166.05 82.6593L165.97 82.6727C164.7 82.8868 163.448 82.2057 162.938 81.0231L162.301 79.546C162.287 79.5156 162.281 79.483 162.281 79.4499V74.9655C162.281 74.8592 162.298 74.7535 162.331 74.6525L162.651 73.6809C162.913 72.8868 163.976 72.7455 164.436 73.4435L165.062 74.3934C165.547 75.1285 166.676 74.9238 166.872 74.0655L167.877 69.6598L172.409 73.5374C173.117 74.1439 174.197 73.5354 174.046 72.615L173.516 69.4012C173.488 69.2333 173.418 69.0753 173.312 68.942L169.989 64.7564C169.61 64.2785 169.033 64 168.423 64Z"
            fill="url(#copper-vertical)"
            stroke="black"
          />
          <path
            d="M44.8167 64C46.9369 64 47.3473 67.0092 45.3045 67.5769L36.4124 70.0481C18.325 75.0747 7.22849 93.2597 11.0308 111.643V111.643V111.643C21.1777 117.71 22.4467 131.914 13.5361 139.684L11.0308 141.869V141.869C7.86444 159.011 17.8755 175.851 34.4481 181.258L46.4173 185.163C48.5452 185.858 48.0455 189 45.8072 189H6C3.23857 189 1 186.761 1 184V69C1 66.2386 3.23858 64 6 64H44.8167Z"
            fill="url(#copper-vertical)"
            stroke="black"
          />
          <path
            d="M5.87395 71.4526L5.0041 81.971L5.48008 84.3509L7.71886 89.5747L7.95565 87.5229C8.92231 79.1466 14.9194 72.2164 23.0701 70.0569L29.9876 68.2241C30.2068 68.166 30.3595 67.9676 30.3595 67.7407V67.0408C30.3595 66.7568 30.1233 66.5298 29.8395 66.5412L10.1789 67.3271C7.90801 67.4179 6.06125 69.1876 5.87395 71.4526Z"
            fill={bodyColor}
            stroke="black"
          />
          <path
            d="M5.46268 168.19L5.4781 168.152L5.48723 168.112L6.75376 162.616L7.37356 166.634C8.65361 174.932 14.8647 181.611 23.0484 183.489L33.1118 185.799C33.339 185.851 33.5 186.053 33.5 186.286V186.964C33.5 187.247 33.2652 187.474 32.9823 187.464L10.129 186.655C7.82911 186.574 5.96122 184.77 5.79925 182.475L4.88997 169.588L5.46268 168.19Z"
            fill={bodyColor}
            stroke="black"
          />
          <path
            d="M252.5 124.5C252.5 129.949 249.15 134.697 244 134.986V134.983V134.944V134.906V134.868V134.83V134.792V134.754V134.717V134.679V134.642V134.605V134.569V134.532V134.496V134.46V134.424V134.388V134.352V134.316V134.281V134.246V134.211V134.176V134.141V134.107V134.072V134.038V134.004V133.97V133.936V133.903V133.869V133.836V133.803V133.77V133.737V133.705V133.672V133.64V133.608V133.576V133.544V133.512V133.481V133.449V133.418V133.387V133.356V133.325V133.295V133.264V133.234V133.204V133.174V133.144V133.114V133.084V133.055V133.026V132.996V132.967V132.938V132.91V132.881V132.853V132.824V132.796V132.768V132.74V132.712V132.684V132.657V132.629V132.602V132.575V132.548V132.521V132.494V132.468V132.441V132.415V132.388V132.362V132.336V132.31V132.285V132.259V132.233V132.208V132.183V132.158V132.133V132.108V132.083V132.058V132.034V132.009V131.985V131.961V131.936V131.912V131.889V131.865V131.841V131.818V131.794V131.771V131.748V131.724V131.701V131.678V131.656V131.633V131.61V131.588V131.565V131.543V131.521V131.499V131.477V131.455V131.433V131.412V131.39V131.368V131.347V131.326V131.305V131.283V131.262V131.241V131.221V131.2V131.179V131.159V131.138V131.118V131.097V131.077V131.057V131.037V131.017V130.997V130.977V130.958V130.938V130.918V130.899V130.88V130.86V130.841V130.822V130.803V130.784V130.765V130.746V130.727V130.709V130.69V130.671V130.653V130.634V130.616V130.598V130.58V130.561V130.543V130.525V130.507V130.49V130.472V130.454V130.436V130.419V130.401V130.384V130.366V130.349V130.331V130.314V130.297V130.28V130.263V130.246V130.229V130.212V130.195V130.178V130.161V130.145V130.128V130.111V130.095V130.078V130.062V130.045V130.029V130.013V129.996V129.98V129.964V129.948V129.932V129.916V129.9V129.884V129.868V129.852V129.836V129.82V129.804V129.789V129.773V129.757V129.742V129.726V129.71V129.695V129.679V129.664V129.648V129.633V129.618V129.602V129.587V129.571V129.556V129.541V129.526V129.51V129.495V129.48V129.465V129.45V129.435V129.42V129.405V129.39V129.375V129.36V129.345V129.33V129.315V129.3V129.285V129.27V129.255V129.24V129.225V129.21V129.195V129.18V129.166V129.151V129.136V129.121V129.106V129.091V129.077V129.062V129.047V129.032V129.017V129.003V128.988V128.973V128.958V128.943V128.929V128.914V128.899V128.884V128.869V128.854V128.84V128.825V128.81V128.795V128.78V128.765V128.75V128.735V128.72V128.706V128.691V128.676V128.661V128.646V128.631V128.616V128.601V128.586V128.57V128.555V128.54V128.525V128.51V128.495V128.479V128.464V128.449V128.434V128.418V128.403V128.388V128.372V128.357V128.341V128.326V128.31V128.295V128.279V128.264V128.248V128.232V128.217V128.201V128.185V128.169V128.153V128.137V128.121V128.105V128.089V128.073V128.057V128.041V128.025V128.009V127.992V127.976V127.96V127.943V127.927V127.91V127.894V127.877V127.86V127.844V127.827V127.81V127.793V127.776V127.759V127.742V127.725V127.708V127.691V127.674V127.656V127.639V127.621V127.604V127.586V127.569V127.551V127.533V127.515V127.498V127.48V127.462V127.444V127.425V127.407V127.389V127.371V127.352V127.334V127.315V127.296V127.278V127.259V127.24V127.221V127.202V127.183V127.164V127.145V127.125V127.106V127.086V127.067V127.047V127.028V127.008V126.988V126.968V126.948V126.928V126.907V126.887V126.867V126.846V126.826V126.805V126.784V126.763V126.742V126.721V126.7V126.679V126.658V126.636V126.615V126.593V126.572V126.55V126.528V126.506V126.484V126.462V126.439V126.417V126.394V126.372V126.349V126.326V126.303V126.28V126.257V126.234V126.211V126.187V126.164V126.14V126.116V126.092V126.068V126.044V126.02V125.995V125.971V125.946V125.922V125.897V125.872V125.847V125.822V125.796V125.771V125.746V125.72V125.694V125.668V125.642V125.616V125.59V125.563V125.537V125.51V125.483V125.456V125.429V125.402V125.375V125.348V125.32V125.292V125.264V125.237V125.208V125.18V125.152V125.123V125.095V125.066V125.037V125.008V124.979V124.949V124.92V124.89V124.86V124.831V124.8V124.77V124.74V124.709V124.679V124.648V124.617V124.586V124.555V124.523V124.492V124.46V124.428V124.396V124.364V124.332V124.299V124.267V124.234V124.201V124.168V124.135V124.101V124.068V124.034V124C244 121.059 244 119.956 244.065 118.858C244.125 117.861 244.238 116.868 244.455 114.51C246.983 114.626 248.936 115.708 250.285 117.388C251.723 119.181 252.5 121.687 252.5 124.5Z"
            fill={bodyColor}
            stroke="black"
          />
          <path
            d="M12.9999 126.5C12.9999 131.949 9.6499 136.697 4.5 136.986V136.983V136.944V136.906V136.868V136.83V136.792V136.754V136.717V136.679V136.642V136.605V136.569V136.532V136.496V136.46V136.424V136.388V136.352V136.316V136.281V136.246V136.211V136.176V136.141V136.107V136.072V136.038V136.004V135.97V135.936V135.903V135.869V135.836V135.803V135.77V135.737V135.705V135.672V135.64V135.608V135.576V135.544V135.512V135.481V135.449V135.418V135.387V135.356V135.325V135.295V135.264V135.234V135.204V135.174V135.144V135.114V135.084V135.055V135.026V134.996V134.967V134.938V134.91V134.881V134.853V134.824V134.796V134.768V134.74V134.712V134.684V134.657V134.629V134.602V134.575V134.548V134.521V134.494V134.468V134.441V134.415V134.388V134.362V134.336V134.31V134.285V134.259V134.233V134.208V134.183V134.158V134.133V134.108V134.083V134.058V134.034V134.009V133.985V133.961V133.936V133.912V133.889V133.865V133.841V133.818V133.794V133.771V133.748V133.724V133.701V133.678V133.656V133.633V133.61V133.588V133.565V133.543V133.521V133.499V133.477V133.455V133.433V133.412V133.39V133.368V133.347V133.326V133.305V133.283V133.262V133.241V133.221V133.2V133.179V133.159V133.138V133.118V133.097V133.077V133.057V133.037V133.017V132.997V132.977V132.958V132.938V132.918V132.899V132.88V132.86V132.841V132.822V132.803V132.784V132.765V132.746V132.727V132.709V132.69V132.671V132.653V132.634V132.616V132.598V132.58V132.561V132.543V132.525V132.507V132.49V132.472V132.454V132.436V132.419V132.401V132.384V132.366V132.349V132.331V132.314V132.297V132.28V132.263V132.246V132.229V132.212V132.195V132.178V132.161V132.145V132.128V132.111V132.095V132.078V132.062V132.045V132.029V132.013V131.996V131.98V131.964V131.948V131.932V131.916V131.9V131.884V131.868V131.852V131.836V131.82V131.804V131.789V131.773V131.757V131.742V131.726V131.71V131.695V131.679V131.664V131.648V131.633V131.618V131.602V131.587V131.571V131.556V131.541V131.526V131.51V131.495V131.48V131.465V131.45V131.435V131.42V131.405V131.39V131.375V131.36V131.345V131.33V131.315V131.3V131.285V131.27V131.255V131.24V131.225V131.21V131.195V131.18V131.166V131.151V131.136V131.121V131.106V131.091V131.077V131.062V131.047V131.032V131.017V131.003V130.988V130.973V130.958V130.943V130.929V130.914V130.899V130.884V130.869V130.854V130.84V130.825V130.81V130.795V130.78V130.765V130.75V130.735V130.72V130.706V130.691V130.676V130.661V130.646V130.631V130.616V130.601V130.586V130.57V130.555V130.54V130.525V130.51V130.495V130.479V130.464V130.449V130.434V130.418V130.403V130.388V130.372V130.357V130.341V130.326V130.31V130.295V130.279V130.264V130.248V130.232V130.217V130.201V130.185V130.169V130.153V130.137V130.121V130.105V130.089V130.073V130.057V130.041V130.025V130.009V129.992V129.976V129.96V129.943V129.927V129.91V129.894V129.877V129.86V129.844V129.827V129.81V129.793V129.776V129.759V129.742V129.725V129.708V129.691V129.674V129.656V129.639V129.621V129.604V129.586V129.569V129.551V129.533V129.515V129.498V129.48V129.462V129.444V129.425V129.407V129.389V129.371V129.352V129.334V129.315V129.296V129.278V129.259V129.24V129.221V129.202V129.183V129.164V129.145V129.125V129.106V129.086V129.067V129.047V129.028V129.008V128.988V128.968V128.948V128.928V128.907V128.887V128.867V128.846V128.826V128.805V128.784V128.763V128.742V128.721V128.7V128.679V128.658V128.636V128.615V128.593V128.572V128.55V128.528V128.506V128.484V128.462V128.439V128.417V128.394V128.372V128.349V128.326V128.303V128.28V128.257V128.234V128.211V128.187V128.164V128.14V128.116V128.092V128.068V128.044V128.02V127.995V127.971V127.946V127.922V127.897V127.872V127.847V127.822V127.796V127.771V127.746V127.72V127.694V127.668V127.642V127.616V127.59V127.563V127.537V127.51V127.483V127.456V127.429V127.402V127.375V127.348V127.32V127.292V127.264V127.237V127.208V127.18V127.152V127.123V127.095V127.066V127.037V127.008V126.979V126.949V126.92V126.89V126.86V126.831V126.8V126.77V126.74V126.709V126.679V126.648V126.617V126.586V126.555V126.523V126.492V126.46V126.428V126.396V126.364V126.332V126.299V126.267V126.234V126.201V126.168V126.135V126.101V126.068V126.034V126C4.5 123.059 4.4996 121.956 4.56511 120.858C4.62451 119.861 4.7381 118.868 4.95533 116.51C7.4833 116.626 9.43558 117.708 10.7846 119.388C12.2231 121.181 12.9999 123.687 12.9999 126.5Z"
            fill={bodyColor}
            stroke="black"
          />
        </svg>
      ),
      Fallen: (
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
            y="67"
            width="277"
            height="119"
            fill="transparent"
            stroke="transparent"
            stroke-width="2"
          />
          <path
            d="M1 74H109.099L137.678 175H1V74Z"
            fill={bodyColor}
            stroke="black"
            stroke-width="2"
          />
          <path
            d="M104.661 69.2683L163.872 99.2306C171.754 103.219 178.639 108.926 184.021 115.931L223.817 167.736C227.354 172.34 224.072 179 218.266 179H101.5C97.634 179 94.5 175.866 94.5 172V75.5141C94.5 70.2957 100.004 66.9121 104.661 69.2683Z"
            fill={bodyColor}
            stroke="black"
            stroke-width="2"
          />
          <path
            d="M15.5 74.5H62V174.5H15.5V74.5Z"
            fill="url(#black-duraplast-vertical)"
            stroke="black"
          />
          <path
            d="M32 79.5H45C47.4853 79.5 49.5 81.5147 49.5 84C49.5 86.4853 47.4853 88.5 45 88.5H32C29.5147 88.5 27.5 86.4853 27.5 84C27.5 81.5147 29.5147 79.5 32 79.5Z"
            fill={bodyColor}
            stroke="black"
          />
          <path
            d="M32 101.5H45C47.4853 101.5 49.5 103.515 49.5 106C49.5 108.485 47.4853 110.5 45 110.5H32C29.5147 110.5 27.5 108.485 27.5 106C27.5 103.515 29.5147 101.5 32 101.5Z"
            fill={bodyColor}
            stroke="black"
          />
          <path
            d="M32 143.5H45C47.4853 143.5 49.5 145.515 49.5 148C49.5 150.485 47.4853 152.5 45 152.5H32C29.5147 152.5 27.5 150.485 27.5 148C27.5 145.515 29.5147 143.5 32 143.5Z"
            fill={bodyColor}
            stroke="black"
          />
          <path
            d="M32 123.5H45C47.4853 123.5 49.5 125.515 49.5 128C49.5 130.485 47.4853 132.5 45 132.5H32C29.5147 132.5 27.5 130.485 27.5 128C27.5 125.515 29.5147 123.5 32 123.5Z"
            fill={bodyColor}
            stroke="black"
          />
          <path
            d="M32 165.5H45C47.4853 165.5 49.5 167.515 49.5 170C49.5 172.485 47.4853 174.5 45 174.5H32C29.5147 174.5 27.5 172.485 27.5 170C27.5 167.515 29.5147 165.5 32 165.5Z"
            fill={bodyColor}
            stroke="black"
          />
          <path
            d="M154.5 154C154.5 159.724 148.985 164.5 142 164.5C135.015 164.5 129.5 159.724 129.5 154C129.5 148.276 135.015 143.5 142 143.5C148.985 143.5 154.5 148.276 154.5 154Z"
            fill="url(#royal-chromium-vertical)"
            stroke="black"
          />
          <path
            d="M154.5 156C154.5 161.724 148.985 166.5 142 166.5C135.015 166.5 129.5 161.724 129.5 156C129.5 150.276 135.015 145.5 142 145.5C148.985 145.5 154.5 150.276 154.5 156Z"
            fill="url(#royal-chromium-vertical)"
            stroke="black"
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
          />
          <path
            d="M34 116H115V136H34V116Z"
            fill="url(#gunmetal-vertical)"
            stroke="black"
            stroke-width="2"
            // filter="url(#shadow)"
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
              filter="url(#shadow)"
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
            filter="url(#shadow)"
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
          />
          <g filter="url(#filter0_i16)">
            <path
              d="M160.165 117.423C163.05 115.477 165.774 113.302 168.309 110.918L190.952 89.627C195.608 85.2496 201.059 81.8051 207.011 79.4801L222.788 73.3172C227.567 71.4502 232.606 70.33 237.726 69.9961L276 67.5L270 184.118H230L224.564 183.416C209.911 181.522 195.038 184.394 182.143 191.606L181.204 192.132C175.438 195.357 169.195 197.641 162.71 198.9V198.9C147.249 201.899 131.246 200.262 116.713 194.193L112.193 192.305C105.423 189.479 98.333 187.49 91.0806 186.384L76.5345 184.165C61.3608 181.851 45.9651 186.635 34.7745 197.14L28 203.5L0 248L14.3658 186.756C17.3376 174.087 25.1314 163.076 36.0918 156.061L44 151L50.4827 138.685C60.2826 120.068 84.7377 115.201 100.919 128.646V128.646C112.228 138.042 128.379 138.851 140.57 130.633L160.165 117.423Z"
              fill={bodyColor}
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
      Wisdom: (
        <svg
          className="saber-grip"
          width={281 * multiplier}
          height={248 * multiplier}
          viewBox="0 1 281 246"
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
            d="M68.2138 147.11C49.0981 141.362 49.2728 114.233 68.4608 108.732L146 86.5L199.739 73.7485C203.241 72.9174 206.802 72.3577 210.391 72.0744L281 66.5V187L205 182.5L146 170.5L68.2138 147.11Z"
            fill={bodyColor}
            filter="url(#shadow)"
          />
          <path
            d="M142.169 169.654L132.728 166.704L180.333 78.4359L201.579 73.495L217.661 72.076L167.708 173.96L154.279 172.281C150.172 171.768 146.119 170.888 142.169 169.654Z"
            fill="url(#gold-vertical)"
            stroke="black"
          />
          <path
            d="M281.121 67.4851L241.811 70.2425L207.919 72.6198C204.312 72.8729 200.729 73.4051 197.204 74.2118L143.5 86.5L106.5 97L67.3888 109.034C59.7278 111.391 54.5 118.47 54.5 126.485V126.485"
            stroke="black"
            stroke-width="2"
          />
          <path
            d="M280.794 186L241.5 184L205.5 181.5L143.5 170L105 159L69.8668 147.595C60.5093 144.557 54.173 135.838 54.173 126V126"
            stroke="black"
            stroke-width="2"
          />
        </svg>
      ),
      Reclaimed: (
        <svg
          className="saber-grip"
          width={281 * multiplier}
          height={248 * multiplier}
          viewBox="0 1 281 246"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {getDefs()}
          <rect x="1" width="281" height="248" fill="transparent" />
          <rect x="2" y="67" width="279" height="119" stroke="transparent" />
          <g filter="url(#filter0_i25)">
            <g filter="url(#filter1_ii25)">
              <rect
                y="66"
                width="281"
                height="121"
                rx="18"
                fill={bodyColor}
                filter="url(#shadow)"
              />
            </g>
            <rect
              x="0.5"
              y="66.5"
              width="280"
              height="120"
              rx="17.5"
              stroke="black"
              filter="url(#shadow)"
            />
            <g filter="url(#filter2_ii25)">
              <rect
                y="74"
                width="281"
                height="105"
                rx="18"
                fill="url(#silver-vertical)"
              />
            </g>
            <rect
              x="0.5"
              y="74.5"
              width="280"
              height="104"
              rx="17.5"
              stroke="black"
            />
            <g filter="url(#filter3_ii25)">
              <rect y="83" width="281" height="88" rx="18" fill={bodyColor} />
            </g>
            <rect
              x="0.5"
              y="83.5"
              width="280"
              height="87"
              rx="17.5"
              stroke="black"
            />
            <g filter="url(#filter4_ii25">
              <rect
                y="91"
                width="281"
                height="71"
                rx="18"
                fill="url(#silver-vertical)"
              />
            </g>
            <rect
              x="0.5"
              y="91.5"
              width="280"
              height="70"
              rx="17.5"
              stroke="black"
            />
            <g filter="url(#filter5_ii25">
              <rect y="100" width="281" height="54" rx="18" fill={bodyColor} />
            </g>
            <rect
              x="0.5"
              y="100.5"
              width="280"
              height="53"
              rx="17.5"
              stroke="black"
            />
            <g filter="url(#filter6_ii25)">
              <rect
                y="108"
                width="281"
                height="38"
                rx="18"
                fill="url(#silver-vertical)"
              />
            </g>
            <rect
              x="0.5"
              y="108.5"
              width="280"
              height="37"
              rx="17.5"
              stroke="black"
            />
            <g filter="url(#filter7_ii25)">
              <rect y="114" width="281" height="26" rx="13" fill={bodyColor} />
            </g>
            <rect
              x="0.5"
              y="114.5"
              width="280"
              height="25"
              rx="12.5"
              stroke="black"
            />
            <g filter="url(#filter8_ii25)">
              <rect y="114" width="281" height="26" rx="13" fill={bodyColor} />
            </g>
            <rect
              x="0.5"
              y="114.5"
              width="280"
              height="25"
              rx="12.5"
              stroke="black"
            />
            <g filter="url(#filter9_ii25)">
              <rect
                y="120"
                width="281"
                height="14"
                rx="7"
                fill="url(#silver-vertical)"
              />
            </g>
            <rect
              x="0.5"
              y="120.5"
              width="280"
              height="13"
              rx="6.5"
              stroke="black"
            />
            <g filter="url(#filter10_ii25)">
              <line y1="126.5" x2="281" y2="126.5" stroke="black" />
            </g>
          </g>
          <g filter="url(#filter11_ii25)">
            <rect
              x="261"
              y="66.1774"
              width="20"
              height="121"
              rx="5"
              fill="url(#crodium-vertical)"
            />
          </g>
          <rect
            x="261.5"
            y="66.6774"
            width="19"
            height="120"
            rx="4.5"
            stroke="black"
          />
          <circle
            cx="270.5"
            cy="89.6774"
            r="3"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M273.431 67.5414C273.431 69.1983 272.088 70.5414 270.431 70.5414C268.775 70.5414 267.431 69.1983 267.431 67.5414C267.431 67.119 267.518 66.9073 267.603 66.7956C267.684 66.6907 267.814 66.6075 268.06 66.5558C268.314 66.5022 268.641 66.4935 269.057 66.5038C269.191 66.5072 269.337 66.5126 269.491 66.5184C269.786 66.5294 270.11 66.5415 270.431 66.5415C270.753 66.5415 271.076 66.5294 271.372 66.5184C271.526 66.5126 271.672 66.5072 271.806 66.5038C272.222 66.4935 272.548 66.5022 272.803 66.5558C273.049 66.6075 273.179 66.6907 273.259 66.7956C273.345 66.9073 273.431 67.119 273.431 67.5414ZM271 182.677C272.657 182.677 274 184.021 274 185.677C274 186.1 273.914 186.312 273.828 186.423C273.748 186.528 273.617 186.611 273.372 186.663C273.117 186.717 272.791 186.725 272.375 186.715C272.24 186.712 272.094 186.706 271.941 186.701C271.645 186.689 271.322 186.677 271 186.677C270.678 186.677 270.355 186.689 270.059 186.701C269.906 186.706 269.76 186.712 269.625 186.715C269.209 186.725 268.883 186.717 268.628 186.663C268.383 186.611 268.252 186.528 268.172 186.423C268.086 186.312 268 186.1 268 185.677C268 184.021 269.343 182.677 271 182.677Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <circle
            cx="270.5"
            cy="137.677"
            r="3"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <circle
            cx="270.5"
            cy="112.677"
            r="3"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <circle
            cx="270.5"
            cy="160.677"
            r="3"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <defs>
            <filter
              id="filter0_i25"
              x="0"
              y="62"
              width="283"
              height="125"
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
              <feOffset dx="2" dy="-4" />
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
              id="filter1_ii25"
              x="0"
              y="62"
              width="283"
              height="129"
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
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="2" dy="-4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_innerShadow"
                result="effect2_innerShadow"
              />
            </filter>
            <filter
              id="filter2_ii25"
              x="0"
              y="70"
              width="283"
              height="113"
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
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="2" dy="-4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_innerShadow"
                result="effect2_innerShadow"
              />
            </filter>
            <filter
              id="filter3_ii25"
              x="0"
              y="79"
              width="283"
              height="96"
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
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="2" dy="-4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_innerShadow"
                result="effect2_innerShadow"
              />
            </filter>
            <filter
              id="filter4_ii25"
              x="0"
              y="87"
              width="283"
              height="79"
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
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="2" dy="-4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_innerShadow"
                result="effect2_innerShadow"
              />
            </filter>
            <filter
              id="filter5_ii25"
              x="0"
              y="96"
              width="283"
              height="62"
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
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="2" dy="-4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_innerShadow"
                result="effect2_innerShadow"
              />
            </filter>
            <filter
              id="filter6_ii25"
              x="0"
              y="104"
              width="283"
              height="46"
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
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="2" dy="-4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_innerShadow"
                result="effect2_innerShadow"
              />
            </filter>
            <filter
              id="filter7_ii25"
              x="0"
              y="110"
              width="283"
              height="34"
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
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="2" dy="-4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_innerShadow"
                result="effect2_innerShadow"
              />
            </filter>
            <filter
              id="filter8_ii25"
              x="0"
              y="110"
              width="283"
              height="34"
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
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="2" dy="-4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_innerShadow"
                result="effect2_innerShadow"
              />
            </filter>
            <filter
              id="filter9_ii25"
              x="0"
              y="116"
              width="283"
              height="22"
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
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="2" dy="-4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_innerShadow"
                result="effect2_innerShadow"
              />
            </filter>
            <filter
              id="filter10_ii25"
              x="0"
              y="122"
              width="283"
              height="9"
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
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="2" dy="-4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_innerShadow"
                result="effect2_innerShadow"
              />
            </filter>
            <filter
              id="filter11_ii25"
              x="261"
              y="62.1774"
              width="22"
              height="129"
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
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="2" dy="-4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_innerShadow"
                result="effect2_innerShadow"
              />
            </filter>
          </defs>
        </svg>
      ),
      Pathfinder: (
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
            fill="transparent"
            stroke="transparent"
            strokeWidth="2"
            stroke-width="2"
          />
          <path
            d="M274.5 174.5H87.6452C82.1327 174.5 76.6589 173.579 71.4498 171.776L10.5 150.673V123.155V103.992L71.0036 81.5817C76.5066 79.5435 82.3282 78.5 88.1965 78.5H274.5V174.5Z"
            fill="url(#matte-vertical)"
            stroke="black"
            filter="url(#shadow)"
          />
          <path
            d="M1 111.361C1 107.149 3.63896 103.389 7.5998 101.957L62.9695 81.9372L93.0906 70.3394C98.8233 68.132 104.914 67 111.057 67H133V186H110.946C104.875 186 98.8549 184.894 93.1803 182.738L75.5649 176.042L7.38844 149.637C3.53794 148.146 1 144.442 1 140.312V111.361Z"
            fill={bodyColor}
            stroke="black"
            stroke-width="2"
            filter="url(#shadow)"
          />
          <g filter="url(#filter0_d28)">
            <path
              d="M139 72C139 69.2386 141.239 67 144 67H165C167.761 67 170 69.2386 170 72V181C170 183.761 167.761 186 165 186H144C141.239 186 139 183.761 139 181V72Z"
              fill={bodyColor}
              filter="url(#shadow)"
            />
            <path
              d="M139 72C139 69.2386 141.239 67 144 67H165C167.761 67 170 69.2386 170 72V181C170 183.761 167.761 186 165 186H144C141.239 186 139 183.761 139 181V72Z"
              stroke="black"
              stroke-width="2"
            />
          </g>
          <g filter="url(#filter1_d28)">
            <path
              d="M176 72C176 69.2386 178.239 67 181 67H202C204.761 67 207 69.2386 207 72V181C207 183.761 204.761 186 202 186H181C178.239 186 176 183.761 176 181V72Z"
              fill={bodyColor}
              filter="url(#shadow)"
            />
            <path
              d="M176 72C176 69.2386 178.239 67 181 67H202C204.761 67 207 69.2386 207 72V181C207 183.761 204.761 186 202 186H181C178.239 186 176 183.761 176 181V72Z"
              stroke="black"
              stroke-width="2"
            />
          </g>
          <g filter="url(#filter2_d28)">
            <path
              d="M213 72C213 69.2386 215.239 67 218 67H239C241.761 67 244 69.2386 244 72V181C244 183.761 241.761 186 239 186H218C215.239 186 213 183.761 213 181V72Z"
              fill={bodyColor}
              filter="url(#shadow)"
            />
            <path
              d="M213 72C213 69.2386 215.239 67 218 67H239C241.761 67 244 69.2386 244 72V181C244 183.761 241.761 186 239 186H218C215.239 186 213 183.761 213 181V72Z"
              stroke="black"
              stroke-width="2"
            />
          </g>
          <g filter="url(#filter3_d28)">
            <path
              d="M250 72C250 69.2386 252.239 67 255 67H276C278.761 67 281 69.2386 281 72V181C281 183.761 278.761 186 276 186H255C252.239 186 250 183.761 250 181V72Z"
              fill={bodyColor}
              filter="url(#shadow)"
            />
            <path
              d="M250 72C250 69.2386 252.239 67 255 67H276C278.761 67 281 69.2386 281 72V181C281 183.761 278.761 186 276 186H255C252.239 186 250 183.761 250 181V72Z"
              stroke="black"
              stroke-width="2"
            />
          </g>
          <defs>
            <filter
              id="filter0_d28"
              x="130"
              y="62"
              width="41"
              height="129"
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
              <feOffset dx="-4" />
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
              id="filter1_d28"
              x="167"
              y="62"
              width="41"
              height="129"
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
              <feOffset dx="-4" />
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
              id="filter2_d28"
              x="204"
              y="62"
              width="41"
              height="129"
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
              <feOffset dx="-4" />
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
              id="filter3_d28"
              x="241"
              y="62"
              width="41"
              height="129"
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
              <feOffset dx="-4" />
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
      Grace: (
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
            fill="transparent"
            stroke="transparent"
            strokeWidth="2"
            filter="url(#shadow)"
          />
          <rect
            x="47.0004"
            y="67"
            width="279"
            height="119"
            fill={bodyColor}
            stroke="black"
            stroke-width="2"
            filter="url(#shadow)"
          />
          <path
            d="M113.827 64C116.155 64 116.605 67.3037 114.362 67.927L101.543 71.4897L88.0675 75.2345V75.2345C89.747 85.0115 80.9537 93.3582 71.2774 91.1719L69.8947 90.8595L66.7015 103.256V103.256C47.6333 113.323 46.6188 140.607 65.1969 151.552V151.552L69.8947 164.077L71.7622 163.709C81.308 161.827 89.7648 170.122 88.0675 179.702V179.702L101.543 182.802L111.322 185.051C113.643 185.585 113.255 189 110.874 189H48.7066C47.3354 189 45.9706 188.812 44.6504 188.441L20.6775 181.708C16.178 180.444 12.5247 177.155 10.7967 172.813L4.54327 157.098C2.2024 151.216 1 144.942 1 138.611V111.312C1 104.632 2.33854 98.0194 4.93657 91.8654L10.5426 78.586C12.4231 74.1316 16.3355 70.8568 21.0514 69.7898L45.0055 64.3698C46.0918 64.124 47.2021 64 48.3158 64H113.827Z"
            fill="url(#copper-vertical)"
            filter="url(#shadow)"
          />
          <path
            d="M283.183 64C281.063 64 280.653 67.0092 282.696 67.5769L291.588 70.0481C309.675 75.0747 320.772 93.2597 316.969 111.643V111.643V111.643C306.822 117.71 305.553 131.914 314.464 139.684L316.969 141.869V141.869C320.136 159.011 310.124 175.851 293.552 181.258L281.583 185.163C279.455 185.858 279.955 189 282.193 189H322C324.761 189 327 186.761 327 184V69C327 66.2386 324.761 64 322 64H283.183Z"
            fill="url(#copper-vertical)"
          />
          <path
            d="M113.827 64C116.155 64 116.605 67.3037 114.362 67.927L101.543 71.4897L88.0675 75.2345V75.2345C89.747 85.0115 80.9537 93.3582 71.2774 91.1719L69.8947 90.8595L66.7015 103.256V103.256C47.6333 113.323 46.6188 140.607 65.1969 151.552V151.552L69.8947 164.077L71.7622 163.709C81.308 161.827 89.7648 170.122 88.0675 179.702V179.702L101.543 182.802L111.322 185.051C113.643 185.585 113.255 189 110.874 189H48.7066C47.3354 189 45.9706 188.812 44.6504 188.441L20.6775 181.708C16.178 180.444 12.5247 177.155 10.7967 172.813L4.54327 157.098C2.2024 151.216 1 144.942 1 138.611V111.312C1 104.632 2.33854 98.0194 4.93657 91.8654L10.5426 78.586C12.4231 74.1316 16.3355 70.8568 21.0514 69.7898L45.0055 64.3698C46.0918 64.124 47.2021 64 48.3158 64H113.827Z"
            stroke="black"
          />
          <path
            d="M283.183 64C281.063 64 280.653 67.0092 282.696 67.5769L291.588 70.0481C309.675 75.0747 320.772 93.2597 316.969 111.643V111.643V111.643C306.822 117.71 305.553 131.914 314.464 139.684L316.969 141.869V141.869C320.136 159.011 310.124 175.851 293.552 181.258L281.583 185.163C279.455 185.858 279.955 189 282.193 189H322C324.761 189 327 186.761 327 184V69C327 66.2386 324.761 64 322 64H283.183Z"
            stroke="black"
          />
          <path
            d="M322.126 71.4526L322.996 81.971L322.52 84.3509L320.281 89.5747L320.044 87.5229C319.078 79.1466 313.081 72.2164 304.93 70.0569L298.012 68.2241C297.793 68.166 297.64 67.9676 297.64 67.7407V67.0408C297.64 66.7568 297.877 66.5298 298.16 66.5412L317.821 67.3271C320.092 67.4179 321.939 69.1876 322.126 71.4526Z"
            fill={bodyColor}
            stroke="black"
          />
          <path
            d="M322.537 168.19L322.522 168.152L322.513 168.112L321.246 162.616L320.626 166.634C319.346 174.932 313.135 181.611 304.952 183.489L294.888 185.799C294.661 185.851 294.5 186.053 294.5 186.286V186.964C294.5 187.247 294.735 187.474 295.018 187.464L317.871 186.655C320.171 186.574 322.039 184.77 322.201 182.475L323.11 169.588L322.537 168.19Z"
            fill={bodyColor}
            stroke="black"
          />
          <path
            d="M149.014 65H132.903C132.329 65 131.782 65.2467 131.403 65.6773L127.72 69.8547C127.577 70.0164 127.491 70.2198 127.473 70.4347L127.181 74.0165C127.11 74.8753 128.087 75.4148 128.777 74.8984L134.5 70.6141L135.88 75.1922C136.125 76.006 137.21 76.1621 137.675 75.4504L138.36 74.4017C138.819 73.699 139.887 73.8402 140.147 74.6381L140.451 75.5666C140.483 75.6668 140.5 75.7716 140.5 75.877V80.2966C140.5 80.348 140.487 80.3985 140.461 80.4431L139.682 81.8109C138.967 83.0653 137.565 83.7646 136.133 83.5818L135.357 83.4828C134.813 83.4134 134.327 83.109 134.027 82.65C133.697 82.1432 133.631 81.5077 133.852 80.9442L134.376 79.6081C134.435 79.4555 134.323 79.2905 134.159 79.2905H132.716C131.653 79.2905 130.669 79.8534 130.13 80.7702L130.076 80.8616C129.705 81.4935 129.578 82.2394 129.719 82.9587L129.948 84.1296C130.917 89.0746 134.304 93.2026 138.965 95.1187L140.5 95.75V111.125L138 120.631L132 126.5L138.5 132.369L141 141.875V157.25L139.465 157.881C134.804 159.797 131.417 163.925 130.448 168.87L130.219 170.041C130.078 170.761 130.205 171.507 130.576 172.138L130.63 172.23C131.169 173.147 132.153 173.71 133.216 173.71H134.659C134.823 173.71 134.935 173.545 134.876 173.392L134.352 172.056C134.131 171.492 134.197 170.857 134.527 170.35C134.827 169.891 135.313 169.587 135.857 169.517L136.633 169.418C138.065 169.235 139.467 169.935 140.182 171.189L140.961 172.557C140.987 172.602 141 172.652 141 172.703V177.123C141 177.228 140.983 177.333 140.951 177.433L140.647 178.362C140.387 179.16 139.319 179.301 138.86 178.598L138.175 177.55C137.71 176.838 136.625 176.994 136.38 177.808L135 182.386L129.277 178.102C128.587 177.585 127.61 178.125 127.681 178.984L127.973 182.565C127.991 182.78 128.077 182.984 128.22 183.145L131.903 187.323C132.282 187.753 132.829 188 133.403 188H149.514C150.128 188 150.707 187.719 151.086 187.236L154.341 183.099C154.445 182.966 154.514 182.809 154.542 182.642L155.056 179.49C155.207 178.568 154.123 177.961 153.416 178.572L149 182.386L148.021 178.055C147.826 177.193 146.691 176.989 146.208 177.729L145.64 178.598C145.181 179.301 144.113 179.16 143.853 178.362L143.549 177.433C143.517 177.333 143.5 177.228 143.5 177.123V172.674C143.5 172.642 143.507 172.61 143.519 172.58L144.152 171.099C144.65 169.936 145.879 169.266 147.126 169.478L147.194 169.489C147.718 169.579 148.2 169.831 148.572 170.21C149.153 170.803 149.405 171.644 149.245 172.459L149.052 173.445C149.025 173.582 149.13 173.71 149.269 173.71H150.635C151.493 173.71 152.3 173.301 152.808 172.61C153.249 172.009 153.422 171.252 153.286 170.519L152.92 168.562C152.029 163.787 148.881 159.739 144.472 157.7L143.5 157.25V141.875L146 132.369L152 126.5L146 120.5L143 111.125V95.75L143.972 95.3005C148.381 93.2612 151.529 89.2131 152.42 84.4378L152.786 82.4809C152.922 81.7479 152.749 80.991 152.308 80.3901C151.8 79.6988 150.993 79.2905 150.135 79.2905H148.769C148.63 79.2905 148.525 79.4178 148.552 79.5546L148.745 80.541C148.905 81.3556 148.653 82.1966 148.072 82.7896C147.7 83.1691 147.218 83.4214 146.694 83.5105L146.626 83.5222C145.379 83.7343 144.15 83.0639 143.652 81.9011L143.019 80.42C143.007 80.3903 143 80.3584 143 80.3261V75.877C143 75.7716 143.017 75.6668 143.049 75.5666L143.353 74.6381C143.613 73.8402 144.681 73.699 145.14 74.4017L145.708 75.2712C146.191 76.0108 147.326 75.8066 147.521 74.9449L148.5 70.6141L152.916 74.4279C153.623 75.0387 154.707 74.4321 154.556 73.5099L154.042 70.3582C154.014 70.1913 153.945 70.034 153.841 69.9011L150.586 65.7635C150.207 65.2814 149.628 65 149.014 65Z"
            fill="url(#copper-vertical)"
            stroke="black"
          />
          <path
            d="M238.014 65H221.903C221.329 65 220.782 65.2467 220.403 65.6773L216.72 69.8547C216.577 70.0164 216.491 70.2198 216.473 70.4347L216.181 74.0165C216.11 74.8752 217.087 75.4147 217.777 74.8984L223.5 70.6141L224.88 75.1922C225.125 76.006 226.21 76.1621 226.675 75.4504L227.36 74.4017C227.819 73.699 228.887 73.8402 229.147 74.6381L229.451 75.5666C229.483 75.6668 229.5 75.7716 229.5 75.877V80.2966C229.5 80.348 229.487 80.3985 229.461 80.4431L228.682 81.8109C227.967 83.0653 226.565 83.7646 225.133 83.5818L224.357 83.4828C223.813 83.4134 223.327 83.109 223.027 82.65C222.697 82.1432 222.631 81.5077 222.852 80.9442L223.376 79.6081C223.435 79.4554 223.323 79.2905 223.159 79.2905H221.716C220.653 79.2905 219.669 79.8534 219.13 80.7702L219.076 80.8616C218.705 81.4935 218.578 82.2394 218.719 82.9587L218.948 84.1296C219.917 89.0746 223.304 93.2026 227.965 95.1187L229.5 95.75V111.125L227 120.631L221 126.5L227.5 132.369L230 141.875V157.25L228.465 157.881C223.804 159.797 220.417 163.925 219.448 168.87L219.219 170.041C219.078 170.761 219.205 171.507 219.576 172.138L219.63 172.23C220.169 173.147 221.153 173.71 222.216 173.71H223.659C223.823 173.71 223.935 173.545 223.876 173.392L223.352 172.056C223.131 171.492 223.197 170.857 223.527 170.35C223.827 169.891 224.313 169.587 224.857 169.517L225.633 169.418C227.065 169.235 228.467 169.935 229.182 171.189L229.961 172.557C229.987 172.602 230 172.652 230 172.703V177.123C230 177.228 229.983 177.333 229.951 177.433L229.647 178.362C229.387 179.16 228.319 179.301 227.86 178.598L227.175 177.55C226.71 176.838 225.625 176.994 225.38 177.808L224 182.386L218.277 178.102C217.587 177.585 216.61 178.125 216.681 178.984L216.973 182.565C216.991 182.78 217.077 182.984 217.22 183.145L220.903 187.323C221.282 187.753 221.829 188 222.403 188H238.514C239.128 188 239.707 187.719 240.086 187.236L243.341 183.099C243.445 182.966 243.514 182.809 243.542 182.642L244.056 179.49C244.207 178.568 243.123 177.961 242.416 178.572L238 182.386L237.021 178.055C236.826 177.193 235.691 176.989 235.208 177.729L234.64 178.598C234.181 179.301 233.113 179.16 232.853 178.362L232.549 177.433C232.517 177.333 232.5 177.228 232.5 177.123V172.674C232.5 172.642 232.507 172.61 232.519 172.58L233.152 171.099C233.65 169.936 234.879 169.266 236.126 169.478L236.194 169.489C236.718 169.579 237.2 169.831 237.572 170.21C238.153 170.803 238.405 171.644 238.245 172.459L238.052 173.445C238.025 173.582 238.13 173.71 238.269 173.71H239.635C240.493 173.71 241.3 173.301 241.808 172.61C242.249 172.009 242.422 171.252 242.286 170.519L241.92 168.562C241.029 163.787 237.881 159.739 233.472 157.7L232.5 157.25V141.875L235 132.369L241 126.5L235 120.5L232 111.125V95.75L232.972 95.3005C237.381 93.2612 240.529 89.2131 241.42 84.4378L241.786 82.4809C241.922 81.7479 241.749 80.991 241.308 80.3901C240.8 79.6988 239.993 79.2905 239.135 79.2905H237.769C237.63 79.2905 237.525 79.4178 237.552 79.5546L237.745 80.541C237.905 81.3556 237.653 82.1966 237.072 82.7896C236.7 83.1691 236.218 83.4214 235.694 83.5105L235.626 83.5222C234.379 83.7343 233.15 83.0639 232.652 81.9011L232.019 80.42C232.007 80.3903 232 80.3584 232 80.3261V75.877C232 75.7716 232.017 75.6668 232.049 75.5666L232.353 74.6381C232.613 73.8402 233.681 73.699 234.14 74.4017L234.708 75.2712C235.191 76.0108 236.326 75.8066 236.521 74.9449L237.5 70.6141L241.916 74.4279C242.623 75.0387 243.707 74.4321 243.556 73.5099L243.042 70.3582C243.014 70.1913 242.945 70.034 242.841 69.9011L239.586 65.7635C239.207 65.2814 238.628 65 238.014 65Z"
            fill="url(#copper-vertical)"
            stroke="black"
          />
          <path
            d="M315.5 126.5C315.5 131.949 318.85 136.697 324 136.986V136.983V136.944V136.906V136.868V136.83V136.792V136.754V136.717V136.679V136.642V136.605V136.569V136.532V136.496V136.46V136.424V136.388V136.352V136.316V136.281V136.246V136.211V136.176V136.141V136.107V136.072V136.038V136.004V135.97V135.936V135.903V135.869V135.836V135.803V135.77V135.737V135.705V135.672V135.64V135.608V135.576V135.544V135.512V135.481V135.449V135.418V135.387V135.356V135.325V135.295V135.264V135.234V135.204V135.174V135.144V135.114V135.084V135.055V135.026V134.996V134.967V134.938V134.91V134.881V134.853V134.824V134.796V134.768V134.74V134.712V134.684V134.657V134.629V134.602V134.575V134.548V134.521V134.494V134.468V134.441V134.415V134.388V134.362V134.336V134.31V134.285V134.259V134.233V134.208V134.183V134.158V134.133V134.108V134.083V134.058V134.034V134.009V133.985V133.961V133.936V133.912V133.889V133.865V133.841V133.818V133.794V133.771V133.748V133.724V133.701V133.678V133.656V133.633V133.61V133.588V133.565V133.543V133.521V133.499V133.477V133.455V133.433V133.412V133.39V133.368V133.347V133.326V133.305V133.283V133.262V133.241V133.221V133.2V133.179V133.159V133.138V133.118V133.097V133.077V133.057V133.037V133.017V132.997V132.977V132.958V132.938V132.918V132.899V132.88V132.86V132.841V132.822V132.803V132.784V132.765V132.746V132.727V132.709V132.69V132.671V132.653V132.634V132.616V132.598V132.58V132.561V132.543V132.525V132.507V132.49V132.472V132.454V132.436V132.419V132.401V132.384V132.366V132.349V132.331V132.314V132.297V132.28V132.263V132.246V132.229V132.212V132.195V132.178V132.161V132.145V132.128V132.111V132.095V132.078V132.062V132.045V132.029V132.013V131.996V131.98V131.964V131.948V131.932V131.916V131.9V131.884V131.868V131.852V131.836V131.82V131.804V131.789V131.773V131.757V131.742V131.726V131.71V131.695V131.679V131.664V131.648V131.633V131.618V131.602V131.587V131.571V131.556V131.541V131.526V131.51V131.495V131.48V131.465V131.45V131.435V131.42V131.405V131.39V131.375V131.36V131.345V131.33V131.315V131.3V131.285V131.27V131.255V131.24V131.225V131.21V131.195V131.18V131.166V131.151V131.136V131.121V131.106V131.091V131.077V131.062V131.047V131.032V131.017V131.003V130.988V130.973V130.958V130.943V130.929V130.914V130.899V130.884V130.869V130.854V130.84V130.825V130.81V130.795V130.78V130.765V130.75V130.735V130.72V130.706V130.691V130.676V130.661V130.646V130.631V130.616V130.601V130.586V130.57V130.555V130.54V130.525V130.51V130.495V130.479V130.464V130.449V130.434V130.418V130.403V130.388V130.372V130.357V130.341V130.326V130.31V130.295V130.279V130.264V130.248V130.232V130.217V130.201V130.185V130.169V130.153V130.137V130.121V130.105V130.089V130.073V130.057V130.041V130.025V130.009V129.992V129.976V129.96V129.943V129.927V129.91V129.894V129.877V129.86V129.844V129.827V129.81V129.793V129.776V129.759V129.742V129.725V129.708V129.691V129.674V129.656V129.639V129.621V129.604V129.586V129.569V129.551V129.533V129.515V129.498V129.48V129.462V129.444V129.425V129.407V129.389V129.371V129.352V129.334V129.315V129.296V129.278V129.259V129.24V129.221V129.202V129.183V129.164V129.145V129.125V129.106V129.086V129.067V129.047V129.028V129.008V128.988V128.968V128.948V128.928V128.907V128.887V128.867V128.846V128.826V128.805V128.784V128.763V128.742V128.721V128.7V128.679V128.658V128.636V128.615V128.593V128.572V128.55V128.528V128.506V128.484V128.462V128.439V128.417V128.394V128.372V128.349V128.326V128.303V128.28V128.257V128.234V128.211V128.187V128.164V128.14V128.116V128.092V128.068V128.044V128.02V127.995V127.971V127.946V127.922V127.897V127.872V127.847V127.822V127.796V127.771V127.746V127.72V127.694V127.668V127.642V127.616V127.59V127.563V127.537V127.51V127.483V127.456V127.429V127.402V127.375V127.348V127.32V127.292V127.264V127.237V127.208V127.18V127.152V127.123V127.095V127.066V127.037V127.008V126.979V126.949V126.92V126.89V126.86V126.831V126.8V126.77V126.74V126.709V126.679V126.648V126.617V126.586V126.555V126.523V126.492V126.46V126.428V126.396V126.364V126.332V126.299V126.267V126.234V126.201V126.168V126.135V126.101V126.068V126.034V126C324 123.059 324 121.956 323.935 120.858C323.875 119.861 323.762 118.868 323.545 116.51C321.017 116.626 319.064 117.708 317.715 119.388C316.277 121.181 315.5 123.687 315.5 126.5Z"
            fill={bodyColor}
            stroke="black"
          />
          <circle cx="38.5" cy="123.5" r="10" fill={bodyColor} stroke="black" />
          <path
            d="M39.6403 130.594C37.3222 132.832 34.2013 133.727 31.2416 133.295C32.0872 132.833 32.8856 132.251 33.6122 131.549C37.9824 127.329 38.1042 120.366 33.8842 115.995C32.8995 114.976 31.7655 114.187 30.5499 113.631C33.8264 112.916 37.3869 113.864 39.8875 116.454C43.7239 120.427 43.6132 126.757 39.6403 130.594ZM32.9176 130.83C31.9497 131.765 30.8419 132.465 29.6642 132.932C28.2779 132.493 26.9696 131.745 25.848 130.69C29.745 126.566 29.8574 120.133 26.107 115.876C26.9861 115.105 27.9666 114.515 29.0009 114.104C30.5331 114.59 31.9699 115.453 33.1648 116.69C37.0012 120.663 36.8905 126.994 32.9176 130.83ZM25.1286 131.386C26.0291 132.24 27.0402 132.914 28.1152 133.405C26.2918 133.804 24.3805 133.686 22.6129 133.058C23.5058 132.629 24.3534 132.071 25.1286 131.386ZM10.9006 115.947C13.725 113.22 17.741 112.487 21.2053 113.719C20.1723 114.216 19.1999 114.884 18.3302 115.723C13.96 119.943 13.8382 126.907 18.0583 131.277C18.6656 131.906 19.3297 132.447 20.0347 132.9C16.7462 133.634 13.1652 132.688 10.6534 130.087C6.817 126.114 6.92768 119.783 10.9006 115.947ZM19.0248 116.443C20.044 115.459 21.2182 114.734 22.4658 114.268C23.2608 114.682 24.0114 115.21 24.6929 115.851C20.7959 119.975 20.6834 126.407 24.4339 130.665C23.5018 131.482 22.4558 132.097 21.3524 132.509C20.4197 132.023 19.5483 131.381 18.7776 130.583C14.9412 126.61 15.0519 120.279 19.0248 116.443ZM25.4123 115.155C24.9021 114.671 24.3563 114.245 23.7834 113.877C24.9799 113.61 26.2152 113.565 27.4235 113.742C26.7152 114.129 26.04 114.6 25.4123 115.155ZM25.1533 129.969C21.7864 126.11 21.8878 120.311 25.3876 116.572C28.7545 120.431 28.6531 126.23 25.1533 129.969Z"
            fill={bodyColor}
            stroke="black"
          />
          <path
            d="M58.5 84.5C58.5 88.1 56.5978 91.2556 53.7436 93.0166C54.2319 91.7723 54.5 90.4175 54.5 89C54.5 82.9249 49.5751 78 43.5 78C42.4898 78 41.5114 78.1362 40.5822 78.3911C42.4111 76.0243 45.2775 74.5 48.5 74.5C54.0229 74.5 58.5 78.9772 58.5 84.5ZM53.5 89C53.5 90.7201 53.0657 92.3388 52.3007 93.7524C51.2715 94.1756 50.1562 94.4321 48.9883 94.4883C48.7288 88.8203 44.1797 84.2712 38.5118 84.0117C38.5857 82.4736 39.0072 81.0266 39.6993 79.7476C40.8711 79.2657 42.1545 79 43.5 79C49.0228 79 53.5 83.4772 53.5 89ZM48.9894 95.4893C49.8265 95.4527 50.6394 95.3224 51.4178 95.1089C50.6711 96.0752 49.7515 96.9011 48.7053 97.5401C48.8619 96.8777 48.9586 96.192 48.9894 95.4893ZM37.5117 85.0117C37.7713 90.6797 42.3203 95.2288 47.9883 95.4883C47.9434 96.423 47.7701 97.324 47.4858 98.1741C46.2646 98.7054 44.9167 99 43.5 99C37.9771 99 33.5 94.5228 33.5 89C33.5 87.8905 33.6807 86.8232 34.0142 85.8259C35.0943 85.356 36.2735 85.0713 37.5117 85.0117ZM47.9871 94.4871C42.8725 94.2287 38.7714 90.1275 38.513 85.0129C43.6276 85.2713 47.7287 89.3725 47.9871 94.4871ZM43.5 100C44.709 100 45.8724 99.805 46.9605 99.4446C45.3241 102.737 41.9263 105 38.0001 105C32.4772 105 28.0001 100.523 28.0001 95C28.0001 91.384 29.9193 88.2163 32.7947 86.4599C32.602 87.2753 32.5 88.1257 32.5 89C32.5 95.0751 37.4249 100 43.5 100ZM37.5107 84.0107C36.4769 84.0559 35.4801 84.2439 34.5395 84.5554C35.3745 82.8753 36.6681 81.4634 38.2564 80.4834C37.8246 81.5837 37.565 82.7706 37.5107 84.0107ZM48.5 181.5C45.2775 181.5 42.4111 179.976 40.5822 177.609C41.5114 177.864 42.4898 178 43.5 178C49.5751 178 54.5 173.075 54.5 167C54.5 165.583 54.2319 164.228 53.7436 162.983C56.5978 164.744 58.5 167.9 58.5 171.5C58.5 177.023 54.0229 181.5 48.5 181.5ZM43.5 177C42.1545 177 40.8711 176.734 39.6993 176.252C39.0072 174.973 38.5857 173.526 38.5118 171.988C44.1797 171.729 48.7288 167.18 48.9883 161.512C50.1562 161.568 51.2715 161.824 52.3007 162.248C53.0657 163.661 53.5 165.28 53.5 167C53.5 172.523 49.0228 177 43.5 177ZM37.5107 171.989C37.565 173.229 37.8246 174.416 38.2564 175.517C36.6681 174.537 35.3745 173.125 34.5395 171.445C35.4801 171.756 36.4769 171.944 37.5107 171.989ZM38.0001 151C41.9263 151 45.3241 153.263 46.9605 156.555C45.8724 156.195 44.709 156 43.5 156C37.4249 156 32.5 160.925 32.5 167C32.5 167.874 32.602 168.725 32.7947 169.54C29.9193 167.784 28.0001 164.616 28.0001 161C28.0001 155.477 32.4772 151 38.0001 151ZM43.5 157C44.9167 157 46.2646 157.295 47.4858 157.826C47.7701 158.676 47.9434 159.577 47.9883 160.512C42.3203 160.771 37.7713 165.32 37.5117 170.988C36.2735 170.929 35.0943 170.644 34.0142 170.174C33.6807 169.177 33.5 168.11 33.5 167C33.5 161.477 37.9771 157 43.5 157ZM48.9894 160.511C48.9586 159.808 48.8619 159.122 48.7053 158.46C49.7515 159.099 50.6711 159.925 51.4178 160.891C50.6394 160.678 49.8265 160.547 48.9894 160.511ZM38.513 170.987C38.7714 165.872 42.8725 161.771 47.9871 161.513C47.7287 166.628 43.6276 170.729 38.513 170.987Z"
            fill={bodyColor}
            stroke="black"
          />
        </svg>
      ),
      Fallen: (
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
            x="1"
            y="67"
            width="279"
            height="119"
            fill="transparent"
            stroke="transparent"
            stroke-width="2"
          />
          <path
            d="M3 67H276C278.209 67 280 68.7909 280 71V184C280 185.105 279.105 186 278 186H3C1.89543 186 1 185.105 1 184V69C1 67.8954 1.89543 67 3 67Z"
            fill={bodyColor}
            stroke="black"
            stroke-width="2"
          />
          <path
            d="M0.5 47.5H248C251.59 47.5 254.5 50.4101 254.5 54V71C254.5 74.5899 251.59 77.5 248 77.5H0.5V47.5Z"
            fill="url(#black-duraplast-vertical)"
            stroke="black"
          />
          <path
            d="M0.5 88.5H248C251.59 88.5 254.5 91.4101 254.5 95V107C254.5 110.59 251.59 113.5 248 113.5H0.5V88.5Z"
            fill="url(#black-duraplast-vertical)"
            stroke="black"
          />
          <path
            d="M0.5 130.5H248C251.59 130.5 254.5 133.41 254.5 137V149C254.5 152.59 251.59 155.5 248 155.5H0.5V130.5Z"
            fill="url(#black-duraplast-vertical)"
            stroke="black"
          />
          <path
            d="M0.5 170.5H248C251.59 170.5 254.5 173.41 254.5 177V193C254.5 196.59 251.59 199.5 248 199.5H0.5V170.5Z"
            fill="url(#black-duraplast-vertical)"
            stroke="black"
          />
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
            fill="url(#royal-chromium-vertical)"
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
          <circle cx="114" cy="68" r="8" fill={bodyColor} />
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
          <line x1="91.5" y1="42" x2="91.5" y2="66.5385" stroke="black" />
          <line x1="110.5" y1="42" x2="110.5" y2="66.5385" stroke="black" />
          <line x1="101.5" y1="42" x2="101.5" y2="66.5385" stroke="black" />
          <line x1="120.5" y1="42" x2="120.5" y2="66.5385" stroke="black" />
          <line x1="139.5" y1="42" x2="139.5" y2="66.5385" stroke="black" />
          <line x1="130.5" y1="42" x2="130.5" y2="66.5385" stroke="black" />
          <line
            y1="-0.5"
            x2="24.5385"
            y2="-0.5"
            transform="matrix(0 1 1 0 170 42)"
            stroke="black"
            fill="black"
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
          />
          <g filter="url(#filter0_i17)">
            <path
              d="M0 185.608H6.5H20.275C27.3446 185.608 34.3338 184.109 40.7815 181.209L41.0359 181.095C46.3248 178.717 51.2977 175.69 55.8402 172.085L59.6344 169.074C71.7143 159.488 85.8477 152.826 100.93 149.608L115.5 146.499L133.814 143.476C139.582 142.525 145.446 142.299 151.27 142.805L171 144.519L183.874 147.164C192.913 149.021 201.643 152.147 209.806 156.449L218.362 160.958C225.044 164.479 230.897 169.386 235.531 175.351V175.351C240.559 181.822 248.294 185.608 256.489 185.608L265 185.608L274.963 187.72C278.073 188.379 281 186.008 281 182.829V75.7939C281 73.1871 278.997 71.0177 276.399 70.8098L245.548 68.3415C236.229 67.5959 227.06 65.5471 218.31 62.2549L185.541 49.9261C166.65 42.8187 146.015 41.7683 126.5 46.9208V46.9208L97.5 56.8218L71.7198 65.0681C67.2512 66.4974 62.6503 67.4739 57.9865 67.9828L39.5 70H15L1.5 67.2175L0 185.608Z"
              fill={bodyColor}
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
      Wisdom: (
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
            d="M133.629 81.5818C139.519 82.3181 145.479 82.3021 151.365 81.5344L211.5 73.6907L239.686 71.5544C244.547 71.1859 249.354 70.2867 254.02 68.8728C260.306 66.968 266.838 66 273.406 66H280.5V187L269.774 186.369C265.6 186.124 261.456 185.504 257.392 184.519L252.529 183.34C248.849 182.448 245.103 181.856 241.327 181.57L211.5 179.309L148.591 172.447C143.545 171.896 138.455 171.896 133.409 172.447L70.5 179.309L42.2616 181.465C37.5989 181.821 32.9837 182.643 28.485 183.919L26.9923 184.343C20.7774 186.106 14.3482 187 7.88802 187H0V66H7.88804C14.3482 66 20.7774 66.8943 26.9923 68.6574L28.485 69.0808C32.9837 70.3571 37.5989 71.1793 42.2616 71.5352L70.5 73.6907L133.629 81.5818Z"
            fill={bodyColor}
            filter="url(#shadow)"
          />
          <path
            d="M0 67H8.63634C14.8494 67 21.033 67.853 27.0139 69.5352V69.5352C31.6581 70.8413 36.4282 71.6487 41.2435 71.9435L70.75 73.75L134.586 80.9397C140.84 81.6441 147.156 81.608 153.401 80.8322L193.812 75.8125L211.25 73.75L227.875 72.625L237.803 71.9532C242.257 71.6518 246.673 70.9248 250.989 69.7823L252.695 69.3306C258.54 67.7834 264.561 67 270.608 67H281M0 186H8.64571C14.8315 186 20.9668 185.935 26.7587 183.763C31.5594 181.963 36.6017 180.889 41.7193 180.575L70.75 178.798L112 174C117.425 173.367 143.076 171.858 148.5 172.5L177 174.5L193.812 176.735L211.25 178.798L227.875 179.923L236.517 180.508C241.814 180.866 246.493 181.733 251.5 183.5C257.757 185.709 261.364 186 268 186H281"
            stroke="black"
            stroke-width="2"
          />
          <g filter="url(#filter0_d21)">
            <rect
              x="0.504492"
              y="0.500183"
              width="38.5221"
              height="26.7564"
              rx="9.5"
              transform="matrix(1 0.000406072 0.00898411 0.99996 237.431 109.996)"
              fill="url(#royal-chromium-vertical)"
              stroke="black"
            />
            <path
              d="M247.926 108.062L267.448 108.07C272.695 108.073 276.986 112.327 277.033 117.574L277.103 125.33C277.15 130.576 272.935 134.828 267.688 134.826L248.166 134.818C242.92 134.816 238.628 130.561 238.581 125.314L238.511 117.558C238.464 112.312 242.679 108.06 247.926 108.062Z"
              fill="url(#gunmetal-vertical)"
              stroke="black"
            />
            <path
              d="M265.073 113.7C267.991 116.862 267.816 121.765 264.696 124.651C261.577 127.538 256.682 127.326 253.764 124.164C250.846 121.002 251.021 116.1 254.141 113.213C257.26 110.327 262.155 110.538 265.073 113.7Z"
              fill="url(#crodium-vertical)"
              stroke="black"
            />
            <path
              d="M264.951 111.615C267.869 114.777 267.694 119.68 264.574 122.566C261.455 125.453 256.56 125.241 253.642 122.079C250.724 118.918 250.899 114.015 254.019 111.128C257.138 108.242 262.033 108.453 264.951 111.615Z"
              fill="url(#copper-vertical)"
              stroke="black"
            />
          </g>
          <g filter="url(#filter1_di21)">
            <path
              d="M68.0928 75.4256C68.6355 73.3764 70.4203 71.8986 72.5347 71.7475V71.7475C79.4352 71.2546 86.3626 72.2105 92.8718 74.5538L95.5 75.5L73.0369 179L64.542 181.055C59.2169 182.343 53.7163 182.747 48.2601 182.251L42.3586 181.714C41.1253 181.602 40.2893 180.408 40.6063 179.211L68.0928 75.4256Z"
              fill="url(#paint0_linear21)"
              shape-rendering="crispEdges"
            />
            <path
              d="M41.0897 179.339L68.5761 75.5536C69.0641 73.711 70.669 72.3821 72.5703 72.2463C79.4013 71.7583 86.2588 72.7046 92.7024 75.0243L94.9185 75.8221L72.6148 178.588L64.4244 180.569C59.1526 181.844 53.707 182.244 48.3053 181.753L42.4039 181.216C41.4789 181.132 40.8519 180.236 41.0897 179.339Z"
              stroke="black"
              shape-rendering="crispEdges"
            />
          </g>
          <g filter="url(#filter2_di21)">
            <path
              d="M87.1281 75.4719C87.6483 73.4003 89.4401 71.8971 91.5706 71.745V71.745C98.4475 71.2538 105.351 72.2064 111.838 74.5416L114.5 75.5L89.5 178.5L85.4139 179.813C78.8748 181.915 71.9728 182.647 65.1382 181.964L62.805 181.731C61.5903 181.609 60.7669 180.437 61.0642 179.253L87.1281 75.4719Z"
              fill="url(#paint1_linear21)"
              shape-rendering="crispEdges"
            />
            <path
              d="M61.5492 179.375L87.613 75.5937C88.0806 73.7316 89.6912 72.3805 91.6062 72.2437C98.4135 71.7574 105.247 72.7004 111.669 75.0121L113.908 75.8184L89.0802 178.11L85.2609 179.337C78.7872 181.418 71.9542 182.143 65.188 181.466L62.8548 181.233C61.9438 181.142 61.3262 180.263 61.5492 179.375Z"
              stroke="black"
              shape-rendering="crispEdges"
            />
          </g>
          <g filter="url(#filter3_di21)">
            <path
              d="M111.546 76.2996C111.824 75.1959 112.7 74.343 113.811 74.094L114.819 73.868C122.925 72.0509 131.419 73.9314 138 79V79L120.5 172.5L105.818 176.717C102.847 177.571 99.8026 178.147 96.725 178.438L88.321 179.233C86.9453 179.363 85.8553 178.092 86.1934 176.753L111.546 76.2996Z"
              fill="url(#paint2_linear21)"
              shape-rendering="crispEdges"
            />
            <path
              d="M137.452 79.2111L120.065 172.105L105.68 176.237C102.738 177.081 99.7247 177.652 96.6779 177.94L88.2739 178.735C87.2422 178.833 86.4246 177.88 86.6782 176.875L112.031 76.4219C112.263 75.5012 112.994 74.7896 113.92 74.5819L114.929 74.3559C122.79 72.5936 131.023 74.3726 137.452 79.2111Z"
              stroke="black"
              shape-rendering="crispEdges"
            />
          </g>
          <g filter="url(#filter4_di21)">
            <path
              d="M135.037 79.8428C135.324 78.6995 136.19 77.7908 137.318 77.449L141.247 76.2586C148.076 74.1892 155.467 75.1896 161.5 79V79L141 173L130.717 174.773C127.911 175.257 125.069 175.5 122.221 175.5H113.565C112.263 175.5 111.308 174.275 111.625 173.013L135.037 79.8428Z"
              fill="url(#paint3_linear21)"
              shape-rendering="crispEdges"
            />
            <path
              d="M160.936 79.2383L140.583 172.564L130.632 174.28C127.854 174.759 125.04 175 122.221 175H113.565C112.588 175 111.872 174.082 112.11 173.134L135.522 79.9646C135.766 78.9917 136.503 78.2184 137.463 77.9275L141.392 76.7371C147.97 74.7436 155.081 75.658 160.936 79.2383Z"
              stroke="black"
              shape-rendering="crispEdges"
            />
          </g>
          <g filter="url(#filter5_di21)">
            <path
              d="M159.808 81.2407C160.237 79.54 161.527 78.1889 163.205 77.6802L165.829 76.8851C173.174 74.6593 180.939 74.185 188.5 75.5V75.5L164 173.5L160.486 174.203C154.545 175.391 148.437 175.49 142.46 174.493L138.642 173.857C137.489 173.665 136.746 172.528 137.032 171.394L159.808 81.2407Z"
              fill="url(#paint4_linear21)"
              shape-rendering="crispEdges"
            />
            <path
              d="M165.974 77.3637C173.073 75.2125 180.567 74.7141 187.884 75.9034L163.592 173.072L160.388 173.712C154.506 174.889 148.459 174.986 142.543 174L138.724 173.364C137.859 173.22 137.302 172.367 137.517 171.517L160.292 81.3631C160.679 79.8326 161.839 78.6165 163.35 78.1587L165.974 77.3637Z"
              stroke="black"
              shape-rendering="crispEdges"
            />
          </g>
          <g filter="url(#filter6_di21)">
            <path
              d="M182.982 78.195C183.303 76.8363 184.322 75.7508 185.658 75.346L192.079 73.4002C197.179 71.8547 202.671 72.2463 207.5 74.5V74.5L185.5 176.5L179.832 176.878C173.689 177.287 167.532 176.313 161.816 174.026V174.026C161.06 173.724 160.638 172.913 160.825 172.121L182.982 78.195Z"
              fill="url(#paint5_linear21)"
              shape-rendering="crispEdges"
            />
            <path
              d="M206.926 74.7882L185.091 176.026L179.799 176.379C173.731 176.784 167.649 175.821 162.002 173.562C161.475 173.352 161.182 172.787 161.312 172.235L183.469 78.3098C183.748 77.1245 184.638 76.1776 185.803 75.8245L192.224 73.8788C197.079 72.4075 202.298 72.7332 206.926 74.7882Z"
              stroke="black"
              shape-rendering="crispEdges"
            />
          </g>
          <g filter="url(#filter7_di21)">
            <path
              d="M206.258 74.6153C206.707 72.7296 208.248 71.3003 210.162 70.9941L210.878 70.8796C216.571 69.9687 222.387 70.1794 228 71.5V71.5L207 178.5H196.951C193.658 178.5 190.374 178.175 187.145 177.529L184.034 176.907C182.923 176.685 182.218 175.585 182.48 174.482L206.258 74.6153Z"
              fill="url(#paint6_linear21)"
              shape-rendering="crispEdges"
            />
            <path
              d="M227.416 71.879L206.589 178H196.951C193.691 178 190.44 177.678 187.243 177.039L184.132 176.416C183.299 176.25 182.77 175.425 182.967 174.598L206.745 74.7311C207.147 73.0422 208.527 71.7621 210.241 71.4878L210.957 71.3733C216.427 70.498 222.013 70.6702 227.416 71.879Z"
              stroke="black"
              shape-rendering="crispEdges"
            />
          </g>
          <defs>
            <filter
              id="filter0_d21"
              x="229.525"
              y="107.563"
              width="48.0782"
              height="38.2009"
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
            <filter
              id="filter1_di21"
              x="31.5388"
              y="67.6215"
              width="67.9612"
              height="123.835"
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
              <feOffset dx="-4" dy="4" />
              <feGaussianBlur stdDeviation="2.5" />
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
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="4" dy="-4" />
              <feGaussianBlur stdDeviation="2" />
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
              <feBlend mode="normal" in2="shape" result="effect2_innerShadow" />
            </filter>
            <filter
              id="filter2_di21"
              x="52.0033"
              y="67.6193"
              width="66.4967"
              height="123.593"
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
              <feOffset dx="-4" dy="4" />
              <feGaussianBlur stdDeviation="2.5" />
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
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="4" dy="-4" />
              <feGaussianBlur stdDeviation="2" />
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
              <feBlend mode="normal" in2="shape" result="effect2_innerShadow" />
            </filter>
            <filter
              id="filter3_di21"
              x="77.1313"
              y="69.1905"
              width="64.8687"
              height="119.052"
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
              <feOffset dx="-4" dy="4" />
              <feGaussianBlur stdDeviation="2.5" />
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
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="4" dy="-4" />
              <feGaussianBlur stdDeviation="2" />
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
              <feBlend mode="normal" in2="shape" result="effect2_innerShadow" />
            </filter>
            <filter
              id="filter4_di21"
              x="102.564"
              y="71.2022"
              width="62.9363"
              height="113.298"
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
              <feOffset dx="-4" dy="4" />
              <feGaussianBlur stdDeviation="2.5" />
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
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="4" dy="-4" />
              <feGaussianBlur stdDeviation="2" />
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
              <feBlend mode="normal" in2="shape" result="effect2_innerShadow" />
            </filter>
            <filter
              id="filter5_di21"
              x="127.97"
              y="70.7733"
              width="64.5296"
              height="113.4"
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
              <feOffset dx="-4" dy="4" />
              <feGaussianBlur stdDeviation="2.5" />
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
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="4" dy="-4" />
              <feGaussianBlur stdDeviation="2" />
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
              <feBlend mode="normal" in2="shape" result="effect2_innerShadow" />
            </filter>
            <filter
              id="filter6_di21"
              x="151.781"
              y="68.4706"
              width="59.7188"
              height="117.498"
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
              <feOffset dx="-4" dy="4" />
              <feGaussianBlur stdDeviation="2.5" />
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
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="4" dy="-4" />
              <feGaussianBlur stdDeviation="2" />
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
              <feBlend mode="normal" in2="shape" result="effect2_innerShadow" />
            </filter>
            <filter
              id="filter7_di21"
              x="173.425"
              y="66.324"
              width="58.5745"
              height="121.176"
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
              <feOffset dx="-4" dy="4" />
              <feGaussianBlur stdDeviation="2.5" />
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
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="4" dy="-4" />
              <feGaussianBlur stdDeviation="2" />
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
              <feBlend mode="normal" in2="shape" result="effect2_innerShadow" />
            </filter>
            <linearGradient
              id="paint0_linear21"
              x1="67.75"
              y1="71"
              x2="67.75"
              y2="183"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#80684D" />
              <stop
                offset="0.291667"
                stop-color="#949494"
                stop-opacity="0.911458"
              />
              <stop offset="1" stop-color="#3C2E0C" />
            </linearGradient>
            <linearGradient
              id="paint1_linear21"
              x1="87.5"
              y1="71"
              x2="87.5"
              y2="183"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#80684D" />
              <stop
                offset="0.291667"
                stop-color="#949494"
                stop-opacity="0.911458"
              />
              <stop offset="1" stop-color="#3C2E0C" />
            </linearGradient>
            <linearGradient
              id="paint2_linear21"
              x1="111.75"
              y1="71"
              x2="111.75"
              y2="179.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#80684D" />
              <stop
                offset="0.291667"
                stop-color="#949494"
                stop-opacity="0.911458"
              />
              <stop offset="1" stop-color="#3C2E0C" />
            </linearGradient>
            <linearGradient
              id="paint3_linear21"
              x1="136.25"
              y1="73"
              x2="136.25"
              y2="175.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#80684D" />
              <stop
                offset="0.291667"
                stop-color="#949494"
                stop-opacity="0.911458"
              />
              <stop offset="1" stop-color="#3C2E0C" />
            </linearGradient>
            <linearGradient
              id="paint4_linear21"
              x1="162.5"
              y1="73.5"
              x2="162.5"
              y2="176"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#80684D" />
              <stop
                offset="0.291667"
                stop-color="#949494"
                stop-opacity="0.911458"
              />
              <stop offset="1" stop-color="#3C2E0C" />
            </linearGradient>
            <linearGradient
              id="paint5_linear21"
              x1="184"
              y1="71"
              x2="184"
              y2="177.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#80684D" />
              <stop
                offset="0.291667"
                stop-color="#949494"
                stop-opacity="0.911458"
              />
              <stop offset="1" stop-color="#3C2E0C" />
            </linearGradient>
            <linearGradient
              id="paint6_linear21"
              x1="205"
              y1="69.5"
              x2="205"
              y2="178.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#80684D" />
              <stop
                offset="0.291667"
                stop-color="#949494"
                stop-opacity="0.911458"
              />
              <stop offset="1" stop-color="#3C2E0C" />
            </linearGradient>
          </defs>
        </svg>
      ),
      Reclaimed: (
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
            x="1"
            y="67"
            width="279"
            height="119"
            fill="#706F6F"
            stroke="black"
            stroke-width="2"
          />
          <g filter="url(#filter0_ii26)">
            <rect
              y="66"
              width="281"
              height="121"
              rx="18"
              fill={bodyColor}
              filter="url(#shadow)"
            />
          </g>
          <rect
            x="0.5"
            y="66.5"
            width="280"
            height="120"
            rx="17.5"
            stroke="black"
          />
          <rect
            x="120.222"
            y="67.5"
            width="140.489"
            height="15"
            rx="7.5"
            fill="url(#gunmetal-vertical)"
            stroke="black"
          />
          <path
            d="M254.281 70.75C254.281 71.4453 253.724 72 253.049 72C252.373 72 251.817 71.4453 251.817 70.75C251.817 70.0547 252.373 69.5 253.049 69.5C253.724 69.5 254.281 70.0547 254.281 70.75Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M254.281 79.75C254.281 80.4453 253.724 81 253.049 81C252.373 81 251.817 80.4453 251.817 79.75C251.817 79.0547 252.373 78.5 253.049 78.5C253.724 78.5 254.281 79.0547 254.281 79.75Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M128.623 70.75C128.623 71.4453 128.066 72 127.391 72C126.715 72 126.159 71.4453 126.159 70.75C126.159 70.0547 126.715 69.5 127.391 69.5C128.066 69.5 128.623 70.0547 128.623 70.75Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M128.623 79.75C128.623 80.4453 128.066 81 127.391 81C126.715 81 126.159 80.4453 126.159 79.75C126.159 79.0547 126.715 78.5 127.391 78.5C128.066 78.5 128.623 79.0547 128.623 79.75Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <rect
            x="67.7823"
            y="66.5"
            width="47.4823"
            height="49"
            rx="11.5"
            fill="url(#black-duraplast-vertical)"
            stroke="black"
          />
          <path
            d="M81.6238 75.5C81.6238 77.1619 80.2922 78.5 78.6607 78.5C77.0293 78.5 75.6977 77.1619 75.6977 75.5C75.6977 73.8381 77.0293 72.5 78.6607 72.5C80.2922 72.5 81.6238 73.8381 81.6238 75.5Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M108.339 106.5C108.339 108.162 107.007 109.5 105.375 109.5C103.744 109.5 102.412 108.162 102.412 106.5C102.412 104.838 103.744 103.5 105.375 103.5C107.007 103.5 108.339 104.838 108.339 106.5Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M81.6238 106.5C81.6238 108.162 80.2922 109.5 78.6607 109.5C77.0293 109.5 75.6977 108.162 75.6977 106.5C75.6977 104.838 77.0293 103.5 78.6607 103.5C80.2922 103.5 81.6238 104.838 81.6238 106.5Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M108.339 75.5C108.339 77.1619 107.007 78.5 105.375 78.5C103.744 78.5 102.412 77.1619 102.412 75.5C102.412 73.8381 103.744 72.5 105.375 72.5C107.007 72.5 108.339 73.8381 108.339 75.5Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M58.1154 88.2823L48.8585 97.6211C45.3053 101.206 39.5985 101.357 35.8644 97.9652L26.4715 89.434C22.7187 86.0254 22.2779 80.239 25.4702 76.2902L33.3827 66.5026L42.0517 66.5026L49.7642 66.5026L58.0501 74.7009C61.8094 78.4204 61.8388 84.5261 58.1154 88.2823Z"
            fill="url(#royal-chromium-vertical)"
            stroke="black"
          />
          <path
            d="M41.6279 69.2581C40.6114 69.2561 39.7718 68.4018 39.7738 67.3282C39.7743 67.0567 39.8277 66.9074 39.8812 66.8227C39.9313 66.7432 40.0084 66.6776 40.1448 66.6242C40.2899 66.5673 40.4861 66.531 40.7467 66.5122C41.0062 66.4934 41.2962 66.4938 41.626 66.4945C42.3128 66.4958 42.7939 66.5041 43.1152 66.6304C43.254 66.685 43.3325 66.7517 43.383 66.8316C43.4367 66.9163 43.4899 67.065 43.4894 67.3354C43.4873 68.409 42.6445 69.26 41.6279 69.2581Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M43.2798 97.6019C42.6062 98.3725 41.4169 98.4444 40.6215 97.7342C39.8261 97.024 39.75 95.8223 40.4236 95.0517C41.0971 94.2811 42.2865 94.2092 43.0819 94.9194C43.8773 95.6296 43.9534 96.8313 43.2798 97.6019Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M28.568 83.4919C27.8944 84.2625 26.7051 84.3343 25.9096 83.6242C25.1142 82.914 25.0381 81.7123 25.7117 80.9416C26.3853 80.171 27.5746 80.0992 28.37 80.8093C29.1654 81.5195 29.2415 82.7213 28.568 83.4919Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M58.2183 83.6671C57.5447 84.4377 56.3554 84.5096 55.56 83.7994C54.7646 83.0892 54.6885 81.8875 55.3621 81.1169C56.0356 80.3463 57.225 80.2744 58.0204 80.9846C58.8158 81.6948 58.8919 82.8965 58.2183 83.6671Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <rect
            x="77.6766"
            y="118.5"
            width="104.869"
            height="49"
            rx="11.5"
            fill="url(#paint0_diamond26)"
            stroke="black"
          />
          <path
            d="M90.5287 126.5C90.5287 128.162 89.1971 129.5 87.5657 129.5C85.9342 129.5 84.6026 128.162 84.6026 126.5C84.6026 124.838 85.9342 123.5 87.5657 123.5C89.1971 123.5 90.5287 124.838 90.5287 126.5Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M273.574 137.5C273.574 139.162 272.242 140.5 270.611 140.5C268.98 140.5 267.648 139.162 267.648 137.5C267.648 135.838 268.98 134.5 270.611 134.5C272.242 134.5 273.574 135.838 273.574 137.5Z"
            stroke="black"
          />
          <path
            d="M173.641 126.5C173.641 128.162 172.31 129.5 170.678 129.5C169.047 129.5 167.715 128.162 167.715 126.5C167.715 124.838 169.047 123.5 170.678 123.5C172.31 123.5 173.641 124.838 173.641 126.5Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M90.5287 157.5C90.5287 159.162 89.1971 160.5 87.5657 160.5C85.9342 160.5 84.6026 159.162 84.6026 157.5C84.6026 155.838 85.9342 154.5 87.5657 154.5C89.1971 154.5 90.5287 155.838 90.5287 157.5Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M173.641 157.5C173.641 159.162 172.31 160.5 170.678 160.5C169.047 160.5 167.715 159.162 167.715 157.5C167.715 155.838 169.047 154.5 170.678 154.5C172.31 154.5 173.641 155.838 173.641 157.5Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <g filter="url(#filter1_ii26)">
            <rect
              x="261.211"
              y="66"
              width="19.7887"
              height="121"
              rx="5"
              fill="url(#crodium-vertical)"
            />
          </g>
          <rect
            x="261.711"
            y="66.5"
            width="18.7887"
            height="120"
            rx="4.5"
            stroke="black"
          />
          <path
            d="M273.574 77.5C273.574 79.1619 272.242 80.5 270.611 80.5C268.98 80.5 267.648 79.1619 267.648 77.5C267.648 75.8381 268.98 74.5 270.611 74.5C272.242 74.5 273.574 75.8381 273.574 77.5Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M273.574 101.5C273.574 103.162 272.242 104.5 270.611 104.5C268.98 104.5 267.648 103.162 267.648 101.5C267.648 99.8381 268.98 98.5 270.611 98.5C272.242 98.5 273.574 99.8381 273.574 101.5Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M273.574 125.5C273.574 127.162 272.242 128.5 270.611 128.5C268.98 128.5 267.648 127.162 267.648 125.5C267.648 123.838 268.98 122.5 270.611 122.5C272.242 122.5 273.574 123.838 273.574 125.5Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M273.574 149.5C273.574 151.162 272.242 152.5 270.611 152.5C268.98 152.5 267.648 151.162 267.648 149.5C267.648 147.838 268.98 146.5 270.611 146.5C272.242 146.5 273.574 147.838 273.574 149.5Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M273.574 173.5C273.574 175.162 272.242 176.5 270.611 176.5C268.98 176.5 267.648 175.162 267.648 173.5C267.648 171.838 268.98 170.5 270.611 170.5C272.242 170.5 273.574 171.838 273.574 173.5Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <g filter="url(#filter2_ii26)">
            <rect
              y="66"
              width="19.7887"
              height="121"
              rx="5"
              fill="url(#crodium-vertical)"
            />
          </g>
          <rect
            x="0.5"
            y="66.5"
            width="18.7887"
            height="120"
            rx="4.5"
            stroke="black"
          />
          <path
            d="M12.3619 77.5C12.3619 79.1619 11.0303 80.5 9.39884 80.5C7.7674 80.5 6.43582 79.1619 6.43582 77.5C6.43582 75.8381 7.7674 74.5 9.39884 74.5C11.0303 74.5 12.3619 75.8381 12.3619 77.5Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M12.3619 101.5C12.3619 103.162 11.0303 104.5 9.39884 104.5C7.7674 104.5 6.43582 103.162 6.43582 101.5C6.43582 99.8381 7.7674 98.5 9.39884 98.5C11.0303 98.5 12.3619 99.8381 12.3619 101.5Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M12.3619 125.5C12.3619 127.162 11.0303 128.5 9.39884 128.5C7.7674 128.5 6.43582 127.162 6.43582 125.5C6.43582 123.838 7.7674 122.5 9.39884 122.5C11.0303 122.5 12.3619 123.838 12.3619 125.5Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M12.3619 149.5C12.3619 151.162 11.0303 152.5 9.39884 152.5C7.7674 152.5 6.43582 151.162 6.43582 149.5C6.43582 147.838 7.7674 146.5 9.39884 146.5C11.0303 146.5 12.3619 147.838 12.3619 149.5Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M12.3619 173.5C12.3619 175.162 11.0303 176.5 9.39884 176.5C7.7674 176.5 6.43582 175.162 6.43582 173.5C6.43582 171.838 7.7674 170.5 9.39884 170.5C11.0303 170.5 12.3619 171.838 12.3619 173.5Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M194.419 89.5C194.419 92.7843 191.573 95.5 187.993 95.5C184.414 95.5 181.567 92.7843 181.567 89.5C181.567 86.2157 184.414 83.5 187.993 83.5C191.573 83.5 194.419 86.2157 194.419 89.5Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M46.0041 161.5C46.0041 164.784 43.1575 167.5 39.5781 167.5C35.9987 167.5 33.1521 164.784 33.1521 161.5C33.1521 158.216 35.9987 155.5 39.5781 155.5C43.1575 155.5 46.0041 158.216 46.0041 161.5Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <g filter="url(#filter3_d26)">
            <path
              d="M34.6314 95.8785C34.6314 89.5943 39.7258 84.5 46.0099 84.5V84.5L189.973 85.5V85.5C193.256 87.2698 193.374 91.9371 190.185 93.8712L189.973 94L49.543 93.5172C46.7748 93.5077 44.5258 95.7491 44.5258 98.5172V162V162C42.4587 166.002 36.7252 165.988 34.6314 162V162V95.8785Z"
              fill="url(#paint0_diamond26)"
            />
            <path
              d="M44.0258 98.5172V161.876C42.1207 165.372 37.0659 165.368 35.1314 161.874V95.8785C35.1314 89.871 40.001 85.0009 46.0082 85C46.0088 85 46.0094 85 46.0099 85L189.841 85.9991C192.681 87.6278 192.75 91.7311 189.926 93.4437L189.834 93.4995L49.5447 93.0173C46.4997 93.0068 44.0258 95.4723 44.0258 98.5172Z"
              stroke="black"
            />
          </g>
          <path
            d="M46.0041 177.5C46.0041 180.784 43.1575 183.5 39.5781 183.5C35.9987 183.5 33.1521 180.784 33.1521 177.5C33.1521 174.216 35.9987 171.5 39.5781 171.5C43.1575 171.5 46.0041 174.216 46.0041 177.5Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M221.134 146.5C221.134 149.784 218.287 152.5 214.708 152.5C211.129 152.5 208.282 149.784 208.282 146.5C208.282 143.216 211.129 140.5 214.708 140.5C218.287 140.5 221.134 143.216 221.134 146.5Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <g filter="url(#filter4_d26)">
            <path
              d="M73.1582 101.301C76.4252 99.1478 80.2521 98 84.165 98H107.85H119.413C121.584 98 123.74 98.3535 125.798 99.0467L127.264 99.5406C131.963 101.124 135.906 104.395 138.328 108.721L149.406 128.5L155.277 138.292C157.73 142.381 162.336 144.671 167.077 144.158V144.158C170.901 143.744 174.308 141.553 176.272 138.245L179.089 133.5V133.5C185.687 118.79 206.509 118.617 213.351 133.215L218.171 143.5V143.5C219.883 147.152 216.451 151.101 212.596 149.915L212.127 149.771C211.569 149.6 211.118 149.187 210.897 148.646L207.577 140.511C203.323 130.09 188.35 130.746 185.025 141.5V141.5L178.865 147.727C175.209 151.421 170.228 153.5 165.03 153.5V153.5C157.848 153.5 151.25 149.544 147.866 143.21L140.006 128.5L131.481 114.238C127.87 108.198 121.351 104.5 114.314 104.5H85.698C84.6368 104.5 83.5776 104.592 82.5324 104.776V104.776C76.4178 105.851 71.2663 109.955 68.8517 115.674L56.8937 144L43.0416 179.5L42.4069 179.953C39.3865 182.108 35.2365 179.69 35.6209 176V176L64.4111 110.877C65.9629 107.367 68.492 104.377 71.6964 102.265L73.1582 101.301Z"
              fill="url(#paint1_diamond26)"
            />
            <path
              d="M140.447 128.264L140.442 128.254L140.435 128.243L131.91 113.982C128.209 107.791 121.527 104 114.314 104H85.698C84.6078 104 83.5196 104.095 82.4458 104.284C76.1641 105.388 70.8717 109.604 68.3911 115.48L56.4331 143.806L56.4329 143.805L56.4279 143.818L42.63 179.179L42.1165 179.546C39.4676 181.436 35.8357 179.347 36.1109 176.128L64.8684 111.079C66.3814 107.656 68.8472 104.742 71.9716 102.682L73.4334 101.719C76.6187 99.6191 80.3499 98.5 84.165 98.5H107.85H119.413C121.53 98.5 123.632 98.8447 125.638 99.5205L127.104 100.014C131.686 101.558 135.53 104.748 137.892 108.965L148.97 128.744L148.973 128.751L148.977 128.757L154.849 138.549C157.401 142.805 162.196 145.189 167.131 144.655C171.112 144.224 174.658 141.944 176.702 138.5L179.519 133.755L179.089 133.5L179.545 133.705C185.968 119.385 206.238 119.216 212.898 133.427L217.719 143.712C219.246 146.971 216.183 150.496 212.743 149.438L212.274 149.293C211.859 149.166 211.524 148.859 211.36 148.457L208.04 140.322C203.625 129.505 188.121 130.146 184.585 141.235L178.509 147.375C174.948 150.975 170.094 153 165.03 153C158.033 153 151.604 149.146 148.307 142.974L140.447 128.264Z"
              stroke="black"
            />
          </g>
          <path
            d="M62.8245 104.5C62.8245 107.784 59.9779 110.5 56.3985 110.5C52.8191 110.5 49.9724 107.784 49.9724 104.5C49.9724 101.216 52.8191 98.5 56.3985 98.5C59.9779 98.5 62.8245 101.216 62.8245 104.5Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <path
            d="M249.828 173.5C249.828 176.784 246.981 179.5 243.402 179.5C239.822 179.5 236.976 176.784 236.976 173.5C236.976 170.216 239.822 167.5 243.402 167.5C246.981 167.5 249.828 170.216 249.828 173.5Z"
            fill="url(#silver-vertical)"
            stroke="black"
          />
          <g filter="url(#filter5_d26)">
            <path
              d="M51.1022 170.122C51.0223 176.382 56.0749 181.5 62.3355 181.5V181.5L136.048 176L172.163 173L191.209 171.25L200.362 170.5L232.497 167.509C235.428 167.236 237.96 169.543 237.96 172.487V175L238.427 175.472C241.382 178.459 246.388 177.716 248.349 174V174L247.36 167V167C247.36 162.306 243.554 158.5 238.86 158.5H237.96L66.2453 172.074C63.3376 172.303 60.8513 170.006 60.8513 167.089V104L60.6744 103.658C58.7974 100.024 53.5329 100.23 51.9464 104V104L51.1022 170.122Z"
              fill="url(#paint2_diamond26)"
            />
            <path
              d="M60.2302 103.887C58.5625 100.658 53.9111 100.812 52.4451 104.107L51.6022 170.129C51.5259 176.104 56.3437 180.99 62.317 181L136.007 175.502L136.011 175.501L172.117 172.502L172.121 172.502L191.164 170.752L191.168 170.752L200.315 170.002L200.321 170.002L232.45 167.011C235.675 166.711 238.46 169.248 238.46 172.487V174.794L238.782 175.12C241.463 177.829 245.977 177.202 247.831 173.906L246.865 167.07L247.36 167H246.86C246.86 162.582 243.278 159 238.86 159H237.98L66.2847 172.572C63.0863 172.825 60.3513 170.298 60.3513 167.089V104.121L60.2302 103.887Z"
              stroke="black"
            />
          </g>
          <g filter="url(#filter6_d26)">
            <path
              d="M199.867 105C199.867 102.239 202.106 100 204.867 100H254.233C256.994 100 259.233 102.239 259.233 105V117C259.233 119.761 256.994 122 254.233 122H204.867C202.106 122 199.867 119.761 199.867 117V105Z"
              fill="black"
            />
            <path
              d="M204.867 100.5H254.233C256.718 100.5 258.733 102.515 258.733 105V117C258.733 119.485 256.718 121.5 254.233 121.5H204.867C202.382 121.5 200.367 119.485 200.367 117V105C200.367 102.515 202.382 100.5 204.867 100.5Z"
              stroke="black"
            />
          </g>
          <g filter="url(#filter7_d26)">
            <path
              d="M197.888 101C197.888 98.2386 200.126 96 202.888 96H252.254C255.015 96 257.254 98.2386 257.254 101V113C257.254 115.761 255.015 118 252.254 118H202.888C200.126 118 197.888 115.761 197.888 113V101Z"
              fill="#746161"
            />
            <path
              d="M252.254 95.5H202.888C199.85 95.5 197.388 97.9624 197.388 101V113C197.388 116.038 199.85 118.5 202.888 118.5H252.254C255.291 118.5 257.754 116.038 257.754 113V101C257.754 97.9624 255.291 95.5 252.254 95.5Z"
              stroke="black"
            />
          </g>
          <g filter="url(#filter8_d26)">
            <ellipse
              cx="223.105"
              cy="105.114"
              rx="6.82972"
              ry="7.22857"
              fill="url(#paint3_radial26)"
            />
            <path
              d="M229.435 105.114C229.435 108.857 226.574 111.843 223.105 111.843C219.636 111.843 216.775 108.857 216.775 105.114C216.775 101.371 219.636 98.3857 223.105 98.3857C226.574 98.3857 229.435 101.371 229.435 105.114Z"
              stroke="black"
            />
          </g>
          <ellipse
            cx="239.391"
            cy="104.8"
            rx="4.20291"
            ry="5.02857"
            fill={bodyColor}
          />
          <g filter="url(#filter9_d26)">
            <ellipse
              cx="206.819"
              cy="105.114"
              rx="6.82972"
              ry="7.22857"
              fill="url(#paint4_radial26)"
            />
            <path
              d="M213.149 105.114C213.149 108.857 210.289 111.843 206.819 111.843C203.35 111.843 200.49 108.857 200.49 105.114C200.49 101.371 203.35 98.3857 206.819 98.3857C210.289 98.3857 213.149 101.371 213.149 105.114Z"
              stroke="black"
            />
          </g>
          <g filter="url(#filter10_d26)">
            <ellipse
              cx="239.391"
              cy="105.114"
              rx="6.82972"
              ry="7.22857"
              fill="url(#paint5_radial26)"
            />
            <path
              d="M245.721 105.114C245.721 108.857 242.861 111.843 239.391 111.843C235.922 111.843 233.062 108.857 233.062 105.114C233.062 101.371 235.922 98.3857 239.391 98.3857C242.861 98.3857 245.721 101.371 245.721 105.114Z"
              stroke="black"
            />
          </g>
          <defs>
            <filter
              id="filter0_ii26"
              x="0"
              y="62"
              width="283"
              height="129"
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
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="2" dy="-4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_innerShadow"
                result="effect2_innerShadow"
              />
            </filter>
            <filter
              id="filter1_ii26"
              x="261.211"
              y="62"
              width="21.7887"
              height="129"
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
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="2" dy="-4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_innerShadow"
                result="effect2_innerShadow"
              />
            </filter>
            <filter
              id="filter2_ii26"
              x="0"
              y="62"
              width="21.7887"
              height="129"
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
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="2" dy="-4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_innerShadow"
                result="effect2_innerShadow"
              />
            </filter>
            <filter
              id="filter3_d26"
              x="30.6314"
              y="84.5"
              width="165.876"
              height="88.4963"
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
              id="filter4_d26"
              x="31.596"
              y="98"
              width="191.027"
              height="90.7643"
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
              id="filter5_d26"
              x="47.1013"
              y="101.049"
              width="205.248"
              height="88.4515"
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
              id="filter6_d26"
              x="195.867"
              y="100"
              width="67.3661"
              height="30"
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
              id="filter7_d26"
              x="192.888"
              y="95"
              width="69.3661"
              height="32"
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
              id="filter8_d26"
              x="206.275"
              y="91.8857"
              width="29.6594"
              height="30.4571"
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
              id="filter9_d26"
              x="189.99"
              y="91.8857"
              width="29.6594"
              height="30.4571"
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
              id="filter10_d26"
              x="222.562"
              y="91.8857"
              width="29.6594"
              height="30.4571"
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
              id="paint0_diamond26"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(90.5345 154.5) rotate(-121.507) scale(120.224 213.863)"
            >
              <stop stop-color="#9D5603" />
              <stop offset="0.114583" stop-color="#7B766F" />
              <stop offset="0.208333" stop-color="#545954" />
              <stop offset="0.275597" stop-color="#5B5443" />
              <stop offset="0.338542" stop-color="#615033" />
              <stop offset="0.400564" stop-color="#81591B" />
              <stop offset="0.46875" stop-color="#696052" />
              <stop offset="0.513012" stop-color="#A16410" />
              <stop offset="0.554561" stop-color="#7D5829" />
              <stop offset="0.597769" stop-color="#9A672E" />
              <stop offset="0.636274" stop-color="#5F4B38" />
              <stop offset="0.680571" stop-color="#936A4C" />
              <stop offset="0.723958" stop-color="#8F6B5B" />
              <stop offset="0.758968" stop-color="#543E33" />
              <stop offset="0.809127" stop-color="#925E3F" />
              <stop offset="0.852879" stop-color="#432919" />
              <stop offset="0.887523" stop-color="#955225" />
              <stop offset="0.936274" stop-color="#716054" />
              <stop offset="1" stop-color="#994000" />
            </radialGradient>
            <radialGradient
              id="paint1_diamond26"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(128.628 140.75) rotate(120.363) scale(76.3048 152.509)"
            >
              <stop stop-color="#BA4141" />
              <stop offset="1" stop-color="#830101" />
            </radialGradient>
            <radialGradient
              id="paint2_diamond26"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(187.004 145.5) rotate(154.629) scale(159.866 308.593)"
            >
              <stop stop-color="#9D5603" />
              <stop offset="0.114583" stop-color="#7B766F" />
              <stop offset="0.208333" stop-color="#545954" />
              <stop offset="0.275597" stop-color="#5B5443" />
              <stop offset="0.338542" stop-color="#615033" />
              <stop offset="0.400564" stop-color="#81591B" />
              <stop offset="0.46875" stop-color="#696052" />
              <stop offset="0.513012" stop-color="#A16410" />
              <stop offset="0.554561" stop-color="#7D5829" />
              <stop offset="0.597769" stop-color="#9A672E" />
              <stop offset="0.636274" stop-color="#5F4B38" />
              <stop offset="0.680571" stop-color="#936A4C" />
              <stop offset="0.723958" stop-color="#8F6B5B" />
              <stop offset="0.758968" stop-color="#543E33" />
              <stop offset="0.809127" stop-color="#925E3F" />
              <stop offset="0.852879" stop-color="#432919" />
              <stop offset="0.887523" stop-color="#955225" />
              <stop offset="0.936274" stop-color="#716054" />
              <stop offset="1" stop-color="#994000" />
            </radialGradient>
            <radialGradient
              id="paint3_radial26"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(223.105 105.114) rotate(90) scale(7.22857 6.82972)"
            >
              <stop offset="0.239583" stop-color="#9E6A3A" />
              <stop offset="0.333333" stop-color="#D3D1D1" />
              <stop offset="0.546875" stop-color="#6F512E" />
              <stop offset="0.71875" stop-color="#E0DBDB" />
              <stop offset="0.791667" stop-color="#A87550" />
            </radialGradient>
            <radialGradient
              id="paint4_radial26"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(206.819 105.114) rotate(90) scale(7.22857 6.82972)"
            >
              <stop offset="0.239583" stop-color="#9E6A3A" />
              <stop offset="0.333333" stop-color="#D3D1D1" />
              <stop offset="0.546875" stop-color="#6F512E" />
              <stop offset="0.71875" stop-color="#E0DBDB" />
              <stop offset="0.791667" stop-color="#A87550" />
            </radialGradient>
            <radialGradient
              id="paint5_radial26"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(239.391 105.114) rotate(90) scale(7.22857 6.82972)"
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

      Pathfinder: (
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
            d="M0.5 78.5H280.5V174.5H0.5V78.5Z"
            fill="url(#matte-vertical)"
            stroke="black"
          />
          <g filter="url(#filter0_d29)">
            <path
              d="M248.888 72C248.888 69.2386 251.127 67 253.888 67H275C277.761 67 280 69.2386 280 72V181C280 183.761 277.761 186 275 186H253.888C251.127 186 248.888 183.761 248.888 181V72Z"
              fill={bodyColor}
              filter="url(#shadow)"
            />
            <path
              d="M248.888 72C248.888 69.2386 251.127 67 253.888 67H275C277.761 67 280 69.2386 280 72V181C280 183.761 277.761 186 275 186H253.888C251.127 186 248.888 183.761 248.888 181V72Z"
              stroke="black"
              stroke-width="2"
            />
          </g>
          <path
            d="M1 72C1 69.2386 3.23858 67 6 67H200.734C203.495 67 205.734 69.2386 205.734 72V181C205.734 183.761 203.495 186 200.734 186H6C3.23857 186 1 183.761 1 181V72Z"
            fill={bodyColor}
            filter="url(#shadow)"
            stroke="black"
            stroke-width="2"
          />
          <g filter="url(#filter1_d29)">
            <path
              d="M211.755 72C211.755 69.2386 213.994 67 216.755 67H237.867C240.628 67 242.867 69.2386 242.867 72V181C242.867 183.761 240.628 186 237.867 186H216.755C213.994 186 211.755 183.761 211.755 181V72Z"
              fill={bodyColor}
              filter="url(#shadow)"
            />
            <path
              d="M211.755 72C211.755 69.2386 213.994 67 216.755 67H237.867C240.628 67 242.867 69.2386 242.867 72V181C242.867 183.761 240.628 186 237.867 186H216.755C213.994 186 211.755 183.761 211.755 181V72Z"
              stroke="black"
              stroke-width="2"
            />
          </g>
          <path
            d="M160.494 66.5C160.274 76.0176 153.791 83.5 146 83.5C138.209 83.5 131.726 76.0176 131.506 66.5L132.179 66.5L135.393 66.5L146 66.5L156.607 66.5L159.821 66.5L160.494 66.5Z"
            fill="url(#durasteel-vertical)"
            stroke="black"
          />
          <path
            d="M158.494 66.5C158.28 74.9241 152.68 81.5 146 81.5C139.32 81.5 133.72 74.9241 133.506 66.5L134.022 66.5L136.808 66.5L146 66.5L155.192 66.5L157.978 66.5L158.494 66.5Z"
            fill="url(#copper-vertical)"
            stroke="black"
          />
          <path
            d="M137.335 66.5C137.328 66.3344 137.325 66.1677 137.325 66C137.382 66 137.44 66 137.5 66C148 62.5 155.927 66 155.927 66M137.335 66.5H136.834C137.055 72.5272 141.242 77.3333 146.376 77.3333C151.651 77.3333 155.927 72.2592 155.927 66M137.335 66.5C137.554 72.3265 141.59 76.8333 146.376 76.8333C151.207 76.8333 155.273 72.2422 155.423 66.3368M137.335 66.5H137.5H137.581L137.658 66.4743C142.823 64.7527 147.351 64.7537 150.585 65.1831C152.202 65.3979 153.495 65.7198 154.38 65.9865C154.823 66.1199 155.163 66.2394 155.391 66.3247C155.402 66.3288 155.412 66.3328 155.423 66.3368M155.927 66H155.427C155.427 66.1127 155.426 66.225 155.423 66.3368M155.927 66C155.725 66.4574 155.725 66.4575 155.725 66.4575L155.725 66.4574L155.723 66.4562L155.708 66.4502C155.695 66.4446 155.674 66.4359 155.646 66.4244C155.596 66.4036 155.521 66.3738 155.423 66.3368"
            fill="url(royal-chromium-vertical)"
            stroke="black"
          />
          <defs>
            <filter
              id="filter0_d29"
              x="239.888"
              y="62"
              width="41.1115"
              height="129"
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
              <feOffset dx="-4" />
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
              id="filter1_d29"
              x="202.755"
              y="62"
              width="41.1115"
              height="129"
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
              <feOffset dx="-4" />
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
      Grace: (
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
            x="2"
            y="67"
            width="279"
            height="119"
            fill={bodyColor}
            stroke="black"
            stroke-width="2"
          />
          <path
            d="M82.0141 65H65.903C65.3289 65 64.7825 65.2467 64.4028 65.6773L60.7196 69.8547C60.577 70.0164 60.4905 70.2198 60.473 70.4347L60.1806 74.0165C60.1105 74.8752 61.0867 75.4147 61.7765 74.8984L67.5 70.6141L68.88 75.1922C69.1253 76.006 70.2099 76.1621 70.6747 75.4504L71.3596 74.4017C71.8186 73.699 72.8869 73.8402 73.1474 74.6381L73.4506 75.5666C73.4833 75.6668 73.5 75.7716 73.5 75.877V80.2966C73.5 80.348 73.4866 80.3985 73.4612 80.4431L72.6815 81.8109C71.9665 83.0653 70.5655 83.7646 69.1332 83.5818L68.3572 83.4828C67.8133 83.4134 67.3273 83.109 67.0275 82.65C66.6965 82.1432 66.6311 81.5077 66.8519 80.9442L67.3755 79.6081C67.4353 79.4554 67.3228 79.2905 67.1589 79.2905H65.7165C64.653 79.2905 63.6691 79.8534 63.1302 80.7702L63.0765 80.8616C62.7051 81.4935 62.5778 82.2394 62.7187 82.9587L62.9482 84.1296C63.9171 89.0746 67.3041 93.2026 71.9645 95.1187L73.5 95.75V111.125L71 120.631L65 126.5L71.5 132.369L74 141.875V157.25L72.4645 157.881C67.8041 159.797 64.417 163.925 63.4482 168.87L63.2187 170.041C63.0778 170.761 63.2051 171.507 63.5765 172.138L63.6302 172.23C64.1691 173.147 65.153 173.71 66.2165 173.71H67.6589C67.8228 173.71 67.9353 173.545 67.8755 173.392L67.3519 172.056C67.1311 171.492 67.1965 170.857 67.5275 170.35C67.8273 169.891 68.3133 169.587 68.8572 169.517L69.6332 169.418C71.0655 169.235 72.4665 169.935 73.1815 171.189L73.9612 172.557C73.9866 172.602 74 172.652 74 172.703V177.123C74 177.228 73.9833 177.333 73.9506 177.433L73.6474 178.362C73.3869 179.16 72.3186 179.301 71.8596 178.598L71.1747 177.55C70.7099 176.838 69.6253 176.994 69.38 177.808L68 182.386L62.2765 178.102C61.5867 177.585 60.6105 178.125 60.6806 178.984L60.973 182.565C60.9905 182.78 61.077 182.984 61.2196 183.145L64.9028 187.323C65.2825 187.753 65.8289 188 66.403 188H82.5141C83.1275 188 83.7069 187.719 84.0861 187.236L87.3406 183.099C87.4452 182.966 87.5143 182.809 87.5415 182.642L88.0562 179.49C88.2067 178.568 87.1227 177.961 86.4156 178.572L82 182.386L81.0209 178.055C80.8261 177.193 79.6914 176.989 79.2083 177.729L78.6404 178.598C78.1814 179.301 77.1131 179.16 76.8526 178.362L76.5494 177.433C76.5167 177.333 76.5 177.228 76.5 177.123V172.674C76.5 172.642 76.5065 172.61 76.5192 172.58L77.1524 171.099C77.6495 169.936 78.879 169.266 80.1257 169.478L80.1942 169.489C80.718 169.579 81.2002 169.831 81.572 170.21C82.1529 170.803 82.4046 171.644 82.245 172.459L82.0518 173.445C82.0249 173.582 82.1297 173.71 82.2692 173.71H83.6354C84.4933 173.71 85.3 173.301 85.808 172.61C86.2495 172.009 86.4224 171.252 86.2856 170.519L85.9204 168.562C85.0293 163.787 81.8809 159.739 77.4719 157.7L76.5 157.25V141.875L79 132.369L85 126.5L79 120.5L76 111.125V95.75L76.9719 95.3005C81.3809 93.2612 84.5293 89.2131 85.4204 84.4378L85.7856 82.4809C85.9224 81.7479 85.7495 80.991 85.308 80.3901C84.8 79.6988 83.9933 79.2905 83.1355 79.2905H81.7692C81.6297 79.2905 81.5249 79.4178 81.5518 79.5546L81.745 80.541C81.9046 81.3556 81.6529 82.1966 81.072 82.7896C80.7002 83.1691 80.218 83.4214 79.6942 83.5105L79.6257 83.5222C78.379 83.7343 77.1495 83.0639 76.6524 81.9011L76.0192 80.42C76.0065 80.3903 76 80.3584 76 80.3261V75.877C76 75.7716 76.0167 75.6668 76.0494 75.5666L76.3526 74.6381C76.6131 73.8402 77.6814 73.699 78.1404 74.4017L78.7083 75.2712C79.1914 76.0108 80.3261 75.8066 80.5209 74.9449L81.5 70.6141L85.9156 74.4279C86.6227 75.0387 87.7067 74.4321 87.5562 73.5099L87.0415 70.3582C87.0143 70.1913 86.9452 70.034 86.8406 69.9011L83.5861 65.7635C83.2069 65.2814 82.6275 65 82.0141 65Z"
            fill="url(#copper-vertical)"
            stroke="black"
          />
          <path
            d="M214.014 66H197.903C197.329 66 196.782 66.2467 196.403 66.6773L192.72 70.8547C192.577 71.0164 192.491 71.2198 192.473 71.4347L192.181 75.0165C192.11 75.8752 193.087 76.4147 193.777 75.8984L199.5 71.6141L200.88 76.1922C201.125 77.006 202.21 77.1621 202.675 76.4504L203.36 75.4017C203.819 74.699 204.887 74.8402 205.147 75.6381L205.451 76.5666C205.483 76.6668 205.5 76.7716 205.5 76.877V81.2966C205.5 81.348 205.487 81.3985 205.461 81.4431L204.682 82.8109C203.967 84.0653 202.565 84.7646 201.133 84.5818L200.357 84.4828C199.813 84.4134 199.327 84.109 199.027 83.65C198.697 83.1432 198.631 82.5077 198.852 81.9442L199.376 80.6081C199.435 80.4554 199.323 80.2905 199.159 80.2905H197.716C196.653 80.2905 195.669 80.8534 195.13 81.7702L195.076 81.8616C194.705 82.4935 194.578 83.2394 194.719 83.9587L194.948 85.1296C195.917 90.0746 199.304 94.2026 203.965 96.1187L205.5 96.75V112.125L203 121.631L197 127.5L203.5 133.369L206 142.875V158.25L204.465 158.881C199.804 160.797 196.417 164.925 195.448 169.87L195.219 171.041C195.078 171.761 195.205 172.507 195.576 173.138L195.63 173.23C196.169 174.147 197.153 174.71 198.216 174.71H199.659C199.823 174.71 199.935 174.545 199.876 174.392L199.352 173.056C199.131 172.492 199.197 171.857 199.527 171.35C199.827 170.891 200.313 170.587 200.857 170.517L201.633 170.418C203.065 170.235 204.467 170.935 205.182 172.189L205.961 173.557C205.987 173.602 206 173.652 206 173.703V178.123C206 178.228 205.983 178.333 205.951 178.433L205.647 179.362C205.387 180.16 204.319 180.301 203.86 179.598L203.175 178.55C202.71 177.838 201.625 177.994 201.38 178.808L200 183.386L194.277 179.102C193.587 178.585 192.61 179.125 192.681 179.984L192.973 183.565C192.991 183.78 193.077 183.984 193.22 184.145L196.903 188.323C197.282 188.753 197.829 189 198.403 189H214.514C215.128 189 215.707 188.719 216.086 188.236L219.341 184.099C219.445 183.966 219.514 183.809 219.542 183.642L220.056 180.49C220.207 179.568 219.123 178.961 218.416 179.572L214 183.386L213.021 179.055C212.826 178.193 211.691 177.989 211.208 178.729L210.64 179.598C210.181 180.301 209.113 180.16 208.853 179.362L208.549 178.433C208.517 178.333 208.5 178.228 208.5 178.123V173.674C208.5 173.642 208.507 173.61 208.519 173.58L209.152 172.099C209.65 170.936 210.879 170.266 212.126 170.478L212.194 170.489C212.718 170.579 213.2 170.831 213.572 171.21C214.153 171.803 214.405 172.644 214.245 173.459L214.052 174.445C214.025 174.582 214.13 174.71 214.269 174.71H215.635C216.493 174.71 217.3 174.301 217.808 173.61C218.249 173.009 218.422 172.252 218.286 171.519L217.92 169.562C217.029 164.787 213.881 160.739 209.472 158.7L208.5 158.25V142.875L211 133.369L217 127.5L211 121.5L208 112.125V96.75L208.972 96.3005C213.381 94.2612 216.529 90.2131 217.42 85.4378L217.786 83.4809C217.922 82.7479 217.749 81.991 217.308 81.3901C216.8 80.6988 215.993 80.2905 215.135 80.2905H213.769C213.63 80.2905 213.525 80.4178 213.552 80.5546L213.745 81.541C213.905 82.3556 213.653 83.1966 213.072 83.7896C212.7 84.1691 212.218 84.4214 211.694 84.5105L211.626 84.5222C210.379 84.7343 209.15 84.0639 208.652 82.9011L208.019 81.42C208.007 81.3903 208 81.3584 208 81.3261V76.877C208 76.7716 208.017 76.6668 208.049 76.5666L208.353 75.6381C208.613 74.8402 209.681 74.699 210.14 75.4017L210.708 76.2712C211.191 77.0108 212.326 76.8066 212.521 75.9449L213.5 71.6141L217.916 75.4279C218.623 76.0387 219.707 75.4321 219.556 74.5099L219.042 71.3582C219.014 71.1913 218.945 71.034 218.841 70.9011L215.586 66.7635C215.207 66.2814 214.628 66 214.014 66Z"
            fill="url(#copper-vertical)"
            stroke="black"
          />
          <path
            d="M148.014 65H131.903C131.329 65 130.782 65.2467 130.403 65.6773L126.72 69.8547C126.577 70.0164 126.491 70.2198 126.473 70.4347L126.181 74.0165C126.11 74.8752 127.087 75.4147 127.777 74.8984L133.5 70.6141L134.88 75.1922C135.125 76.006 136.21 76.1621 136.675 75.4504L137.36 74.4017C137.819 73.699 138.887 73.8402 139.147 74.6381L139.451 75.5666C139.483 75.6668 139.5 75.7716 139.5 75.877V80.2966C139.5 80.348 139.487 80.3985 139.461 80.4431L138.682 81.8109C137.967 83.0653 136.565 83.7646 135.133 83.5818L134.357 83.4828C133.813 83.4134 133.327 83.109 133.027 82.65C132.697 82.1432 132.631 81.5077 132.852 80.9442L133.376 79.6081C133.435 79.4554 133.323 79.2905 133.159 79.2905H131.716C130.653 79.2905 129.669 79.8534 129.13 80.7702L129.076 80.8616C128.705 81.4935 128.578 82.2394 128.719 82.9587L128.948 84.1296C129.917 89.0746 133.304 93.2026 137.965 95.1187L139.5 95.75L135.5 101L120.316 99.0533C117.472 98.6887 114.583 98.9398 111.844 99.7896L107.867 101.024C103.824 102.279 100.525 105.229 98.8279 109.108L98.1954 110.553C95.9999 115.572 97.3412 121.435 101.5 125C97.4428 127.898 96.0294 133.277 98.1378 137.795L99.4004 140.501C100.758 143.411 103.079 145.762 105.971 147.159L109.664 148.941C113.765 150.921 118.419 151.442 122.856 150.418L135.5 147.5L140 157.25L138.465 157.881C133.804 159.797 130.417 163.925 129.448 168.87L129.219 170.041C129.078 170.761 129.205 171.507 129.576 172.138L129.63 172.23C130.169 173.147 131.153 173.71 132.216 173.71H133.659C133.823 173.71 133.935 173.545 133.876 173.392L133.352 172.056C133.131 171.492 133.197 170.857 133.527 170.35C133.827 169.891 134.313 169.587 134.857 169.517L135.633 169.418C137.065 169.235 138.467 169.935 139.182 171.189L139.961 172.557C139.987 172.602 140 172.652 140 172.703V177.123C140 177.228 139.983 177.333 139.951 177.433L139.647 178.362C139.387 179.16 138.319 179.301 137.86 178.598L137.175 177.55C136.71 176.838 135.625 176.994 135.38 177.808L134 182.386L128.277 178.102C127.587 177.585 126.61 178.125 126.681 178.984L126.973 182.565C126.991 182.78 127.077 182.984 127.22 183.145L130.903 187.323C131.282 187.753 131.829 188 132.403 188H148.514C149.127 188 149.707 187.719 150.086 187.236L153.341 183.099C153.445 182.966 153.514 182.809 153.542 182.642L154.056 179.49C154.207 178.568 153.123 177.961 152.416 178.572L148 182.386L147.021 178.055C146.826 177.193 145.691 176.989 145.208 177.729L144.64 178.598C144.181 179.301 143.113 179.16 142.853 178.362L142.549 177.433C142.517 177.333 142.5 177.228 142.5 177.123V172.674C142.5 172.642 142.507 172.61 142.519 172.58L143.152 171.099C143.65 169.936 144.879 169.266 146.126 169.478L146.194 169.489C146.718 169.579 147.2 169.831 147.572 170.21C148.153 170.803 148.405 171.644 148.245 172.459L148.052 173.445C148.025 173.582 148.13 173.71 148.269 173.71H149.635C150.493 173.71 151.3 173.301 151.808 172.61C152.249 172.009 152.422 171.252 152.286 170.519L151.92 168.562C151.029 163.787 147.881 159.739 143.472 157.7L142.5 157.25L148 147.5L162.099 151.593C163.026 151.862 163.993 151.969 164.956 151.909L182.488 150.813C187.388 150.507 188.418 143.741 183.832 141.99C180.453 140.7 179.844 136.181 182.76 134.042L183.5 133.5L194 127L185 120L182.842 118.322C179.757 115.922 180.363 111.096 183.945 109.533C188.902 107.37 187.603 100.006 182.206 99.6691L164.466 98.5604C163.824 98.5202 163.179 98.5459 162.542 98.6369L146 101L142 95.75L142.972 95.3005C147.381 93.2612 150.529 89.2131 151.42 84.4378L151.786 82.4809C151.922 81.7479 151.749 80.991 151.308 80.3901C150.8 79.6988 149.993 79.2905 149.135 79.2905H147.769C147.63 79.2905 147.525 79.4178 147.552 79.5546L147.745 80.541C147.905 81.3556 147.653 82.1966 147.072 82.7896C146.7 83.1691 146.218 83.4214 145.694 83.5105L145.626 83.5222C144.379 83.7343 143.15 83.0639 142.652 81.9011L142.019 80.42C142.007 80.3903 142 80.3584 142 80.3261V75.877C142 75.7716 142.017 75.6668 142.049 75.5666L142.353 74.6381C142.613 73.8402 143.681 73.699 144.14 74.4017L144.708 75.2712C145.191 76.0108 146.326 75.8066 146.521 74.9449L147.5 70.6141L151.916 74.4279C152.623 75.0387 153.707 74.4321 153.556 73.5099L153.042 70.3582C153.014 70.1913 152.945 70.034 152.841 69.9011L149.586 65.7635C149.207 65.2814 148.627 65 148.014 65Z"
            fill="url(#copper-vertical)"
            stroke="black"
          />
          <g filter="url(#filter0_d37)">
            <path
              d="M104 108.688C104 105.927 106.239 103.688 109 103.688H175C177.761 103.688 180 105.927 180 108.688V140.312C180 143.073 177.761 145.312 175 145.312H109C106.239 145.312 104 143.073 104 140.312V108.688Z"
              fill={bodyColor}
            />
            <path
              d="M109 104.688H175C177.209 104.688 179 106.479 179 108.688V140.312C179 142.521 177.209 144.312 175 144.312H109C106.791 144.312 105 142.521 105 140.312V108.688C105 106.479 106.791 104.688 109 104.688Z"
              stroke="black"
              stroke-width="2"
            />
          </g>
          <path
            d="M122.102 103H119.399C118.744 103 118.129 103.322 117.756 103.861L117.253 104.586C117.176 104.697 117.131 104.827 117.122 104.962C117.079 105.639 117.888 106.017 118.379 105.55L119.028 104.931L119.362 106.337C119.433 106.638 119.84 106.687 119.981 106.412C120.121 106.14 120.522 106.185 120.599 106.482L120.639 106.639C120.647 106.671 120.651 106.704 120.651 106.737V108.271C120.651 108.283 120.649 108.295 120.644 108.306L120.381 108.893C120.221 109.248 119.842 109.453 119.458 109.39L119.352 109.373C119.149 109.34 118.973 109.212 118.879 109.029C118.801 108.878 118.786 108.703 118.836 108.541L118.99 108.041C119.009 107.979 118.963 107.916 118.897 107.916H118.637C118.298 107.916 117.991 108.113 117.849 108.42L117.806 108.512C117.721 108.696 117.693 108.9 117.723 109.1L117.799 109.59C118.062 111.297 119.121 112.778 120.651 113.578V118.867L119.975 122.137L118.352 124.156L120.11 126.175L120.786 129.445V134.734C119.256 135.534 118.197 137.015 117.934 138.722L117.859 139.212C117.828 139.412 117.857 139.616 117.941 139.8L117.984 139.892C118.126 140.199 118.434 140.396 118.772 140.396H119.033C119.098 140.396 119.144 140.333 119.125 140.271L118.971 139.771C118.921 139.609 118.937 139.434 119.014 139.283C119.108 139.1 119.284 138.972 119.487 138.939L119.593 138.922C119.978 138.859 120.357 139.064 120.516 139.419L120.779 140.006C120.784 140.017 120.786 140.029 120.786 140.041V141.575C120.786 141.608 120.782 141.641 120.774 141.673L120.734 141.83C120.658 142.127 120.256 142.172 120.116 141.9C119.975 141.625 119.568 141.674 119.497 141.975L119.164 143.381L118.514 142.762C118.023 142.295 117.214 142.673 117.257 143.35C117.266 143.485 117.311 143.615 117.388 143.726L117.891 144.451C118.265 144.99 118.879 145.312 119.535 145.312H122.237C122.93 145.312 123.574 144.953 123.938 144.364L124.366 143.672C124.413 143.596 124.444 143.51 124.455 143.422C124.533 142.814 123.782 142.467 123.37 142.92L122.95 143.381L122.709 142.025C122.656 141.726 122.253 141.665 122.115 141.935C121.981 142.195 121.598 142.152 121.525 141.869L121.475 141.673C121.467 141.641 121.463 141.608 121.463 141.575V140.035C121.463 140.027 121.464 140.019 121.466 140.012L121.681 139.374C121.787 139.056 122.116 138.87 122.444 138.941C122.596 138.973 122.732 139.059 122.827 139.182L122.867 139.234C123.006 139.416 123.066 139.646 123.031 139.873L122.966 140.291C122.958 140.346 123.001 140.396 123.057 140.396H123.277C123.577 140.396 123.854 140.236 124.004 139.976L124.015 139.958C124.114 139.787 124.152 139.587 124.123 139.392L123.991 138.491C123.76 136.92 122.831 135.539 121.463 134.734V129.445L122.139 126.175L123.762 124.156L122.139 122.092L121.327 118.867V113.578C122.695 112.773 123.625 111.392 123.856 109.821L123.988 108.92C124.016 108.725 123.978 108.525 123.879 108.354L123.869 108.336C123.719 108.076 123.442 107.916 123.141 107.916H122.921C122.865 107.916 122.823 107.966 122.831 108.021L122.896 108.439C122.93 108.666 122.871 108.896 122.731 109.078L122.692 109.13C122.597 109.253 122.461 109.339 122.309 109.371C121.981 109.442 121.652 109.256 121.545 108.938L121.331 108.3C121.329 108.293 121.327 108.285 121.327 108.277V106.737C121.327 106.704 121.332 106.671 121.34 106.639L121.39 106.443C121.463 106.16 121.846 106.117 121.979 106.377C122.118 106.647 122.521 106.586 122.574 106.287L122.815 104.931L123.234 105.392C123.647 105.845 124.398 105.498 124.32 104.89C124.308 104.802 124.278 104.716 124.231 104.64L123.803 103.948C123.439 103.359 122.795 103 122.102 103Z"
            fill="url(#copper-vertical)"
            stroke="black"
          />
          <path
            d="M166.102 104H163.399C162.744 104 162.129 104.322 161.756 104.861L161.253 105.586C161.176 105.697 161.131 105.827 161.122 105.962C161.079 106.639 161.888 107.017 162.379 106.55L163.028 105.931L163.362 107.337C163.433 107.638 163.84 107.687 163.981 107.412C164.121 107.14 164.522 107.185 164.599 107.482L164.639 107.639C164.647 107.671 164.651 107.704 164.651 107.737V109.271C164.651 109.283 164.649 109.295 164.644 109.306L164.381 109.893C164.221 110.248 163.842 110.453 163.458 110.39L163.352 110.373C163.149 110.34 162.973 110.212 162.879 110.029C162.801 109.878 162.786 109.703 162.836 109.541L162.99 109.041C163.009 108.979 162.963 108.916 162.897 108.916H162.637C162.298 108.916 161.991 109.113 161.849 109.42L161.806 109.512C161.721 109.696 161.693 109.9 161.723 110.1L161.799 110.59C162.062 112.297 163.121 113.778 164.651 114.578V119.867L163.975 123.137L162.352 125.156L164.11 127.175L164.786 130.445V135.734C163.256 136.534 162.197 138.015 161.934 139.722L161.859 140.212C161.828 140.412 161.857 140.616 161.941 140.8L161.984 140.892C162.126 141.199 162.434 141.396 162.772 141.396H163.033C163.098 141.396 163.144 141.333 163.125 141.271L162.971 140.771C162.921 140.609 162.937 140.434 163.014 140.283C163.108 140.1 163.284 139.972 163.487 139.939L163.593 139.922C163.978 139.859 164.357 140.064 164.516 140.419L164.779 141.006C164.784 141.017 164.786 141.029 164.786 141.041V142.575C164.786 142.608 164.782 142.641 164.774 142.673L164.734 142.83C164.658 143.127 164.256 143.172 164.116 142.9C163.975 142.625 163.568 142.674 163.497 142.975L163.164 144.381L162.514 143.762C162.023 143.295 161.214 143.673 161.257 144.35C161.266 144.485 161.311 144.615 161.388 144.726L161.891 145.451C162.265 145.99 162.879 146.312 163.535 146.312H166.237C166.93 146.312 167.574 145.953 167.938 145.364L168.366 144.672C168.413 144.596 168.444 144.51 168.455 144.422C168.533 143.814 167.782 143.467 167.37 143.92L166.95 144.381L166.709 143.025C166.656 142.726 166.253 142.665 166.115 142.935C165.981 143.195 165.598 143.152 165.525 142.869L165.475 142.673C165.467 142.641 165.463 142.608 165.463 142.575V141.035C165.463 141.027 165.464 141.019 165.466 141.012L165.681 140.374C165.787 140.056 166.116 139.87 166.444 139.941C166.596 139.973 166.732 140.059 166.827 140.182L166.867 140.234C167.006 140.416 167.066 140.646 167.031 140.873L166.966 141.291C166.958 141.346 167.001 141.396 167.057 141.396H167.277C167.577 141.396 167.854 141.236 168.004 140.976L168.015 140.958C168.114 140.787 168.152 140.587 168.123 140.392L167.991 139.491C167.76 137.92 166.831 136.539 165.463 135.734V130.445L166.139 127.175L167.762 125.156L166.139 123.092L165.327 119.867V114.578C166.695 113.773 167.625 112.392 167.856 110.821L167.988 109.92C168.016 109.725 167.978 109.525 167.879 109.354L167.869 109.336C167.719 109.076 167.442 108.916 167.141 108.916H166.921C166.865 108.916 166.823 108.966 166.831 109.021L166.896 109.439C166.93 109.666 166.871 109.896 166.731 110.078L166.692 110.13C166.597 110.253 166.461 110.339 166.309 110.371C165.981 110.442 165.652 110.256 165.545 109.938L165.331 109.3C165.329 109.293 165.327 109.285 165.327 109.277V107.737C165.327 107.704 165.332 107.671 165.34 107.639L165.39 107.443C165.463 107.16 165.846 107.117 165.979 107.377C166.118 107.647 166.521 107.586 166.574 107.287L166.815 105.931L167.234 106.392C167.647 106.845 168.398 106.498 168.32 105.89C168.308 105.802 168.278 105.716 168.231 105.64L167.803 104.948C167.439 104.359 166.795 104 166.102 104Z"
            fill="url(#copper-vertical)"
            stroke="black"
          />
          <path
            d="M238.359 64C236.238 64 235.828 67.0092 237.871 67.5769L246.763 70.0481C264.85 75.0747 275.947 93.2597 272.145 111.643V111.643V111.643C261.998 117.71 260.729 131.914 269.639 139.684L272.145 141.869V141.869C275.311 159.011 265.3 175.851 248.727 181.258L236.758 185.163C234.63 185.858 235.13 189 237.368 189H277.175C279.937 189 282.175 186.761 282.175 184V69C282.175 66.2386 279.937 64 277.175 64H238.359Z"
            fill="url(#copper-vertical)"
            stroke="black"
          />
          <path
            d="M277.301 71.4526L278.171 81.971L277.695 84.3509L275.457 89.5747L275.22 87.5229C274.253 79.1466 268.256 72.2164 260.105 70.0569L253.188 68.2241C252.969 68.166 252.816 67.9676 252.816 67.7407V67.0408C252.816 66.7568 253.052 66.5298 253.336 66.5412L272.996 67.3271C275.267 67.4179 277.114 69.1876 277.301 71.4526Z"
            fill={bodyColor}
            stroke="black"
          />
          <path
            d="M277.713 168.19L277.697 168.152L277.688 168.112L276.422 162.616L275.802 166.634C274.522 174.932 268.311 181.611 260.127 183.489L250.064 185.799C249.836 185.851 249.675 186.053 249.675 186.286V186.964C249.675 187.247 249.91 187.474 250.193 187.464L273.046 186.655C275.346 186.574 277.214 184.77 277.376 182.475L278.285 169.588L277.713 168.19Z"
            fill={bodyColor}
            stroke="black"
          />
          <path
            d="M44.8167 64C46.9369 64 47.3473 67.0092 45.3045 67.5769L36.4124 70.0481C18.325 75.0747 7.22849 93.2597 11.0308 111.643V111.643V111.643C21.1777 117.71 22.4467 131.914 13.5361 139.684L11.0308 141.869V141.869C7.86444 159.011 17.8755 175.851 34.4481 181.258L46.4173 185.163C48.5452 185.858 48.0455 189 45.8072 189H6C3.23857 189 1 186.761 1 184V69C1 66.2386 3.23858 64 6 64H44.8167Z"
            fill="url(#copper-vertical)"
            stroke="black"
          />
          <path
            d="M5.87395 71.4526L5.0041 81.971L5.48008 84.3509L7.71886 89.5747L7.95565 87.5229C8.92231 79.1466 14.9194 72.2164 23.0701 70.0569L29.9876 68.2241C30.2068 68.166 30.3595 67.9676 30.3595 67.7407V67.0408C30.3595 66.7568 30.1233 66.5298 29.8395 66.5412L10.1789 67.3271C7.90801 67.4179 6.06125 69.1876 5.87395 71.4526Z"
            fill={bodyColor}
            stroke="black"
          />
          <path
            d="M5.46269 168.19L5.47811 168.152L5.48724 168.112L6.75377 162.616L7.37356 166.634C8.65362 174.932 14.8647 181.611 23.0484 183.489L33.1118 185.799C33.339 185.851 33.5 186.053 33.5 186.286V186.964C33.5 187.247 33.2652 187.474 32.9823 187.464L10.129 186.655C7.82911 186.574 5.96123 184.77 5.79926 182.475L4.88997 169.588L5.46269 168.19Z"
            fill={bodyColor}
            stroke="black"
          />
          <path
            d="M12.9999 126.5C12.9999 131.949 9.6499 136.697 4.5 136.986V136.983V136.944V136.906V136.868V136.83V136.792V136.754V136.717V136.679V136.642V136.605V136.569V136.532V136.496V136.46V136.424V136.388V136.352V136.316V136.281V136.246V136.211V136.176V136.141V136.107V136.072V136.038V136.004V135.97V135.936V135.903V135.869V135.836V135.803V135.77V135.737V135.705V135.672V135.64V135.608V135.576V135.544V135.512V135.481V135.449V135.418V135.387V135.356V135.325V135.295V135.264V135.234V135.204V135.174V135.144V135.114V135.084V135.055V135.026V134.996V134.967V134.938V134.91V134.881V134.853V134.824V134.796V134.768V134.74V134.712V134.684V134.657V134.629V134.602V134.575V134.548V134.521V134.494V134.468V134.441V134.415V134.388V134.362V134.336V134.31V134.285V134.259V134.233V134.208V134.183V134.158V134.133V134.108V134.083V134.058V134.034V134.009V133.985V133.961V133.936V133.912V133.889V133.865V133.841V133.818V133.794V133.771V133.748V133.724V133.701V133.678V133.656V133.633V133.61V133.588V133.565V133.543V133.521V133.499V133.477V133.455V133.433V133.412V133.39V133.368V133.347V133.326V133.305V133.283V133.262V133.241V133.221V133.2V133.179V133.159V133.138V133.118V133.097V133.077V133.057V133.037V133.017V132.997V132.977V132.958V132.938V132.918V132.899V132.88V132.86V132.841V132.822V132.803V132.784V132.765V132.746V132.727V132.709V132.69V132.671V132.653V132.634V132.616V132.598V132.58V132.561V132.543V132.525V132.507V132.49V132.472V132.454V132.436V132.419V132.401V132.384V132.366V132.349V132.331V132.314V132.297V132.28V132.263V132.246V132.229V132.212V132.195V132.178V132.161V132.145V132.128V132.111V132.095V132.078V132.062V132.045V132.029V132.013V131.996V131.98V131.964V131.948V131.932V131.916V131.9V131.884V131.868V131.852V131.836V131.82V131.804V131.789V131.773V131.757V131.742V131.726V131.71V131.695V131.679V131.664V131.648V131.633V131.618V131.602V131.587V131.571V131.556V131.541V131.526V131.51V131.495V131.48V131.465V131.45V131.435V131.42V131.405V131.39V131.375V131.36V131.345V131.33V131.315V131.3V131.285V131.27V131.255V131.24V131.225V131.21V131.195V131.18V131.166V131.151V131.136V131.121V131.106V131.091V131.077V131.062V131.047V131.032V131.017V131.003V130.988V130.973V130.958V130.943V130.929V130.914V130.899V130.884V130.869V130.854V130.84V130.825V130.81V130.795V130.78V130.765V130.75V130.735V130.72V130.706V130.691V130.676V130.661V130.646V130.631V130.616V130.601V130.586V130.57V130.555V130.54V130.525V130.51V130.495V130.479V130.464V130.449V130.434V130.418V130.403V130.388V130.372V130.357V130.341V130.326V130.31V130.295V130.279V130.264V130.248V130.232V130.217V130.201V130.185V130.169V130.153V130.137V130.121V130.105V130.089V130.073V130.057V130.041V130.025V130.009V129.992V129.976V129.96V129.943V129.927V129.91V129.894V129.877V129.86V129.844V129.827V129.81V129.793V129.776V129.759V129.742V129.725V129.708V129.691V129.674V129.656V129.639V129.621V129.604V129.586V129.569V129.551V129.533V129.515V129.498V129.48V129.462V129.444V129.425V129.407V129.389V129.371V129.352V129.334V129.315V129.296V129.278V129.259V129.24V129.221V129.202V129.183V129.164V129.145V129.125V129.106V129.086V129.067V129.047V129.028V129.008V128.988V128.968V128.948V128.928V128.907V128.887V128.867V128.846V128.826V128.805V128.784V128.763V128.742V128.721V128.7V128.679V128.658V128.636V128.615V128.593V128.572V128.55V128.528V128.506V128.484V128.462V128.439V128.417V128.394V128.372V128.349V128.326V128.303V128.28V128.257V128.234V128.211V128.187V128.164V128.14V128.116V128.092V128.068V128.044V128.02V127.995V127.971V127.946V127.922V127.897V127.872V127.847V127.822V127.796V127.771V127.746V127.72V127.694V127.668V127.642V127.616V127.59V127.563V127.537V127.51V127.483V127.456V127.429V127.402V127.375V127.348V127.32V127.292V127.264V127.237V127.208V127.18V127.152V127.123V127.095V127.066V127.037V127.008V126.979V126.949V126.92V126.89V126.86V126.831V126.8V126.77V126.74V126.709V126.679V126.648V126.617V126.586V126.555V126.523V126.492V126.46V126.428V126.396V126.364V126.332V126.299V126.267V126.234V126.201V126.168V126.135V126.101V126.068V126.034V126C4.5 123.059 4.4996 121.956 4.56511 120.858C4.62451 119.861 4.7381 118.868 4.95533 116.51C7.4833 116.626 9.43558 117.708 10.7846 119.388C12.2231 121.181 12.9999 123.687 12.9999 126.5Z"
            fill={bodyColor}
            stroke="black"
          />
          <path
            d="M270.5 126.5C270.5 131.949 273.85 136.697 279 136.986V136.983V136.944V136.906V136.868V136.83V136.792V136.754V136.717V136.679V136.642V136.605V136.569V136.532V136.496V136.46V136.424V136.388V136.352V136.316V136.281V136.246V136.211V136.176V136.141V136.107V136.072V136.038V136.004V135.97V135.936V135.903V135.869V135.836V135.803V135.77V135.737V135.705V135.672V135.64V135.608V135.576V135.544V135.512V135.481V135.449V135.418V135.387V135.356V135.325V135.295V135.264V135.234V135.204V135.174V135.144V135.114V135.084V135.055V135.026V134.996V134.967V134.938V134.91V134.881V134.853V134.824V134.796V134.768V134.74V134.712V134.684V134.657V134.629V134.602V134.575V134.548V134.521V134.494V134.468V134.441V134.415V134.388V134.362V134.336V134.31V134.285V134.259V134.233V134.208V134.183V134.158V134.133V134.108V134.083V134.058V134.034V134.009V133.985V133.961V133.936V133.912V133.889V133.865V133.841V133.818V133.794V133.771V133.748V133.724V133.701V133.678V133.656V133.633V133.61V133.588V133.565V133.543V133.521V133.499V133.477V133.455V133.433V133.412V133.39V133.368V133.347V133.326V133.305V133.283V133.262V133.241V133.221V133.2V133.179V133.159V133.138V133.118V133.097V133.077V133.057V133.037V133.017V132.997V132.977V132.958V132.938V132.918V132.899V132.88V132.86V132.841V132.822V132.803V132.784V132.765V132.746V132.727V132.709V132.69V132.671V132.653V132.634V132.616V132.598V132.58V132.561V132.543V132.525V132.507V132.49V132.472V132.454V132.436V132.419V132.401V132.384V132.366V132.349V132.331V132.314V132.297V132.28V132.263V132.246V132.229V132.212V132.195V132.178V132.161V132.145V132.128V132.111V132.095V132.078V132.062V132.045V132.029V132.013V131.996V131.98V131.964V131.948V131.932V131.916V131.9V131.884V131.868V131.852V131.836V131.82V131.804V131.789V131.773V131.757V131.742V131.726V131.71V131.695V131.679V131.664V131.648V131.633V131.618V131.602V131.587V131.571V131.556V131.541V131.526V131.51V131.495V131.48V131.465V131.45V131.435V131.42V131.405V131.39V131.375V131.36V131.345V131.33V131.315V131.3V131.285V131.27V131.255V131.24V131.225V131.21V131.195V131.18V131.166V131.151V131.136V131.121V131.106V131.091V131.077V131.062V131.047V131.032V131.017V131.003V130.988V130.973V130.958V130.943V130.929V130.914V130.899V130.884V130.869V130.854V130.84V130.825V130.81V130.795V130.78V130.765V130.75V130.735V130.72V130.706V130.691V130.676V130.661V130.646V130.631V130.616V130.601V130.586V130.57V130.555V130.54V130.525V130.51V130.495V130.479V130.464V130.449V130.434V130.418V130.403V130.388V130.372V130.357V130.341V130.326V130.31V130.295V130.279V130.264V130.248V130.232V130.217V130.201V130.185V130.169V130.153V130.137V130.121V130.105V130.089V130.073V130.057V130.041V130.025V130.009V129.992V129.976V129.96V129.943V129.927V129.91V129.894V129.877V129.86V129.844V129.827V129.81V129.793V129.776V129.759V129.742V129.725V129.708V129.691V129.674V129.656V129.639V129.621V129.604V129.586V129.569V129.551V129.533V129.515V129.498V129.48V129.462V129.444V129.425V129.407V129.389V129.371V129.352V129.334V129.315V129.296V129.278V129.259V129.24V129.221V129.202V129.183V129.164V129.145V129.125V129.106V129.086V129.067V129.047V129.028V129.008V128.988V128.968V128.948V128.928V128.907V128.887V128.867V128.846V128.826V128.805V128.784V128.763V128.742V128.721V128.7V128.679V128.658V128.636V128.615V128.593V128.572V128.55V128.528V128.506V128.484V128.462V128.439V128.417V128.394V128.372V128.349V128.326V128.303V128.28V128.257V128.234V128.211V128.187V128.164V128.14V128.116V128.092V128.068V128.044V128.02V127.995V127.971V127.946V127.922V127.897V127.872V127.847V127.822V127.796V127.771V127.746V127.72V127.694V127.668V127.642V127.616V127.59V127.563V127.537V127.51V127.483V127.456V127.429V127.402V127.375V127.348V127.32V127.292V127.264V127.237V127.208V127.18V127.152V127.123V127.095V127.066V127.037V127.008V126.979V126.949V126.92V126.89V126.86V126.831V126.8V126.77V126.74V126.709V126.679V126.648V126.617V126.586V126.555V126.523V126.492V126.46V126.428V126.396V126.364V126.332V126.299V126.267V126.234V126.201V126.168V126.135V126.101V126.068V126.034V126C279 123.059 279 121.956 278.935 120.858C278.875 119.861 278.762 118.868 278.545 116.51C276.017 116.626 274.064 117.708 272.715 119.388C271.277 121.181 270.5 123.687 270.5 126.5Z"
            fill={bodyColor}
            stroke="black"
          />
          <path
            d="M153.5 125.5C153.5 129.806 148.927 133.5 143 133.5C137.073 133.5 132.5 129.806 132.5 125.5C132.5 121.194 137.073 117.5 143 117.5C148.927 117.5 153.5 121.194 153.5 125.5Z"
            fill="url(#copper-vertical)"
            stroke="black"
          />
          <path
            d="M155.5 123.5C155.5 127.806 150.927 131.5 145 131.5C139.073 131.5 134.5 127.806 134.5 123.5C134.5 119.194 139.073 115.5 145 115.5C150.927 115.5 155.5 119.194 155.5 123.5Z"
            fill="url(#copper-vertical)"
            stroke="black"
          />
          <defs>
            <filter
              id="filter0_d37"
              x="96"
              y="103.688"
              width="84"
              height="49.624"
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
      Fallen: (
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
            y="67"
            width="279"
            height="119"
            fill="transparent"
            stroke="transparent"
            stroke-width="2"
          />
          <rect
            x="1"
            y="76"
            width="279"
            height="101"
            fill={bodyColor}
            stroke="black"
            stroke-width="2"
          />
          <rect
            x="1"
            y="67"
            width="139"
            height="119"
            rx="7"
            fill="url(#black-duraplast-vertical)"
            stroke="black"
            stroke-width="2"
          />
          <rect
            x="166.5"
            y="76.5"
            width="67"
            height="100"
            fill="url(#black-duraplast-vertical)"
            stroke="black"
          />
          <path
            d="M170.5 75.25H232.5C237.747 75.25 242 79.5033 242 84.75V94.75C242 99.9967 237.747 104.25 232.5 104.25H170.5C165.253 104.25 161 99.9967 161 94.75V84.75C161 79.5033 165.253 75.25 170.5 75.25Z"
            fill="url(#royal-chromium-vertical"
            stroke="black"
          />
          <path
            d="M167 73.25H229C234.247 73.25 238.5 77.5033 238.5 82.75V92.75C238.5 97.9967 234.247 102.25 229 102.25H167C161.753 102.25 157.5 97.9967 157.5 92.75V82.75C157.5 77.5033 161.753 73.25 167 73.25Z"
            fill="url(#royal-chromium-vertical"
            stroke="black"
          />
          <path
            d="M227.5 85.5C227.5 87.6234 226.183 89.6113 223.919 91.0919C221.659 92.5697 218.507 93.5 215 93.5C211.493 93.5 208.341 92.5697 206.081 91.0919C203.817 89.6113 202.5 87.6234 202.5 85.5C202.5 83.3766 203.817 81.3887 206.081 79.9081C208.341 78.4303 211.493 77.5 215 77.5C218.507 77.5 221.659 78.4303 223.919 79.9081C226.183 81.3887 227.5 83.3766 227.5 85.5Z"
            fill={bodyColor}
            stroke="black"
          />
          <path
            d="M206.143 82.1255L206.96 81.0409C208.099 79.5313 208.144 77.463 207.073 75.9051C206.253 74.7125 204.898 74 203.451 74H194.75C192.938 74 192.438 71.51 194.109 70.8102L194.627 70.5934C194.791 70.5251 194.963 70.4816 195.139 70.4644L200.744 69.9176C203.537 69.6451 206.357 69.8455 209.083 70.5105C212.979 71.4607 216.588 73.3354 219.606 75.9759L222.025 78.0921C222.58 78.5778 223.056 79.1464 223.438 79.7778C225.944 83.9283 223.684 89.3174 218.966 90.4378L216.864 90.9372C214.668 91.4586 212.375 91.399 210.209 90.764L208.874 90.3725C205.331 89.3337 203.92 85.0734 206.143 82.1255Z"
            fill="url(#matte-vertical)"
            stroke="black"
          />
          <path
            d="M207.391 78.6976L209.078 78.5196C212.262 78.1834 215.235 76.7645 217.5 74.5V74.5"
            stroke="black"
            stroke-width="4"
          />
        </svg>
      ),
    },
  };

  return selectSVG();
}

export default DisplaySVG;
