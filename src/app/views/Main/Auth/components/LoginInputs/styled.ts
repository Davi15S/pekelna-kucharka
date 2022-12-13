import { Row } from "@app/styled";
import styled from "@emotion/styled";

export const Seperator = styled(Row)`
  position: relative;
  margin: 10px 0;

  ::before,
  ::after {
    content: "";
    height: 2px;
    background-color: ${({ theme }) => theme.background.third};
    position: absolute;
    width: 40%;
  }

  ::before {
    left: 0;
  }

  ::after {
    right: 0;
  }
`;
