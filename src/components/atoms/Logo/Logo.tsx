import { Image, Flex, Box, useColorModeValue } from "@chakra-ui/react";

interface LogoProps {
  mainColor?: string;
  secondaryColor?: string;
  darkMode?: string;
  [key: string]: any;
}

export const Logo: React.FC<LogoProps> = ({
  mainColor,
  secondaryColor,
  darkMode,
  ...props
}) => {
  if (!mainColor) {
    mainColor = "#15316F";
  }
  if (!secondaryColor) {
    secondaryColor = "#EB5676";
  }

  mainColor = useColorModeValue(mainColor, "#628ae1");
  secondaryColor = useColorModeValue(secondaryColor, "#EB5676");

  if (darkMode) {
    if (darkMode === "true") {
      mainColor = "#628ae1";
      secondaryColor = "#EB5676";
    } else {
      mainColor = "#15316F";
      secondaryColor = "#EB5676";
    }
  }

  return (
    <Box {...props} onClick={() => (window.location.href = "/homepage")} cursor="pointer">
      <Box h="100%" w="100%">
        <Box display="inline-block" h="100%">
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="610.000000pt"
            height="249.000000pt"
            viewBox="0 0 610.000000 249.000000"
            preserveAspectRatio="xMidYMid meet"
            style={{
              height: "100%",
              width: "auto",
              position: "relative",
            }}
          >
            <g
              transform="translate(0.000000,249.000000) scale(0.100000,-0.100000)"
              fill={mainColor}
              stroke="none"
            >
              <path
                d="M547 2139 c-23 -13 -47 -62 -47 -94 0 -27 49 -148 165 -410 37 -82
88 -199 114 -260 239 -553 428 -975 447 -1001 34 -46 73 -59 125 -43 23 8 50
25 61 39 10 14 52 104 94 200 42 96 121 279 176 405 56 127 124 284 153 350
29 66 91 208 138 315 185 423 179 407 152 460 -19 37 -43 50 -94 50 -89 0 -91
-3 -226 -325 -37 -88 -108 -254 -156 -368 -49 -115 -89 -210 -89 -212 0 -2
-15 -36 -34 -77 -18 -40 -45 -102 -59 -138 -56 -140 -97 -225 -114 -237 -42
-31 -88 -6 -116 62 -9 22 -46 112 -83 200 -36 88 -81 196 -99 240 -18 44 -74
179 -125 300 -50 121 -112 268 -135 326 -68 165 -83 194 -114 212 -32 19 -106
22 -134 6z"
              />
              <path
                d="M2761 2112 c-20 -22 -48 -69 -63 -108 -15 -38 -50 -123 -78 -189 -28
-66 -65 -154 -81 -195 -17 -41 -39 -93 -49 -115 -17 -37 -45 -106 -171 -407
-28 -68 -64 -152 -79 -188 -16 -36 -44 -103 -63 -150 -19 -47 -53 -130 -76
-184 -23 -55 -41 -115 -41 -133 0 -111 128 -160 205 -78 17 18 46 72 65 121
52 135 90 218 103 226 7 4 193 8 414 8 l402 0 20 -26 c12 -15 21 -31 21 -36 0
-5 8 -28 19 -51 10 -23 31 -73 46 -112 57 -145 80 -170 155 -170 50 0 84 20
106 60 25 46 15 91 -50 246 -32 74 -77 181 -101 239 -24 58 -93 222 -153 365
-60 143 -140 332 -177 420 -210 503 -205 495 -292 495 -40 0 -51 -5 -82 -38z
m131 -489 c15 -18 24 -40 139 -328 33 -82 74 -182 90 -222 16 -39 29 -77 29
-83 0 -6 -11 -22 -25 -35 l-24 -25 -260 0 -260 0 -20 26 c-12 15 -21 32 -21
40 0 11 67 179 130 324 11 25 43 101 71 170 28 69 58 131 67 138 23 17 66 15
84 -5z"
              />
              <path
                d="M3934 2116 l-34 -34 0 -836 c0 -610 3 -842 12 -860 14 -32 45 -53 89
-61 43 -8 80 6 113 42 l26 28 0 447 c0 472 2 493 46 504 62 16 54 28 295 -450
133 -263 237 -459 252 -472 61 -52 149 -34 192 40 13 22 112 223 221 446 109
223 206 417 216 433 23 32 65 36 97 10 20 -18 21 -25 23 -483 3 -429 4 -467
21 -492 21 -30 73 -58 110 -58 31 0 88 38 104 70 10 19 13 210 13 848 0 903 3
865 -60 897 -40 21 -89 19 -128 -5 -28 -17 -48 -50 -111 -183 -84 -173 -159
-327 -404 -829 -128 -262 -160 -320 -181 -328 -62 -23 -57 -31 -393 649 -172
348 -323 645 -334 660 -29 37 -57 50 -107 51 -37 0 -50 -6 -78 -34z"
              />
            </g>
          </svg>
        </Box>
        <Box display="inline-block" h="100%">
          <svg
            style={{
              height: "100%",
              width: "auto",
              position: "relative",
            }}
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="192.000000pt"
            height="249.000000pt"
            viewBox="0 0 192.000000 249.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,249.000000) scale(0.100000,-0.100000)"
              fill={secondaryColor}
              stroke="none"
            >
              <path
                d="M704 2200 c-89 -23 -219 -87 -304 -150 -376 -279 -495 -794 -282
-1216 35 -69 133 -203 184 -250 114 -108 273 -197 417 -233 127 -32 363 -30
481 3 171 47 301 123 426 250 84 85 170 217 212 326 63 163 80 381 42 552 -75
341 -342 627 -671 718 -102 28 -397 28 -505 0z m646 -324 c0 -8 -7 -48 -16
-88 -17 -80 -80 -380 -116 -552 l-23 -109 -225 -170 c-124 -94 -236 -179 -250
-189 -14 -10 -51 -39 -82 -63 -47 -38 -78 -54 -78 -42 0 1 16 79 36 172 19 94
41 204 49 245 17 90 63 308 71 332 3 10 94 85 202 166 108 82 244 185 302 230
105 81 130 94 130 68z"
              />
              <path
                d="M894 1371 c-19 -11 -37 -34 -43 -54 -32 -97 60 -182 154 -143 67 28
85 131 31 184 -33 34 -100 40 -142 13z"
              />
            </g>
          </svg>
        </Box>
        <Box display="inline-block" h="100%">
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="202.000000pt"
            height="249.000000pt"
            viewBox="0 0 202.000000 249.000000"
            preserveAspectRatio="xMidYMid meet"
            style={{
              height: "100%",
              width: "auto",
              position: "relative",
            }}
          >
            <g
              transform="translate(0.000000,249.000000) scale(0.100000,-0.100000)"
              fill={mainColor}
              stroke="none"
            >
              <path
                d="M815 2159 c-77 -12 -143 -34 -230 -76 -163 -79 -255 -222 -255 -398
0 -220 140 -389 395 -476 33 -11 128 -30 210 -43 209 -33 285 -65 358 -152 50
-59 69 -109 70 -186 1 -61 -3 -81 -26 -125 -110 -211 -546 -241 -752 -52 -24
23 -55 60 -69 84 -53 90 -159 112 -218 46 -37 -41 -36 -78 4 -155 81 -152 254
-264 486 -312 103 -22 296 -14 402 16 215 61 358 192 405 370 42 158 -2 357
-102 465 -112 120 -244 177 -484 210 -212 30 -295 61 -367 139 -54 58 -64 85
-65 166 -2 150 102 237 310 262 211 24 373 -44 470 -198 48 -75 134 -97 191
-49 60 50 50 118 -33 222 -95 119 -186 185 -310 225 -70 23 -291 33 -390 17z"
              />
            </g>
          </svg>
        </Box>
      </Box>
    </Box>
  );
};
