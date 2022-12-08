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
  };
  shadow: {
    trend: string;
    trendHover: string;
  };
  footer: {
    primary: string;
  };
  button: {
    white: string;
    red: string;
  };
};

export const theme = {
  colors: {
    primary: "#FFFFFF",
    secondary: "#B7B7B7",
    third: "#9A9A9A",
    error: "#E31C25",
  },
  background: {
    primary: "#111111",
    secondary: "#141414",
  },
  shadow: {
    trend: "0px 2px 5px rgba(250, 67, 67, 0.25)",
    trendHover: "5px 5px 20px rgba(250, 67, 67, 0.25)",
  },
  footer: {
    primary: "#434343",
  },
  button: {
    white: "#FFFFFF",
    red: "#ED4040",
  },
};
