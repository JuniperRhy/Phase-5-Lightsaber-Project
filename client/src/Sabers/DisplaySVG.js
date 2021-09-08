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
    },
    Grip: {
      Template: (
        <svg
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
    },
    Switch: {
      Template: (
        <svg
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
    },
  };

  return selectSVG();
}

export default DisplaySVG;
