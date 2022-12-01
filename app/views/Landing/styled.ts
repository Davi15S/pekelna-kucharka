import styled from "@emotion/styled";
import { Column } from "app/styled";
import { StaticImageData } from "next/image";

export const LandingWrapper = styled(Column)<{ bgImage?: StaticImageData }>`
  min-width: 100%;
  min-height: 100vh;
  background-image: url(${({ bgImage }) => (bgImage ? bgImage.src : "")});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
