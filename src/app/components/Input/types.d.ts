interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  maxW?: React.CSSProperties["maxWidth"];
  h?: React.CSSProperties["height"];
  icon?: React.ReactNode;
}
