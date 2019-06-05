const teal60 = `#078092`;
const teal30 = `#549ea4`;
const midnight90 = `#282c35`;
const black80 = `#1B1F23`;
const white = `#fff`;
const lightWhite = `rgba(255, 255, 255, 0.86)`;
const opaqueLightYellow = `rgba(255, 229, 100, 0.2)`;
const opaqueLightWhite = `hsla(0, 0%, 100%, 0.2)`;
const lightGray = `hsla(0, 0%, 0%, 0.2)`;

export default {
  text: midnight90,
  background: white,
  primary: teal60,
  secondary: black80,
  muted: lightGray,
  highlight: opaqueLightYellow,
  heading: midnight90,
  prism: {
    background: `#011627`,
    comment: `#809393`,
    string: `#addb67`,
    var: `#d6deeb`,
    number: `#f78c6c`,
    constant: `#82aaff`,
    punctuation: `#c792ea`,
    className: `#ffc98b`,
    tag: `#ffa7c4`,
    boolean: `#ff5874`,
    property: `#80cbc4`,
    namespace: `#b2ccd6`,
    highlight: `hsla(207, 95%, 15%, 1)`
  },
  modes: {
    dark: {
      text: lightWhite,
      background: midnight90,
      primary: teal30,
      secondary: lightWhite,
      muted: opaqueLightWhite,
      highlight: teal60,
      heading: white
    }
  }
};
