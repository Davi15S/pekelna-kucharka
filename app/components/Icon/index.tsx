import React from "react";

function Icon(props: { icon: React.ReactNode; m?: React.CSSProperties["padding"] }) {
  return <div style={{ margin: props.m }}>{props.icon}</div>;
}

export default Icon;
