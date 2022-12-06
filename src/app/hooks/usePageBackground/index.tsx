import { PageBackgroundContext } from "@contexts/PageBackgroundContext";
import { StaticImageData } from "next/image";
import { useContext } from "react";

const usePageBackground = (bgImage: StaticImageData | undefined, height?: string) => {
  const { setBgImage, setBgHeight } = useContext(PageBackgroundContext);
  setBgImage(bgImage);
  setBgHeight(height ? height : "100%");
};

export default usePageBackground;
