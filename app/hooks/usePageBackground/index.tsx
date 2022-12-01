import { PageBackgroundContext } from "app/contexts/PageBackgroundContext";
import { StaticImageData } from "next/image";
import { useContext } from "react";

const usePageBackground = (bgImage: StaticImageData) => {
  const { setBgImage } = useContext(PageBackgroundContext);
  setBgImage(bgImage);
};

export default usePageBackground;
