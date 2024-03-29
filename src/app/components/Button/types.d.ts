import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<ButtonHTMLAttributes> {
  m?: React.CSSProperties["margin"];
  text: string;
  transparent?: boolean;
  icon?: React.ReactNode;
  iconEnd?: boolean;
  color?: "white" | "red";
  maxW?: React.CSSProperties["maxWidth"];
  h?: React.CSSProperties["height"];
  borderRadius?: React.CSSProperties["borderRadius"];
  p?: React.CSSProperties["padding"];
}
