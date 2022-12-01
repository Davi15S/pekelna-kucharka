import { StaticImageData } from "next/image";
import { createContext } from "react";

export const PageBackgroundContext = createContext<{
  bgImage: StaticImageData | undefined;
  setBgImage: (bgImage: StaticImageData | undefined) => void;
}>({
  bgImage: undefined,
  setBgImage: () => undefined,
});

export const PageBackgroundProvider = PageBackgroundContext.Provider;
