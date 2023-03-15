export type Theme = {
  colors: {
    primary: string;
    secondary: string;
    third: string;
    error: string;
  };
  background: {
    primary: string;
    secondary: string;
    third: string;
    fourth: string;
  };
  shadow: {
    default: string;
    hover: string;
  };
  footer: {
    primary: string;
  };
  button: {
    white: string;
    red: string;
  };
  border: {
    primary: string;
  };
  link: {
    white: string;
    red: string;
  };
  slider: {
    track: string;
    middleTrack: string;
    thumb: string;
  };
};

export const theme = {
  colors: {
    primary: "#FFFFFF",
    secondary: "#B7B7B7",
    third: "#9A9A9A",
    error: "#ED4040",
  },
  background: {
    primary: "#111111",
    secondary: "#141414",
    third: "#232323",
    fourth: "#181818",
  },
  shadow: {
    default: "6px 12px 20px rgba(0, 0, 0, 0.75)",
    hover: "2px 10px 40px rgba(0, 0, 0, 0.9);",
  },
  footer: {
    primary: "#434343",
  },
  button: {
    white: "#FFFFFF",
    red: "#ED4040",
  },
  border: {
    primary: "#353535",
  },
  link: {
    white: "#FFFFFF",
    red: "#E31C25",
  },
  slider: {
    track: "#B9B9B9",
    middleTrack: "#6b6b6b",
    thumb: "#ED4040",
  },
};
