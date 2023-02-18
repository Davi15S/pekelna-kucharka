interface RecipeInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  maxH?: React.CSSProperties["maxHeight"];
  maxW?: React.CSSProperties["maxWidth"];
  isForm?: boolean;
  title?: string;
  p?: React.CSSProperties["margin"];
}
