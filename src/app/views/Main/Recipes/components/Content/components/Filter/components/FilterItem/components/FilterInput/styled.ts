import styled from "@emotion/styled";
import { Theme } from "@styles/theme";
import { motion } from "framer-motion";

export const CheckBox = styled(motion.div)<{ checked: boolean; theme?: Theme }>`
  min-height: 30px;
  min-width: 30px;
  border: 2px solid ${({ theme, checked }) => (checked ? theme.button.red : theme.border.primary)};
  border-radius: 10px;
  ${({ checked, theme }) => (checked ? `background-color: ${theme.button.red};` : "")}
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
