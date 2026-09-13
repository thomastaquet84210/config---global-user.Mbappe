import { loadFont as loadAnton } from "@remotion/google-fonts/Anton";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";

export const { fontFamily: headlineFont } = loadAnton("normal", {
  weights: ["400"],
  subsets: ["latin"],
});

export const { fontFamily: bodyFont } = loadInter("normal", {
  weights: ["400", "600", "700", "800"],
  subsets: ["latin"],
});
