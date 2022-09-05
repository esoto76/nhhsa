// @ts-nocheck
module.exports = {
  theme: {
    fontFamily: {
      main: ["Cabin", "Arial", "sans-serif"],
      sans: ["Cabin", "Arial", "sans-serif"],
      alt: ["Oswald", "sans-serif"],
    },
    screens: {
      sm: "320px",
      "max-sm": { max: "320px" },
      "s-med": "480px",
      "max-s-med": { max: "480px" },
      med: "640px",
      "max-med": { max: "640px" },
      "xl-med": "760px",
      "max-xl-med": { max: "760px" },
      "s-large": "960px",
      "max-s-large": { max: "960px" },
      large: "1040px",
      "max-large": { max: "1040px" },
      "xl-large": "1120px",
      "max-xl-large": { max: "1120px" },
      wide: "1200px",
      "max-wide": { max: "1200px" },
      portrait: { raw: "(orientation: portrait)" },
      landscape: { raw: "(orientation: landscape)" },
    },
    extend: {
      colors: {
        primary: "#152f0b",
        secondary: "#f7e624",
        dark: "#27262c",
        light: "#f0edee",
        error: "#d52941",
      },
      spacing: {
        "0-px": "0px",
        "0-rem": "0rem",
        "1-px": "1px",
        "1-rem": "0.0625rem",
        "2-px": "2px",
        "2-rem": "0.125rem",
        "3-px": "3px",
        "3-rem": "0.1875rem",
        "4-px": "4px",
        "4-rem": "0.25rem",
        "5-px": "5px",
        "5-rem": "0.3125rem",
        "6-px": "6px",
        "6-rem": "0.375rem",
        "7-px": "7px",
        "7-rem": "0.4375rem",
        "8-px": "8px",
        "8-rem": "0.5rem",
        "9-px": "9px",
        "9-rem": "0.5625rem",
        "10-px": "10px",
        "10-rem": "0.625rem",
        "11-px": "11px",
        "11-rem": "0.6875rem",
        "12-px": "12px",
        "12-rem": "0.75rem",
        "13-px": "13px",
        "13-rem": "0.8125rem",
        "14-px": "14px",
        "14-rem": "0.875rem",
        "15-px": "15px",
        "15-rem": "0.9375rem",
        "16-px": "16px",
        "16-rem": "1rem",
        "20-px": "20px",
        "20-rem": "1.25rem",
        "24-px": "24px",
        "24-rem": "1.5rem",
        "28-px": "28px",
        "28-rem": "1.75rem",
        "32-px": "32px",
        "32-rem": "2rem",
        "36-px": "36px",
        "36-rem": "2.25rem",
        "40-px": "40px",
        "40-rem": "2.5rem",
        "44-px": "44px",
        "44-rem": "2.75rem",
        "48-px": "48px",
        "48-rem": "3rem",
        "56-px": "56px",
        "56-rem": "3.5rem",
        "64-px": "64px",
        "64-rem": "4rem",
        "72-px": "72px",
        "72-rem": "4.5rem",
        "80-px": "80px",
        "80-rem": "5rem",
        "88-px": "88px",
        "88-rem": "5.5rem",
        "96-px": "96px",
        "96-rem": "6rem",
        "104-px": "104px",
        "104-rem": "6.5rem",
        "112-px": "112px",
        "112-rem": "7rem",
        "120-px": "120px",
        "120-rem": "7.5rem",
        "128-px": "128px",
        "128-rem": "8rem",
        "136-px": "136px",
        "136-rem": "8.5rem",
        "144-px": "144px",
        "144-rem": "9rem",
        "152-px": "152px",
        "152-rem": "9.5rem",
        "160-px": "160px",
        "160-rem": "10rem",
        "168-px": "168px",
        "168-rem": "10.5rem",
        "176-px": "176px",
        "176-rem": "11rem",
        "184-px": "184px",
        "184-rem": "11.5rem",
        "192-px": "192px",
        "192-rem": "12rem",
        "200-px": "200px",
        "200-rem": "12.5rem",
        "208-px": "208px",
        "208-rem": "13rem",
        "216-px": "216px",
        "216-rem": "13.5rem",
        "224-px": "224px",
        "224-rem": "14rem",
        "232-px": "232px",
        "232-rem": "14.5rem",
        "240-px": "240px",
        "240-rem": "15rem",
        "248-px": "248px",
        "248-rem": "15.5rem",
        "256-px": "256px",
        "256-rem": "16rem",
        "264-px": "264px",
        "264-rem": "16.5rem",
        "272-px": "272px",
        "272-rem": "17rem",
        "280-px": "280px",
        "280-rem": "17.5rem",
        "288-px": "288px",
        "288-rem": "18rem",
        "296-px": "296px",
        "296-rem": "18.5rem",
        "304-px": "304px",
        "304-rem": "19rem",
        "312-px": "312px",
        "312-rem": "19.5rem",
        "320-px": "320px",
        "320-rem": "20rem",
      },
      height: () => ({
        "50vh": "50vh",
        "60vh": "60vh",
        "70vh": "70vh",
        "75vh": "75vh",
        "80vh": "80vh",
        "90vh": "90vh",
        "200vh": "200vh",
      }),
      fontSize: (theme) => ({
        ...theme("spacing"),
      }),
      minWidth: (theme) => ({
        ...theme("spacing"),
        ...theme("screens"),
      }),
      maxWidth: (theme) => ({
        ...theme("spacing"),
        ...theme("screens"),
      }),
      minHeight: (theme) => ({
        ...theme("spacing"),
        ...theme("height"),
        ...theme("screens"),
      }),
      maxHeight: (theme) => ({
        ...theme("spacing"),
        ...theme("height"),
        ...theme("screens"),
      }),
      borderWidth: (theme) => ({
        ...theme("spacing"),
      }),
      letterSpacing: {
        0.125: "0.125em",
        0.15: "0.15em",
        0.25: "0.25em",
        0.5: "0.5em",
      },
      zIndex: {
        "100k": "100000",
        "200k": "200000",
        "300k": "300000",
        "400k": "400000",
        "500k": "500000",
        "600k": "600000",
        "700k": "700000",
        "800k": "800000",
        "900k": "900000",
      },
    },
  },
};
