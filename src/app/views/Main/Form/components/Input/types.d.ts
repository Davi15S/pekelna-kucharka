interface RecipeInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  maxH?: React.CSSProperties["maxHeight"];
  isForm?: boolean;
  title?: string;
  p?: React.CSSProperties["margin"];
}
