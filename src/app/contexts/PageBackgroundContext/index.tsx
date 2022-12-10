import { StaticImageData } from "next/image";
import React, { createContext } from "react";

export const PageBackgroundContext = createContext<{
  bgImage: StaticImageData | undefined;
  setBgImage: (bgImage: StaticImageData | undefined) => void;
  bgHeight: string | undefined;
  setBgHeight: (bgImage: string) => void;
}>({
  bgImage: undefined,
  setBgImage: () => undefined,
  bgHeight: undefined,
  setBgHeight: () => undefined,
});

export const PageBackgroundProvider = PageBackgroundContext.Provider;
