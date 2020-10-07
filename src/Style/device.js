// https://jsramblings.com/how-to-use-media-queries-with-styled-components/
import deviceSize from "./deviceSize";

const device = {
  mobileS: `(min-width: ${deviceSize.mobileS})`,
  mobileM: `(min-width: ${deviceSize.mobileM})`,
  mobileL: `(min-width: ${deviceSize.mobileL})`,
  tablet: `(min-width: ${deviceSize.tablet})`,
  laptop: `(min-width: ${deviceSize.laptop})`,
  laptopL: `(min-width: ${deviceSize.laptopL})`,
  desktop: `(min-width: ${deviceSize.desktop})`,
  desktopL: `(min-width: ${deviceSize.desktop})`,
};

export default device;
