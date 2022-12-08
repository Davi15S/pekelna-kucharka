import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<ButtonHTMLAttributes> {
  text: string;
  transparent?: boolean;
  icon?: React.ReactNode;
  color?: "white" | "red";
  maxW?: React.CSSProperties["maxWidth"];
  h?: React.CSSProperties["height"];
}
