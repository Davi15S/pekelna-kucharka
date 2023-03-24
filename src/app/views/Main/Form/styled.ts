import styled from "@emotion/styled";

export const InputsWrapper = styled.div<{ p?: React.CSSProperties["padding"]; minW?: number }>`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${({ minW }) => (minW ? minW : 300)}px, 1fr));
  width: 100%;
  gap: 20px;
  padding: ${({ p }) => (p ? p : "0")};
`;

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
