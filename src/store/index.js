import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: '#EFBD48',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./skyllrexlogo.png",
  fullDecal: "./skyllrexlogo.png",
});

export default state;