interface RecipeInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  maxH?: React.CSSProperties["maxHeight"];
  maxW?: React.CSSProperties["maxWidth"];
  title?: string;
  p?: React.CSSProperties["padding"];
}
