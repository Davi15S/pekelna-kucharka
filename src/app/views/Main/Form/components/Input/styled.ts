import { Row } from "@app/styled";
import styled from "@emotion/styled";
import React from "react";

export const InputWrapper = styled(Row)<{ maxH?: React.CSSProperties["maxHeight"]; clickable?: boolean }>`
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.border.primary};
  min-height: 60px;
  ${({ clickable }) => clickable && "cursor: pointer;"}
  position: relative;
`;
